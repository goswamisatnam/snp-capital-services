import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'S&P Capital Services',
    short_name: 'SNP Capital',
    description: 'India & US Financial Literacy',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F3EC',
    theme_color: '#0C1B33',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
