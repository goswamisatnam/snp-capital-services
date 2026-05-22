import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Personal Finance — Budgeting, Savings & Insurance' }
export default function PersonalFinancePage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Personal Finance</h1>
      <p className="text-gray-500 mb-6">Practical guides: budgeting, emergency funds, debt management, insurance, and building a financial plan.</p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Budgeting templates and rules (50/30/20, zero-based)</li>
        <li>Emergency fund — how much and where to keep it</li>
        <li>Insurance basics: term insurance, health, and critical illness</li>
        <li>Managing credit cards and productive debt</li>
        <li>Savings that beat inflation: PPF, FDs, and short-term debt funds</li>
      </ul>
    </div>
  )
}
