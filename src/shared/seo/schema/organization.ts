import { siteConfig } from '@/shared/config/site.config';

/** یک‌بار در layout ریشه رندر می‌شود؛ معرف کلی کسب‌وکار به گوگل */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.social),
  };
}

/**
 * WebSite + SearchAction: به گوگل می‌گوید فرم جست‌وجوی سایت را می‌شناسد و ممکن است
 * (به تشخیص خودش) یک Sitelinks Search Box زیر نتیجه سایت در گوگل نشان دهد.
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
