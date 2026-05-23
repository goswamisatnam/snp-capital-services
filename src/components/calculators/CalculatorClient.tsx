'use client'

import dynamic from 'next/dynamic'
import Skeleton from '@/components/ui/Skeleton'

const CalculatorLayout = dynamic(
  () => import('@/components/calculators/CalculatorLayout').then((m) => m.CalculatorLayout),
  { ssr: false, loading: () => <Skeleton className="h-96" /> },
)

export function CalculatorClient() {
  return <CalculatorLayout />
}
