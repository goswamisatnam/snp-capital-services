import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LEARNING_PATHS } from '@/lib/constants'

type Props = { params: Promise<{ level: string }> }

const LEVEL_CONTENT: Record<string, {
  intro: string
  sections: { heading: string; body: string; bullets?: string[] }[]
  resources: { label: string; href: string; desc: string }[]
}> = {
  beginner: {
    intro: 'Welcome to investing. This path covers the fundamental concepts you need before putting a single rupee or dollar to work.',
    sections: [
      {
        heading: 'What is Money & Inflation?',
        body: 'Money is a medium of exchange, a store of value, and a unit of account. Inflation is the rate at which purchasing power erodes over time. At 6% inflation, ₹100 today is worth ~₹56 in ten years.',
        bullets: ['India\'s average CPI inflation: 5–7% historically', 'US CPI long-term average: ~3%', 'Keeping money idle in a savings account usually means losing real value'],
      },
      {
        heading: 'Saving vs Investing',
        body: 'Saving means setting money aside in low-risk instruments (FD, savings account). Investing means deploying money to earn returns that beat inflation over time.',
        bullets: ['Savings: FD, savings account, PPF, liquid funds', 'Investments: stocks, mutual funds, real estate, gold', 'Rule of thumb: 3–6 months of expenses in savings; rest can be invested'],
      },
      {
        heading: 'Risk and Return Basics',
        body: 'Higher potential returns always come with higher risk. Understanding your own risk tolerance — and your investment timeline — is the foundation of every good financial plan.',
        bullets: ['Short term (<3 years): prefer debt funds, FD', 'Medium term (3–7 years): balanced funds, large-cap equity', 'Long term (7+ years): equity heavy portfolio is appropriate'],
      },
      {
        heading: 'Types of Investments',
        body: 'The financial world offers many asset classes. Each behaves differently in different economic conditions.',
        bullets: ['Equity (stocks, equity mutual funds): high risk, high return', 'Debt (bonds, FD, debt funds): lower risk, stable return', 'Gold & commodities: inflation hedge', 'Real estate: illiquid but tangible', 'Crypto: speculative, highly volatile'],
      },
      {
        heading: 'Opening Your First Account',
        body: 'In India you need a Demat account + Trading account linked to a bank account. In the US you need a brokerage account (Fidelity, Schwab, Robinhood).',
        bullets: ['India: use Zerodha, Groww, or Upstox — zero-brokerage on delivery trades', 'US: Fidelity and Schwab offer the best customer service; Robinhood for simplicity', 'NRI: open NRE/NRO account first, then Demat via NRI-friendly brokers'],
      },
      {
        heading: 'How to Start Your First SIP',
        body: 'A Systematic Investment Plan (SIP) lets you invest a fixed amount monthly in a mutual fund, buying more units when prices are low and fewer when prices are high — this is rupee-cost averaging.',
        bullets: ['Even ₹500/month grows to significant corpus over 20 years at 12% returns', 'Start with a large-cap or index fund for your first SIP', 'Increase SIP amount by 10–15% each year as income grows'],
      },
    ],
    resources: [
      { label: 'Mutual Funds Guide', href: '/investing/mutual-funds', desc: 'Types, NAV, expense ratio explained' },
      { label: 'SIP Calculator', href: '/calculators#sip', desc: 'See your SIP grow over time' },
      { label: 'Finance Dictionary', href: '/dictionary', desc: 'Look up any term you don\'t know' },
      { label: 'Personal Finance Basics', href: '/personal-finance', desc: 'Budgeting, savings, insurance' },
    ],
  },
  intermediate: {
    intro: 'You understand the basics. Now learn how equity markets work, how to read financials, and how to build a diversified portfolio that grows wealth systematically.',
    sections: [
      {
        heading: 'How Stock Markets Work',
        body: 'Stock exchanges (NSE, BSE, NYSE, NASDAQ) are marketplaces where buyers and sellers trade shares of publicly listed companies. Prices reflect the collective expectation of future earnings.',
        bullets: ['Market cap = share price × total shares outstanding', 'Primary market: IPOs, where companies raise capital', 'Secondary market: where you buy/sell existing shares', 'Indices (Nifty 50, S&P 500) track a basket of top companies'],
      },
      {
        heading: 'Reading Financial Statements',
        body: 'Three documents tell you everything about a company\'s financial health: the income statement (P&L), balance sheet, and cash flow statement.',
        bullets: ['Income statement: revenue, expenses, net profit', 'Balance sheet: assets, liabilities, equity', 'Cash flow: operating, investing, and financing cash flows', 'Red flag: consistently negative operating cash flow'],
      },
      {
        heading: 'Key Valuation Metrics',
        body: 'Valuation multiples help you decide if a stock is cheap or expensive relative to its earnings and assets.',
        bullets: ['P/E ratio: price-to-earnings — the most common valuation metric', 'EPS: earnings per share — a measure of profitability', 'Market cap: small (<₹5000 Cr), mid, large-cap classification', 'PEG ratio: P/E adjusted for earnings growth rate'],
      },
      {
        heading: 'Mutual Fund Types & Selection',
        body: 'SEBI classifies mutual funds into equity, debt, hybrid, and solution-oriented. Within equity: large-cap, mid-cap, small-cap, flexi-cap, sectoral, and index funds.',
        bullets: ['Index funds: low cost, track the index, beat most active funds long term', 'ELSS funds: tax-saving under 80C, 3-year lock-in', 'Expense ratio matters: even 0.5% difference compounds significantly', 'Direct plans always outperform regular plans (no distributor commission)'],
      },
      {
        heading: 'Asset Allocation Strategies',
        body: 'Asset allocation — how you split money between equity, debt, gold, and cash — is the biggest driver of portfolio returns and risk.',
        bullets: ['100 minus age rule: rough equity percentage guideline', 'Rebalance annually to maintain target allocation', 'Goal-based allocation: different goals need different asset mixes', 'Avoid over-diversification: 5–8 quality funds/stocks beat 30+'],
      },
      {
        heading: 'Tax-Saving Investments (ELSS)',
        body: 'ELSS (Equity Linked Savings Scheme) mutual funds offer ₹1.5 lakh deduction under Section 80C with the shortest lock-in of 3 years among 80C instruments.',
        bullets: ['LTCG of 12.5% applies after 1 year (above ₹1.25 lakh exemption)', 'Better post-tax returns vs PPF, NSC over long term', 'In new tax regime, 80C deductions are not available — choose based on your regime'],
      },
    ],
    resources: [
      { label: 'Stock Markets Guide', href: '/investing/stock-markets', desc: 'How equity markets work' },
      { label: 'CAGR Calculator', href: '/calculators#cagr', desc: 'Compute compound annual growth rate' },
      { label: 'LTCG/STCG Tax Guide', href: '/personal-finance/tax-planning', desc: 'Capital gains tax explained' },
      { label: 'ETFs vs Mutual Funds', href: '/investing/etfs', desc: 'When to use each' },
    ],
  },
  advanced: {
    intro: 'You have a solid investing foundation. This path covers derivatives, options strategies, technical analysis, and the frameworks professional portfolio managers use.',
    sections: [
      {
        heading: 'Futures & Options (F&O) India',
        body: 'F&O are derivative instruments whose value derives from an underlying asset (stocks, indices, commodities). India\'s NSE is one of the world\'s largest F&O markets by volume.',
        bullets: ['Futures: obligation to buy/sell at a future date at a fixed price', 'Options: right (not obligation) to buy (call) or sell (put)', 'Lot size determines minimum contract value; margin requirements apply', '89% of retail F&O traders in India lose money — risk management is everything'],
      },
      {
        heading: 'Options Greeks',
        body: 'The Greeks quantify how an option\'s price responds to changes in underlying variables.',
        bullets: ['Delta: change in option price per ₹1 move in the underlying', 'Gamma: rate of change of Delta', 'Theta: time decay — options lose value each day', 'Vega: sensitivity to implied volatility changes', 'Rho: sensitivity to interest rate changes (less critical for short-dated options)'],
      },
      {
        heading: 'Technical Analysis & Chart Patterns',
        body: 'Technical analysis uses price action and volume to forecast future price movements. It works best in liquid markets and shorter time frames.',
        bullets: ['Support & resistance levels: price zones where buyers/sellers dominate', 'Moving averages (SMA, EMA): trend direction indicators', 'RSI, MACD: momentum oscillators', 'Candlestick patterns: Doji, Hammer, Engulfing, Morning Star'],
      },
      {
        heading: 'Portfolio Management Theory',
        body: 'Modern Portfolio Theory (MPT) by Harry Markowitz shows that combining assets with low correlation reduces portfolio risk without sacrificing return.',
        bullets: ['Efficient frontier: the set of optimal portfolios', 'Sharpe ratio: return per unit of risk', 'Beta: how much a stock moves relative to the market', 'Alpha: return above what the market alone would deliver'],
      },
      {
        heading: 'Hedging Strategies',
        body: 'Hedging reduces the risk of adverse price movements. Common hedges include protective puts, collars, and index futures.',
        bullets: ['Protective put: buy put options on stocks you hold', 'Covered call: sell call options on stocks you own to generate income', 'Index hedge: short Nifty futures to hedge a large-cap equity portfolio', 'Cost of hedging reduces net returns — hedge only what truly needs protection'],
      },
      {
        heading: 'Algorithmic & Quantitative Investing',
        body: 'Algorithmic trading uses automated systems to execute orders based on predefined rules. Quant strategies use mathematical models to identify mispricings.',
        bullets: ['Factor investing: size, value, momentum, quality factors', 'Mean reversion vs momentum strategies', 'Backtesting: testing a strategy on historical data', 'Overfitting risk: strategy that works perfectly on past data often fails live'],
      },
    ],
    resources: [
      { label: 'Futures & Options Guide', href: '/trading/futures-and-options', desc: 'F&O deep dive with strategies' },
      { label: 'Trading Strategies', href: '/trading/strategies', desc: 'Breakout, trend, mean reversion' },
      { label: 'India F&O Markets', href: '/markets/india/indian-fno', desc: 'NSE F&O specifics, margin, expiry' },
      { label: 'Technical Analysis', href: '/trading/learn', desc: 'Charts, indicators, patterns' },
    ],
  },
  nri: {
    intro: 'For Indians living in the US (or other countries) — how to invest in both markets, manage cross-border taxation, and plan for a financially secure life across two countries.',
    sections: [
      {
        heading: 'NRE / NRO / FCNR Accounts',
        body: 'As an NRI you need the right bank accounts to invest in India. Each account type serves a different purpose.',
        bullets: ['NRE (Non-Resident External): holds foreign earnings, fully repatriable, tax-free interest in India', 'NRO (Non-Resident Ordinary): holds India income (rent, dividends), repatriation capped at $1M/year, interest taxable in India', 'FCNR (Foreign Currency Non-Resident): FD in foreign currency, no exchange rate risk, fully repatriable'],
      },
      {
        heading: 'FEMA & RBI Guidelines',
        body: 'The Foreign Exchange Management Act (FEMA) and RBI govern what NRIs can and cannot do with money in India.',
        bullets: ['NRIs can invest in equity, mutual funds, FDs, real estate (residential/commercial — not agricultural land)', 'PIS (Portfolio Investment Scheme) required for stock market investments via NRE/NRO', 'Repatriation of sale proceeds: allowed from NRE account without limit; NRO limited to $1M/year'],
      },
      {
        heading: 'US: 401(k), Roth IRA, HSA',
        body: 'US tax-advantaged accounts are critical tools for wealth building. Understanding the contribution limits and tax treatment is essential.',
        bullets: ['401(k): pre-tax contributions, employer match, taxed on withdrawal; 2025 limit $23,500', 'Roth IRA: after-tax contributions, tax-free growth and withdrawals; 2025 limit $7,000', 'HSA: triple tax benefit — deductible contributions, tax-free growth, tax-free medical withdrawals', 'After 65, HSA can be used for any expense (taxed like 401k withdrawals)'],
      },
      {
        heading: 'DTAA (India-US Double Taxation Avoidance Agreement)',
        body: 'The DTAA between India and the US ensures you don\'t pay full taxes in both countries on the same income.',
        bullets: ['US-sourced income: primarily taxable in the US', 'India-sourced income (rental, dividends, capital gains): primarily taxable in India', 'Foreign Tax Credit (FTC) in both countries to offset taxes already paid abroad', 'Controlled Foreign Corporation (CFC) rules: PFIC rules apply to Indian mutual funds held by US persons'],
      },
      {
        heading: 'Repatriating Funds to India',
        body: 'Moving money from the US to India and back requires understanding RBI rules, LRS, and tax implications.',
        bullets: ['Liberalised Remittance Scheme (LRS): Indians can remit up to $250,000/year abroad', 'NRI sending money to India: use wire transfer to NRE account, no Indian tax on principal', 'TCS (Tax Collected at Source) on LRS remittances above ₹7 lakh — claim as credit while filing taxes', 'Exchange rate risk: hedge using forward contracts for large transfers'],
      },
      {
        heading: 'RNOR / ROR Tax Transitions',
        body: 'When an NRI returns to India, their residency status transitions through stages that affect what income is taxable in India.',
        bullets: ['NRI: not ordinarily resident — global income not taxable in India', 'RNOR: transitional status for 2–3 years after return; foreign income still largely exempt', 'ROR (Resident and Ordinarily Resident): global income fully taxable in India', 'Plan financial moves (repatriation, Roth conversions) during RNOR window for maximum tax efficiency'],
      },
    ],
    resources: [
      { label: 'NRI Investing Guide', href: '/markets/india/nri-investing', desc: 'NRE/NRO, PIS, mutual funds for NRIs' },
      { label: '401(k) Guide', href: '/markets/us/401k-guide', desc: 'US retirement account deep dive' },
      { label: 'DTAA Benefits', href: '/markets/us/dtaa-benefits', desc: 'India-US tax treaty explained' },
      { label: 'US Tax for NRI', href: '/markets/us/us-tax-for-nri', desc: 'Filing requirements, PFIC, FBAR' },
    ],
  },
}

export async function generateStaticParams() {
  return [
    { level: 'beginner' },
    { level: 'intermediate' },
    { level: 'advanced' },
    { level: 'nri' },
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params
  const path = LEARNING_PATHS.find((p) => p.id === level)
  if (!path) return {}
  return {
    title: `${path.title} — ${path.levelLabel} | S&P Capital Services`,
    description: path.description,
    alternates: { canonical: `/learning/${level}` },
  }
}

export default async function LearningLevelPage({ params }: Props) {
  const { level } = await params
  const path = LEARNING_PATHS.find((p) => p.id === level)
  const content = LEVEL_CONTENT[level]
  if (!path || !content) notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy text-white px-[5vw] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/learning" className="hover:text-white transition-colors">Learning Paths</Link>
            <span>/</span>
            <span className="text-gray-200">{path.levelLabel}</span>
          </nav>
          <div className="flex items-start gap-5 mb-6">
            <span className="text-5xl">{path.icon}</span>
            <div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-3 inline-block ${path.badgeClass}`}>
                {path.levelLabel}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                {path.title}
              </h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{content.intro}</p>
        </div>
      </section>

      {/* Topics overview */}
      <div className="bg-cream-50 border-b border-cream-300 px-[5vw] py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-navy uppercase tracking-wider mb-4">What you'll learn</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {path.topics.map((topic, i) => (
              <div key={topic} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-teal-500 font-bold shrink-0">{i + 1}.</span>
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="px-[5vw] py-12 max-w-4xl mx-auto">
        <div className="space-y-10">
          {content.sections.map((section) => (
            <div key={section.heading} className="border-l-4 border-teal-400 pl-6">
              <h3 className="font-display text-navy text-xl font-bold mb-3">{section.heading}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">{section.body}</p>
              {section.bullets && (
                <ul className="space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-teal-500 mt-0.5 shrink-0">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <section className="bg-cream-50 border-t border-cream-300 px-[5vw] py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-xl font-bold mb-6">Explore Further</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.resources.map((res) => (
              <Link
                key={res.href}
                href={res.href}
                className="group bg-white border border-cream-300 rounded-xl p-4 hover:border-navy hover:shadow-card transition-all"
              >
                <div className="font-semibold text-navy text-sm group-hover:text-teal-700 transition-colors mb-1">
                  {res.label} →
                </div>
                <div className="text-gray-500 text-xs">{res.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All paths CTA */}
      <section className="bg-navy px-[5vw] py-12">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-2xl font-bold mb-3">Explore All Learning Paths</h2>
          <p className="text-gray-300 mb-6">Go at your own pace across all four structured tracks.</p>
          <Link href="/learning" className="bg-gold text-navy font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors">
            View All Paths →
          </Link>
        </div>
      </section>
    </div>
  )
}
