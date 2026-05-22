import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const footerLinks = {
  Investing: [
    { label: 'Stock Markets', href: '/investing/stocks' },
    { label: 'Mutual Funds', href: '/mutual-funds' },
    { label: 'ETFs', href: '/etfs' },
    { label: 'Cryptocurrency', href: '/crypto' },
    { label: 'Bonds', href: '/bonds' },
    { label: 'Real Estate', href: '/real-estate' },
  ],
  'Personal Finance': [
    { label: 'Budgeting', href: '/personal-finance/budgeting' },
    { label: 'Insurance', href: '/insurance' },
    { label: 'Tax Planning', href: '/taxes' },
    { label: 'Retirement', href: '/retirement' },
    { label: 'Emergency Fund', href: '/personal-finance/emergency-fund' },
    { label: 'Credit Scores', href: '/personal-finance/credit' },
  ],
  'India Markets': [
    { label: 'NSE & BSE', href: '/markets/india/exchanges' },
    { label: 'SEBI Rules', href: '/markets/india/sebi' },
    { label: 'Demat Account', href: '/markets/india/demat' },
    { label: 'ELSS / PPF / NPS', href: '/markets/india/tax-saving' },
    { label: 'Indian F&O', href: '/options' },
    { label: 'NRI Investing', href: '/markets/india/nri' },
  ],
  'US Markets': [
    { label: 'NYSE & NASDAQ', href: '/markets/us/exchanges' },
    { label: '401(k) Guide', href: '/retirement/401k' },
    { label: 'Roth IRA', href: '/retirement/roth-ira' },
    { label: 'S&P 500 Basics', href: '/markets/us/sp500' },
    { label: 'US Tax for NRI', href: '/markets/us/nri-tax' },
    { label: 'DTAA Benefits', href: '/markets/us/dtaa' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#070F1C] pt-14 pb-8">
      <div className="px-[5vw]">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.07]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
                <span className="font-display font-bold text-navy text-xs">S&P</span>
              </div>
              <span className="font-display text-white/70 text-sm">Capital Services</span>
            </Link>
            <p className="text-xs text-white/35 leading-relaxed">
              Your complete financial literacy hub for India and US markets.
              Unbiased, educational, always free at the core.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-medium uppercase tracking-widest text-white/45 mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/35 hover:text-gold-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {SITE_CONFIG.name} LLC · snpcapitalservices.com
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Use', 'Contact', 'Sitemap'].map((l) => (
              <Link key={l} href={`/${l.toLowerCase().replace(/ /g, '-')}`}
                className="text-xs text-white/25 hover:text-white/50 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-5 text-[11px] text-white/20 leading-relaxed max-w-4xl">
          Disclaimer: All content on S&P Capital Services is for educational and informational purposes
          only. It does not constitute financial, investment, tax, or legal advice. S&P Capital Services LLC
          is not a registered investment advisor (RIA) with SEBI or the SEC. Past performance is not
          indicative of future results. Always consult a qualified, licensed financial professional before
          making investment decisions. Investment in securities markets is subject to market risks — read
          all related documents carefully before investing.
        </p>
      </div>
    </footer>
  )
}
