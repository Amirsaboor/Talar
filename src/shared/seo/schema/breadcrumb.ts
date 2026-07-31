import { siteConfig } from '@/shared/config/site.config';

export interface BreadcrumbItem {
  name: string;
  /** مسیر نسبی، مثل '/category/city/mashhad' */
  path: string;
}

/** قابل‌استفاده در هر صفحه‌ای که مسیر breadcrumb دارد (Category، Venue، و بعداً Blog Post) */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
