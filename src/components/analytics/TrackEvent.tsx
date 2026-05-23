'use client'

import { useEffect } from 'react'

declare const gtag: (...args: unknown[]) => void

interface TrackEventProps {
  eventName: string
  params?: Record<string, string | number | boolean>
}

export function TrackEvent({ eventName, params }: TrackEventProps) {
  useEffect(() => {
    try {
      gtag('event', eventName, params ?? {})
    } catch {
      // gtag may not be loaded in dev
    }
  }, [])

  return null
}
