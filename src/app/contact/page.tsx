import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${SITE_CONFIG.name}`,
  twitter: { card: 'summary_large_image' },
}

export default function ContactPage() {
  return (
    <div className="px-[5vw] py-16 max-w-3xl mx-auto">
      <h1 className="font-display text-navy text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-sm text-gray-700 mb-6">We love hearing from readers. Use the form below for general inquiries, partnership requests, or corrections.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-navy font-semibold mb-2">Write to us</h2>
          <p className="text-sm text-gray-600 mb-3">Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-600">{SITE_CONFIG.email}</a></p>
          <p className="text-sm text-gray-600 mb-3">Location: Remote (India / US focus)</p>
          <p className="text-sm text-gray-600">Response time: We aim to reply within 3 business days.</p>
        </div>

        <div>
          <h2 className="text-navy font-semibold mb-2">Business & Partnerships</h2>
          <p className="text-sm text-gray-600 mb-3">For partnership, guest posts, or speaking requests, include relevant details and availability.</p>
          <p className="text-sm text-gray-600">For press enquiries, mention "Press" in the subject line when emailing.</p>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}
