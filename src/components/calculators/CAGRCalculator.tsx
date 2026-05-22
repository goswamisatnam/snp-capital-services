'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcCAGR, fmtN } from '@/lib/calculations'
import { CalcHeader, ResultCard, CalcCard, Field, NumberInput, CalcButton, InfoBox } from './CalcUI'
Chart.register(...registerables)

export function CAGRCalculator() {
  const [init, setInit] = useState(100000)
  const [fin,  setFin]  = useState(250000)
  const [yrs,  setYrs]  = useState(5)
  const [cur,  setCur]  = useState<'INR'|'USD'>('INR')
  const [result, setResult] = useState<ReturnType<typeof calcCAGR>|null>(null)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart|null>(null)
  const pre = cur === 'USD' ? '$' : '₹'

  useEffect(() => {
    if (!result || !chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type: 'bar',
      data: { labels: result.yearlyData.map(d => 'Yr '+d.year), datasets: [{ label: 'Value', data: result.yearlyData.map(d=>d.value), backgroundColor: 'rgba(12,27,51,.75)', borderRadius: 4 }] },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ y:{ticks:{callback:v=>pre+fmtN(Number(v))},grid:{color:'rgba(0,0,0,.04)'}}, x:{grid:{display:false}} } },
    })
    return () => { chartInst.current?.destroy() }
  }, [result, pre])

  const run = () => setResult(calcCAGR({ initialValue:init, finalValue:fin, years:yrs, currency:cur }))

  return (
    <>
      <CalcHeader breadcrumb="Calculators / Both Markets" title={<><em className="text-gold not-italic">CAGR</em> Calculator</>}
        subtitle="Compound Annual Growth Rate — the single most important number for evaluating any investment's performance." tags={['India & US']} />
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Initial Investment Value"><NumberInput prefix={pre} value={init} onChange={setInit} min={1} /></Field>
          <Field label="Final Investment Value"><NumberInput prefix={pre} value={fin} onChange={setFin} min={1} /></Field>
          <Field label="Number of Years"><NumberInput value={yrs} onChange={setYrs} min={0.5} step={0.5} /></Field>
          <Field label="Currency">
            <select value={cur} onChange={e=>setCur(e.target.value as 'INR'|'USD')} className="py-2.5 px-3 border border-cream-300 rounded-lg text-sm text-navy bg-cream-50 outline-none">
              <option value="INR">₹ Indian Rupee (INR)</option>
              <option value="USD">$ US Dollar (USD)</option>
            </select>
          </Field>
        </div>
        <CalcButton onClick={run}>Calculate CAGR</CalcButton>
      </CalcCard>
      {result && (
        <CalcCard>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <ResultCard label="Initial Value"   value={pre+fmtN(result.yearlyData[0]?.value??init)} />
            <ResultCard label="Total Gain"      value={pre+fmtN(result.absoluteGain)} sub="Absolute profit" />
            <ResultCard label="Total Return"    value={result.totalReturnPct.toFixed(1)+'%'} sub="Simple return" />
            <ResultCard label="CAGR"            value={result.cagr.toFixed(2)+'%'} sub="Per year compounded" highlight />
          </div>
          <p className="text-xs font-medium text-gray-500 mb-3">Year-by-year Value Growth</p>
          <div className="h-64"><canvas ref={chartRef} /></div>
        </CalcCard>
      )}
      <InfoBox title="📐 CAGR Formula">
        <p>CAGR = [(Final Value / Initial Value)^(1/n)] − 1 &nbsp;· where n = number of years</p>
        <ul className="list-disc pl-4 mt-2 space-y-1">
          <li>Nifty 50 CAGR (1990–2025): ~13.5% per annum</li>
          <li>S&P 500 CAGR (1990–2025): ~10.7% per annum</li>
          <li>CAGR smooths out volatility — actual year-to-year returns vary widely</li>
        </ul>
      </InfoBox>
    </>
  )
}
