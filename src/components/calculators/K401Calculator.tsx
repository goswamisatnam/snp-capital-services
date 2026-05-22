'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcK401 } from '@/lib/calculations'
import type { K401Inputs } from '@/types'
import { CalcHeader, ResultCard, CalcCard, Field, NumberInput, CalcButton, InfoBox } from './CalcUI'
Chart.register(...registerables)

export function K401Calculator() {
  const [type, setType] = useState<K401Inputs['accountType']>('401k')
  const [contrib, setContrib] = useState(23000)
  const [match, setMatch] = useState(4)
  const [salary, setSalary] = useState(120000)
  const [existing, setExisting] = useState(50000)
  const [yrs, setYrs] = useState(25)
  const [ret, setRet] = useState(8)
  const [result, setResult] = useState<ReturnType<typeof calcK401>|null>(null)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart|null>(null)

  const fmtUSD = (n:number) => '$'+Math.round(n).toLocaleString('en-US')

  useEffect(() => {
    if (!result || !chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type:'line',
      data:{ labels:result.yearlyData.map(d=>'Yr '+d.year), datasets:[
        {label:'Total Balance', data:result.yearlyData.map(d=>d.balance), borderColor:'#0C1B33', backgroundColor:'rgba(12,27,51,.08)', fill:true, tension:.4, borderWidth:2, pointRadius:0},
        {label:'Your Contributions', data:result.yearlyData.map(d=>d.contributions), borderColor:'#C9A84C', borderDash:[5,4], tension:.4, borderWidth:2, pointRadius:0},
      ]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{boxWidth:12,font:{size:11}}}},scales:{y:{ticks:{callback:v=>'$'+Math.round(Number(v)).toLocaleString()},grid:{color:'rgba(0,0,0,.04)'}},x:{grid:{display:false}}}},
    })
    return () => { chartInst.current?.destroy() }
  }, [result])

  const run = () => setResult(calcK401({ accountType:type, annualContribution:contrib, employerMatchPercent:match, annualSalary:salary, existingBalance:existing, yearsToRetirement:yrs, annualReturn:ret }))

  return (
    <>
      <CalcHeader breadcrumb="Calculators / US Markets" title={<>401(k) / IRA <em className="text-gold not-italic">Growth</em> Calculator</>}
        subtitle="Project your US retirement account balance including employer match, contribution limits, and tax-advantaged compounding." tags={['US Markets', 'Retirement']} />
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Account Type">
            <select value={type} onChange={e=>setType(e.target.value as K401Inputs['accountType'])} className="py-2.5 px-3 border border-cream-300 rounded-lg text-sm text-navy bg-cream-50 outline-none">
              <option value="401k">401(k) — Traditional</option><option value="roth401k">401(k) — Roth</option>
              <option value="ira">Traditional IRA</option><option value="roth">Roth IRA</option>
            </select>
          </Field>
          <Field label="Annual Contribution ($)"><NumberInput prefix="$" value={contrib} onChange={setContrib} min={1} /></Field>
          <Field label="Employer Match (% of salary)"><NumberInput suffix="%" value={match} onChange={setMatch} step={0.5} min={0} /></Field>
          <Field label="Annual Salary ($)"><NumberInput prefix="$" value={salary} onChange={setSalary} min={1} /></Field>
          <Field label="Current Balance ($)"><NumberInput prefix="$" value={existing} onChange={setExisting} min={0} /></Field>
          <Field label="Years Until Retirement"><NumberInput value={yrs} onChange={setYrs} min={1} /></Field>
          <Field label="Expected Annual Return (%)"><NumberInput suffix="%" value={ret} onChange={setRet} step={0.5} /></Field>
        </div>
        <CalcButton onClick={run}>Calculate Retirement Balance</CalcButton>
      </CalcCard>
      {result && (
        <CalcCard>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <ResultCard label="Projected Balance"     value={fmtUSD(result.finalBalance)} sub="At retirement" highlight />
            <ResultCard label="Your Contributions"    value={fmtUSD(result.totalOwnContributions)} sub="Total invested" />
            <ResultCard label="Employer Match"        value={fmtUSD(result.totalEmployerMatch)} sub="Free money" />
            <ResultCard label="Investment Growth"     value={fmtUSD(result.investmentGrowth)} sub="Market returns" />
          </div>
          <p className="text-xs font-medium text-gray-500 mb-3">Account Balance Growth Over Time</p>
          <div className="h-64"><canvas ref={chartRef} /></div>
        </CalcCard>
      )}
      <InfoBox title="🇺🇸 2025 US Retirement Contribution Limits">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>401(k)</strong>: $23,500/year (under 50); $31,000 if 50+ (catch-up)</li>
          <li><strong>IRA / Roth IRA</strong>: $7,000/year (under 50); $8,000 if 50+</li>
          <li><strong>Roth IRA income limit</strong>: Phase-out starts at $150K (single) / $236K (married)</li>
          <li><strong>NRI note</strong>: L1/H1B visa holders can contribute to 401(k) — consult DTAA for India tax treatment on withdrawal</li>
        </ul>
      </InfoBox>
    </>
  )
}
