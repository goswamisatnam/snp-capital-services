'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcGoalSIP, fmt, fmtN } from '@/lib/calculations'
import { CalcHeader, ResultCard, CalcCard, Field, NumberInput, CalcButton, InfoBox } from './CalcUI'
Chart.register(...registerables)

export function GoalSIPPlanner() {
  const [target, setTarget] = useState(10000000)
  const [yrs, setYrs] = useState(15)
  const [rate, setRate] = useState(12)
  const [existing, setExisting] = useState(0)
  const [result, setResult] = useState<ReturnType<typeof calcGoalSIP>|null>(null)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart|null>(null)

  useEffect(() => {
    if (!result || !chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type:'line',
      data:{ labels:result.yearlyData.map(d=>'Yr '+d.year), datasets:[
        {label:'Projected Corpus', data:result.yearlyData.map(d=>d.corpus), borderColor:'#1A8C7A', backgroundColor:'rgba(26,140,122,.08)', fill:true, tension:.4, borderWidth:2, pointRadius:0},
        {label:'Total Invested', data:result.yearlyData.map(d=>d.invested), borderColor:'#C9A84C', borderDash:[5,4], tension:.4, borderWidth:2, pointRadius:0},
      ]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{boxWidth:12,font:{size:11}}}},scales:{y:{ticks:{callback:v=>'₹'+fmtN(Number(v))},grid:{color:'rgba(0,0,0,.04)'}},x:{grid:{display:false}}}},
    })
    return () => { chartInst.current?.destroy() }
  }, [result])

  const run = () => setResult(calcGoalSIP({ targetCorpus:target, years:yrs, annualReturnRate:rate, existingSavings:existing }))

  return (
    <>
      <CalcHeader breadcrumb="Calculators / India" title={<>Goal <em className="text-gold not-italic">SIP</em> Planner</>}
        subtitle="Set a financial goal and work backwards to find exactly how much you need to invest each month to reach it." tags={['India', 'Goal Planning']} />
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Target Corpus (Goal Amount)"><NumberInput prefix="₹" value={target} onChange={setTarget} min={1} /></Field>
          <Field label="Time to Achieve Goal (Years)"><NumberInput value={yrs} onChange={setYrs} min={1} /></Field>
          <Field label="Expected Annual Return (%)"><NumberInput suffix="%" value={rate} onChange={setRate} step={0.5} /></Field>
          <Field label="Existing Savings (if any)"><NumberInput prefix="₹" value={existing} onChange={setExisting} min={0} /></Field>
        </div>
        <CalcButton onClick={run}>Find My Monthly SIP</CalcButton>
      </CalcCard>
      {result && (
        <CalcCard>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <ResultCard label="Monthly SIP Required" value={fmt(result.monthlySIP)} sub="To reach your goal" highlight />
            <ResultCard label="Total You Invest" value={fmt(result.totalInvested)} sub={'Over '+yrs+' years'} />
            <ResultCard label="Market Returns" value={fmt(result.marketReturns)} sub="Market does the work" />
            <ResultCard label="Goal Amount" value={fmt(target)} sub="Your target corpus" />
          </div>
          <p className="text-xs font-medium text-gray-500 mb-3">Goal Progress — Corpus Build-up</p>
          <div className="h-64"><canvas ref={chartRef} /></div>
        </CalcCard>
      )}
      <InfoBox title="🎯 Popular Financial Goals (India)">
        <ul className="list-disc pl-4 space-y-1">
          <li>Child's Education (15 yrs): ₹50–80 Lakhs</li>
          <li>Child's Marriage (20 yrs): ₹30–50 Lakhs</li>
          <li>Retirement Corpus (25 yrs): ₹3–10 Crore</li>
          <li>Dream Home Down Payment (7 yrs): ₹20–50 Lakhs</li>
        </ul>
      </InfoBox>
    </>
  )
}
