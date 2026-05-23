'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-cream-300 shadow-nav"
    >
      {/* ── Row 1: Logo + Search + CTAs ───────── */}
      <div className="flex items-center gap-3 px-[5vw] h-14">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
            <span className="font-display text-gold font-bold text-xs">S&P</span>
          </div>
          <span className="font-display text-navy font-semibold text-sm hidden sm:block">
            Capital Services
          </span>
        </Link>

        <div className="flex-1 max-w-md flex items-center bg-cream-100 border border-cream-300 rounded-lg px-3 gap-2 focus-within:border-navy transition-colors">
          <Search size={14} className="text-gray-400 shrink-0" />
          <input
            type="search"
            placeholder="Search terms, topics, concepts…"
            className="flex-1 bg-transparent py-2 text-sm text-navy outline-none placeholder:text-gray-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const q = (e.target as HTMLInputElement).value
                if (q) window.location.href = `/dictionary?q=${encodeURIComponent(q)}`
              }
            }}
          />
        </div>

        <div className="hidden md:flex items-center gap-2 ml-auto shrink-0">
          <Link
            href="/calculators"
            className="text-xs border border-cream-300 text-navy rounded-md px-3 py-1.5 hover:border-navy transition-colors"
          >
            Calculators
          </Link>
          <Link
            href="#newsletter"
            className="text-xs bg-navy text-white rounded-md px-3 py-1.5 hover:bg-opacity-90 transition-colors"
          >
            Subscribe
          </Link>
        </div>

        <button
          className="md:hidden ml-auto p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Row 2: Nav with dropdowns (desktop) ─ */}
      <div className="hidden md:flex items-center px-[5vw] border-t border-cream-300 overflow-x-auto scrollbar-hide relative">
        {NAV_ITEMS.map((item) => {
          const hasChildren = !!(item.items?.length || item.groups?.length)
          const isOpen = openDropdown === item.label

          return (
            <div key={item.label} className="relative">
              {hasChildren ? (
                <button
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  className={`flex items-center gap-1 px-3.5 py-2.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                    isOpen
                      ? 'text-navy border-navy font-medium'
                      : 'text-gray-500 border-transparent hover:text-navy hover:border-gray-300'
                  }`}
                >
                  {item.icon && <span className="text-sm">{item.icon}</span>}
                  {item.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className="flex items-center gap-1 px-3.5 py-2.5 text-sm whitespace-nowrap border-b-2 border-transparent text-gray-500 hover:text-navy hover:border-gray-300 transition-colors"
                >
                  {item.icon && <span className="text-sm">{item.icon}</span>}
                  {item.label}
                </Link>
              )}

              {/* Dropdown panel */}
              {isOpen && hasChildren && (
                <div className="absolute top-full left-0 z-50 bg-white border border-cream-300 rounded-xl shadow-lg mt-0.5 overflow-hidden">
                  {/* Simple dropdown list */}
                  {item.items && (
                    <ul className="py-1.5 min-w-[200px]">
                      <li className="px-4 pb-1.5 pt-2">
                        <Link
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="text-xs font-semibold text-navy uppercase tracking-wider hover:text-teal-700 transition-colors"
                        >
                          All {item.label} →
                        </Link>
                      </li>
                      <li className="mx-3 border-t border-cream-200 mb-1" />
                      {item.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-600 hover:bg-cream-100 hover:text-navy transition-colors"
                          >
                            {sub.icon && <span className="text-base">{sub.icon}</span>}
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Mega menu with groups */}
                  {item.groups && (
                    <div className="flex gap-0 py-3">
                      {item.groups.map((group, gi) => (
                        <div
                          key={group.label}
                          className={`px-5 min-w-[190px] ${gi > 0 ? 'border-l border-cream-200' : ''}`}
                        >
                          <Link
                            href={group.href}
                            onClick={() => setOpenDropdown(null)}
                            className="text-xs font-semibold text-navy uppercase tracking-wider mb-3 block hover:text-teal-700 transition-colors"
                          >
                            {group.label}
                          </Link>
                          <ul className="space-y-0">
                            {group.items.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="block py-1.5 text-sm text-gray-600 hover:text-navy transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* ── Mobile menu ───────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-cream-300 max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!(item.items?.length || item.groups?.length)
            const isExpanded = mobileExpanded === item.label

            return (
              <div key={item.label} className="border-b border-cream-200 last:border-0">
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                      className="w-full flex items-center justify-between px-5 py-3 text-sm text-gray-700 hover:bg-cream-100 text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        {item.icon && <span>{item.icon}</span>}
                        {item.label}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 text-gray-400 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="bg-cream-50 border-t border-cream-200">
                        {/* Link to parent */}
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-teal-700 hover:text-navy border-b border-cream-200"
                        >
                          All {item.label} →
                        </Link>

                        {/* Simple items */}
                        {item.items?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-6 py-2.5 text-sm text-gray-600 hover:text-navy hover:bg-cream-100 border-b border-cream-200 last:border-0"
                          >
                            {sub.icon && <span>{sub.icon}</span>}
                            {sub.label}
                          </Link>
                        ))}

                        {/* Groups */}
                        {item.groups?.map((group) => (
                          <div key={group.label}>
                            <Link
                              href={group.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center px-6 py-2 text-xs font-semibold text-navy uppercase tracking-wider bg-cream-100 border-b border-cream-200"
                            >
                              {group.label}
                            </Link>
                            {group.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-8 py-2.5 text-sm text-gray-600 hover:text-navy hover:bg-cream-100 border-b border-cream-200 last:border-0"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-cream-100"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}

          <div className="px-5 py-4 flex gap-3">
            <Link
              href="/calculators"
              className="flex-1 text-center text-sm border border-cream-300 rounded-md py-2 text-navy"
            >
              Calculators
            </Link>
            <Link
              href="#newsletter"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center text-sm bg-navy text-white rounded-md py-2"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
