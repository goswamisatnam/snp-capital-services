import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static export for Vercel/Netlify deployment
  // output: 'export', // Uncomment for static HTML export

  // Image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'",
          },
        ],
      },
    ]
  },

  // Redirects (useful for SEO)
  async redirects() {
    return [
      { source: '/tools', destination: '/calculators', permanent: true },
    ]
  },
}

export default nextConfig
