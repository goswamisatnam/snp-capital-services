import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'India Stock Markets Guide | NSE, BSE, Investment Strategies',
  description: 'Comprehensive guide to Indian stock markets: NSE, BSE, market indices, sectors, investment vehicles (SIP, NPS, PPF, ELSS), and strategies for building wealth.',
  twitter: { card: 'summary_large_image' },
}

const IndiaMarketGuide = () => {
  const indices = [
    { name: 'Nifty 50', code: 'NIFTY50', description: 'Top 50 companies by market cap on NSE. Represents 50% of market cap.', composition: '50 large-cap companies', volatility: 'Moderate' },
    { name: 'Sensex 30', code: 'BSE SENSEX', description: 'Top 30 companies on BSE. India\'s oldest index, established 1986.', composition: '30 large-cap companies', volatility: 'Moderate' },
    { name: 'Nifty Next 50', code: 'NIFTY NEXT 50', description: 'Next tier of 50 mid-cap companies after Nifty 50.', composition: '50 mid-cap companies', volatility: 'Higher' },
    { name: 'Nifty Midcap 100', code: 'NIFTY MIDCAP 100', description: 'Top 100 mid-cap companies. Growth opportunities with moderate risk.', composition: '100 mid-cap companies', volatility: 'Higher' },
    { name: 'Nifty Smallcap 50', code: 'NIFTY SMALLCAP 50', description: 'Top 50 small-cap companies. Higher growth potential, higher volatility.', composition: '50 small-cap companies', volatility: 'Very High' },
  ]

  const sectors = [
    { name: 'IT & Software', weightage: '14%', outlook: 'Strong', drivers: ['Global demand', 'Digital transformation', 'Remote work trends'] },
    { name: 'Banking & Finance', weightage: '22%', outlook: 'Positive', drivers: ['Credit growth', 'GDP growth', 'Rising disposable income'] },
    { name: 'Automobiles', weightage: '8%', outlook: 'Recovering', drivers: ['EV adoption', 'Recovery from slowdown', 'Export growth'] },
    { name: 'Pharmaceuticals', weightage: '6%', outlook: 'Stable', drivers: ['Generic drugs', 'API exports', 'Healthcare demand'] },
    { name: 'Infrastructure', weightage: '5%', outlook: 'Strong', drivers: ['Government spending', 'PM Gati Shakti', 'Urbanization'] },
    { name: 'Consumer Staples', weightage: '7%', outlook: 'Stable', drivers: ['Inflation resilience', 'Rural growth', 'Premiumization'] },
    { name: 'Metals & Mining', weightage: '5%', outlook: 'Volatile', drivers: ['Commodity prices', 'Global demand', 'Export potential'] },
  ]

  const investmentVehicles = [
    {
      name: 'SIP (Systematic Investment Plan)',
      advantage: 'Regular investing, rupee-cost averaging, discipline',
      minInvestment: '₹100-500/month',
      taxTreatment: 'Depends on fund type (ELSS, Equity, Debt)',
      risks: 'Market risk, fund selection risk',
      idealFor: 'Beginners, long-term wealth builders',
    },
    {
      name: 'NPS (National Pension System)',
      advantage: 'Tax deduction (₹50,000 u/s 80C + ₹50,000 u/s 80CCD1B), professional management',
      minInvestment: '₹500/month',
      taxTreatment: 'Deferred tax + partial exemption on maturity',
      risks: 'Regulatory risk, withdrawal restrictions',
      idealFor: 'Retirement planning, salaried professionals',
    },
    {
      name: 'PPF (Public Provident Fund)',
      advantage: '7.1% guaranteed return, tax-free, 15-year lock-in',
      minInvestment: '₹500/year',
      taxTreatment: 'Fully tax-free (Principal, Interest, Maturity)',
      risks: 'Low returns vs equity, inflation risk',
      idealFor: 'Conservative investors, tax-free growth seekers',
    },
    {
      name: 'ELSS (Equity-Linked Savings Scheme)',
      advantage: 'Tax deduction (₹1.5 lakh u/s 80C), equity upside, only 3-year lock-in',
      minInvestment: '₹100/month',
      taxTreatment: 'Long-term capital gains tax (20% with indexation)',
      risks: 'Market volatility, fund performance',
      idealFor: 'Tax-conscious investors wanting equity exposure',
    },
    {
      name: 'Direct Stock Investment',
      advantage: 'Full control, no middleman fees, dividends, voting rights',
      minInvestment: '₹1,000-5,000 typically',
      taxTreatment: 'Short-term gains (15%), Long-term gains (20% w/o indexation)',
      risks: 'Concentration risk, requires research, emotional bias',
      idealFor: 'Experienced investors with research skills',
    },
    {
      name: 'Mutual Funds (Active)',
      advantage: 'Professional management, diversification, SIP options',
      minInvestment: '₹100-1,000/month',
      taxTreatment: 'LTCG 20%, Short-term gains per tax slab',
      risks: 'Fund manager risk, expense ratios, underperformance',
      idealFor: 'Those wanting diversification without stock picking',
    },
  ]

  const investmentStrategies = [
    {
      title: 'Value Investing',
      description: 'Buy quality companies trading below intrinsic value',
      approach: 'Analyze fundamentals, P/E ratios, earnings growth, competitive moat',
      timeline: '3-5 years or more',
      riskLevel: 'Medium',
      bestFor: 'Patient investors with analytical skills',
    },
    {
      title: 'SIP Strategy',
      description: 'Invest fixed amount regularly regardless of market conditions',
      approach: 'Through mutual funds or direct stocks over 10-20+ years',
      timeline: '10-20+ years',
      riskLevel: 'Low-Medium',
      bestFor: 'Beginners, salaried individuals building corpus',
    },
    {
      title: 'Dividend Yield Strategy',
      description: 'Focus on high-dividend paying stocks for regular income',
      approach: 'Select PSU banks, energy, FMCG, telecom with 4-6% yields',
      timeline: 'Long-term (5+ years)',
      riskLevel: 'Medium',
      bestFor: 'Income seekers, retirees, mature investors',
    },
    {
      title: 'Growth Investing',
      description: 'Invest in companies with high earnings growth prospects',
      approach: 'Focus on mid-caps, small-caps in growth sectors',
      timeline: '5-10 years',
      riskLevel: 'High',
      bestFor: 'Younger investors, high risk tolerance',
    },
    {
      title: 'Sectoral Rotation',
      description: 'Rotate portfolio based on economic cycle phases',
      approach: 'Recession: defensive sectors; Recovery: cyclicals; Boom: IT, banks',
      timeline: '1-3 years',
      riskLevel: 'Medium-High',
      bestFor: 'Active investors with market knowledge',
    },
  ]

  const taxes = [
    { item: 'Long-term capital gains (held >1 year)', rate: '20% (with indexation benefit)', example: 'Bought ₹1L stock at ₹50, sell at ₹100' },
    { item: 'Short-term capital gains (held ≤1 year)', rate: 'Your tax slab (10-30%)', example: 'Bought and sold within 1 year' },
    { item: 'Dividends', rate: 'TDS 10% (can file ITR for refund if no tax liability)', example: 'Dividend income added to total income' },
    { item: 'Mutual fund returns', rate: 'LTCG 20% or STCG per slab', example: 'Depends on holding period' },
    { item: 'PPF interest', rate: 'Fully tax-free', example: 'No TDS, no ITR filing needed' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-[5vw] py-20 bg-gradient-to-r from-navy/5 to-teal-500/5 border-b border-navy/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-500 mb-2">Market Guide</p>
          <h1 className="font-display text-navy text-4xl md:text-5xl font-bold mb-4">
            The Indian <em className="text-gold not-italic">Stock Market</em> Playbook
          </h1>
          <p className="text-gray-600 text-base font-light max-w-2xl">
            Master NSE, BSE, understand market indices, sectors, investment vehicles, and proven strategies to build wealth in Indian markets. Expert insights for every investor level.
          </p>
        </div>
      </div>

      {/* Key Indices Section */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Market Indices: Your Pulse</h2>
          <p className="text-gray-500 text-sm mb-8">Track the market performance through these key benchmarks:</p>
          
          <div className="grid gap-4">
            {indices.map((idx, i) => (
              <div key={i} className="border border-navy/10 rounded-lg p-6 hover:border-gold/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-navy text-lg">{idx.name}</h3>
                    <p className="text-xs text-teal-600 font-medium">{idx.code}</p>
                  </div>
                  <span className="text-xs bg-navy/10 text-navy px-3 py-1 rounded-full">{idx.volatility}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{idx.description}</p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div><span className="text-gray-500">Composition:</span> <span className="text-navy font-medium">{idx.composition}</span></div>
                  <div><span className="text-gray-500">Volatility:</span> <span className="text-navy font-medium">{idx.volatility}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Allocation */}
      <div className="px-[5vw] py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Sector Breakdown: Where to Invest</h2>
          <p className="text-gray-500 text-sm mb-8">Nifty 50 sector allocation and investment outlook:</p>
          
          <div className="grid gap-4">
            {sectors.map((sec, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-navy">{sec.name}</h3>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Weightage</p>
                    <p className="font-bold text-teal-600">{sec.weightage}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    sec.outlook === 'Strong' ? 'bg-green-100 text-green-700' :
                    sec.outlook === 'Positive' ? 'bg-blue-100 text-blue-700' :
                    sec.outlook === 'Recovering' ? 'bg-amber-100 text-amber-700' :
                    sec.outlook === 'Stable' ? 'bg-gray-100 text-gray-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {sec.outlook}
                  </span>
                </div>
                <div className="text-xs text-gray-600">
                  <strong>Drivers:</strong> {sec.drivers.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Vehicles */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Investment Vehicles: Choose Your Path</h2>
          <p className="text-gray-500 text-sm mb-8">Compare SIP, NPS, PPF, ELSS, Direct Stocks, and Mutual Funds:</p>
          
          <div className="grid gap-6">
            {investmentVehicles.map((vehicle, i) => (
              <div key={i} className="border-l-4 border-gold bg-gradient-to-r from-gold/5 to-transparent p-6 rounded-r-lg">
                <h3 className="font-semibold text-navy text-lg mb-3">{vehicle.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div><span className="text-gray-500">Min Investment:</span> <span className="font-medium text-navy">{vehicle.minInvestment}</span></div>
                  <div><span className="text-gray-500">Ideal For:</span> <span className="font-medium text-navy">{vehicle.idealFor}</span></div>
                  <div><span className="text-gray-500">Advantage:</span> <span className="font-medium text-navy">{vehicle.advantage}</span></div>
                  <div><span className="text-gray-500">Tax Treatment:</span> <span className="font-medium text-navy">{vehicle.taxTreatment}</span></div>
                  <div className="md:col-span-2"><span className="text-gray-500">Risks:</span> <span className="font-medium text-navy">{vehicle.risks}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Strategies */}
      <div className="px-[5vw] py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Proven Investment Strategies</h2>
          <p className="text-gray-500 text-sm mb-8">Match your profile to the right strategy:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {investmentStrategies.map((strategy, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-navy text-lg mb-2">{strategy.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
                <div className="space-y-2 text-xs">
                  <div><span className="text-gray-500">Approach:</span> <span className="text-navy">{strategy.approach}</span></div>
                  <div><span className="text-gray-500">Timeline:</span> <span className="text-navy">{strategy.timeline}</span></div>
                  <div><span className="text-gray-500">Risk Level:</span> <span className={`font-medium ${strategy.riskLevel === 'High' ? 'text-red-600' : strategy.riskLevel === 'Low-Medium' ? 'text-green-600' : 'text-amber-600'}`}>{strategy.riskLevel}</span></div>
                  <div><span className="text-gray-500">Best For:</span> <span className="text-navy">{strategy.bestFor}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tax Guide */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Tax-Efficient Investing: Maximize Returns</h2>
          <p className="text-gray-500 text-sm mb-8">Understand tax implications on your investments:</p>
          
          <div className="space-y-3">
            {taxes.map((tax, i) => (
              <div key={i} className="border border-teal-200 rounded-lg p-4 bg-teal-50/50">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy mb-1">{tax.item}</h3>
                    <p className="text-xs text-gray-600">{tax.example}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-teal-600">{tax.rate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-navy mb-2">💡 Tax-Saving Tips</h3>
            <ul className="text-sm text-gray-700 space-y-2 ml-4">
              <li>✓ Max out ELSS (₹1.5L) before PPF for equity + tax deduction</li>
              <li>✓ Use NPS tier II for more flexible tax deduction + liquidity</li>
              <li>✓ Hold stocks {'>'}1 year for LTCG tax efficiency</li>
              <li>✓ Harvest losses in December to offset gains (tax loss harvesting)</li>
              <li>✓ Invest through spouse if in lower tax bracket</li>
              <li>✓ Track holding periods meticulously for tax filing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="px-[5vw] py-16 bg-gradient-to-r from-navy/5 to-gold/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-2">Getting Started: Action Plan</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 border border-navy/10">
              <h3 className="font-semibold text-navy mb-4">🎯 Beginner (0-2 years)</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal ml-5">
                <li>Open a Demat account with a broker (Zerodha, Upstox, Motilal)</li>
                <li>Start SIP in a Nifty 50 index fund (₹500/month)</li>
                <li>Invest ₹1.5L in ELSS for tax deduction</li>
                <li>Build emergency fund (6 months expenses)</li>
                <li>Learn through articles, courses, books</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-6 border border-navy/10">
              <h3 className="font-semibold text-navy mb-4">📈 Intermediate (2-5 years)</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal ml-5">
                <li>Diversify: 60% index funds, 30% mid-caps, 10% sector bets</li>
                <li>Start direct stock investing (value, dividend picks)</li>
                <li>Increase NPS contributions for retirement</li>
                <li>Review portfolio quarterly, rebalance annually</li>
                <li>Track your holdings, returns, and taxes</li>
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
              <p className="text-sm text-navy font-medium">📊 Start with index funds (Nifty 50) for low-cost, diversified exposure</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">💰 Use SIP for discipline and rupee-cost averaging</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">🎓 Maximize tax-advantaged vehicles: ELSS, PPF, NPS</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">⏳ Think long-term (10+ years) and stay disciplined</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">🔄 Diversify across sectors and market caps</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
              <p className="text-sm text-navy font-medium">📚 Continuously learn and avoid emotional decisions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndiaMarketGuide
