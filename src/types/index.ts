// ─────────────────────────────────────────
// Global TypeScript types for S&P Capital Services
// ─────────────────────────────────────────

// ── Navigation ──────────────────────────
export interface NavCategory {
  label: string
  icon: string
  href: string
}

// ── Market Ticker ────────────────────────
export interface TickerItem {
  name: string
  value: string
  change: string
  isUp: boolean
}

// ── Learning Path ────────────────────────
export type PathLevel = 'beginner' | 'intermediate' | 'advanced' | 'nri'

export interface LearningPath {
  id: string
  level: PathLevel
  levelLabel: string
  icon: string
  title: string
  description: string
  topics: string[]
  href: string
  colorClass: string
  badgeClass: string
}

// ── Topic Category ────────────────────────
export interface TopicCategory {
  emoji: string
  name: string
  count: string
  href: string
  tag?: 'india' | 'us' | 'both'
}

// ── Article ──────────────────────────────
export type ArticleLevel = 'Beginner' | 'Intermediate' | 'Advanced'
export type ArticleMarket = 'India' | 'US' | 'Both' | 'Global'

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  level: ArticleLevel
  market: ArticleMarket
  readTime: number      // in minutes
  publishedAt: string   // ISO date string
  emoji?: string
  featured?: boolean
}

// ── Dictionary Term ──────────────────────
export interface DictionaryTerm {
  term: string
  slug: string
  definition: string
  example?: string
  formula?: string
  relatedTerms?: string[]
  market?: 'india' | 'us' | 'both'
  category?: string
}

// ── Calculator Types ─────────────────────
export interface SIPInputs {
  monthlyAmount: number
  annualReturnRate: number
  durationYears: number
  stepUpPercent: number
}

export interface SIPResult {
  totalInvested: number
  totalGains: number
  finalCorpus: number
  wealthRatio: number
  yearlyData: { year: number; corpus: number; invested: number }[]
}

export interface CAGRInputs {
  initialValue: number
  finalValue: number
  years: number
  currency: 'INR' | 'USD'
}

export interface CAGRResult {
  cagr: number
  absoluteGain: number
  totalReturnPct: number
  yearlyData: { year: number; value: number }[]
}

export interface CompoundInputs {
  principal: number
  annualRate: number
  years: number
  frequency: 1 | 2 | 4 | 12 | 365
}

export interface CompoundResult {
  finalAmount: number
  totalInterest: number
  multiple: number
  doubleYears: number
  yearlyData: { year: number; principal: number; interest: number }[]
}

export interface EMIInputs {
  loanAmount: number
  annualInterestRate: number
  tenureYears: number
}

export interface EMIResult {
  emi: number
  totalPayment: number
  totalInterest: number
  interestPercent: number
  amortization: AmortizationYear[]
}

export interface AmortizationYear {
  year: number
  principalPaid: number
  interestPaid: number
  totalPaid: number
  balance: number
}

export interface GoalSIPInputs {
  targetCorpus: number
  years: number
  annualReturnRate: number
  existingSavings: number
}

export interface GoalSIPResult {
  monthlySIP: number
  totalInvested: number
  marketReturns: number
  yearlyData: { year: number; corpus: number; invested: number }[]
}

export interface RetirementInputs {
  currentAge: number
  retirementAge: number
  lifeExpectancy: number
  monthlyExpenses: number
  inflationRate: number
  investmentReturn: number
}

export interface RetirementResult {
  corpusNeeded: number
  monthlySIPRequired: number
  monthlyAtRetirement: number
  yearsInRetirement: number
  yearlyData: { age: number; corpus: number }[]
  targetLine: number[]
}

export interface LTCGInputs {
  assetType: 'equity' | 'debt' | 'property' | 'gold'
  purchasePrice: number
  salePrice: number
  holdingPeriod: 'lt' | 'st'
}

export interface LTCGResult {
  capitalGain: number
  taxRate: number
  baseTax: number
  totalTax: number
  netGain: number
  taxLabel: string
}

export interface K401Inputs {
  accountType: '401k' | 'roth401k' | 'ira' | 'roth'
  annualContribution: number
  employerMatchPercent: number
  annualSalary: number
  existingBalance: number
  yearsToRetirement: number
  annualReturn: number
}

export interface K401Result {
  finalBalance: number
  totalOwnContributions: number
  totalEmployerMatch: number
  investmentGrowth: number
  yearlyData: { year: number; balance: number; contributions: number }[]
}

// ── Market Comparison ────────────────────
export interface MarketFact {
  label: string
  value: string
}

export interface MarketInfo {
  flag: string
  name: string
  description: string
  facts: MarketFact[]
}

// ── SEO ──────────────────────────────────
export interface PageSEO {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string[]
}
