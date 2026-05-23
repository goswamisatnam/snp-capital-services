import type { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { AIFinanceAssistant } from '@/components/ai/AIFinanceAssistant'

function Skeleton() {
  return <div className="h-96 bg-navy-100 animate-pulse rounded-brand" />
}

const CalculatorLayout = dynamic(
  () => import('@/components/calculators/CalculatorLayout').then((m) => m.CalculatorLayout),
  { ssr: false, loading: () => <Skeleton /> },
)

export const metadata: Metadata = {
  title: 'Finance Calculators – SIP, CAGR, EMI, Retirement, LTCG, 401k',
  description: 'Free finance calculators: SIP, CAGR, Compound Interest, EMI, Retirement Planner, LTCG Tax, 401k — for India & US investors.',
  alternates: { canonical: '/calculators' },
  twitter: { card: 'summary_large_image' },
}

export default function CalculatorsPage() {
  return (
    <>
      <Suspense fallback={<div className="flex items-center justify-center h-64 text-gray-400 text-sm">Loading calculators…</div>}>
        <CalculatorLayout />
      </Suspense>

      {/* AI Finance Assistant section */}
      <section className="py-20 px-[5vw] bg-cream-100">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">
              AI-Powered
            </p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-bold mb-3">
              Ask <em className="text-gold not-italic">FinanceGPT</em>
            </h2>
            <p className="text-gray-500 text-sm font-light max-w-md">
              Not sure which calculator to use, or want to understand a result? Ask our AI educator — covering India &amp; US markets.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-cream-300 shadow-xl">
            <AIFinanceAssistant />
          </div>
        </div>
      </section>
    </>
  )
}
