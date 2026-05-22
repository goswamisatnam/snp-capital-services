// ─────────────────────────────────────────
// Pure financial calculation functions
// All functions are pure (no side effects) for easy testing
// ─────────────────────────────────────────
import type {
  SIPInputs, SIPResult,
  CAGRInputs, CAGRResult,
  CompoundInputs, CompoundResult,
  EMIInputs, EMIResult,
  GoalSIPInputs, GoalSIPResult,
  RetirementInputs, RetirementResult,
  LTCGInputs, LTCGResult,
  K401Inputs, K401Result,
} from '@/types'

// ── Formatters ───────────────────────────
export const fmt = (n: number, prefix = '₹'): string =>
  prefix + Math.round(n).toLocaleString('en-IN')

export const fmtUSD = (n: number): string =>
  '$' + Math.round(n).toLocaleString('en-US')

export const fmtN = (n: number): string =>
  Math.round(n).toLocaleString('en-IN')

export const fmtPct = (n: number, decimals = 2): string =>
  n.toFixed(decimals) + '%'

// ── SIP Calculator ────────────────────────
export function calcSIP(inputs: SIPInputs): SIPResult {
  const { monthlyAmount, annualReturnRate, durationYears, stepUpPercent } = inputs
  const monthlyRate = annualReturnRate / 100 / 12
  const totalMonths = durationYears * 12

  let corpus = 0
  let invested = 0
  let currentMonthly = monthlyAmount
  const yearlyData: SIPResult['yearlyData'] = []

  for (let yr = 1; yr <= durationYears; yr++) {
    for (let mo = 0; mo < 12; mo++) {
      corpus = corpus * (1 + monthlyRate) + currentMonthly
      invested += currentMonthly
    }
    if (stepUpPercent > 0) currentMonthly *= 1 + stepUpPercent / 100
    yearlyData.push({ year: yr, corpus: Math.round(corpus), invested: Math.round(invested) })
  }

  return {
    totalInvested: Math.round(invested),
    totalGains: Math.round(corpus - invested),
    finalCorpus: Math.round(corpus),
    wealthRatio: parseFloat((corpus / invested).toFixed(2)),
    yearlyData,
  }
}

// ── CAGR Calculator ───────────────────────
export function calcCAGR(inputs: CAGRInputs): CAGRResult {
  const { initialValue, finalValue, years } = inputs
  const cagr = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100
  const absoluteGain = finalValue - initialValue
  const totalReturnPct = (absoluteGain / initialValue) * 100

  const yearlyData = Array.from({ length: years + 1 }, (_, i) => ({
    year: i,
    value: Math.round(initialValue * Math.pow(1 + cagr / 100, i)),
  }))

  return { cagr, absoluteGain, totalReturnPct, yearlyData }
}

// ── Compound Interest ─────────────────────
export function calcCompound(inputs: CompoundInputs): CompoundResult {
  const { principal, annualRate, years, frequency } = inputs
  const r = annualRate / 100
  const n = frequency
  const finalAmount = principal * Math.pow(1 + r / n, n * years)
  const totalInterest = finalAmount - principal
  const multiple = finalAmount / principal
  const doubleYears = Math.log(2) / Math.log(1 + r / n) / n

  const yearlyData = Array.from({ length: years + 1 }, (_, y) => {
    const av = principal * Math.pow(1 + r / n, n * y)
    return { year: y, principal: Math.round(principal), interest: Math.round(av - principal) }
  })

  return { finalAmount, totalInterest, multiple, doubleYears, yearlyData }
}

// ── EMI Calculator ────────────────────────
export function calcEMI(inputs: EMIInputs): EMIResult {
  const { loanAmount, annualInterestRate, tenureYears } = inputs
  const monthlyRate = annualInterestRate / 100 / 12
  const totalMonths = tenureYears * 12

  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)

  const totalPayment = emi * totalMonths
  const totalInterest = totalPayment - loanAmount
  const interestPercent = (totalInterest / loanAmount) * 100

  let balance = loanAmount
  const amortization = Array.from({ length: tenureYears }, (_, i) => {
    let yInt = 0, yPrin = 0
    for (let m = 0; m < 12; m++) {
      const interest = balance * monthlyRate
      const principal = emi - interest
      yInt += interest
      yPrin += principal
      balance -= principal
    }
    return {
      year: i + 1,
      principalPaid: Math.round(yPrin),
      interestPaid: Math.round(yInt),
      totalPaid: Math.round(yPrin + yInt),
      balance: Math.round(Math.max(0, balance)),
    }
  })

  return { emi, totalPayment, totalInterest, interestPercent, amortization }
}

// ── Goal SIP Planner ──────────────────────
export function calcGoalSIP(inputs: GoalSIPInputs): GoalSIPResult {
  const { targetCorpus, years, annualReturnRate, existingSavings } = inputs
  const monthlyRate = annualReturnRate / 100 / 12
  const totalMonths = years * 12

  const existingFV = existingSavings * Math.pow(1 + monthlyRate, totalMonths)
  const remaining = targetCorpus - existingFV
  const monthlySIP = (remaining * monthlyRate) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
  const totalInvested = monthlySIP * totalMonths
  const marketReturns = targetCorpus - totalInvested

  const yearlyData = Array.from({ length: years }, (_, i) => {
    const m = (i + 1) * 12
    const corpus = monthlySIP * (Math.pow(1 + monthlyRate, m) - 1) / monthlyRate
    return { year: i + 1, corpus: Math.round(corpus), invested: Math.round(monthlySIP * m) }
  })

  return { monthlySIP, totalInvested, marketReturns, yearlyData }
}

// ── Retirement Planner ────────────────────
export function calcRetirement(inputs: RetirementInputs): RetirementResult {
  const { currentAge, retirementAge, lifeExpectancy, monthlyExpenses, inflationRate, investmentReturn } = inputs
  const yearsToRetirement = retirementAge - currentAge
  const yearsInRetirement = lifeExpectancy - retirementAge

  const monthlyAtRetirement = monthlyExpenses * Math.pow(1 + inflationRate / 100, yearsToRetirement)
  const annualInRetirement = monthlyAtRetirement * 12
  const realRate = (investmentReturn / 100 - inflationRate / 100) / (1 + inflationRate / 100)

  const corpusNeeded =
    (annualInRetirement * (1 - Math.pow(1 + realRate, -yearsInRetirement))) / realRate

  const monthlyRate = investmentReturn / 100 / 12
  const monthlySIPRequired =
    (corpusNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, yearsToRetirement * 12) - 1)

  const yearlyData = Array.from({ length: yearsToRetirement + 1 }, (_, i) => {
    const months = i * 12
    const corpus = months === 0
      ? 0
      : monthlySIPRequired * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate
    return { age: currentAge + i, corpus: Math.round(corpus) }
  })

  return {
    corpusNeeded: Math.round(corpusNeeded),
    monthlySIPRequired: Math.round(monthlySIPRequired),
    monthlyAtRetirement: Math.round(monthlyAtRetirement),
    yearsInRetirement,
    yearlyData,
    targetLine: yearlyData.map(() => Math.round(corpusNeeded)),
  }
}

// ── LTCG / STCG Tax ───────────────────────
export function calcLTCG(inputs: LTCGInputs): LTCGResult {
  const { assetType, purchasePrice, salePrice, holdingPeriod } = inputs
  const capitalGain = salePrice - purchasePrice

  let taxRate = 0
  let baseTax = 0
  let taxLabel = ''

  if (assetType === 'equity') {
    if (holdingPeriod === 'lt') {
      const taxableGain = Math.max(0, capitalGain - 125000) // ₹1.25L exemption
      baseTax = taxableGain * 0.125
      taxRate = 12.5
      taxLabel = 'LTCG @ 12.5% (above ₹1.25L exempt)'
    } else {
      baseTax = capitalGain * 0.20
      taxRate = 20
      taxLabel = 'STCG @ 20%'
    }
  } else if (assetType === 'debt') {
    baseTax = capitalGain * 0.30
    taxRate = 30
    taxLabel = 'Added to income (max slab 30%)'
  } else if (assetType === 'property') {
    if (holdingPeriod === 'lt') {
      baseTax = capitalGain * 0.125
      taxRate = 12.5
      taxLabel = 'LTCG @ 12.5% (without indexation)'
    } else {
      baseTax = capitalGain * 0.30
      taxRate = 30
      taxLabel = 'STCG at slab rate (assumed 30%)'
    }
  } else {
    // gold
    if (holdingPeriod === 'lt') {
      baseTax = capitalGain * 0.125
      taxRate = 12.5
      taxLabel = 'LTCG @ 12.5%'
    } else {
      baseTax = capitalGain * 0.30
      taxRate = 30
      taxLabel = 'STCG at slab rate (assumed 30%)'
    }
  }

  const cess = baseTax * 0.04
  const totalTax = baseTax + cess
  const netGain = capitalGain - totalTax

  return { capitalGain, taxRate, baseTax, totalTax, netGain, taxLabel }
}

// ── 401(k) / IRA Growth ───────────────────
export function calcK401(inputs: K401Inputs): K401Result {
  const { annualContribution, employerMatchPercent, annualSalary, existingBalance, yearsToRetirement, annualReturn } = inputs
  const matchAmount = Math.min(annualContribution, annualSalary * (employerMatchPercent / 100))
  const totalAnnualContrib = annualContribution + matchAmount
  const annualRate = annualReturn / 100

  let balance = existingBalance
  let totalOwn = existingBalance
  let totalMatch = 0
  const yearlyData: K401Result['yearlyData'] = []

  for (let y = 1; y <= yearsToRetirement; y++) {
    balance = balance * (1 + annualRate) + totalAnnualContrib
    totalOwn += annualContribution
    totalMatch += matchAmount
    yearlyData.push({
      year: y,
      balance: Math.round(balance),
      contributions: Math.round(totalOwn),
    })
  }

  return {
    finalBalance: Math.round(balance),
    totalOwnContributions: Math.round(totalOwn),
    totalEmployerMatch: Math.round(totalMatch),
    investmentGrowth: Math.round(balance - totalOwn - totalMatch),
    yearlyData,
  }
}
