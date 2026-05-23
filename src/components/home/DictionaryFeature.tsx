'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SlideInLeft, SlideInRight } from '@/components/ui/Animate'

const POPULAR_TERMS = [
  'P/E Ratio', 'EBITDA', 'Bull Market', 'Compound Interest',
  'SIP', 'NAV', 'CAGR', 'Diversification', 'Market Cap',
  'Liquidity', 'Alpha & Beta', 'IPO', 'Demat Account',
]

export function DictionaryFeature() {
  const router = useRouter()
  const [term, setTerm] = useState('')

  return (
    <section className="py-20 px-[5vw] bg-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <SlideInLeft>
          <p className="text-xs font-medium uppercase tracking-widest text-gold-300 mb-3">Finance Dictionary</p>
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
            Look up <em className="text-gold not-italic">any term</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
            Over 1,000+ financial terms explained in plain English. From Alpha to Zero-coupon bonds —
            no jargon, no confusion.
          </p>
          {['Plain English definitions', 'Real-world India & US examples', 'Related terms & concept links', 'Formulas & calculations'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-white/50 mb-2">
              <span className="text-gold">✓</span> {f}
            </div>
          ))}
        </SlideInLeft>

        <SlideInRight delay={0.1}>
          <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6">
            <p className="text-sm text-white/60 mb-4">Search financial terms</p>
            <div className="flex bg-white rounded-lg overflow-hidden mb-5">
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && term && router.push(`/dictionary?q=${encodeURIComponent(term)}`)}
                type="text"
                placeholder="e.g. Compound Interest, P/E Ratio, SIP…"
                className="flex-1 px-4 py-3 text-sm text-navy outline-none"
              />
              <button
                onClick={() => term && router.push(`/dictionary?q=${encodeURIComponent(term)}`)}
                className="px-5 bg-gold hover:bg-gold-300 text-navy font-medium text-sm transition-colors"
              >
                Look up →
              </button>
            </div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_TERMS.map((t) => (
                <Link key={t} href={`/dictionary?q=${encodeURIComponent(t)}`}
                  className="bg-white/[0.07] hover:bg-gold-500/15 border border-white/10 hover:border-gold-400/30 rounded-full px-3 py-1 text-xs text-white/70 hover:text-gold-300 transition-all">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </SlideInRight>
      </div>
    </section>
  )
}
