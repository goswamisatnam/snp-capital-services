import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Introduction to Trading | S&P Capital Services',
  alternates: { canonical: '/trading/introduction' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['trading-introduction']} />
}
