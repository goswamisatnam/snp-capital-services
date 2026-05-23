import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Cryptocurrency Guide | S&P Capital Services',
  alternates: { canonical: '/investing/cryptocurrency' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['cryptocurrency']} />
}
