import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Taxes — Income Tax, Capital Gains, TDS' }
export default function TaxesPage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Taxes</h1>
      <p className="text-gray-500 mb-6">Practical tax guides: capital gains, TDS, filing ITR, and tax-saving instruments (80C, 80CCD).</p>
    </div>
  )
}
