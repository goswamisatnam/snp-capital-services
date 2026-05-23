'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { AIFinanceAssistant } from './AIFinanceAssistant'

export function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Soft backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[300] bg-black/20"
              onClick={() => setOpen(false)}
            />

            {/* Panel — sits just above the button, capped to viewport */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.94 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed z-[400] rounded-2xl shadow-2xl overflow-hidden"
              style={{
                bottom: '4.75rem',
                right: '1rem',
                width: 'min(370px, calc(100vw - 1.5rem))',
                maxHeight: 'min(460px, calc(100svh - 5.5rem))',
              }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2.5 right-2.5 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                aria-label="Close"
              >
                <X size={12} />
              </button>
              <AIFinanceAssistant compact />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Floating circle button ── */}
      <div className="fixed bottom-5 right-5 z-[350]" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>

        {/* "FinanceGPT" label above the circle — hidden when open */}
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
              style={{
                background: 'linear-gradient(135deg, #0C1B33, #142040)',
                border: '1px solid rgba(201,168,76,0.5)',
                borderRadius: 20,
                padding: '3px 10px',
                display: 'flex', alignItems: 'center', gap: 5,
                pointerEvents: 'none',
                boxShadow: '0 2px 10px rgba(12,27,51,0.35)',
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 5px #22c55e', flexShrink: 0 }} />
              <span style={{ color: '#ffffff', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>FinanceGPT</span>
              <span style={{ color: '#C9A84C', fontSize: 9, fontWeight: 500, letterSpacing: '0.06em' }}>AI</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow rings */}
        {!open && (
          <>
            <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full animate-ping pointer-events-none"
              style={{ background: 'rgba(201,168,76,0.2)', animationDuration: '2.2s' }} />
            <span className="absolute bottom-0 right-0 pointer-events-none"
              style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(201,168,76,0.1)', filter: 'blur(10px)' }} />
          </>
        )}

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.93 }}
          aria-label={open ? 'Close FinanceGPT' : 'Open FinanceGPT AI assistant'}
          style={{
            position: 'relative',
            width: 56, height: 56,
            borderRadius: '50%',
            border: '2px solid rgba(201,168,76,0.65)',
            background: 'linear-gradient(145deg, #0a1628 0%, #0C1B33 60%, #1a2f52 100%)',
            boxShadow: open
              ? '0 4px 18px rgba(0,0,0,0.45)'
              : '0 0 0 3px rgba(201,168,76,0.12), 0 6px 26px rgba(201,168,76,0.32), 0 2px 8px rgba(12,27,51,0.55)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Green online badge */}
          {!open && (
            <span style={{
              position: 'absolute', top: 2, right: 2,
              width: 11, height: 11, borderRadius: '50%',
              background: '#22c55e',
              border: '2px solid #0C1B33',
              boxShadow: '0 0 7px rgba(34,197,94,0.7)',
            }} />
          )}

          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                <X size={20} color="#C9A84C" />
              </motion.span>
            ) : (
              <motion.span
                key="avatar"
                initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {/* AI robot avatar face */}
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                  {/* Head */}
                  <rect x="7" y="10" width="18" height="14" rx="5" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
                  {/* Eyes */}
                  <circle cx="12" cy="17" r="2.2" fill="#C9A84C" />
                  <circle cx="20" cy="17" r="2.2" fill="#C9A84C" />
                  {/* Pupils */}
                  <circle cx="12.6" cy="16.5" r="0.8" fill="#0C1B33" />
                  <circle cx="20.6" cy="16.5" r="0.8" fill="#0C1B33" />
                  {/* Antenna stem */}
                  <line x1="16" y1="5" x2="16" y2="10" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" />
                  {/* Antenna top */}
                  <circle cx="16" cy="4" r="2" fill="#C9A84C" />
                  <circle cx="16" cy="4" r="0.8" fill="#0C1B33" />
                  {/* Ear connectors */}
                  <line x1="3" y1="16" x2="7" y2="16" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="25" y1="16" x2="29" y2="16" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Chin / mouth line */}
                  <path d="M12.5 21.5 Q16 23.5 19.5 21.5" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
