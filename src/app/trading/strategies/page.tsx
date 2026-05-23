import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Trading Strategies | S&P Capital Services',
  alternates: { canonical: '/trading/strategies' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['trading-strategies']} />
}
