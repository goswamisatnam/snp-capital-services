'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { calcEMI, fmt, fmtN } from '@/lib/calculations'
import { CalcHeader, ResultCard, CalcCard, Field, NumberInput, CalcButton } from './CalcUI'
Chart.register(...registerables)

export function EMICalculator() {
  const [loan, setLoan] = useState(5000000)
  const [rate, setRate] = useState(8.5)
  const [yrs, setYrs] = useState(20)
  const [result, setResult] = useState<ReturnType<typeof calcEMI>|null>(null)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInst = useRef<Chart|null>(null)

  useEffect(() => {
    if (!result || !chartRef.current) return
    chartInst.current?.destroy()
    chartInst.current = new Chart(chartRef.current, {
      type:'doughnut',
      data:{labels:['Principal','Interest'],datasets:[{data:[Math.round(loan), Math.round(result.totalInterest)],backgroundColor:['#0C1B33','#C9A84C'],borderWidth:0,hoverOffset:4}]},
      options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom',labels:{boxWidth:12,font:{size:11}}}}},
    })
    return () => { chartInst.current?.destroy() }
  }, [result, loan])

  const run = () => setResult(calcEMI({ loanAmount:loan, annualInterestRate:rate, tenureYears:yrs }))

  return (
    <>
      <CalcHeader breadcrumb="Calculators / Both Markets" title={<>Loan <em className="text-gold not-italic">EMI</em> Calculator</>}
        subtitle="Calculate your monthly EMI, total interest paid, and view a complete year-by-year amortization schedule." tags={['India & US']} />
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Loan Amount (Principal)"><NumberInput prefix="₹" value={loan} onChange={setLoan} min={1} /></Field>
          <Field label="Annual Interest Rate (%)"><NumberInput suffix="%" value={rate} onChange={setRate} min={0.1} step={0.1} /></Field>
          <Field label="Loan Tenure (Years)"><NumberInput value={yrs} onChange={setYrs} min={1} max={30} /></Field>
          <Field label="Loan Type">
            <select className="py-2.5 px-3 border border-cream-300 rounded-lg text-sm text-navy bg-cream-50 outline-none">
              <option>Home Loan</option><option>Car / Auto Loan</option>
              <option>Personal Loan</option><option>Education Loan</option><option>Business Loan</option>
            </select>
          </Field>
        </div>
        <CalcButton onClick={run}>Calculate EMI</CalcButton>
      </CalcCard>
      {result && (
        <>
          <CalcCard>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <ResultCard label="Monthly EMI" value={fmt(result.emi)} sub="Pay every month" highlight />
              <ResultCard label="Total Payment" value={fmt(result.totalPayment)} sub={'Over '+yrs+' years'} />
              <ResultCard label="Total Interest" value={fmt(result.totalInterest)} sub="Cost of borrowing" />
              <ResultCard label="Interest %" value={result.interestPercent.toFixed(1)+'%'} sub="Of principal" />
            </div>
            <p className="text-xs font-medium text-gray-500 mb-3">Principal vs Total Interest</p>
            <div className="h-52"><canvas ref={chartRef} /></div>
          </CalcCard>
          <CalcCard>
            <p className="text-xs font-medium text-gray-500 mb-4">Amortization Schedule (Year-wise)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="bg-navy text-white/70">
                  {['Year','Principal Paid','Interest Paid','Total Paid','Balance'].map(h=>(
                    <th key={h} className="py-2.5 px-3 text-right first:text-left font-medium tracking-wide">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {result.amortization.map(row=>(
                    <tr key={row.year} className="border-b border-cream-300 hover:bg-cream-50">
                      <td className="py-2 px-3 font-medium text-navy">Year {row.year}</td>
                      <td className="py-2 px-3 text-right text-gray-600">₹{fmtN(row.principalPaid)}</td>
                      <td className="py-2 px-3 text-right text-gray-600">₹{fmtN(row.interestPaid)}</td>
                      <td className="py-2 px-3 text-right text-gray-600">₹{fmtN(row.totalPaid)}</td>
                      <td className="py-2 px-3 text-right font-medium text-navy">₹{fmtN(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CalcCard>
        </>
      )}
    </>
  )
}
