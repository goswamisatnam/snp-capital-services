import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Indian F&O | S&P Capital Services',
  alternates: { canonical: '/markets/india/indian-fno' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['indian-fno']} />
}
