import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Tax Planning Guide | S&P Capital Services',
  alternates: { canonical: '/personal-finance/tax-planning' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['tax-planning']} />
}
