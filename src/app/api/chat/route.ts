import { NextRequest, NextResponse } from 'next/server'

// ---------------------------------------------------------------------------
// In-memory rate limiter — max RATE_LIMIT requests per IP per WINDOW_MS.
// NOTE: resets on cold starts (serverless). For production scale use Redis/Upstash.
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT = 20      // requests
const WINDOW_MS = 60_000   // per minute

// Periodically purge stale entries so the map doesn't grow unbounded
setInterval(() => {
  const cutoff = Date.now() - WINDOW_MS
  for (const [ip, times] of rateLimitMap) {
    const fresh = times.filter((t) => t > cutoff)
    if (fresh.length === 0) rateLimitMap.delete(ip)
    else rateLimitMap.set(ip, fresh)
  }
}, 60_000)

function getIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isAllowed(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) ?? []
  const recent = timestamps.filter((t) => now - t < WINDOW_MS)
  if (recent.length >= RATE_LIMIT) return false
  recent.push(now)
  rateLimitMap.set(ip, recent)
  return true
}

// ---------------------------------------------------------------------------
// System prompt lives on the server — never sent to the client
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `You are FinanceGPT, an expert AI financial educator for S&P Capital Services (snpcapitalservices.com). You specialize in both Indian and US financial markets. You are knowledgeable, friendly, and explain concepts clearly in simple language.

Your expertise covers:
- Indian markets: NSE, BSE, SEBI, Nifty 50, Sensex, Mutual Funds, SIP, ELSS, PPF, NPS, F&O, IPOs, LTCG/STCG tax
- US markets: NYSE, NASDAQ, SEC, S&P 500, ETFs, 401(k), Roth IRA, index funds
- Cross-border: NRI investing, DTAA India-US tax treaty, NRE/NRO accounts, FEMA rules
- General finance: Stocks, bonds, crypto, real estate, personal finance, budgeting, retirement

IMPORTANT RULES:
1. Always give educational information, never personal financial advice
2. Add "This is for educational purposes only — consult a qualified financial advisor for personal decisions." at the end of each response
3. Keep responses concise — 3-5 paragraphs max
4. Use simple language, avoid heavy jargon
5. When relevant, give both India and US context
6. Use ₹ for Indian amounts, $ for US amounts
7. Be encouraging and positive — finance can be intimidating, make it approachable`

type ChatMessage = { role: 'user' | 'assistant'; content: string }

export async function POST(req: NextRequest) {
  // Rate limit
  const ip = getIP(req)
  if (!isAllowed(ip)) {
    return NextResponse.json(
      { error: 'Too many requests — please wait a moment before sending another message.' },
      { status: 429 }
    )
  }

  // Key guard — must be server-side only (no NEXT_PUBLIC_ prefix)
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set')
    return NextResponse.json({ error: 'AI service is not configured.' }, { status: 503 })
  }

  // Parse and validate body
  let messages: ChatMessage[]
  try {
    const body = await req.json()
    if (!Array.isArray(body?.messages)) throw new Error('messages must be an array')

    messages = (body.messages as ChatMessage[])
      .slice(-20) // cap history to prevent abuse
      .map((m) => {
        if (!['user', 'assistant'].includes(m.role)) throw new Error('invalid role')
        if (typeof m.content !== 'string') throw new Error('invalid content type')
        return { role: m.role, content: m.content.slice(0, 4000) } // cap per-message length
      })

    if (messages.length === 0 || messages[messages.length - 1].role !== 'user') {
      throw new Error('last message must be from user')
    }
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Proxy to Anthropic — key stays server-side
  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages,
      }),
    })

    if (!upstream.ok) {
      const err = await upstream.json().catch(() => ({}))
      console.error('Anthropic error:', upstream.status, err)
      return NextResponse.json(
        { error: 'AI service temporarily unavailable. Please try again shortly.' },
        { status: 502 }
      )
    }

    const data = await upstream.json()
    const reply = data.content?.find((b: { type: string }) => b.type === 'text')?.text
    if (!reply) throw new Error('empty response from Anthropic')

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('Chat route error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
