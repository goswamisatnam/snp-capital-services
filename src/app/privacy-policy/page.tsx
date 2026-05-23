import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for S&P Capital Services',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="px-[5vw] py-16 max-w-3xl mx-auto">
      <h1 className="font-display text-navy text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-700 mb-4">This page explains how we collect and use data on S&P Capital Services. The content here is a concise placeholder — please review and update to match your legal requirements.</p>

      <section className="mb-6">
        <h2 className="font-semibold text-navy mb-2">Data We Collect</h2>
        <p className="text-sm text-gray-600">We collect information you provide directly (email for newsletter signups), and anonymized usage data for analytics. We do not sell personal data.</p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-navy mb-2">Cookies & Analytics</h2>
        <p className="text-sm text-gray-600">We use cookies and server-side analytics to improve the site. You can opt out by disabling cookies in your browser.</p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-navy mb-2">Contact</h2>
        <p className="text-sm text-gray-600">Questions about privacy? <Link href="/about" className="text-teal-600">Contact us</Link>.</p>
      </section>
    </div>
  )
}
