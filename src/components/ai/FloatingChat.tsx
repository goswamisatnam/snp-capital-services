'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { AIFinanceAssistant } from './AIFinanceAssistant'

export function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop — closes on click */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[300] bg-black/30 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />

            {/* Chat panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed bottom-24 right-4 sm:right-6 z-[400] w-[min(420px,calc(100vw-2rem))] rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={14} />
              </button>

              <AIFinanceAssistant compact />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 sm:right-6 z-[350] w-14 h-14 rounded-full bg-navy shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close AI assistant' : 'Open AI finance assistant'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center justify-center gap-0.5"
            >
              {/* Chat bubble icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H7L12 22L17 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
                  fill="#C9A84C"
                />
                <path d="M7 9H17M7 13H13" stroke="#0C1B33" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-navy opacity-40 animate-ping" style={{ animationDuration: '2.5s' }} />
        )}
      </motion.button>
    </>
  )
}
