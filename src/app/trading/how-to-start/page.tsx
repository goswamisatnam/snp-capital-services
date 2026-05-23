import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'How to Start Trading | S&P Capital Services',
  alternates: { canonical: '/trading/how-to-start' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Start Trading in India',
  description: 'A step-by-step guide to start trading stocks and derivatives in India',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Open a Demat Account', text: 'Choose a SEBI-registered broker and open a Demat + Trading account online. Documents needed: PAN card, Aadhaar, bank statement.' },
    { '@type': 'HowToStep', position: 2, name: 'Complete KYC', text: 'Submit Know Your Customer documents through your broker\'s app or website. In-person verification (IPV) may be required.' },
    { '@type': 'HowToStep', position: 3, name: 'Fund Your Account', text: 'Transfer funds via UPI, NEFT, or net banking to your trading account. Most brokers have no minimum deposit.' },
    { '@type': 'HowToStep', position: 4, name: 'Learn the Platform', text: 'Practice on the broker\'s paper trading mode or simulator before committing real money.' },
    { '@type': 'HowToStep', position: 5, name: 'Start with Large-Cap Stocks', text: 'Begin with Nifty 50 companies — they are liquid, transparent, and easier to research than small-caps.' },
    { '@type': 'HowToStep', position: 6, name: 'Set a Risk Budget', text: 'Never risk more than 1-2% of your capital on a single trade. Use stop-loss orders on every position.' },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd schema={howToSchema} />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Trading', href: '/trading' },
          { label: 'How to Start Trading', href: '/trading/how-to-start' },
        ]}
      />
      <TopicPage data={TOPIC_PAGES['trading-how-to-start']} />
    </>
  )
}
