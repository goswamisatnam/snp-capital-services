import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Real Estate Investing | S&P Capital Services',
  alternates: { canonical: '/investing/real-estate' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['real-estate']} />
}
