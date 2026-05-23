'use client'

import { useState, useRef, useEffect } from 'react'

const SUGGESTED_QUESTIONS = [
  { icon: '📈', text: 'What is SIP and how does it work?',         short: 'What is SIP?',           tag: 'India'    },
  { icon: '🇺🇸', text: 'How do I invest in US stocks from India?', short: 'Invest in US stocks',    tag: 'NRI'      },
  { icon: '💰', text: 'Explain 401(k) vs Roth IRA difference',     short: '401k vs Roth IRA',       tag: 'US'       },
  { icon: '📊', text: 'What is P/E ratio and how to use it?',      short: 'P/E ratio explained',    tag: 'Basics'   },
  { icon: '🧾', text: 'How is LTCG tax calculated in India?',      short: 'LTCG tax India',         tag: 'Tax'      },
  { icon: '₿',  text: 'Is crypto taxed in India? How?',           short: 'Crypto tax India',       tag: 'Crypto'   },
  { icon: '🏦', text: 'Mutual funds vs ETFs — which is better?',  short: 'Mutual funds vs ETFs',   tag: 'Investing'},
  { icon: '🔄', text: 'What is DTAA between India and US?',        short: 'DTAA India-US',          tag: 'NRI'      },
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
        <div key={i} style={{
          width: 6, height: 6, borderRadius: '50%', background: '#C9A84C',
          animation: `snp-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
      <style>{`
        @keyframes snp-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}
        @keyframes snp-fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        .snp-msg{animation:snp-fadeIn 0.28s ease both}
      `}</style>
    </div>
  )
}

function ChatMessage({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user'
  return (
    <div className="snp-msg" style={{
      display: 'flex', flexDirection: isUser ? 'row-reverse' : 'row',
      gap: 8, marginBottom: 14, alignItems: 'flex-start',
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 700,
        background: isUser ? '#0C1B33' : '#C9A84C',
        color: isUser ? '#E8C97A' : '#0C1B33',
      }}>
        {isUser ? 'U' : 'AI'}
      </div>
      <div style={{
        maxWidth: '78%',
        background: isUser ? '#0C1B33' : '#ffffff',
        border: isUser ? 'none' : '1px solid #e8e2d5',
        borderRadius: isUser ? '14px 3px 14px 14px' : '3px 14px 14px 14px',
        padding: '9px 13px', fontSize: 12.5, lineHeight: 1.65,
        color: isUser ? '#F8F3EC' : '#0C1B33', whiteSpace: 'pre-wrap',
      }}>
        {msg.content}
      </div>
    </div>
  )
}

interface Props {
  compact?: boolean
}

export function AIFinanceAssistant({ compact = false }: Props) {
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant',
    content: "Hi! I'm FinanceGPT 🇮🇳🇺🇸\n\nAsk me anything about stocks, mutual funds, SIP, 401(k), LTCG tax, crypto, or NRI investing. I'm here to make finance simple!",
  }])
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
      if (!res.ok) throw new Error(data?.error || `Error ${res.status}`)
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.')
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  const showSuggestions = messages.length <= 1

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: compact ? '100%' : 680,
      maxHeight: compact ? '460px' : 680,
      fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      background: '#f8f5ef',
      borderRadius: compact ? 0 : 16,
      overflow: 'hidden',
    }}>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0C1B33 100%)',
        padding: compact ? '11px 16px' : '14px 20px',
        display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
        borderBottom: '1px solid rgba(201,168,76,0.2)',
      }}>
        <div style={{
          width: compact ? 30 : 34, height: compact ? 30 : 34, borderRadius: 8,
          background: 'linear-gradient(135deg, #C9A84C, #e8c660)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 11, color: '#0C1B33',
          boxShadow: '0 2px 6px rgba(201,168,76,0.4)',
          letterSpacing: '0.03em',
        }}>
          GPT
        </div>
        <div>
          <div style={{ fontSize: compact ? 13 : 14, fontWeight: 600, color: '#F8F3EC', letterSpacing: '0.01em' }}>
            FinanceGPT
          </div>
          <div style={{ fontSize: 10, color: '#C9A84C', display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 5px #22c55e' }} />
            India &amp; US Expert · Always on
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
          {['🇮🇳', '🇺🇸'].map((f) => <span key={f} style={{ fontSize: compact ? 15 : 17 }}>{f}</span>)}
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: compact ? '12px 12px 6px' : '16px 16px 8px', display: 'flex', flexDirection: 'column' }}>
        {messages.map((msg, i) => <ChatMessage key={i} msg={msg} />)}

        {/* Inline suggestion chips — shown when no conversation yet */}
        {showSuggestions && (
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 6, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Try asking
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q.text}
                  onClick={() => send(q.text)}
                  disabled={loading}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    padding: '4px 9px', borderRadius: 20,
                    background: '#ffffff', border: '1px solid #e8e2d5',
                    cursor: 'pointer', transition: 'all 0.15s',
                    fontSize: 11, color: '#0C1B33', fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0C1B33'; e.currentTarget.style.background = '#f0ede6' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e8e2d5'; e.currentTarget.style.background = '#ffffff' }}
                >
                  <span style={{ fontSize: 12 }}>{q.icon}</span>
                  {compact ? q.short : q.text}
                  <span style={{
                    fontSize: 9, fontWeight: 600, padding: '1px 5px', borderRadius: 8,
                    background: TAG_COLORS[q.tag]?.bg ?? '#f1efe8',
                    color: TAG_COLORS[q.tag]?.text ?? '#2c2c2a',
                    marginLeft: 1,
                  }}>
                    {q.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', background: '#C9A84C',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700, color: '#0C1B33', flexShrink: 0,
            }}>AI</div>
            <div style={{ background: '#ffffff', border: '1px solid #e8e2d5', borderRadius: '3px 14px 14px 14px', padding: '9px 13px' }}>
              <TypingDots />
            </div>
          </div>
        )}
        {error && (
          <div style={{
            background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8,
            padding: '9px 13px', fontSize: 12, color: '#dc2626', marginBottom: 10,
          }}>
            {error}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: compact ? '6px 12px 10px' : '8px 16px 14px',
        borderTop: '1px solid #e8e2d5', background: '#ffffff', flexShrink: 0,
      }}>
        <div style={{
          display: 'flex', gap: 7, background: '#f8f5ef',
          border: '1px solid #ddd8cc', borderRadius: 10,
          padding: '5px 7px 5px 12px', alignItems: 'flex-end',
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              e.target.style.height = 'auto'
              e.target.style.height = Math.min(e.target.scrollHeight, 80) + 'px'
            }}
            onKeyDown={handleKey}
            placeholder="Ask about finance, markets, investing…"
            rows={1}
            disabled={loading}
            style={{
              flex: 1, border: 'none', background: 'transparent', resize: 'none',
              outline: 'none', fontSize: compact ? 12.5 : 13, lineHeight: 1.5,
              color: '#0C1B33', padding: '3px 0', fontFamily: 'inherit', minHeight: 24,
            }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            style={{
              width: 28, height: 28, borderRadius: 7, border: 'none',
              background: input.trim() && !loading ? '#0C1B33' : '#e8e2d5',
              cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, transition: 'background 0.15s',
            }}
            aria-label="Send"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M2 8L14 8M9 3L14 8L9 13" stroke={input.trim() && !loading ? '#C9A84C' : '#9ca3af'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div style={{ fontSize: 9.5, color: '#b0aaa0', marginTop: 4, textAlign: 'center', letterSpacing: '0.02em' }}>
          Educational only · Not financial advice · S&amp;P Capital Services
        </div>
      </div>
    </div>
  )
}
