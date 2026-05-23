import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'How to Start Trading | S&P Capital Services',
  alternates: { canonical: '/trading/how-to-start' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['trading-how-to-start']} />
}
