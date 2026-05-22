import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'US Markets Guide' }
export default function USMarketsPage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">US Markets</p>
      <h1 className="font-display text-navy text-4xl font-bold mb-4">US <em className="text-gold not-italic">Markets</em> Guide</h1>
      <p className="text-gray-500 text-sm font-light">NYSE, NASDAQ, SEC, 401(k), Roth IRA, S&P 500, ETFs.</p>
      <div className="mt-10 bg-cream-200 border border-cream-300 rounded-xl p-10 text-center text-gray-400 text-sm">Articles coming soon</div>
    </div>
  )
}
