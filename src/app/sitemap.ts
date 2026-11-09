import type { MetadataRoute } from 'next';
import { getCityRepository, getCategoryRepository, getVenueRepository } from '@/data-access';
import { toSitemapEntries } from '@/shared/lib/sitemap-generator';

export const dynamic = 'force-static';

// دسته‌بندی‌های شبه‌واقعی که Entity مستقل در CategoryRepository ندارند ولی مسیر واقعی و
// قابل‌ایندکس هستند (categoryLabels در src/lib/resolve-category-route.ts)
const PSEUDO_CATEGORY_SLUGS = ['all', 'luxury', 'economy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = toSitemapEntries([
    { path: '/', changeFrequency: 'daily', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.5 },
    // '/search' عمداً اینجا نیست: صفحه noindex است (فاز ۳.۴)، در sitemap هم نباید باشد
  ]);

  const cityPages = toSitemapEntries(
    getCityRepository()
      .findAll()
      .map((city) => ({
        path: `/category/city/${city.slug}`,
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }))
  );

  const categoryPages = toSitemapEntries([
    ...getCategoryRepository()
      .findAll()
      .map((category) => ({
        path: category.href,
        changeFrequency: 'daily' as const,
        priority: 0.7,
      })),
    ...PSEUDO_CATEGORY_SLUGS.map((slug) => ({
      path: `/category/${slug}`,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    })),
  ]);

  const venuePages = toSitemapEntries(
    getVenueRepository()
      .getAllSlugs()
      .map((slug) => ({
        path: `/venue/${slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
  );

  return [...staticPages, ...cityPages, ...categoryPages, ...venuePages];
}
