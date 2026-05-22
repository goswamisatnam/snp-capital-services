'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcCompound, fmt, fmtN } from '@/lib/calculations'
import { CalcHeader, ResultCard, CalcCard, Field, NumberInput, CalcButton, InfoBox } from './CalcUI'
Chart.register(...registerables)

export function CompoundInterestCalc() {
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(20)
  const [freq, setFreq] = useState<1|2|4|12|365>(12)
  const [result, setResult] = useState<ReturnType<typeof calcCompound>|null>(null)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart|null>(null)

  useEffect(() => {
    if (!result || !chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type:'bar',
      data:{ labels:result.yearlyData.map(d=>'Yr '+d.year), datasets:[
        {label:'Principal', data:result.yearlyData.map(d=>d.principal), backgroundColor:'rgba(201,168,76,.6)', borderRadius:2},
        {label:'Interest Earned', data:result.yearlyData.map(d=>d.interest), backgroundColor:'rgba(12,27,51,.75)', borderRadius:2},
      ]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{boxWidth:12,font:{size:11}}}},scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,ticks:{callback:v=>'₹'+fmtN(Number(v))},grid:{color:'rgba(0,0,0,.04)'}}}},
    })
    return () => { chartInst.current?.destroy() }
  }, [result])

  const run = () => setResult(calcCompound({ principal, annualRate:rate, years, frequency:freq }))

  return (
    <>
      <CalcHeader breadcrumb="Calculators / Both Markets" title={<>Compound <em className="text-gold not-italic">Interest</em> Calculator</>}
        subtitle="Einstein called it the eighth wonder of the world. See how your money grows exponentially with time and compounding frequency." tags={['India & US']} />
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Principal Amount"><NumberInput prefix="₹" value={principal} onChange={setPrincipal} min={1} /></Field>
          <Field label="Annual Interest Rate (%)"><NumberInput suffix="%" value={rate} onChange={setRate} min={0.1} step={0.1} /></Field>
          <Field label="Duration (Years)"><NumberInput value={years} onChange={setYears} min={1} max={50} /></Field>
          <Field label="Compounding Frequency">
            <select value={freq} onChange={e=>setFreq(Number(e.target.value) as 1|2|4|12|365)} className="py-2.5 px-3 border border-cream-300 rounded-lg text-sm text-navy bg-cream-50 outline-none">
              <option value={1}>Annually</option><option value={2}>Semi-annually</option>
              <option value={4}>Quarterly</option><option value={12}>Monthly</option><option value={365}>Daily</option>
            </select>
          </Field>
        </div>
        <CalcButton onClick={run}>Calculate</CalcButton>
      </CalcCard>
      {result && (
        <CalcCard>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <ResultCard label="Principal" value={fmt(result.finalAmount - result.totalInterest)} />
            <ResultCard label="Total Interest" value={fmt(result.totalInterest)} sub="Pure compounding gain" />
            <ResultCard label="Final Amount" value={fmt(result.finalAmount)} sub={years+'-year total'} highlight />
            <ResultCard label="Multiple" value={result.multiple.toFixed(2)+'x'} sub={`Doubles in ${result.doubleYears.toFixed(1)} yrs`} />
          </div>
          <p className="text-xs font-medium text-gray-500 mb-3">Principal vs Interest Accumulated</p>
          <div className="h-64"><canvas ref={chartRef} /></div>
        </CalcCard>
      )}
      <InfoBox title="🧮 Compound Interest Formula">
        <p>A = P × (1 + r/n)^(n×t) &nbsp;· P = Principal, r = annual rate, n = frequency, t = years</p>
        <ul className="list-disc pl-4 mt-2 space-y-1">
          <li>Rule of 72: divide 72 by interest rate to find doubling time (12% = 6 years)</li>
          <li>PPF compounds annually at 7.1%; FD typically quarterly at 6.5–7.5%</li>
          <li>More frequent compounding = slightly higher effective yield</li>
        </ul>
      </InfoBox>
    </>
  )
}
