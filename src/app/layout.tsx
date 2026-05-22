import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MarketTicker } from '@/components/layout/MarketTicker'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} – Financial Literacy for India & US Markets`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'investing', 'stocks', 'mutual funds', 'SIP', 'CAGR', '401k', 'Roth IRA',
    'Nifty 50', 'S&P 500', 'crypto', 'Bitcoin', 'financial literacy',
    'India stocks', 'US markets', 'personal finance', 'retirement planning',
    'LTCG tax', 'NRI investing', 'ELSS', 'PPF', 'NPS',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} – Financial Literacy Hub`,
    description: SITE_CONFIG.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} – Financial Literacy Hub`,
    description: SITE_CONFIG.description,
    site: SITE_CONFIG.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0C1B33',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {/* Top info banner */}
        <div className="bg-navy text-center py-2 px-4 text-xs text-white/50 tracking-wide">
          India &amp; US Markets · No ads, no stock tips · Pure financial education ·{' '}
          <a href="/newsletter" className="text-gold-300 hover:text-gold-200 transition-colors">
            Subscribe free →
          </a>
        </div>

        <Navbar />
        <MarketTicker />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
