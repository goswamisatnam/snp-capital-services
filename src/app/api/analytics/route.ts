import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const payload = await req.json()
    // Minimal server-side analytics receiver. Extend to forward to provider (Segment, PostHog, Mixpanel)
    console.log('[analytics] event:', payload.event, payload.props ?? '')

    // Optionally forward to external analytics endpoint if set
    const forwardUrl = process.env.ANALYTICS_FORWARD_URL
    const forwardKey = process.env.ANALYTICS_FORWARD_KEY
    if (forwardUrl) {
      try {
        await fetch(forwardUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(forwardKey ? { Authorization: `Bearer ${forwardKey}` } : {}),
          },
          body: JSON.stringify(payload),
        })
      } catch (e) {
        console.warn('analytics forward failed', e)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('analytics route error', err)
    return NextResponse.json({ error: 'invalid payload' }, { status: 400 })
  }
}
