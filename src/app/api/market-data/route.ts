import { NextResponse } from 'next/server'

// Short-lived cache: avoids redundant requests within the TTL window
let cache: { ts: number; data: unknown } | null = null
const CACHE_TTL = 60 * 1000 // 1 minute

// Persists the most recent SUCCESSFUL live payload across TTL cycles.
// Never overwritten by the static fallback — only by a real API response.
let lastGoodQuotes: unknown | null = null

const STATIC_FALLBACK = {
  meta: { source: 'fallback' },
  quotes: [
    { symbol: 'NIFTY 50',  price: '24,682',  change: '+0.42%', isUp: true  },
    { symbol: 'SENSEX',    price: '81,456',  change: '+0.38%', isUp: true  },
    { symbol: 'S&P 500',   price: '5,897',   change: '+0.61%', isUp: true  },
    { symbol: 'NASDAQ',    price: '19,247',  change: '+0.78%', isUp: true  },
    { symbol: 'BTC/USD',   price: '$67,420', change: '-1.2%',  isUp: false },
    { symbol: 'RELIANCE',  price: '₹2,987',  change: '+0.55%', isUp: true  },
  ],
}

export async function GET() {
  try {
    const now = Date.now()
    if (cache && now - cache.ts < CACHE_TTL) return NextResponse.json(cache.data)

    const key = process.env.ALPHA_VANTAGE_API_KEY
    if (!key) {
      try {
        const yahooSymbols = ['^NSEI', '^BSESN', '^GSPC', 'BTC-USD', 'TSLA', 'AAPL', 'MSFT', 'RELIANCE.NS']
        const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(yahooSymbols.join(','))}`
        const res = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
        })
        if (!res.ok) throw new Error(`yahoo ${res.status}`)
        const json = await res.json()
        const results = (json?.quoteResponse?.result || []).map((r: any) => ({
          symbol: r.symbol,
          price: r.regularMarketPrice != null
            ? String(r.regularMarketPrice)
            : r.regularMarketPreviousClose != null
              ? String(r.regularMarketPreviousClose)
              : '-',
          change: typeof r.regularMarketChangePercent === 'number'
            ? `${r.regularMarketChangePercent.toFixed(2)}%`
            : r.regularMarketChange != null
              ? String(r.regularMarketChange)
              : '-',
          isUp: (r.regularMarketChange ?? 0) >= 0,
        }))

        if (results.length === 0) throw new Error('yahoo returned no quotes')

        const payload = { meta: { source: 'yahoo' }, quotes: results }
        lastGoodQuotes = payload          // persist for market-closed periods
        cache = { ts: now, data: payload }
        return NextResponse.json(payload)
      } catch {
        // Market closed or Yahoo blocked — serve last known prices, or static seed
        const data = lastGoodQuotes ?? STATIC_FALLBACK
        cache = { ts: now, data }
        return NextResponse.json(data)
      }
    }

    // Alpha Vantage path
    const symbols = ['NSE:NIFTY', 'BSE:SENSEX', 'SPX', 'BTCUSD']
    const results: unknown[] = []

    for (const s of symbols) {
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${encodeURIComponent(s)}&apikey=${key}`
      const res = await fetch(url)
      const json = await res.json()
      results.push({ symbol: s, raw: json })
      await new Promise((r) => setTimeout(r, 6000))
    }

    const payload = { meta: { source: 'alpha-vantage' }, quotes: results }
    lastGoodQuotes = payload              // persist for market-closed periods
    cache = { ts: now, data: payload }
    return NextResponse.json(payload)
  } catch (err) {
    console.error('Market data error', err)
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 })
  }
}
