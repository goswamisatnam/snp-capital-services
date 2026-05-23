import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'
import { Breadcrumb } from '@/components/seo/Breadcrumb'

export const metadata: Metadata = {
  title: 'Budgeting Guide | S&P Capital Services',
  alternates: { canonical: '/personal-finance/budgeting' },
}

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Personal Finance', href: '/personal-finance' },
          { label: 'Budgeting', href: '/personal-finance/budgeting' },
        ]}
      />
      <TopicPage data={TOPIC_PAGES['budgeting']} />
    </>
  )
}
