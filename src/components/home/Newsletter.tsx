"use client"
import { useState } from 'react'

export function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showModal, setShowModal] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)

  const validate = () => {
    if (!name || name.trim().length < 2) return 'Please enter your full name.'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.'
    return null
  }

  const handleSubmit = async () => {
    const v = validate()
    if (v) {
      setValidationError(v)
      setStatus('error')
      return
    }
    setValidationError(null)
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      // Fire lightweight client-side analytics event
      try {
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: 'newsletter_signup', props: { email, name } }),
        })
      } catch (e) {
        // non-blocking
        console.warn('analytics event failed', e)
      }

      setStatus('success')
      setShowModal(true)
      setEmail('')
      setName('')
    } catch (err) {
      console.error('newsletter signup error', err)
      setStatus('error')
    }
  }

  const handleModalCtaClick = async () => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'newsletter_modal_cta_click',
          props: { cta: 'read_starter_guide', source: 'newsletter_modal' },
        }),
      })
    } catch (e) {
      console.warn('analytics CTA event failed', e)
    }
    setShowModal(false)
    try {
      window.open('/investing', '_blank')
    } catch (e) {
      // fallback navigation
      window.location.href = '/investing'
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
            ⚠️ {validationError ?? 'There was a problem subscribing. Please try again.'}
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-gold transition-colors"
              />
              <div className="flex gap-3">
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
            </div>
            <p className="text-white/20 text-xs mt-3">Join thousands of investors. Unsubscribe anytime.</p>
          </>
        )}
      </div>
        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)} />
            <div className="relative bg-white rounded-xl p-6 max-w-sm mx-4 shadow-lg">
              <h3 className="text-navy font-semibold text-lg mb-2">You're subscribed 🎉</h3>
              <p className="text-gray-700 text-sm mb-4">Thanks for joining. We just sent a confirmation to your email — please check your inbox.</p>
              <div className="flex justify-end">
                <button onClick={handleModalCtaClick} className="mr-2 px-4 py-2 bg-gold text-navy rounded-md font-medium">Read Starter Guide</button>
                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-navy text-white rounded-md">Close</button>
              </div>
            </div>
          </div>
        )}
    </section>
  )
}
