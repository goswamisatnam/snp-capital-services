'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcRetirement, fmt, fmtN } from '@/lib/calculations'
import { CalcHeader, ResultCard, CalcCard, Field, NumberInput, CalcButton, InfoBox } from './CalcUI'
Chart.register(...registerables)

export function RetirementPlanner() {
  const [curAge, setCurAge] = useState(35)
  const [retAge, setRetAge] = useState(60)
  const [lifeExp, setLifeExp] = useState(85)
  const [expenses, setExpenses] = useState(80000)
  const [inflation, setInflation] = useState(6)
  const [returns, setReturns] = useState(10)
  const [result, setResult] = useState<ReturnType<typeof calcRetirement>|null>(null)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart|null>(null)

  useEffect(() => {
    if (!result || !chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type:'line',
      data:{ labels:result.yearlyData.map(d=>'Age '+d.age), datasets:[
        {label:'Accumulated Corpus', data:result.yearlyData.map(d=>d.corpus), borderColor:'#0C1B33', backgroundColor:'rgba(12,27,51,.08)', fill:true, tension:.4, borderWidth:2, pointRadius:0},
        {label:'Target Corpus', data:result.targetLine, borderColor:'#C9A84C', borderDash:[6,4], borderWidth:2, pointRadius:0},
      ]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{boxWidth:12,font:{size:11}}}},scales:{y:{ticks:{callback:v=>'₹'+fmtN(Number(v))},grid:{color:'rgba(0,0,0,.04)'}},x:{grid:{display:false}}}},
    })
    return () => { chartInst.current?.destroy() }
  }, [result])

  const run = () => setResult(calcRetirement({ currentAge:curAge, retirementAge:retAge, lifeExpectancy:lifeExp, monthlyExpenses:expenses, inflationRate:inflation, investmentReturn:returns }))

  return (
    <>
      <CalcHeader breadcrumb="Calculators / Both Markets" title={<><em className="text-gold not-italic">Retirement</em> Planner</>}
        subtitle="Calculate how much you need to save today to fund your desired retirement lifestyle, accounting for inflation and investment returns." tags={['India & US']} />
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Current Age"><NumberInput value={curAge} onChange={setCurAge} min={18} max={60} /></Field>
          <Field label="Retirement Age"><NumberInput value={retAge} onChange={setRetAge} min={40} max={75} /></Field>
          <Field label="Life Expectancy"><NumberInput value={lifeExp} onChange={setLifeExp} min={70} max={100} /></Field>
          <Field label="Monthly Expenses Today (₹)"><NumberInput prefix="₹" value={expenses} onChange={setExpenses} min={1} /></Field>
          <Field label="Inflation Rate (%)"><NumberInput suffix="%" value={inflation} onChange={setInflation} step={0.5} /></Field>
          <Field label="Expected Investment Return (%)"><NumberInput suffix="%" value={returns} onChange={setReturns} step={0.5} /></Field>
        </div>
        <CalcButton onClick={run}>Calculate My Retirement Plan</CalcButton>
      </CalcCard>
      {result && (
        <CalcCard>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <ResultCard label="Corpus Needed" value={fmt(result.corpusNeeded)} sub={'At age '+retAge} highlight />
            <ResultCard label="Monthly SIP Required" value={fmt(result.monthlySIPRequired)} sub="Starting today" />
            <ResultCard label="Monthly Expense at Retirement" value={fmt(result.monthlyAtRetirement)} sub="Inflation-adjusted" />
            <ResultCard label="Years in Retirement" value={result.yearsInRetirement+' yrs'} sub={'Age '+retAge+' – '+lifeExp} />
          </div>
          <p className="text-xs font-medium text-gray-500 mb-3">Retirement Savings Projection</p>
          <div className="h-64"><canvas ref={chartRef} /></div>
        </CalcCard>
      )}
      <InfoBox title="🏖️ Retirement Planning Tips">
        <ul className="list-disc pl-4 space-y-1">
          <li>India: NPS (National Pension System) offers additional 80CCD(1B) deduction of ₹50,000</li>
          <li>US: Always contribute enough to your 401(k) to get full employer match — it's free money</li>
          <li>Target a corpus of 25–30x your annual retirement expenses (the 4% withdrawal rule)</li>
          <li>Start early — investing ₹5,000/month at 25 vs 35 produces ~2.5x more corpus at 60</li>
        </ul>
      </InfoBox>
    </>
  )
}
