import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Mutual Funds — How to Choose & Invest' }
export default function MutualFundsPage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Mutual Funds</h1>
      <p className="text-gray-500 mb-6">Types of mutual funds (equity, debt, hybrid), how to read NAV, expense ratio, and selecting direct plans.</p>

      <h2 className="font-medium text-navy mb-2">Starter Checklist</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Decide time horizon and risk appetite</li>
        <li>Prefer direct index funds for core allocation</li>
        <li>Use SIPs for systematic investing</li>
        <li>Review expense ratio and track record (5–10 years)</li>
      </ul>
    </div>
  )
}
