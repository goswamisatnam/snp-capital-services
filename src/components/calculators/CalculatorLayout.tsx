'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { clsx } from 'clsx'

import { SIPCalculator }        from './SIPCalculator'
import { CAGRCalculator }       from './CAGRCalculator'
import { CompoundInterestCalc } from './CompoundInterestCalc'
import { EMICalculator }        from './EMICalculator'
import { GoalSIPPlanner }       from './GoalSIPPlanner'
import { RetirementPlanner }    from './RetirementPlanner'
import { LTCGCalculator }       from './LTCGCalculator'
import { K401Calculator }       from './K401Calculator'

const CALC_LIST = [
  { id: 'sip',        icon: '📈', label: 'SIP Calculator',       tag: 'India', component: SIPCalculator        },
  { id: 'cagr',       icon: '📊', label: 'CAGR Calculator',      tag: 'Both',  component: CAGRCalculator       },
  { id: 'compound',   icon: '💹', label: 'Compound Interest',    tag: 'Both',  component: CompoundInterestCalc },
  { id: 'emi',        icon: '🏠', label: 'EMI / Loan',           tag: 'Both',  component: EMICalculator        },
  { id: 'goal',       icon: '🎯', label: 'Goal SIP Planner',     tag: 'India', component: GoalSIPPlanner       },
  { id: 'retirement', icon: '🏖️', label: 'Retirement Planner',   tag: 'Both',  component: RetirementPlanner    },
  { id: 'ltcg',       icon: '🧾', label: 'LTCG / STCG Tax',      tag: 'India', component: LTCGCalculator       },
  { id: 'k401',       icon: '🇺🇸', label: '401(k) / IRA Growth', tag: 'US',    component: K401Calculator       },
] as const

type CalcId = typeof CALC_LIST[number]['id']

const tagColors: Record<string, string> = {
  India: 'bg-teal-50 text-teal-600',
  US:    'bg-blue-50 text-blue-700',
  Both:  'bg-gold-50 text-gold-700',
}

export function CalculatorLayout() {
  const searchParams = useSearchParams()
  const [active, setActive] = useState<CalcId>('sip')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as CalcId
    if (hash && CALC_LIST.some((c) => c.id === hash)) setActive(hash)
    const p = searchParams.get('calc') as CalcId
    if (p && CALC_LIST.some((c) => c.id === p)) setActive(p)
  }, [searchParams])

  const ActiveComponent = CALC_LIST.find((c) => c.id === active)?.component ?? SIPCalculator

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 bg-white border-r border-cream-300 sticky top-[120px] h-[calc(100vh-120px)] overflow-y-auto">
        <div className="px-5 pt-5 pb-3">
          <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">Calculators</p>
        </div>
        {CALC_LIST.map((calc, i) => (
          <div key={calc.id}>
            {(i === 4 || i === 5) && i !== 4 ? null :
              i === 4 ? <div className="h-px bg-cream-300 mx-5 my-2" /> : null}
            <button
              onClick={() => { setActive(calc.id); window.location.hash = calc.id }}
              className={clsx(
                'w-full flex items-center gap-2.5 px-5 py-3 text-left text-sm border-l-2 transition-all',
                active === calc.id
                  ? 'bg-cream-100 text-navy font-medium border-gold'
                  : 'text-gray-500 border-transparent hover:bg-cream-50 hover:text-navy',
              )}
            >
              <span className="text-base w-5 text-center">{calc.icon}</span>
              <span className="flex-1 text-xs leading-tight">{calc.label}</span>
              <span className={clsx('text-[10px] font-medium px-1.5 py-0.5 rounded', tagColors[calc.tag])}>
                {calc.tag}
              </span>
            </button>
            {i === 4 && <div className="h-px bg-cream-300 mx-5 my-2" />}
          </div>
        ))}
      </aside>

      {/* Mobile top nav */}
      <div className="md:hidden w-full absolute bg-white border-b border-cream-300 z-10 flex overflow-x-auto scrollbar-hide">
        {CALC_LIST.map((calc) => (
          <button key={calc.id} onClick={() => setActive(calc.id)}
            className={clsx('flex items-center gap-1.5 px-4 py-3 text-xs whitespace-nowrap border-b-2 transition-all shrink-0',
              active === calc.id ? 'border-navy text-navy font-medium' : 'border-transparent text-gray-500')}>
            {calc.icon} {calc.label}
          </button>
        ))}
      </div>

      {/* Main content */}
      <main className="flex-1 px-6 md:px-10 py-8 md:pt-8 pt-14 max-w-3xl">
        <ActiveComponent />
      </main>
    </div>
  )
}
