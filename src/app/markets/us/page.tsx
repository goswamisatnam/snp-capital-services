import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'US Stock Markets Guide | NYSE, NASDAQ, S&P 500, Investment Strategies',
  description: 'Complete guide to US stock markets: NYSE, NASDAQ, S&P 500, retirement accounts (401k, Roth IRA), investment strategies, and tax-efficient investing for Indian investors.',
  twitter: { card: 'summary_large_image' },
}

const USMarketGuide = () => {
  const indices = [
    { name: 'S&P 500', ticker: '^GSPC', description: '500 largest US companies by market cap. Most followed index globally.', composition: '500 large-cap companies', rep: '~80% of US market cap' },
    { name: 'Nasdaq-100', ticker: '^NDX', description: 'Top 100 non-financial companies on NASDAQ. Heavy tech weighting (~50%).', composition: '100 tech-heavy companies', rep: 'Tech, biotech, growth focus' },
    { name: 'Dow Jones Industrial Avg', ticker: '^DJI', description: '30 blue-chip large-cap companies. Price-weighted index.', composition: '30 blue-chip companies', rep: 'Mature, dividend payers' },
    { name: 'Nasdaq Composite', ticker: '^IXIC', description: 'All NASDAQ-listed stocks including small-caps.', composition: '3,000+ companies', rep: 'Growth + tech exposure' },
    { name: 'Russell 2000', ticker: '^RUT', description: 'Small-cap index, US companies with $300M-$2B market cap.', composition: '2,000 small-cap companies', rep: 'Domestic small-cap growth' },
  ]

  const sectors = [
    { name: 'Technology', weight: '28%', outlook: 'Strong', desc: 'FAANG: Meta, Apple, Amazon, Netflix, Google; plus Microsoft, Nvidia' },
    { name: 'Healthcare', weight: '13%', outlook: 'Strong', desc: 'Pharma, biotech, medical devices: Johnson & Johnson, Eli Lilly, Moderna' },
    { name: 'Financials', weight: '13%', outlook: 'Positive', desc: 'Banks, insurance: JPMorgan, Bank of America, Wells Fargo, Berkshire' },
    { name: 'Consumer Discretionary', weight: '10%', outlook: 'Stable', desc: 'Retail, auto, hotels: Amazon, Tesla, McDonald\'s, Marriott' },
    { name: 'Industrials', weight: '8%', outlook: 'Positive', desc: 'Manufacturing, aerospace: Boeing, Caterpillar, General Electric' },
    { name: 'Consumer Staples', weight: '6%', outlook: 'Stable', desc: 'Food, beverages, household: Procter & Gamble, Coca-Cola, Nestlé' },
    { name: 'Energy', weight: '4%', outlook: 'Volatile', desc: 'Oil, gas: ExxonMobil, Chevron, ConocoPhillips' },
  ]

  const retirementAccounts = [
    {
      name: '401(k)',
      match: '(Employer match up to 6%)',
      contribution2024: '₹20 lakh annually ($23,500)',
      advantage: 'Pre-tax, employer match, tax-deferred growth',
      rmd: 'Required from age 73',
      taxTreatment: 'Taxed as ordinary income on withdrawal',
      idealFor: 'US employees, especially with employer match',
    },
    {
      name: 'Roth IRA',
      match: 'None',
      contribution2024: '₹5.5 lakh annually ($7,000)',
      advantage: 'Tax-free growth + withdrawals, no RMD',
      rmd: 'No RMD, can pass to heirs tax-free',
      taxTreatment: 'Fully tax-free (contributions + gains)',
      idealFor: 'Young investors, high earners wanting tax-free wealth',
    },
    {
      name: 'Traditional IRA',
      match: 'None',
      contribution2024: '₹5.5 lakh annually ($7,000)',
      advantage: 'Tax-deductible contributions, tax-deferred growth',
      rmd: 'Required from age 73',
      taxTreatment: 'Taxed as ordinary income on withdrawal',
      idealFor: 'Those wanting tax deduction, flexible access',
    },
    {
      name: 'SEP IRA',
      match: 'N/A',
      contribution2024: '₹60 lakh annually (~$23,500) or 25% of net income',
      advantage: 'High contribution limits for self-employed',
      rmd: 'Required from age 73',
      taxTreatment: 'Taxed as ordinary income on withdrawal',
      idealFor: 'Self-employed, freelancers, business owners',
    },
    {
      name: 'Mega Backdoor Roth',
      match: 'N/A',
      contribution2024: '₹50+ lakh per year (~$69,000)',
      advantage: 'Convert after-tax contributions to Roth',
      rmd: 'No RMD on Roth, tax-free withdrawals',
      taxTreatment: 'Tax-free growth, tax-free withdrawals',
      idealFor: 'High earners wanting maximum tax-free savings',
    },
  ]

  const investmentTypes = [
    {
      name: 'Index Funds/ETFs',
      examples: 'VOO (Vanguard S&P 500), SPY, IVV (S&P 500 ETFs)',
      expense: '0.03-0.10% annually (extremely low)',
      advantage: 'Lowest cost, diversified, passive, zero effort',
      performance: 'Beats 85% of active funds over 10 years',
    },
    {
      name: 'Growth Stocks',
      examples: 'Nvidia, Microsoft, Tesla, Amazon, Meta',
      expense: 'None (except brokerage)',
      advantage: 'High growth potential, no management fees',
      performance: 'Volatile, requires research, emotional discipline',
    },
    {
      name: 'Dividend Stocks',
      examples: 'Coca-Cola, Procter & Gamble, Johnson & Johnson, Chevron',
      expense: 'None (except brokerage)',
      advantage: 'Steady income, often tax-advantaged (15% qualified dividend tax)',
      performance: 'Stable, lower volatility, passive income',
    },
    {
      name: 'Active Mutual Funds',
      examples: 'Fidelity, Vanguard, T. Rowe Price actively managed funds',
      expense: '0.5-2.0% annually',
      advantage: 'Professional management, curated picks',
      performance: 'Underperform index funds after fees 85% of the time',
    },
    {
      name: 'REITs',
      examples: 'American Tower, Prologis, Crown Castle (real estate exposure)',
      expense: '0.3-0.7% for ETFs',
      advantage: 'Real estate diversification, high dividends (3-5%)',
      performance: 'Less correlated to stocks, inflation hedge',
    },
  ]

  const strategies = [
    {
      title: '60/40 Portfolio',
      allocation: '60% stocks (S&P 500 ETF) + 40% bonds (aggregate bond ETF)',
      timeline: '20-30 years',
      riskLevel: 'Low-Medium',
      return: '6-7% annually',
      bestFor: 'Conservative to moderate investors',
    },
    {
      title: 'All-Stock Growth',
      allocation: '100% stocks (diversified index funds)',
      timeline: '30+ years',
      riskLevel: 'High',
      return: '8-10% historically',
      bestFor: 'Young investors (20s-30s), high risk tolerance',
    },
    {
      title: 'Three-Fund Portfolio',
      allocation: '40% US stocks, 30% International stocks, 30% Bonds',
      timeline: '20-30 years',
      riskLevel: 'Medium',
      return: '6-8% annually',
      bestFor: 'Diversified approach, reduce country risk',
    },
    {
      title: 'Dividend Growth',
      allocation: 'High-yield dividend stocks + dividend growth ETFs',
      timeline: '20+ years',
      riskLevel: 'Medium',
      return: '3-4% yield + 5% growth = 8-9%',
      bestFor: 'Income seekers, retirees wanting passive income',
    },
    {
      title: 'Dollar-Cost Averaging',
      allocation: 'Consistent monthly SIP into index funds',
      timeline: '10-20+ years',
      riskLevel: 'Low-Medium',
      return: 'Market average (7-8%)',
      bestFor: 'Beginners, consistent savers, removes timing risk',
    },
  ]

  const taxAdvantages = [
    { item: 'Long-term capital gains (held >1 year)', rate: '0%, 15%, or 20% (income-based)', example: '$1000 gain → $150-200 tax or $0' },
    { item: 'Short-term gains (held ≤1 year)', rate: 'Ordinary income tax 10-37%', example: '$1000 gain → $100-370 tax' },
    { item: 'Qualified dividends', rate: '0%, 15%, or 20% (same as LTCG)', example: '$100 dividend → $0-20 tax' },
    { item: 'Roth IRA withdrawals', rate: 'Tax-free', example: '$1M Roth balance → $0 tax on withdrawal' },
    { item: '401(k) contributions', rate: 'Tax-deferred', example: '$23,500 → Reduces taxable income by $23,500' },
    { item: 'Tax-loss harvesting', rate: 'Offsets gains ($3k can reduce income)', example: 'Lose $10k on stock → Offset $10k gain' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-[5vw] py-20 bg-gradient-to-r from-navy/5 to-teal-500/5 border-b border-navy/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-500 mb-2">Market Guide</p>
          <h1 className="font-display text-navy text-4xl md:text-5xl font-bold mb-4">
            The US Stock Market <em className="text-gold not-italic">Playbook</em>
          </h1>
          <p className="text-gray-600 text-base font-light max-w-2xl">
            Master NYSE, NASDAQ, S&P 500, understand retirement accounts (401k, Roth IRA), and proven strategies to build generational wealth in US markets. For Indian investors globally.
          </p>
        </div>
      </div>

      {/* Key Indices Section */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Major Market Indices</h2>
          <p className="text-gray-500 text-sm mb-8">Track US market performance through these benchmarks:</p>
          
          <div className="grid gap-4">
            {indices.map((idx, i) => (
              <div key={i} className="border border-navy/10 rounded-lg p-6 hover:border-gold/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-navy text-lg">{idx.name}</h3>
                    <p className="text-xs text-teal-600 font-medium">{idx.ticker}</p>
                  </div>
                  <span className="text-xs bg-navy/10 text-navy px-3 py-1 rounded-full">{idx.rep}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{idx.description}</p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div><span className="text-gray-500">Composition:</span> <span className="text-navy font-medium">{idx.composition}</span></div>
                  <div><span className="text-gray-500">Represents:</span> <span className="text-navy font-medium">{idx.rep}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Breakdown */}
      <div className="px-[5vw] py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">S&P 500 Sector Allocation</h2>
          <p className="text-gray-500 text-sm mb-8">Understand where to invest in US markets:</p>
          
          <div className="grid gap-4">
            {sectors.map((sec, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-navy">{sec.name}</h3>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Weight</p>
                    <p className="font-bold text-teal-600">{sec.weight}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    sec.outlook === 'Strong' ? 'bg-green-100 text-green-700' :
                    sec.outlook === 'Positive' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {sec.outlook}
                  </span>
                </div>
                <div className="text-xs text-gray-600">
                  <strong>Companies:</strong> {sec.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retirement Accounts */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Retirement Accounts: Tax-Free Wealth</h2>
          <p className="text-gray-500 text-sm mb-8">Maximize tax-advantaged retirement savings in the US:</p>
          
          <div className="grid gap-6">
            {retirementAccounts.map((acc, i) => (
              <div key={i} className="border-l-4 border-gold bg-gradient-to-r from-gold/5 to-transparent p-6 rounded-r-lg">
                <h3 className="font-semibold text-navy text-lg mb-3">{acc.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div><span className="text-gray-500">2024 Contribution Limit:</span> <span className="font-medium text-navy">{acc.contribution2024}</span></div>
                  <div><span className="text-gray-500">Employer Match:</span> <span className="font-medium text-navy">{acc.match}</span></div>
                  <div><span className="text-gray-500">Advantage:</span> <span className="font-medium text-navy">{acc.advantage}</span></div>
                  <div><span className="text-gray-500">RMD:</span> <span className="font-medium text-navy">{acc.rmd}</span></div>
                  <div className="md:col-span-2"><span className="text-gray-500">Tax Treatment:</span> <span className="font-medium text-navy">{acc.taxTreatment}</span></div>
                  <div className="md:col-span-2"><span className="text-gray-500">Ideal For:</span> <span className="font-medium text-navy">{acc.idealFor}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-navy mb-2">💡 Retirement Savings Strategy</h3>
            <ul className="text-sm text-gray-700 space-y-2 ml-4">
              <li>✓ <strong>Priority 1:</strong> Max out 401(k) employer match (free money, ~6%)</li>
              <li>✓ <strong>Priority 2:</strong> Max out Roth IRA (₹5.5L/year) for tax-free growth</li>
              <li>✓ <strong>Priority 3:</strong> Increase 401(k) to ₹20L annually for tax deferral</li>
              <li>✓ <strong>Priority 4:</strong> Consider Mega Backdoor Roth if available (₹50L+/year)</li>
              <li>✓ <strong>Rule of 55:</strong> Access 401(k) penalty-free at 55 if you leave job</li>
              <li>✓ <strong>Roth Conversion:</strong> Convert Traditional IRA to Roth in low-income years (tax arbitrage)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Investment Types */}
      <div className="px-[5vw] py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Investment Types: Choose Your Approach</h2>
          <p className="text-gray-500 text-sm mb-8">Compare different investment vehicles available in US markets:</p>
          
          <div className="space-y-4">
            {investmentTypes.map((type, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-lg p-5">
                <h3 className="font-semibold text-navy mb-2">{type.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div><span className="text-gray-500">Examples:</span> <span className="text-navy">{type.examples}</span></div>
                  <div><span className="text-gray-500">Expense Ratio:</span> <span className="font-medium text-teal-600">{type.expense}</span></div>
                  <div className="md:col-span-2"><span className="text-gray-500">Advantage:</span> <span className="text-navy">{type.advantage}</span></div>
                  <div className="md:col-span-2"><span className="text-gray-500">Performance:</span> <span className="text-navy">{type.performance}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-navy mb-2">🎯 Best Practice for Most Investors</h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Build a core portfolio of low-cost index ETFs:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• VOO or SPY (S&P 500 index): 60-70% of portfolio</li>
              <li>• VTI or VTSAX (Total US stock market): Alternative or complement to S&P 500</li>
              <li>• VXUS or VTIAX (International stocks): 20-30% for diversification</li>
              <li>• BND or AGG (Bond index): 10-20% based on age/risk tolerance</li>
              <li>• Total expense ratio: 0.03-0.07% annually (extremely low)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Portfolio Strategies */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Proven Portfolio Strategies</h2>
          <p className="text-gray-500 text-sm mb-8">Match your age, risk tolerance, and timeline to the right strategy:</p>
          
          <div className="grid gap-6">
            {strategies.map((strat, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-navy text-lg mb-2">{strat.title}</h3>
                <p className="text-gray-600 text-sm mb-4 font-medium">{strat.allocation}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-gray-500">Timeline:</span> <span className="text-navy">{strat.timeline}</span></div>
                  <div><span className="text-gray-500">Risk Level:</span> <span className={`font-medium ${strat.riskLevel === 'High' ? 'text-red-600' : strat.riskLevel === 'Low-Medium' ? 'text-green-600' : 'text-amber-600'}`}>{strat.riskLevel}</span></div>
                  <div><span className="text-gray-500">Expected Return:</span> <span className="font-medium text-teal-600">{strat.return}</span></div>
                  <div><span className="text-gray-500">Best For:</span> <span className="text-navy">{strat.bestFor}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tax Advantages */}
      <div className="px-[5vw] py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Tax-Efficient Investing in the US</h2>
          <p className="text-gray-500 text-sm mb-8">Understand capital gains taxes and maximize after-tax returns:</p>
          
          <div className="space-y-3">
            {taxAdvantages.map((tax, i) => (
              <div key={i} className="border border-teal-200 rounded-lg p-4 bg-teal-50/50">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy mb-1">{tax.item}</h3>
                    <p className="text-xs text-gray-600">{tax.example}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-teal-600 text-sm">{tax.rate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-navy mb-2">📋 Tax-Loss Harvesting Tips</h3>
            <ul className="text-sm text-gray-700 space-y-2 ml-4">
              <li>✓ Sell losing positions in December to offset capital gains (wash sale rule: wait 30 days)</li>
              <li>✓ Carry forward losses indefinitely (up to $3,000/year offsets income)</li>
              <li>✓ Use Roth IRA and 401(k) for tax-free growth inside these accounts</li>
              <li>✓ Hold stocks {'>'}1 year for 0-15-20% LTCG instead of 10-37% ordinary income tax</li>
              <li>✓ Qualified dividends (from US stocks) get LTCG treatment (0-15-20%)</li>
              <li>✓ Avoid frequent trading (short-term gains = ordinary income tax rates)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="px-[5vw] py-16 bg-gradient-to-r from-navy/5 to-gold/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Getting Started: Your Action Plan</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 border border-navy/10">
              <h3 className="font-semibold text-navy mb-4">🌱 Beginner (Fresh Start)</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal ml-5">
                <li>Open a brokerage account (Fidelity, Vanguard, Charles Schwab)</li>
                <li>Contribute to employer 401(k) at least up to match (free ₹5-8L/year)</li>
                <li>Open Roth IRA, max out (₹5.5L/year)</li>
                <li>Invest in VOO or VTI index fund (S&P 500 or total US market)</li>
                <li>Set up automatic monthly SIP (auto-invest increases discipline)</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-6 border border-navy/10">
              <h3 className="font-semibold text-navy mb-4">📈 Intermediate (Optimizing)</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal ml-5">
                <li>Max out 401(k) contribution (₹20L/year) for tax deferral</li>
                <li>Explore Mega Backdoor Roth if employer offers (₹50L+/year tax-free)</li>
                <li>Diversify: 60% US stocks, 30% international, 10% bonds</li>
                <li>Implement tax-loss harvesting in December annually</li>
                <li>Review portfolio quarterly, rebalance annually</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-8">Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">📈 Start with VOO/VTI index funds (S&P 500, lowest cost, best performance)</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">💰 Prioritize employer 401(k) match (instant 6% return, hard to beat)</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">🎁 Max Roth IRA (₹5.5L/year) for tax-free growth forever</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">⏳ Think 30+ years, use SIP for consistency, ignore market noise</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">🧾 Hold stocks {'>'}1 year for 15% tax vs 37% on short-term gains</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">📊 Diversify across retirement accounts, tax-free, and taxable accounts</p>
            </div>
          </div>
        </div>
      </div>

      {/* US vs India Comparison */}
      <div className="px-[5vw] py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-8">US vs India Markets: Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-navy/20">
                  <th className="text-left py-3 font-semibold text-navy">Aspect</th>
                  <th className="text-left py-3 font-semibold text-navy">US Markets</th>
                  <th className="text-left py-3 font-semibold text-navy">India Markets</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy/10">
                  <td className="py-3 font-medium text-gray-700">Historical Returns</td>
                  <td className="text-gray-600">8-10% (mature, stable)</td>
                  <td className="text-gray-600">12-14% (emerging, higher growth)</td>
                </tr>
                <tr className="border-b border-navy/10">
                  <td className="py-3 font-medium text-gray-700">Expense Ratios</td>
                  <td className="text-gray-600">0.03-0.10% (ultra-low)</td>
                  <td className="text-gray-600">0.20-0.40% (low but higher)</td>
                </tr>
                <tr className="border-b border-navy/10">
                  <td className="py-3 font-medium text-gray-700">Tax Efficiency</td>
                  <td className="text-gray-600">15% LTCG, tax-free Roth</td>
                  <td className="text-gray-600">20% LTCG (indexation benefit)</td>
                </tr>
                <tr className="border-b border-navy/10">
                  <td className="py-3 font-medium text-gray-700">Retirement Accounts</td>
                  <td className="text-gray-600">401(k), Roth IRA (generous limits)</td>
                  <td className="text-gray-600">NPS, PPF, ELSS (growing)</td>
                </tr>
                <tr className="border-b border-navy/10">
                  <td className="py-3 font-medium text-gray-700">Volatility</td>
                  <td className="text-gray-600">Lower (mature companies)</td>
                  <td className="text-gray-600">Higher (smaller, emerging)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-gray-700">Diversification</td>
                  <td className="text-gray-600">Highly diversified, 500+ large-cap</td>
                  <td className="text-gray-600">Growing, concentrated in top 50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default USMarketGuide
