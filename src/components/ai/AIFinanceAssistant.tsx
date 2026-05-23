'use client'

import { useState, useRef, useEffect } from 'react'

const SUGGESTED_QUESTIONS = [
  { icon: '📈', text: 'What is SIP and how does it work?', tag: 'India' },
  { icon: '🇺🇸', text: 'How do I invest in US stocks from India?', tag: 'NRI' },
  { icon: '💰', text: 'Explain 401(k) vs Roth IRA difference', tag: 'US' },
  { icon: '📊', text: 'What is P/E ratio and how to use it?', tag: 'Basics' },
  { icon: '🧾', text: 'How is LTCG tax calculated in India?', tag: 'Tax' },
  { icon: '₿', text: 'Is crypto taxed in India? How?', tag: 'Crypto' },
  { icon: '🏦', text: 'Mutual funds vs ETFs — which is better?', tag: 'Investing' },
  { icon: '🔄', text: 'What is DTAA between India and US?', tag: 'NRI' },
]

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  India:    { bg: '#E1F5EE', text: '#085041' },
  US:       { bg: '#E6F1FB', text: '#0C447C' },
  NRI:      { bg: '#EEEDFE', text: '#3C3489' },
  Basics:   { bg: '#F1EFE8', text: '#2C2C2A' },
  Tax:      { bg: '#FCEBEB', text: '#791F1F' },
  Crypto:   { bg: '#FAEEDA', text: '#633806' },
  Investing:{ bg: '#EAF3DE', text: '#27500A' },
}

type Message = { role: 'user' | 'assistant'; content: string }

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 7, height: 7, borderRadius: '50%', background: '#C9A84C',
            animation: `snp-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes snp-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}
        @keyframes snp-fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        .snp-msg-in{animation:snp-fadeIn 0.3s ease both}
      `}</style>
    </div>
  )
}

function ChatMessage({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user'
  return (
    <div
      className="snp-msg-in"
      style={{ display: 'flex', flexDirection: isUser ? 'row-reverse' : 'row', gap: 10, marginBottom: 16, alignItems: 'flex-start' }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 600,
        background: isUser ? '#0C1B33' : '#C9A84C',
        color: isUser ? '#E8C97A' : '#0C1B33',
      }}>
        {isUser ? 'U' : 'AI'}
      </div>
      <div style={{
        maxWidth: '76%',
        background: isUser ? '#0C1B33' : '#ffffff',
        border: isUser ? 'none' : '1px solid #e8e2d5',
        borderRadius: isUser ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
        padding: '10px 14px',
        fontSize: 13, lineHeight: 1.65,
        color: isUser ? '#F8F3EC' : '#0C1B33',
        whiteSpace: 'pre-wrap',
      }}>
        {msg.content}
      </div>
    </div>
  )
}

interface Props {
  compact?: boolean  // true = shorter height (for modal), false = full height (for inline section)
}

export function AIFinanceAssistant({ compact = false }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm FinanceGPT, your AI financial educator for India & US markets 🇮🇳🇺🇸\n\nAsk me anything about stocks, mutual funds, SIP, 401(k), LTCG tax, crypto, NRI investing, or any financial concept. I'm here to make finance simple for you!",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text?: string) => {
    const q = (text ?? input).trim()
    if (!q || loading) return
    setInput('')
    setError(null)

    const userMsg: Message = { role: 'user', content: q }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`)
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Something went wrong. Please try again.'
      setError(msg)
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const height = compact ? 520 : 680

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height, maxHeight: height,
      fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      background: '#f8f5ef',
      borderRadius: compact ? 0 : 16,
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ background: '#0C1B33', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8, background: '#C9A84C',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 12, color: '#0C1B33',
        }}>
          AI
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#F8F3EC' }}>FinanceGPT</div>
          <div style={{ fontSize: 11, color: '#C9A84C', display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
            India &amp; US Markets Expert · Always available
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          {['🇮🇳', '🇺🇸'].map((f) => <span key={f} style={{ fontSize: 18 }}>{f}</span>)}
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column' }}>
        {messages.map((msg, i) => <ChatMessage key={i} msg={msg} />)}
        {loading && (
          <div style={{ display: 'flex', gap: 10, marginBottom: 16, alignItems: 'flex-start' }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%', background: '#C9A84C',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 600, color: '#0C1B33', flexShrink: 0,
            }}>AI</div>
            <div style={{ background: '#ffffff', border: '1px solid #e8e2d5', borderRadius: '4px 16px 16px 16px', padding: '10px 14px' }}>
              <TypingDots />
            </div>
          </div>
        )}
        {error && (
          <div style={{
            background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8,
            padding: '10px 14px', fontSize: 12, color: '#dc2626', marginBottom: 12,
          }}>
            {error}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested questions — shown only at start */}
      {messages.length <= 1 && (
        <div style={{ padding: '0 16px 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, flexShrink: 0 }}>
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q.text}
              onClick={() => send(q.text)}
              disabled={loading}
              style={{
                background: '#ffffff', border: '1px solid #e8e2d5', borderRadius: 8,
                padding: '8px 10px', cursor: 'pointer', textAlign: 'left',
                display: 'flex', alignItems: 'flex-start', gap: 8, transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#0C1B33')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e8e2d5')}
            >
              <span style={{ fontSize: 14, flexShrink: 0 }}>{q.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: '#0C1B33', lineHeight: 1.4 }}>{q.text}</div>
                <span style={{
                  fontSize: 10, fontWeight: 500, padding: '1px 6px', borderRadius: 10,
                  marginTop: 4, display: 'inline-block',
                  background: TAG_COLORS[q.tag]?.bg ?? '#F1EFE8',
                  color: TAG_COLORS[q.tag]?.text ?? '#2C2C2A',
                }}>
                  {q.tag}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding: '8px 16px 14px', borderTop: '1px solid #e8e2d5', background: '#ffffff', flexShrink: 0 }}>
        <div style={{
          display: 'flex', gap: 8, background: '#f8f5ef',
          border: '1px solid #ddd8cc', borderRadius: 12,
          padding: '6px 8px 6px 14px', alignItems: 'flex-end',
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              e.target.style.height = 'auto'
              e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'
            }}
            onKeyDown={handleKey}
            placeholder="Ask anything about finance, investing, markets..."
            rows={1}
            disabled={loading}
            style={{
              flex: 1, border: 'none', background: 'transparent',
              resize: 'none', outline: 'none', fontSize: 13, lineHeight: 1.5,
              color: '#0C1B33', padding: '4px 0', fontFamily: 'inherit', minHeight: 28,
            }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            style={{
              width: 32, height: 32, borderRadius: 8, border: 'none',
              background: input.trim() && !loading ? '#0C1B33' : '#e8e2d5',
              cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, transition: 'background 0.15s',
            }}
            aria-label="Send"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 8L14 8M9 3L14 8L9 13"
                stroke={input.trim() && !loading ? '#C9A84C' : '#9ca3af'}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 5, textAlign: 'center' }}>
          For educational purposes only · Not financial advice · S&amp;P Capital Services
        </div>
      </div>
    </div>
  )
}
