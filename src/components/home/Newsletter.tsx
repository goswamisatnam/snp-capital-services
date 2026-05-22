'use client'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      setEmail('')
    } catch (err) {
      console.error('newsletter signup error', err)
      setStatus('error')
    }
  }

  return (
    <section className="py-20 px-[5vw] bg-navy relative overflow-hidden" id="newsletter">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(26,140,122,.07) 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-3">
          The Finance Literacy Newsletter
        </h2>
        <p className="text-white/50 text-sm font-light mb-8">
          Weekly deep-dives on investing, markets, and money — covering India and US.
          No spam, no stock tips. Pure education.
        </p>

        {status === 'success' ? (
          <div className="bg-teal-500/20 border border-teal-500/30 rounded-xl p-6 text-teal-300 text-sm">
            🎉 You&apos;re subscribed! Check your inbox for a confirmation.
          </div>
        ) : status === 'error' ? (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm">
            ⚠️ There was a problem subscribing. Please try again.
          </div>
        ) : (
          <>
            <div className="flex gap-3 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-gold transition-colors"
              />
              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="px-5 bg-gold hover:bg-gold-300 text-navy font-medium text-sm rounded-lg transition-colors disabled:opacity-70 whitespace-nowrap"
              >
                {status === 'loading' ? '…' : 'Subscribe free'}
              </button>
            </div>
            <p className="text-white/20 text-xs mt-3">
              Join thousands of investors. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
