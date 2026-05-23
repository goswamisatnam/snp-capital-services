'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, useCallback } from 'react'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  // Open immediately, cancel any pending close
  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }, [])

  // Delay close by 150 ms so the mouse can reach the dropdown panel
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }, [])

  // Called when mouse enters the dropdown panel itself
  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-[100] bg-white/[0.97] backdrop-blur-md border-b border-cream-300 shadow-nav"
    >
      {/* ── Row 1: Logo + Search + CTAs ─────────────── */}
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
            href="/#newsletter"
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

      {/* ── Row 2: Desktop nav ───────────────────────── */}
      <div className="hidden md:flex items-center px-[5vw] border-t border-cream-300">
        {NAV_ITEMS.map((item) => {
          const hasChildren = !!(item.items?.length || item.groups?.length)
          const isOpen = openDropdown === item.label

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => openMenu(item.label)}
              onMouseLeave={scheduleClose}
            >
              {/* Trigger row */}
              <div
                className={`flex items-center border-b-2 transition-colors duration-150 ${
                  isOpen ? 'border-navy' : 'border-transparent'
                }`}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className={`flex items-center gap-1.5 px-3.5 py-2.5 text-sm whitespace-nowrap transition-colors ${
                    isOpen ? 'text-navy font-medium' : 'text-gray-500 hover:text-navy'
                  }`}
                >
                  {item.icon && <span className="text-sm">{item.icon}</span>}
                  {item.label}
                </Link>
                {hasChildren && (
                  <ChevronDown
                    size={12}
                    className={`mr-2 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-navy' : ''
                    }`}
                  />
                )}
              </div>

              {/* Dropdown panel */}
              <AnimatePresence>
                {isOpen && hasChildren && (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-full left-0 z-[200] mt-0.5"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    {/* ── Simple list (Personal Finance / Investing / Trading) */}
                    {item.items && (
                      <div className="bg-white rounded-2xl border border-cream-300 shadow-xl min-w-[230px] overflow-hidden">
                        {/* "View all" header */}
                        <div className="px-4 pt-3.5 pb-2.5 border-b border-cream-200">
                          <Link
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-navy uppercase tracking-widest hover:text-teal-600 transition-colors"
                          >
                            All {item.label}
                            <span className="text-teal-500">→</span>
                          </Link>
                        </div>
                        {/* Sub-items */}
                        <ul className="py-1.5">
                          {item.items.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setOpenDropdown(null)}
                                className="group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cream-100 hover:text-navy transition-colors"
                              >
                                {sub.icon && (
                                  <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-cream-100 group-hover:bg-white text-sm transition-colors shrink-0">
                                    {sub.icon}
                                  </span>
                                )}
                                <span className="font-medium">{sub.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* ── Mega menu (Markets) */}
                    {item.groups && (
                      <div className="bg-white rounded-2xl border border-cream-300 shadow-xl overflow-hidden">
                        <div className="flex divide-x divide-cream-200">
                          {item.groups.map((group) => (
                            <div key={group.label} className="p-5 min-w-[210px]">
                              {/* Group header link */}
                              <Link
                                href={group.href}
                                onClick={() => setOpenDropdown(null)}
                                className="inline-flex items-center gap-2 text-[11px] font-bold text-navy uppercase tracking-widest mb-3 hover:text-teal-600 transition-colors"
                              >
                                {group.label}
                                <span className="text-teal-500 font-normal">→</span>
                              </Link>
                              {/* Sub-items */}
                              <ul className="space-y-0.5">
                                {group.items.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className="flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-lg text-sm text-gray-600 hover:bg-cream-100 hover:text-navy transition-colors"
                                    >
                                      {sub.icon && <span className="text-sm">{sub.icon}</span>}
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* ── Mobile menu ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-white border-t border-cream-300 overflow-hidden"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          >
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!(item.items?.length || item.groups?.length)
              const isExpanded = mobileExpanded === item.label

              return (
                <div key={item.label} className="border-b border-cream-200 last:border-0">
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:bg-cream-50 text-left"
                      >
                        <span className="flex items-center gap-2.5 font-medium">
                          {item.icon && <span>{item.icon}</span>}
                          {item.label}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden bg-cream-50 border-t border-cream-200"
                          >
                            {/* Parent page link */}
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-teal-700 hover:text-navy uppercase tracking-wider border-b border-cream-200"
                            >
                              All {item.label} →
                            </Link>

                            {/* Simple items */}
                            {item.items?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-6 py-3 text-sm text-gray-600 hover:text-navy hover:bg-cream-100 border-b border-cream-200 last:border-0"
                              >
                                {sub.icon && (
                                  <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-white text-sm shrink-0">
                                    {sub.icon}
                                  </span>
                                )}
                                {sub.label}
                              </Link>
                            ))}

                            {/* Group items (Markets) */}
                            {item.groups?.map((group) => (
                              <div key={group.label}>
                                <Link
                                  href={group.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center px-6 py-2.5 text-xs font-bold text-navy uppercase tracking-wider bg-cream-100 border-b border-cream-200"
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-cream-50"
                    >
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}

            <div className="px-5 py-4 flex gap-3 border-t border-cream-200">
              <Link
                href="/calculators"
                className="flex-1 text-center text-sm border border-cream-300 rounded-lg py-2.5 text-navy font-medium hover:border-navy transition-colors"
              >
                Calculators
              </Link>
              <Link
                href="/#newsletter"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center text-sm bg-navy text-white rounded-lg py-2.5 font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
