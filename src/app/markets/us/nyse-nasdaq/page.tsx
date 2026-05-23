import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'NYSE & NASDAQ | S&P Capital Services',
  alternates: { canonical: '/markets/us/nyse-nasdaq' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['nyse-nasdaq']} />
}
