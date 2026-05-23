import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stock Markets Guide | India & US Markets',
  description: 'Comprehensive guides to Indian and US stock markets. Learn about indices, sectors, investment vehicles, and strategies for building wealth.',
}

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-[5vw] py-20 bg-gradient-to-r from-navy/5 to-teal-500/5 border-b border-navy/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-500 mb-2">Market Guides</p>
          <h1 className="font-display text-navy text-4xl md:text-5xl font-bold mb-4">
            Master Stock <em className="text-gold not-italic">Markets</em>
          </h1>
          <p className="text-gray-600 text-base font-light max-w-2xl">
            Learn how to invest in Indian and US stock markets. Understand indices, sectors, investment vehicles, and proven strategies to build generational wealth.
          </p>
        </div>
      </div>

      {/* Market Cards */}
      <div className="px-[5vw] py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* India Markets Card */}
            <Link href="/markets/india" className="group">
              <div className="bg-white border-2 border-navy/10 rounded-xl p-8 h-full hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-4xl mb-3">🇮🇳</p>
                    <h2 className="font-display text-navy text-3xl font-bold">India Markets</h2>
                    <p className="text-teal-600 text-sm font-medium mt-1">NSE, BSE & Beyond</p>
                  </div>
                  <div className="text-3xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-2">Key Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">Nifty 50</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">BSE Sensex</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">SIP</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">NPS</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">PPF</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">ELSS</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Expert guide to Indian stock markets covering NSE, BSE indices, market sectors, investment vehicles, tax strategies, and proven investing approaches for building wealth.
                </p>

                <div className="flex items-center gap-2 text-navy font-medium text-sm group-hover:text-gold transition-colors">
                  Explore India Markets
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* US Markets Card */}
            <Link href="/markets/us" className="group">
              <div className="bg-white border-2 border-navy/10 rounded-xl p-8 h-full hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-4xl mb-3">🇺🇸</p>
                    <h2 className="font-display text-navy text-3xl font-bold">US Markets</h2>
                    <p className="text-teal-600 text-sm font-medium mt-1">NYSE, NASDAQ & More</p>
                  </div>
                  <div className="text-3xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-2">Key Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">S&P 500</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">Nasdaq</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">401(k)</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">Roth IRA</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">ETFs</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">Dividend</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Complete guide to US stock markets with S&P 500, NASDAQ indices, retirement accounts (401k, Roth IRA), investment strategies, and tax-efficient wealth building.
                </p>

                <div className="flex items-center gap-2 text-navy font-medium text-sm group-hover:text-gold transition-colors">
                  Explore US Markets
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="px-[5vw] py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-8">Why Invest in Both Markets?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-navy/10">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-navy mb-2">Diversification</h3>
              <p className="text-sm text-gray-600">
                Reduce country-specific risk by spreading investments across Indian and US markets with different economic cycles.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-navy/10">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-navy mb-2">Growth Potential</h3>
              <p className="text-sm text-gray-600">
                India offers higher growth (12-14% historically) while US offers stability (8-10% with lower volatility).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-navy/10">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold text-navy mb-2">Global Exposure</h3>
              <p className="text-sm text-gray-600">
                Invest in global companies. US has tech giants, India has growth opportunities in emerging sectors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="px-[5vw] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-navy text-3xl font-bold mb-8">Quick Market Facts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-navy text-lg mb-4">🇮🇳 Indian Markets</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Primary Exchanges</span>
                  <span className="font-medium text-navy">NSE, BSE</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Main Index</span>
                  <span className="font-medium text-navy">Nifty 50</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Avg Historical Return</span>
                  <span className="font-medium text-teal-600">12-14% p.a.</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-medium text-navy">₹400+ trillion</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Trading Hours</span>
                  <span className="font-medium text-navy">9:15 AM - 3:30 PM IST</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">Tax on LTCG</span>
                  <span className="font-medium text-navy">20% (with indexation)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-navy text-lg mb-4">🇺🇸 US Markets</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Primary Exchanges</span>
                  <span className="font-medium text-navy">NYSE, NASDAQ</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Main Index</span>
                  <span className="font-medium text-navy">S&P 500</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Avg Historical Return</span>
                  <span className="font-medium text-amber-600">8-10% p.a.</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-medium text-navy">$50+ trillion</span>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-navy/10">
                  <span className="text-gray-600">Trading Hours</span>
                  <span className="font-medium text-navy">9:30 AM - 4 PM EST</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">Tax on LTCG</span>
                  <span className="font-medium text-navy">0%, 15%, or 20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-[5vw] py-16 bg-gradient-to-r from-navy/5 to-gold/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-navy text-3xl font-bold mb-4">
            Start Your Market Education Today
          </h2>
          <p className="text-gray-600 text-base font-light mb-8">
            Choose your journey below and master the markets at your own pace. Expert content, no paywalls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/markets/india"
              className="px-6 py-3 bg-navy text-white rounded-lg font-medium hover:bg-navy-700 transition-colors text-center"
            >
              Explore India Markets
            </Link>
            <Link
              href="/markets/us"
              className="px-6 py-3 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy/5 transition-colors text-center"
            >
              Explore US Markets
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
