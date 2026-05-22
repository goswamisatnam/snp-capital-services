"use client"

import { useEffect, useState } from 'react'
import { TICKER_ITEMS } from '@/lib/constants'

type Quote = { name: string; value: string; change: string; isUp: boolean }

export function MarketTicker() {
  const [quotes, setQuotes] = useState<Quote[] | null>(null)

  useEffect(() => {
    let mounted = true

    async function fetchQuotes() {
      try {
        const res = await fetch('/api/market-data')
        if (!res.ok) throw new Error('no data')
        const json = await res.json()
        // Normalize depending on API shape; fall back to constants
        const q: Quote[] = (json.quotes && Array.isArray(json.quotes))
          ? json.quotes.slice(0, 16).map((it: any) => ({
              name: it.symbol || it.name || it.raw?.['01. symbol'] || it.raw?.['01. symbol'] || '—',
              value: it.price || it.value || it.raw?.['05. price'] || it.raw?.['05. price'] || '-',
              change: it.change || it.raw?.['10. change percent'] || it.raw?.['09. change'] || '-',
              isUp: (it.isUp ?? (String(it.change || '').startsWith('+'))) as boolean,
            }))
          : TICKER_ITEMS.slice(0, 16).map((t) => ({ name: t.name, value: t.value, change: t.change, isUp: t.isUp }))

        if (mounted) setQuotes(q)
      } catch (e) {
        // ignore and keep null so fallback renders
      }
    }

    fetchQuotes()
    const id = setInterval(fetchQuotes, 60 * 1000)
    return () => {
      mounted = false
      clearInterval(id)
    }
  }, [])

  const items = quotes ?? TICKER_ITEMS

  // Duplicate for seamless scroll
  const display = [...items, ...items]

  return (
    <div className="bg-navy border-b border-gold-900/30 py-2 overflow-hidden" aria-hidden="true">
      <div className="flex w-max ticker-scroll">
        {display.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 px-6 text-xs border-r border-white/[0.06] whitespace-nowrap">
            <span className="font-medium text-white/85">{item.name}</span>
            <span className="text-white/55">{item.value}</span>
            <span className={item.isUp ? 'text-green-400' : 'text-red-400'}>{item.change}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
