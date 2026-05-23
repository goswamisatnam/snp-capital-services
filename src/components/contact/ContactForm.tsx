"use client"
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full px-4 py-2 border rounded-md" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" className="w-full px-4 py-2 border rounded-md min-h-[120px]" />

      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === 'sending'} className="px-4 py-2 bg-navy text-white rounded-md">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        {status === 'sent' && <span className="text-sm text-green-600">Thanks — we received your message.</span>}
        {status === 'error' && <span className="text-sm text-amber-600">Failed to send. Try emailing us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-600">{SITE_CONFIG.email}</a></span>}
      </div>
    </form>
  )
}
