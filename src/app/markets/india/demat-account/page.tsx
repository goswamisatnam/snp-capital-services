import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Demat Account Guide | S&P Capital Services',
  alternates: { canonical: '/markets/india/demat-account' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['demat-account']} />
}
