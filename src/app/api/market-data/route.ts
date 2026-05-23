import { NextResponse } from 'next/server'

// Simple cache to respect Alpha Vantage free API rate limits
let cache: { ts: number; data: any } | null = null
const CACHE_TTL = 60 * 1000 // 1 minute

export async function GET() {
  try {
    const now = Date.now()
    if (cache && now - cache.ts < CACHE_TTL) return NextResponse.json(cache.data)

    const key = process.env.ALPHA_VANTAGE_API_KEY
    if (!key) {
      // Try Yahoo Finance public endpoint (no API key) for basic quotes
      try {
        const yahooSymbols = ['^NSEI','^BSESN','^GSPC','BTC-USD','TSLA','AAPL','MSFT','RELIANCE.NS']
        const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(yahooSymbols.join(','))}`
        const res = await fetch(url)
        const json = await res.json()
        const results = (json?.quoteResponse?.result || []).map((r: any) => ({
          symbol: r.symbol,
          price: (r.regularMarketPrice != null) ? String(r.regularMarketPrice) : (r.regularMarketPreviousClose != null ? String(r.regularMarketPreviousClose) : '-'),
          change: (typeof r.regularMarketChangePercent === 'number') ? `${r.regularMarketChangePercent.toFixed(2)}%` : (r.regularMarketChange != null ? String(r.regularMarketChange) : '-'),
          isUp: (r.regularMarketChange ?? 0) >= 0,
        }))

        const payload = { meta: { source: 'yahoo' }, quotes: results }
        cache = { ts: now, data: payload }
        return NextResponse.json(payload)
      } catch (e) {
        // fallback to static data if Yahoo fails
        const fallback = {
          meta: { source: 'fallback' },
          quotes: [
            { symbol: 'NIFTY 50', price: '24,682', change: '+0.42%', isUp: true },
            { symbol: 'S&P 500', price: '5,897', change: '+0.61%', isUp: true },
            { symbol: 'BTC/USD', price: '$67,420', change: '-1.2%', isUp: false },
          ],
        }
        cache = { ts: now, data: fallback }
        return NextResponse.json(fallback)
      }
    }

    // Example: Fetch global quotes for a few symbols using Alpha Vantage "GLOBAL_QUOTE"
    const symbols = ['NSE:NIFTY', 'BSE:SENSEX', 'SPX', 'BTCUSD']
    const results: any[] = []

    for (const s of symbols) {
      // Alpha Vantage free tier is slow and limited; this loop is simple and may require spacing in prod
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${encodeURIComponent(s)}&apikey=${key}`
      const res = await fetch(url)
      const json = await res.json()
      results.push({ symbol: s, raw: json })
      // Respect rate limits: 12 requests/minute — pause 6s between requests
      await new Promise((r) => setTimeout(r, 6000))
    }

    const payload = { meta: { source: 'alpha-vantage' }, quotes: results }
    cache = { ts: now, data: payload }
    return NextResponse.json(payload)
  } catch (err) {
    console.error('Market data error', err)
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 })
  }
}
