import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Emergency Fund Guide | S&P Capital Services',
  alternates: { canonical: '/personal-finance/emergency-fund' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['emergency-fund']} />
}
