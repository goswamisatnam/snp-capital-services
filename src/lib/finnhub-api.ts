// Finnhub API service with rate limiting, caching, and error handling

import {
  FinnhubQuote,
  MarketStatus,
  ForexQuote,
  MarketSnapshotData,
  FINNHUB_SYMBOLS,
  MARKET_EXCHANGES,
  RATE_LIMIT,
  isValidQuote,
  isValidMarketStatus,
  FinnhubErrorType,
  FinnhubError,
} from './finnhub';
import {
  cache,
  cacheKeys,
  cacheTTL,
  getCachedQuote,
  setCachedQuote,
  getCachedMarketStatus,
  setCachedMarketStatus,
  getCachedSnapshot,
  setCachedSnapshot,
  isRateLimited,
  setRateLimit,
  getRateLimitCount,
} from './cache';

class FinnhubAPIService {
  private baseURL = 'https://finnhub.io/api/v1';
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.FINNHUB_API_KEY || '';
    
    if (!this.apiKey) {
      console.warn('Finnhub API key not found. Market data will use fallback values.');
    }
  }

  private async makeRequest<T>(
    endpoint: string,
    params: Record<string, string> = {},
    retryCount = 0
  ): Promise<T> {
    if (!this.apiKey) {
      throw new FinnhubError(
        FinnhubErrorType.API_KEY_MISSING,
        'Finnhub API key is required'
      );
    }

    // Check rate limiting
    const rateLimitKey = `finnhub:${endpoint}`;
    const currentRequests = getRateLimitCount(rateLimitKey);
    
    if (currentRequests >= RATE_LIMIT.REQUESTS_PER_MINUTE) {
      throw new FinnhubError(
        FinnhubErrorType.RATE_LIMIT_EXCEEDED,
        'Rate limit exceeded. Please try again later.'
      );
    }

    const url = new URL(`${this.baseURL}${endpoint}`);
    url.searchParams.set('token', this.apiKey);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    try {
      // Track request for rate limiting
      setRateLimit(rateLimitKey);

      const response = await fetch(url.toString(), {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'SNP-Capital-Services/1.0',
        },
        // Add timeout
        signal: AbortSignal.timeout(10000), // 10 seconds
      });

      if (response.status === 429) {
        throw new FinnhubError(
          FinnhubErrorType.RATE_LIMIT_EXCEEDED,
          'API rate limit exceeded',
          429
        );
      }

      if (!response.ok) {
        throw new FinnhubError(
          FinnhubErrorType.NETWORK_ERROR,
          `API request failed: ${response.status} ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();
      
      // Check for API error responses
      if (data.error) {
        throw new FinnhubError(
          FinnhubErrorType.INVALID_RESPONSE,
          data.error
        );
      }

      return data;
    } catch (error) {
      // Retry logic for network errors
      if (
        retryCount < RATE_LIMIT.MAX_RETRIES &&
        (error instanceof TypeError || // Network error
         (error instanceof FinnhubError && error.type === FinnhubErrorType.NETWORK_ERROR))
      ) {
        await new Promise(resolve => setTimeout(resolve, RATE_LIMIT.RETRY_DELAY * (retryCount + 1)));
        return this.makeRequest<T>(endpoint, params, retryCount + 1);
      }

      if (error instanceof FinnhubError) {
        throw error;
      }

      throw new FinnhubError(
        FinnhubErrorType.UNKNOWN_ERROR,
        error instanceof Error ? error.message : 'Unknown error occurred'
      );
    }
  }

  async getQuote(symbol: string): Promise<FinnhubQuote> {
    // Check cache first
    const cached = getCachedQuote(symbol);
    if (cached && isValidQuote(cached)) {
      return cached;
    }

    try {
      const data = await this.makeRequest<FinnhubQuote>('/quote', { symbol });
      
      if (!isValidQuote(data)) {
        throw new FinnhubError(
          FinnhubErrorType.INVALID_RESPONSE,
          'Invalid quote data received from API'
        );
      }

      // Cache the result
      setCachedQuote(symbol, data);
      return data;
    } catch (error) {
      // If we have stale cached data, return it during errors
      const staleCache = cache.get(cacheKeys.quote(symbol));
      if (staleCache && isValidQuote(staleCache)) {
        console.warn(`Using stale cache for ${symbol}:`, error);
        return staleCache;
      }
      throw error;
    }
  }

  async getMarketStatus(exchange: string): Promise<MarketStatus> {
    // Check cache first
    const cached = getCachedMarketStatus(exchange);
    if (cached && isValidMarketStatus(cached)) {
      return cached;
    }

    try {
      const data = await this.makeRequest<MarketStatus>('/stock/market-status', { exchange });
      
      if (!isValidMarketStatus(data)) {
        throw new FinnhubError(
          FinnhubErrorType.INVALID_RESPONSE,
          'Invalid market status data received from API'
        );
      }

      // Cache the result
      setCachedMarketStatus(exchange, data);
      return data;
    } catch (error) {
      // Return a fallback status if API fails
      const fallbackStatus: MarketStatus = {
        exchange,
        holiday: null,
        isOpen: false, // Conservative default
        session: 'unknown',
        timezone: exchange === MARKET_EXCHANGES.NSE ? 'Asia/Kolkata' : 'America/New_York',
        t: Date.now() / 1000,
      };
      
      console.warn(`Using fallback market status for ${exchange}:`, error);
      return fallbackStatus;
    }
  }

  async getForexQuote(pair: string): Promise<ForexQuote> {
    // Forex quotes use the same endpoint as stock quotes
    return this.getQuote(pair) as Promise<ForexQuote>;
  }

  async getMarketSnapshot(): Promise<MarketSnapshotData> {
    // Check cache first
    const cached = getCachedSnapshot<MarketSnapshotData>();
    if (cached) {
      return cached;
    }

    const snapshot: MarketSnapshotData = {
      nifty: null,
      sp500: null,
      inrUsd: null,
      marketStatus: {
        nse: null,
        nyse: null,
      },
      lastUpdated: Date.now(),
    };

    try {
      // Fetch all data in parallel with individual error handling
      const [niftyResult, sp500Result, forexResult, nseStatusResult, nyseStatusResult] = await Promise.allSettled([
        this.getQuote(FINNHUB_SYMBOLS.NIFTY),
        this.getQuote(FINNHUB_SYMBOLS.SP500),
        this.getForexQuote(FINNHUB_SYMBOLS.INR_USD),
        this.getMarketStatus(MARKET_EXCHANGES.NSE),
        this.getMarketStatus(MARKET_EXCHANGES.NYSE),
      ]);

      // Process results
      if (niftyResult.status === 'fulfilled') {
        snapshot.nifty = niftyResult.value;
      }
      
      if (sp500Result.status === 'fulfilled') {
        snapshot.sp500 = sp500Result.value;
      }
      
      if (forexResult.status === 'fulfilled') {
        snapshot.inrUsd = forexResult.value;
      }
      
      if (nseStatusResult.status === 'fulfilled') {
        snapshot.marketStatus.nse = nseStatusResult.value;
      }
      
      if (nyseStatusResult.status === 'fulfilled') {
        snapshot.marketStatus.nyse = nyseStatusResult.value;
      }

      // Cache the snapshot
      setCachedSnapshot(snapshot);
      return snapshot;
    } catch (error) {
      snapshot.error = error instanceof Error ? error.message : 'Failed to fetch market data';
      return snapshot;
    }
  }

  // Health check method
  async healthCheck(): Promise<{ status: 'ok' | 'error'; message: string }> {
    if (!this.apiKey) {
      return {
        status: 'error',
        message: 'API key not configured',
      };
    }

    try {
      // Try to fetch a simple quote
      await this.getQuote('AAPL');
      return {
        status: 'ok',
        message: 'Finnhub API is accessible',
      };
    } catch (error) {
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Get cache statistics
  getCacheStats() {
    return cache.getStats();
  }

  // Clear all cached data
  clearCache() {
    cache.clear();
  }
}

// Singleton instance
export const finnhubAPI = new FinnhubAPIService();

// Export the service class for testing
export { FinnhubAPIService };

// Convenience functions
export async function getMarketSnapshot(): Promise<MarketSnapshotData> {
  return finnhubAPI.getMarketSnapshot();
}

export async function getQuote(symbol: string): Promise<FinnhubQuote> {
  return finnhubAPI.getQuote(symbol);
}

export async function getMarketStatus(exchange: string): Promise<MarketStatus> {
  return finnhubAPI.getMarketStatus(exchange);
}