import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'About S&P Capital Services' }
export default function AboutPage() {
  return (
    <div className="px-[5vw] py-20 max-w-2xl mx-auto">
      <h1 className="font-display text-navy text-4xl font-bold mb-6">Finance education that's <em className="text-gold not-italic">clear, honest</em> and actionable</h1>
      <div className="text-gray-600 space-y-4 font-light leading-relaxed text-sm">
        <p>S&P Capital Services was founded to bridge the gap between complex financial markets and everyday investors — especially those navigating both Indian and US markets.</p>
        <p>No stock tips. No paid promotions. Pure, unbiased financial education — free at the core.</p>
      </div>
    </div>
  )
}
