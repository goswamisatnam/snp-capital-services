import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Silently accept in dev/demo mode — no API key configured
      console.warn('RESEND_API_KEY not set. Newsletter signup logged only.')
      return NextResponse.json({ success: true, demo: true })
    }

    // 1. Add contact to Resend audience
    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (audienceId) {
      await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          first_name: name?.split(' ')[0] ?? '',
          last_name: name?.split(' ').slice(1).join(' ') ?? '',
          unsubscribed: false,
        }),
      })
    }

    // 2. Send welcome email
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `S&P Capital Services <newsletter@snpcapitalservices.com>`,
        to: [email],
        subject: '📈 Welcome to S&P Capital Services!',
        html: `
          <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #0C1B33;">
            <div style="background: #0C1B33; padding: 32px 40px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #D4AF37; font-size: 24px; margin: 0;">S&P Capital Services</h1>
              <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0;">Your Financial Literacy Hub</p>
            </div>
            <div style="background: #FEFDF9; padding: 40px; border: 1px solid #E8E2D5; border-top: none; border-radius: 0 0 12px 12px;">
              <h2 style="color: #0C1B33;">Welcome${name ? `, ${name.split(' ')[0]}` : ''}! 🎉</h2>
              <p style="color: #555; line-height: 1.7;">You're now subscribed to India & US market insights, free financial tools, and educational content — completely free, always.</p>
              <p style="color: #555; line-height: 1.7;">Here's what you'll get:</p>
              <ul style="color: #555; line-height: 2;">
                <li>📊 Weekly market analysis (India & US)</li>
                <li>📚 In-depth investing guides</li>
                <li>🧮 Calculator tutorials and tips</li>
                <li>📖 New dictionary terms explained</li>
              </ul>
              <a href="https://snpcapitalservices.com/calculators" style="display: inline-block; background: #0C1B33; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 16px;">
                Explore Free Tools →
              </a>
              <p style="color: #aaa; font-size: 12px; margin-top: 32px;">You can unsubscribe at any time. No spam, ever.</p>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send welcome email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
