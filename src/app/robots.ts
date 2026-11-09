import type { MetadataRoute } from 'next';
import { siteConfig } from '@/shared/config/site.config';
import { robotsConfig } from '@/shared/seo/config/robots.config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // در محیط غیرپروداکشن، کل سایت بسته می‌شود تا هیچ نسخه آزمایشی/staging ایندکس نشود
  if (!robotsConfig.isProduction) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  return {
    rules: {
      userAgent: '*',
      disallow: [...robotsConfig.disallow],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
