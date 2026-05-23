'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

const POPULAR_SEARCHES = [
  'What is SIP?', 'US stocks from India', 'Mutual funds vs ETF',
  '401k explained', 'Bitcoin basics', 'P/E Ratio', 'LTCG Tax India',
]

const ease = [0.25, 0.1, 0.25, 1] as const

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  }
}

export function Hero() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) router.push(`/dictionary?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <section className="relative bg-navy overflow-hidden py-16 md:py-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      {/* Radial glows */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-radial-glow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,.10) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -left-16 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,140,122,.10) 0%, transparent 70%)' }} />

      <div className="relative z-10 px-[5vw] max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeIn(0)} className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/25 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-medium text-gold-300 tracking-widest uppercase">
            India &amp; US Financial Literacy Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeIn(0.1)} className="font-display text-white text-4xl md:text-6xl font-bold leading-tight mb-5">
          Your Complete Guide to<br />
          <em className="text-gold not-italic">Financial Independence</em>
        </motion.h1>

        <motion.p {...fadeIn(0.2)} className="text-white/60 text-lg leading-relaxed mb-9 font-light max-w-2xl mx-auto">
          Everything you need to understand investing, markets, and money — from first SIP to
          advanced options strategies. Trusted, unbiased, always free.
        </motion.p>

        {/* Search */}
        <motion.div {...fadeIn(0.3)} className="flex max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl mb-5">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search any financial term, concept, or topic…"
            className="flex-1 px-5 py-4 text-sm text-navy outline-none placeholder:text-gray-400"
          />
          <button
            onClick={handleSearch}
            className="px-6 bg-gold hover:bg-gold-300 text-navy font-medium text-sm transition-colors whitespace-nowrap"
          >
            Search →
          </button>
        </motion.div>

        {/* Popular tags */}
        <motion.div {...fadeIn(0.4)} className="flex flex-wrap gap-2 justify-center">
          {POPULAR_SEARCHES.map((tag) => (
            <button
              key={tag}
              onClick={() => router.push(`/dictionary?q=${encodeURIComponent(tag)}`)}
              className="bg-white/[0.07] hover:bg-white/[0.13] border border-white/[0.12] rounded-full px-4 py-1.5 text-xs text-white/60 hover:text-white transition-all"
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeIn(0.5)}
          className="flex flex-wrap justify-center gap-10 mt-14 pt-10 border-t border-white/[0.08]"
        >
          {[
            { num: '2', label: 'Markets covered' },
            { num: '1,000+', label: 'Finance terms' },
            { num: '8', label: 'Free calculators' },
            { num: '16+', label: 'Topic categories' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.07, ease }}
              className="text-center"
            >
              <div className="font-display text-gold text-2xl font-semibold">{s.num}</div>
              <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
