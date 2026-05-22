import { TICKER_ITEMS } from '@/lib/constants'

export function MarketTicker() {
  // Duplicate items for seamless infinite scroll
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="bg-navy border-b border-gold-900/30 py-2 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex w-max ticker-scroll">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-6 text-xs border-r border-white/[0.06] whitespace-nowrap"
          >
            <span className="font-medium text-white/85">{item.name}</span>
            <span className="text-white/55">{item.value}</span>
            <span className={item.isUp ? 'text-green-400' : 'text-red-400'}>
              {item.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
