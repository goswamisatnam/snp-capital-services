import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Mutual Funds Guide | S&P Capital Services',
  alternates: { canonical: '/investing/mutual-funds' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['mutual-funds']} />
}
