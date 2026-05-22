'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { NAV_CATEGORIES } from '@/lib/constants'
import { clsx } from 'clsx'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Investing')

  return (
    <nav className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-cream-300 shadow-nav">
      {/* Top row */}
      <div className="flex items-center gap-4 px-[5vw] h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
            <span className="font-display text-gold font-bold text-xs">S&P</span>
          </div>
          <span className="font-display text-navy font-semibold text-base hidden sm:block">
            Capital Services
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-xl flex items-center bg-cream-100 border border-cream-300 rounded-lg px-3 gap-2 focus-within:border-navy transition-colors">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="search"
            placeholder="Search terms, topics, concepts (e.g. 'What is SIP?')…"
            className="flex-1 bg-transparent py-2.5 text-sm text-navy outline-none placeholder:text-gray-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const q = (e.target as HTMLInputElement).value
                if (q) window.location.href = `/dictionary?q=${encodeURIComponent(q)}`
              }
            }}
          />
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
          <Link
            href="/calculators"
            className="text-sm border border-cream-300 text-navy rounded-md px-4 py-2 hover:border-navy transition-colors"
          >
            Calculators
          </Link>
          <Link
            href="#newsletter"
            className="text-sm bg-navy text-white rounded-md px-4 py-2 hover:bg-navy-700 transition-colors"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-auto p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Category strip (desktop) */}
      <div className="hidden md:flex items-center px-[5vw] border-t border-cream-300 overflow-x-auto scrollbar-hide">
        {NAV_CATEGORIES.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            onClick={() => setActiveCategory(cat.label)}
            className={clsx(
              'flex items-center gap-1.5 px-4 py-2.5 text-sm whitespace-nowrap border-b-2 transition-colors',
              activeCategory === cat.label
                ? 'text-navy border-navy font-medium'
                : 'text-gray-500 border-transparent hover:text-navy hover:border-gray-300',
            )}
          >
            <span className="text-sm">{cat.icon}</span>
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-cream-300 px-5 py-4 flex flex-col gap-2">
          {NAV_CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-navy"
            >
              <span>{cat.icon}</span>
              {cat.label}
            </Link>
          ))}
          <div className="border-t border-cream-300 pt-3 mt-1 flex gap-3">
            <Link href="/calculators" className="flex-1 text-center text-sm border border-cream-300 rounded-md py-2 text-navy">
              Calculators
            </Link>
            <Link href="#newsletter" className="flex-1 text-center text-sm bg-navy text-white rounded-md py-2">
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
