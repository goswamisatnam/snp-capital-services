'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcLTCG, fmt, fmtN } from '@/lib/calculations'
import type { LTCGInputs } from '@/types'
import { CalcHeader, ResultCard, CalcCard, Field, NumberInput, CalcButton, InfoBox } from './CalcUI'
Chart.register(...registerables)

const ASSET_INFO: Record<string, string> = {
  equity: 'LTCG @ 12.5% on gains above ₹1.25L (held > 1 year) | STCG @ 20% (held ≤ 1 year)',
  debt: 'Gains added to income, taxed at your income slab rate (no indexation from Apr 2023)',
  property: 'LTCG @ 12.5% without indexation (held > 2 years) | STCG at slab rate (held ≤ 2 years)',
  gold: 'LTCG @ 12.5% (held > 3 years) | STCG at income slab rate (held ≤ 3 years)',
}

export function LTCGCalculator() {
  const [asset, setAsset] = useState<LTCGInputs['assetType']>('equity')
  const [buy, setBuy] = useState(500000)
  const [sell, setSell] = useState(900000)
  const [period, setPeriod] = useState<'lt'|'st'>('lt')
  const [result, setResult] = useState<ReturnType<typeof calcLTCG>|null>(null)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart|null>(null)

  useEffect(() => {
    if (!result || !chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type:'doughnut',
      data:{labels:['Net Gain','Tax Paid','Purchase Cost'],datasets:[{data:[Math.round(result.netGain), Math.round(result.totalTax), Math.round(buy)],backgroundColor:['#1A8C7A','#C0392B','#C9A84C'],borderWidth:0,hoverOffset:4}]},
      options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'bottom',labels:{boxWidth:12,font:{size:11}}}}},
    })
    return () => { chartInst.current?.destroy() }
  }, [result, buy])

  const run = () => setResult(calcLTCG({ assetType:asset, purchasePrice:buy, salePrice:sell, holdingPeriod:period }))

  return (
    <>
      <CalcHeader breadcrumb="Calculators / India" title={<>LTCG / STCG <em className="text-gold not-italic">Tax</em> Estimator</>}
        subtitle="Estimate your capital gains tax on equity, mutual funds, and other assets under India's current tax regime (FY 2025–26)." tags={['India', 'Taxation']} />
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Asset Type">
            <select value={asset} onChange={e=>setAsset(e.target.value as LTCGInputs['assetType'])} className="py-2.5 px-3 border border-cream-300 rounded-lg text-sm text-navy bg-cream-50 outline-none">
              <option value="equity">Equity Shares / Equity MF</option>
              <option value="debt">Debt Mutual Funds</option>
              <option value="property">Real Estate / Property</option>
              <option value="gold">Gold / Gold ETF</option>
            </select>
          </Field>
          <Field label="Purchase Price (Cost)"><NumberInput prefix="₹" value={buy} onChange={setBuy} min={1} /></Field>
          <Field label="Sale Price"><NumberInput prefix="₹" value={sell} onChange={setSell} min={1} /></Field>
          <Field label="Holding Period">
            <select value={period} onChange={e=>setPeriod(e.target.value as 'lt'|'st')} className="py-2.5 px-3 border border-cream-300 rounded-lg text-sm text-navy bg-cream-50 outline-none">
              <option value="lt">Long Term</option><option value="st">Short Term</option>
            </select>
          </Field>
        </div>
        <div className="mt-4 bg-cream-100 rounded-lg px-4 py-3 text-xs text-gray-500 leading-relaxed">
          ℹ️ {ASSET_INFO[asset]}
        </div>
        <CalcButton onClick={run}>Estimate Tax Liability</CalcButton>
      </CalcCard>
      {result && (
        <CalcCard>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            <ResultCard label="Capital Gain" value={fmt(result.capitalGain)} sub="Profit on sale" />
            <ResultCard label={`Base Tax (${result.taxRate}%)`} value={fmt(result.baseTax)} sub={result.taxLabel} />
            <ResultCard label="Total Tax (incl. cess)" value={fmt(result.totalTax)} sub="With 4% cess" highlight />
            <ResultCard label="Net Gain After Tax" value={fmt(result.netGain)} sub="Your take-home profit" />
          </div>
          <p className="text-xs font-medium text-gray-500 mb-3">Gain vs Tax Breakdown</p>
          <div className="h-52"><canvas ref={chartRef} /></div>
        </CalcCard>
      )}
      <InfoBox title="📋 FY 2025–26 Capital Gains Tax Rates (India)">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Equity (LTCG)</strong>: 12.5% on gains above ₹1.25 Lakh (held &gt; 1 year)</li>
          <li><strong>Equity (STCG)</strong>: 20% (held ≤ 1 year)</li>
          <li><strong>Debt MF</strong>: Added to income, taxed at slab rate (no indexation from Apr 2023)</li>
          <li><strong>Real Estate (LTCG)</strong>: 12.5% without indexation (held &gt; 2 years)</li>
          <li><strong>Gold (LTCG)</strong>: 12.5% (held &gt; 3 years)</li>
        </ul>
      </InfoBox>
    </>
  )
}
