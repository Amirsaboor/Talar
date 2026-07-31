import { siteConfig } from '@/shared/config/site.config';

export interface CollectionPageInput {
  name: string;
  description: string;
  /** مسیر نسبی همین صفحه */
  path: string;
  /** موارد فهرست‌شده در این صفحه (تالارها) */
  items: { name: string; path: string }[];
}

/** برای صفحات فهرستی: Category، City. (Search عمداً استفاده نمی‌کند چون noindex است — فاز ۳.۴) */
export function buildCollectionPageSchema({
  name,
  description,
  path,
  items,
}: CollectionPageInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${siteConfig.url}${path}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteConfig.url}${item.path}`,
        name: item.name,
      })),
    },
  };
}
