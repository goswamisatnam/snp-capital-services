import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body || {}

    if (!email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Lightweight handling: log to server console and fire internal analytics event
    console.info('Contact submission', { name, email, message: message?.slice(0, 200) })

    try {
      // Optionally forward to analytics endpoint in the app
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/api/analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'contact_submission', props: { name, email } }),
      })
    } catch (e) {
      // non-blocking
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
