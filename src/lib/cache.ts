// In-memory cache with TTL support for API responses

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class MemoryCache {
  private cache = new Map<string, CacheEntry<any>>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Clean up expired entries every minute
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60 * 1000);
  }

  set<T>(key: string, data: T, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  private cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => this.cache.delete(key));
  }

  // Get cache statistics
  getStats() {
    const now = Date.now();
    let expired = 0;
    let active = 0;

    for (const entry of this.cache.values()) {
      if (now - entry.timestamp > entry.ttl) {
        expired++;
      } else {
        active++;
      }
    }

    return {
      total: this.cache.size,
      active,
      expired,
    };
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.clear();
  }
}

// Singleton cache instance
export const cache = new MemoryCache();

// Cache key generators
export const cacheKeys = {
  quote: (symbol: string) => `quote:${symbol}`,
  marketStatus: (exchange: string) => `market_status:${exchange}`,
  snapshot: () => 'market_snapshot',
  rateLimit: (endpoint: string) => `rate_limit:${endpoint}`,
} as const;

// Cache TTL constants (in milliseconds)
export const cacheTTL = {
  quote: 30 * 1000, // 30 seconds
  marketStatus: 5 * 60 * 1000, // 5 minutes
  snapshot: 30 * 1000, // 30 seconds
  error: 10 * 1000, // 10 seconds for errors
  rateLimit: 60 * 1000, // 1 minute for rate limiting
} as const;

// Utility functions for cache operations
export function getCachedQuote(symbol: string) {
  return cache.get(cacheKeys.quote(symbol));
}

export function setCachedQuote(symbol: string, data: any) {
  cache.set(cacheKeys.quote(symbol), data, cacheTTL.quote);
}

export function getCachedMarketStatus(exchange: string) {
  return cache.get(cacheKeys.marketStatus(exchange));
}

export function setCachedMarketStatus(exchange: string, data: any) {
  cache.set(cacheKeys.marketStatus(exchange), data, cacheTTL.marketStatus);
}

export function getCachedSnapshot<T = unknown>(): T | null {
  return cache.get<T>(cacheKeys.snapshot());
}

export function setCachedSnapshot(data: any) {
  cache.set(cacheKeys.snapshot(), data, cacheTTL.snapshot);
}

// Rate limiting helpers
export function isRateLimited(endpoint: string): boolean {
  return cache.has(cacheKeys.rateLimit(endpoint));
}

export function setRateLimit(endpoint: string, requestCount: number = 1) {
  const key = cacheKeys.rateLimit(endpoint);
  const existing = cache.get<number>(key) || 0;
  cache.set(key, existing + requestCount, cacheTTL.rateLimit);
}

export function getRateLimitCount(endpoint: string): number {
  return cache.get<number>(cacheKeys.rateLimit(endpoint)) || 0;
}