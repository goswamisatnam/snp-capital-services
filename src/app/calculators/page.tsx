import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'

export const metadata: Metadata = {
  title: 'Finance Calculators – SIP, CAGR, EMI, Retirement, LTCG, 401k',
  description: 'Free finance calculators: SIP, CAGR, Compound Interest, EMI, Retirement Planner, LTCG Tax, 401k — for India & US investors.',
  alternates: { canonical: '/calculators' },
}

export default function CalculatorsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-64 text-gray-400 text-sm">Loading calculators…</div>}>
      <CalculatorLayout />
    </Suspense>
  )
}
