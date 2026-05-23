import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for S&P Capital Services',
}

export default function TermsOfUsePage() {
  return (
    <div className="px-[5vw] py-16 max-w-3xl mx-auto">
      <h1 className="font-display text-navy text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="text-sm text-gray-700 mb-4">These Terms of Use govern your access to and use of snpcapitalservices.com. Please read them carefully.</p>

      <section className="mb-6">
        <h2 className="font-semibold text-navy mb-2">Acceptance</h2>
        <p className="text-sm text-gray-600">By using this site you agree to these terms. If you do not agree, do not use the site.</p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-navy mb-2">Use of Content</h2>
        <p className="text-sm text-gray-600">All content is for informational purposes only and does not constitute financial advice. See the full disclaimer in the footer.</p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-navy mb-2">Contact</h2>
        <p className="text-sm text-gray-600">Questions about these terms? Reach out via the <a href="/about" className="text-teal-600">Contact</a> page.</p>
      </section>
    </div>
  )
}
