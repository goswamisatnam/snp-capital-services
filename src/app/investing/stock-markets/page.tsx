import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Stock Markets Guide | S&P Capital Services',
  alternates: { canonical: '/investing/stock-markets' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['stock-markets']} />
}
