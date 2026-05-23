import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const footerLinks = {
  'Personal Finance': [
    { label: 'Budgeting',      href: '/personal-finance/budgeting'      },
    { label: 'Insurance',      href: '/personal-finance/insurance'      },
    { label: 'Tax Planning',   href: '/personal-finance/tax-planning'   },
    { label: 'Retirement',     href: '/personal-finance/retirement'     },
    { label: 'Emergency Fund', href: '/personal-finance/emergency-fund' },
    { label: 'Credit Scores',  href: '/personal-finance/credit-scores'  },
  ],
  Investing: [
    { label: 'Stock Markets',  href: '/investing/stock-markets'  },
    { label: 'Mutual Funds',   href: '/investing/mutual-funds'   },
    { label: 'ETFs',           href: '/investing/etfs'           },
    { label: 'Cryptocurrency', href: '/investing/cryptocurrency'  },
    { label: 'Bonds',          href: '/investing/bonds'          },
    { label: 'Real Estate',    href: '/investing/real-estate'    },
  ],
  'India Markets': [
    { label: 'NSE & BSE',        href: '/markets/india/nse-bse'       },
    { label: 'SEBI Rules',       href: '/markets/india/sebi-rules'    },
    { label: 'Demat Account',    href: '/markets/india/demat-account' },
    { label: 'ELSS / PPF / NPS', href: '/markets/india/elss-ppf-nps' },
    { label: 'Indian F&O',       href: '/markets/india/indian-fno'    },
    { label: 'NRI Investing',    href: '/markets/india/nri-investing'  },
  ],
  'US Markets': [
    { label: 'NYSE & NASDAQ',  href: '/markets/us/nyse-nasdaq'    },
    { label: '401(k) Guide',   href: '/markets/us/401k-guide'     },
    { label: 'Roth IRA',       href: '/markets/us/roth-ira'       },
    { label: 'S&P 500 Basics', href: '/markets/us/sp500-basics'   },
    { label: 'US Tax for NRI', href: '/markets/us/us-tax-for-nri' },
    { label: 'DTAA Benefits',  href: '/markets/us/dtaa-benefits'  },
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
            <p className="text-xs text-white/35 leading-relaxed mb-4">
              Your complete financial literacy hub for India and US markets.
              Unbiased, educational, always free at the core.
            </p>
            <div className="flex flex-col gap-1.5">
              <Link href="/trading" className="text-xs text-white/35 hover:text-gold-300 transition-colors">⚡ Trading</Link>
              <Link href="/dictionary" className="text-xs text-white/35 hover:text-gold-300 transition-colors">📖 Dictionary</Link>
              <Link href="/calculators" className="text-xs text-white/35 hover:text-gold-300 transition-colors">🧮 Calculators</Link>
              <Link href="/blog" className="text-xs text-white/35 hover:text-gold-300 transition-colors">✍️ Blog</Link>
            </div>
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
          <div className="flex gap-4 flex-wrap">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Use',   href: '/terms-of-use'   },
              { label: 'Contact',        href: '/about'          },
              { label: 'Sitemap',        href: '/sitemap.xml'    },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                {l.label}
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
