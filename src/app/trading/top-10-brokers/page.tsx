import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Top 10 Brokers | S&P Capital Services',
  alternates: { canonical: '/trading/top-10-brokers' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['top-10-brokers']} />
}
