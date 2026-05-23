import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0C1B33',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#C9A84C',
            marginBottom: 28,
          }}
        >
          Free Finance Calculators
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#ffffff',
            letterSpacing: '0.08em',
            marginBottom: 48,
          }}
        >
          SIP · CAGR · EMI · Retirement · 401(k)
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#F8F3EC',
            opacity: 0.6,
          }}
        >
          snpcapitalservices.com
        </div>
      </div>
    ),
    { ...size },
  )
}
