import Link from 'next/link'
import { JsonLd } from './JsonLd'
import { SITE_CONFIG } from '@/lib/constants'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  }

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs flex-wrap">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-1.5">
            {index > 0 && <span className="text-navy-400 select-none">/</span>}
            {index < items.length - 1 ? (
              <Link href={item.href} className="text-navy-500 hover:text-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
