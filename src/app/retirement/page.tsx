import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Retirement Planning — 401(k), NPS, PPF' }
export default function RetirementPage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Retirement Planning</h1>
      <p className="text-gray-500 mb-6">Guide to building a retirement corpus: 401(k), Roth IRA, NPS, pension planning, and safe withdrawal rates.</p>
    </div>
  )
}
