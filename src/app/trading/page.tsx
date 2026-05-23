import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trading — Learn to Trade Stocks, F&O & Derivatives | S&P Capital Services',
  description: 'Complete trading education: introduction to trading, strategies, brokers, derivatives, futures and options for India and US markets.',
  alternates: { canonical: '/trading' },
}

const TRADING_TOPICS = [
  { label: 'Introduction to Trading', href: '/trading/introduction', emoji: '📖', desc: 'What trading is, how it differs from investing, and whether it suits you.' },
  { label: 'How to Start Trading', href: '/trading/how-to-start', emoji: '🚀', desc: 'Broker selection, account setup, capital requirements, and first steps.' },
  { label: 'Learn Trading', href: '/trading/learn', emoji: '🎓', desc: 'Technical analysis, chart patterns, indicators, and price action.' },
  { label: 'Trading Strategies', href: '/trading/strategies', emoji: '🎯', desc: 'Trend following, breakout, mean reversion, and momentum strategies.' },
  { label: 'Top 10 Brokers', href: '/trading/top-10-brokers', emoji: '🏆', desc: 'Best brokers in India and the US — compared on cost, platform, and features.' },
  { label: 'Derivatives', href: '/trading/derivatives', emoji: '📉', desc: 'Futures, options, forwards, and swaps — what they are and how they work.' },
  { label: 'Futures & Options', href: '/trading/futures-and-options', emoji: '⚙️', desc: 'Deep dive into F&O — Greeks, strategies, margin, and risk management.' },
]

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy text-white px-[5vw] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚡</span>
            <span className="text-sm font-medium text-gold uppercase tracking-widest">Trading</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Learn to Trade <span className="text-gold">Like a Pro</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            From your first chart to advanced derivatives strategies — structured trading education for India and US markets.
          </p>
          <div className="mt-6 bg-amber-900/30 border border-amber-500/30 rounded-xl px-5 py-3 max-w-2xl">
            <p className="text-amber-200 text-sm">
              <span className="font-semibold">⚠️ Reality check: </span>
              89% of F&O retail traders lose money. We will teach you why, and how to approach trading responsibly.
            </p>
          </div>
        </div>
      </section>

      <div className="px-[5vw] py-14 max-w-5xl mx-auto">
        <h2 className="font-display text-navy text-2xl font-bold mb-8">Trading Topics</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRADING_TOPICS.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white border border-cream-300 rounded-2xl p-5 hover:border-navy hover:shadow-card transition-all flex flex-col"
            >
              <span className="text-3xl mb-3 block">{topic.emoji}</span>
              <h3 className="font-display text-navy font-semibold text-base leading-snug mb-2 group-hover:text-teal-700 transition-colors">
                {topic.label}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{topic.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-navy px-[5vw] py-14">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-3">Use Our Trading Tools</h2>
          <p className="text-gray-300 mb-8">Calculators for options pricing, P&L, and position sizing.</p>
          <Link href="/calculators" className="bg-gold text-navy font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors">
            Open Calculators →
          </Link>
        </div>
      </section>
    </div>
  )
}
