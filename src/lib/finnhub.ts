// Finnhub API configuration and utilities

export interface FinnhubQuote {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
  t: number; // Timestamp
}

export interface MarketStatus {
  exchange: string;
  holiday: string | null;
  isOpen: boolean;
  session: string;
  timezone: string;
  t: number;
}

export interface ForexQuote {
  c: number; // Current rate
  d: number; // Change
  dp: number; // Percent change
  h: number; // High
  l: number; // Low
  o: number; // Open
  pc: number; // Previous close
  t: number; // Timestamp
}

export interface MarketSnapshotData {
  nifty: FinnhubQuote | null;
  sp500: FinnhubQuote | null;
  inrUsd: ForexQuote | null;
  marketStatus: {
    nse: MarketStatus | null;
    nyse: MarketStatus | null;
  };
  lastUpdated: number;
  error?: string;
  source?: string;
  warning?: string;
}

// Finnhub symbol mappings
export const FINNHUB_SYMBOLS = {
  NIFTY: '^NSEI', // NIFTY 50 index
  SP500: '^GSPC', // S&P 500 index
  INR_USD: 'INR=X', // INR to USD forex pair
} as const;

// Market exchanges for status checks
export const MARKET_EXCHANGES = {
  NSE: 'NS', // National Stock Exchange (India)
  NYSE: 'US', // New York Stock Exchange
} as const;

// Rate limiting configuration
export const RATE_LIMIT = {
  REQUESTS_PER_MINUTE: 60, // Finnhub free tier limit
  REQUESTS_PER_DAY: 1000,
  RETRY_DELAY: 1000, // 1 second
  MAX_RETRIES: 3,
};

// Cache configuration
export const CACHE_CONFIG = {
  QUOTE_TTL: 30 * 1000, // 30 seconds for quotes
  STATUS_TTL: 5 * 60 * 1000, // 5 minutes for market status
  ERROR_TTL: 10 * 1000, // 10 seconds for errors
};

// Market hours (in UTC)
export const MARKET_HOURS = {
  NSE: {
    open: '03:45', // 9:15 AM IST
    close: '10:00', // 3:30 PM IST
    timezone: 'Asia/Kolkata',
  },
  NYSE: {
    open: '14:30', // 9:30 AM EST
    close: '21:00', // 4:00 PM EST
    timezone: 'America/New_York',
  },
};

// Format price with appropriate currency symbol
export function formatPrice(price: number, symbol: string): string {
  if (symbol.includes('INR') || symbol.includes('NSEI')) {
    return `₹${price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
  }
  if (symbol.includes('USD') || symbol.includes('GSPC')) {
    return `$${price.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
  }
  return price.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

// Format percentage change
export function formatPercentage(change: number): string {
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(2)}%`;
}

// Format absolute change
export function formatChange(change: number, symbol: string): string {
  const sign = change >= 0 ? '+' : '';
  if (symbol.includes('INR') || symbol.includes('NSEI')) {
    return `${sign}₹${Math.abs(change).toFixed(2)}`;
  }
  if (symbol.includes('USD') || symbol.includes('GSPC')) {
    return `${sign}$${Math.abs(change).toFixed(2)}`;
  }
  return `${sign}${change.toFixed(2)}`;
}

// Check if market is likely open (basic check)
export function isMarketLikelyOpen(exchange: keyof typeof MARKET_HOURS): boolean {
  const now = new Date();
  const marketHours = MARKET_HOURS[exchange];
  
  // This is a simplified check - in production, you'd want to use a proper timezone library
  const currentHour = now.getUTCHours();
  const currentMinute = now.getUTCMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  
  const [openHour, openMinute] = marketHours.open.split(':').map(Number);
  const [closeHour, closeMinute] = marketHours.close.split(':').map(Number);
  
  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;
  
  // Check if it's a weekday (basic check)
  const dayOfWeek = now.getDay();
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  
  return isWeekday && currentTime >= openTime && currentTime <= closeTime;
}

// Validate Finnhub API response
export function isValidQuote(data: any): data is FinnhubQuote {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.c === 'number' &&
    typeof data.d === 'number' &&
    typeof data.dp === 'number' &&
    typeof data.t === 'number'
  );
}

// Validate market status response
export function isValidMarketStatus(data: any): data is MarketStatus {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.exchange === 'string' &&
    typeof data.isOpen === 'boolean' &&
    typeof data.t === 'number'
  );
}

// Error types for better error handling
export enum FinnhubErrorType {
  API_KEY_MISSING = 'API_KEY_MISSING',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  NETWORK_ERROR = 'NETWORK_ERROR',
  INVALID_RESPONSE = 'INVALID_RESPONSE',
  MARKET_CLOSED = 'MARKET_CLOSED',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export class FinnhubError extends Error {
  constructor(
    public type: FinnhubErrorType,
    message: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'FinnhubError';
  }
}