import { ImageResponse } from 'next/og'
import { FULL_ARTICLES } from '@/data/articles'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const article = FULL_ARTICLES.find((a) => a.slug === slug)

  if (!article) {
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
          <div style={{ fontSize: 72, fontWeight: 700, color: '#C9A84C', marginBottom: 24 }}>
            S&amp;P Capital Services
          </div>
          <div style={{ fontSize: 32, color: '#ffffff', marginBottom: 48 }}>
            Your Complete Guide to Financial Independence
          </div>
          <div style={{ fontSize: 20, color: '#F8F3EC', opacity: 0.6 }}>
            snpcapitalservices.com
          </div>
        </div>
      ),
      { ...size },
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0C1B33',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              background: 'rgba(201,168,76,0.15)',
              color: '#C9A84C',
              fontSize: 18,
              padding: '8px 20px',
              borderRadius: 9999,
            }}
          >
            {article.category}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              wordBreak: 'break-word',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              overflow: 'hidden',
            }}
          >
            {article.title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderLeft: '4px solid #C9A84C',
            paddingLeft: 20,
            marginTop: 40,
          }}
        >
          <div style={{ fontSize: 22, color: '#ffffff' }}>S&amp;P Capital Services</div>
          <div style={{ fontSize: 22, color: '#C9A84C' }}>snpcapitalservices.com</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
