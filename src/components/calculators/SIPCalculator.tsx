'use client'

import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcSIP, fmt, fmtN } from '@/lib/calculations'
import { CalcHeader, ResultCard, CalcCard, RangeField, CalcButton, InfoBox } from './CalcUI'

Chart.register(...registerables)

export function SIPCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState(10000)
  const [returnRate,    setReturnRate]    = useState(12)
  const [years,         setYears]         = useState(10)
  const [stepUp,        setStepUp]        = useState(0)
  const [result,        setResult]        = useState(() => calcSIP({ monthlyAmount: 10000, annualReturnRate: 12, durationYears: 10, stepUpPercent: 0 }))
  const chartRef  = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart | null>(null)

  const recalc = () => {
    const r = calcSIP({ monthlyAmount, annualReturnRate: returnRate, durationYears: years, stepUpPercent: stepUp })
    setResult(r)
  }

  useEffect(() => {
    if (!chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: result.yearlyData.map((d) => `Yr ${d.year}`),
        datasets: [
          { label: 'Corpus', data: result.yearlyData.map((d) => d.corpus), borderColor: '#0C1B33', backgroundColor: 'rgba(12,27,51,.08)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0 },
          { label: 'Invested', data: result.yearlyData.map((d) => d.invested), borderColor: '#C9A84C', backgroundColor: 'rgba(201,168,76,.08)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0, borderDash: [5, 4] },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } }, scales: { y: { ticks: { callback: (v) => '₹' + fmtN(Number(v)) }, grid: { color: 'rgba(0,0,0,.04)' } }, x: { grid: { display: false } } } },
    })
    return () => { chartInst.current?.destroy() }
  }, [result])

  return (
    <>
      <CalcHeader
        breadcrumb="Calculators / India"
        title={<><em className="text-gold not-italic">SIP</em> Calculator</>}
        subtitle="Calculate the future value of your Systematic Investment Plan using rupee-cost averaging and the power of compounding."
        tags={['India', 'Mutual Funds']}
      />

      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <RangeField label="Monthly SIP Amount (₹)" hint="How much to invest each month"
            min={500} max={200000} step={500} value={monthlyAmount}
            displayValue={'₹' + monthlyAmount.toLocaleString('en-IN')}
            onChange={setMonthlyAmount} />
          <RangeField label="Expected Annual Return (%)" hint="Historical Nifty 50 CAGR ~12–14%"
            min={1} max={30} step={0.5} value={returnRate}
            displayValue={returnRate + '%'} onChange={setReturnRate} />
          <RangeField label="Investment Duration (Years)" hint="Longer = more compounding power"
            min={1} max={40} step={1} value={years}
            displayValue={years + ' yrs'} onChange={setYears} />
          <RangeField label="Step-Up SIP (Annual % increase)" hint="Increase SIP amount each year"
            min={0} max={30} step={1} value={stepUp}
            displayValue={stepUp + '%'} onChange={setStepUp} />
        </div>
        <CalcButton onClick={recalc}>Calculate SIP Returns</CalcButton>
      </CalcCard>

      <CalcCard>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <ResultCard label="Total Invested"  value={fmt(result.totalInvested)} />
          <ResultCard label="Total Gains"     value={fmt(result.totalGains)} sub="Pure market profit" />
          <ResultCard label="Final Corpus"    value={fmt(result.finalCorpus)} sub={years + '-year total'} highlight />
          <ResultCard label="Wealth Ratio"    value={result.wealthRatio + 'x'} sub="Times your money" />
        </div>
        <p className="text-xs font-medium text-gray-500 mb-3">Corpus Growth Over Time</p>
        <div className="h-64"><canvas ref={chartRef} /></div>
      </CalcCard>

      <InfoBox title="💡 What is SIP?">
        <p>A Systematic Investment Plan (SIP) lets you invest a fixed amount in a mutual fund at regular intervals. It leverages <strong>rupee-cost averaging</strong> — you buy more units when prices are low and fewer when high.</p>
        <ul className="list-disc pl-4 mt-2 space-y-1">
          <li>Minimum SIP: ₹100/month with most AMCs</li>
          <li>ELSS SIPs qualify for Section 80C deduction (up to ₹1.5L/year)</li>
          <li>Historical Nifty 50 CAGR (15-year): ~13–14% per annum</li>
        </ul>
      </InfoBox>
    </>
  )
}
