import { NextResponse } from 'next/server'

// Cache configuration
let cache: { ts: number; data: unknown } | null = null
const CACHE_TTL = 30 * 1000 // 30 seconds

// Persistent storage for last successful API response
let lastGoodData: unknown | null = null

// Market data interface
interface MarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  isUp: boolean
  lastUpdated: string
  marketStatus: 'open' | 'closed' | 'pre-market' | 'after-hours'
}

// Fallback data when APIs are unavailable
const FALLBACK_DATA: MarketData[] = [
  {
    symbol: 'NIFTY',
    name: 'NIFTY 50',
    price: 24682.50,
    change: 103.45,
    changePercent: 0.42,
    isUp: true,
    lastUpdated: new Date().toISOString(),
    marketStatus: 'closed'
  },
  {
    symbol: 'SPX',
    name: 'S&P 500',
    price: 5897.23,
    change: 35.78,
    changePercent: 0.61,
    isUp: true,
    lastUpdated: new Date().toISOString(),
    marketStatus: 'closed'
  },
  {
    symbol: 'INRUSD',
    name: 'INR/USD',
    price: 84.75,
    change: -0.12,
    changePercent: -0.14,
    isUp: false,
    lastUpdated: new Date().toISOString(),
    marketStatus: 'open'
  }
]

// Rate limiting
let lastRequestTime = 0
const MIN_REQUEST_INTERVAL = 1000 // 1 second between requests

// Utility functions
function isMarketHours(): boolean {
  const now = new Date()
  const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000))
  
  // Indian market hours (9:15 AM - 3:30 PM IST = 3:45 AM - 10:00 AM UTC)
  const istHour = (utc.getHours() + 5.5) % 24
  const istMinute = utc.getMinutes()
  const istTime = istHour + (istMinute / 60)
  
  // US market hours (9:30 AM - 4:00 PM EST = 2:30 PM - 9:00 PM UTC)
  const estHour = (utc.getHours() - 5 + 24) % 24
  const estTime = estHour + (utc.getMinutes() / 60)
  
  const isWeekday = utc.getDay() >= 1 && utc.getDay() <= 5
  const indianMarketOpen = istTime >= 9.25 && istTime <= 15.5
  const usMarketOpen = estTime >= 14.5 && estTime <= 21
  
  return isWeekday && (indianMarketOpen || usMarketOpen)
}

function getMarketStatus(symbol: string): 'open' | 'closed' | 'pre-market' | 'after-hours' {
  const now = new Date()
  const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000))
  const isWeekday = utc.getDay() >= 1 && utc.getDay() <= 5
  
  if (!isWeekday) return 'closed'
  
  if (symbol === 'NIFTY') {
    const istHour = (utc.getHours() + 5.5) % 24
    const istTime = istHour + (utc.getMinutes() / 60)
    
    if (istTime >= 9.25 && istTime <= 15.5) return 'open'
    if (istTime >= 8 && istTime < 9.25) return 'pre-market'
    if (istTime > 15.5 && istTime <= 17) return 'after-hours'
    return 'closed'
  }
  
  if (symbol === 'SPX') {
    const estHour = (utc.getHours() - 5 + 24) % 24
    const estTime = estHour + (utc.getMinutes() / 60)
    
    if (estTime >= 14.5 && estTime <= 21) return 'open'
    if (estTime >= 13 && estTime < 14.5) return 'pre-market'
    if (estTime > 21 && estTime <= 24) return 'after-hours'
    return 'closed'
  }
  
  // Forex markets are generally open 24/5
  if (symbol === 'INRUSD') {
    return isWeekday ? 'open' : 'closed'
  }
  
  return 'closed'
}

async function fetchFromFinnhub(): Promise<MarketData[]> {
  const apiKey = process.env.FINNHUB_API_KEY
  if (!apiKey) {
    throw new Error('Finnhub API key not configured')
  }
  
  const symbols = [
    { symbol: '^NSEI', name: 'NIFTY 50', key: 'NIFTY' },
    { symbol: '^GSPC', name: 'S&P 500', key: 'SPX' },
    { symbol: 'OANDA:INR_USD', name: 'INR/USD', key: 'INRUSD' }
  ]
  
  const results: MarketData[] = []
  
  for (const { symbol, name, key } of symbols) {
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${apiKey}`,
        {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'SNP-Capital-Services/1.0'
          },
          signal: AbortSignal.timeout(5000),
        }
      )
      
      if (!response.ok) {
        throw new Error(`Finnhub API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.error) {
        throw new Error(`Finnhub error: ${data.error}`)
      }
      
      const current = data.c || 0
      const previousClose = data.pc || current
      const change = current - previousClose
      const changePercent = previousClose !== 0 ? (change / previousClose) * 100 : 0
      
      results.push({
        symbol: key,
        name,
        price: current,
        change,
        changePercent,
        isUp: change >= 0,
        lastUpdated: new Date().toISOString(),
        marketStatus: getMarketStatus(key)
      })
      
      // Rate limiting between requests
      await new Promise(resolve => setTimeout(resolve, 200))
      
    } catch (error) {
      console.error(`Failed to fetch ${symbol}:`, error)
      // Continue with other symbols even if one fails
    }
  }
  
  if (results.length === 0) {
    throw new Error('No market data could be fetched from Finnhub')
  }
  
  return results
}

async function fetchFromYahooFinance(): Promise<MarketData[]> {
  const symbols = [
    { symbol: '^NSEI', name: 'NIFTY 50', key: 'NIFTY' },
    { symbol: '^GSPC', name: 'S&P 500', key: 'SPX' },
    { symbol: 'INRUSD=X', name: 'INR/USD', key: 'INRUSD' }
  ]
  
  const symbolsQuery = symbols.map(s => s.symbol).join(',')
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(symbolsQuery)}`
  
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    signal: AbortSignal.timeout(10000),
  })
  
  if (!response.ok) {
    throw new Error(`Yahoo Finance API error: ${response.status}`)
  }
  
  const data = await response.json()
  const quotes = data?.quoteResponse?.result || []
  
  if (quotes.length === 0) {
    throw new Error('No quotes returned from Yahoo Finance')
  }
  
  const results: MarketData[] = []
  
  for (const quote of quotes) {
    const symbolInfo = symbols.find(s => s.symbol === quote.symbol)
    if (!symbolInfo) continue
    
    const price = quote.regularMarketPrice || quote.regularMarketPreviousClose || 0
    const change = quote.regularMarketChange || 0
    const changePercent = quote.regularMarketChangePercent || 0
    
    results.push({
      symbol: symbolInfo.key,
      name: symbolInfo.name,
      price,
      change,
      changePercent,
      isUp: change >= 0,
      lastUpdated: new Date().toISOString(),
      marketStatus: getMarketStatus(symbolInfo.key)
    })
  }
  
  return results
}

export async function GET() {
  try {
    // Rate limiting check
    const now = Date.now()
    if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }
    lastRequestTime = now
    
    // Check cache
    if (cache && now - cache.ts < CACHE_TTL) {
      return NextResponse.json(cache.data)
    }
    
    let marketData: MarketData[]
    
    // Try Finnhub first, fallback to Yahoo Finance
    try {
      marketData = await fetchFromFinnhub()
    } catch (finnhubError) {
      console.warn('Finnhub failed, trying Yahoo Finance:', finnhubError)
      try {
        marketData = await fetchFromYahooFinance()
      } catch (yahooError) {
        console.error('Both APIs failed:', { finnhubError, yahooError })
        
        // Return last good data if available, otherwise fallback
        const fallbackData = lastGoodData || { data: FALLBACK_DATA, source: 'fallback' }
        cache = { ts: now, data: fallbackData }
        return NextResponse.json(fallbackData)
      }
    }
    
    // Success - cache the result
    const responseData = {
      data: marketData,
      source: 'live',
      lastUpdated: new Date().toISOString(),
      marketHours: isMarketHours()
    }
    
    lastGoodData = responseData
    cache = { ts: now, data: responseData }
    
    return NextResponse.json(responseData)
    
  } catch (error) {
    console.error('Market snapshot API error:', error)
    
    // Return last good data or fallback
    const fallbackData = lastGoodData || {
      data: FALLBACK_DATA,
      source: 'fallback',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
    
    return NextResponse.json(fallbackData, { status: 500 })
  }
}