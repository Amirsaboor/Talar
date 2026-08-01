import type { MetadataRoute } from 'next';
import { siteConfig } from '@/shared/config/site.config';

export interface SitemapUrlInput {
  /** مسیر نسبی، مثل '/about' یا '/venue/golestan' */
  path: string;
  lastModified?: Date;
  changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority?: number;
}

/** سقف واقعی هر فایل sitemap در Next.js؛ اگر تعداد URL از این عبور کند باید چند فایل ساخته شود */
export const SITEMAP_URL_LIMIT = 50_000;

/**
 * تنها تابعی که باید ورودی خام هر Repository (city/category/venue/...) را به خروجی استاندارد
 * `MetadataRoute.Sitemap` تبدیل کند؛ همه‌جا (app/sitemap.ts و هر زیرمجموعه‌ای که در آینده لازم شود)
 * باید از همین استفاده کند تا تبدیل «مسیر نسبی -> URL کامل + قالب استاندارد» یک‌بار نوشته شده باشد.
 *
 * توجه مقیاس: این پروژه فعلاً حدود ۲۰-۳۰ URL دارد، یعنی چندین برابر زیر سقف ۵۰٬۰۰۰ تایی
 * Next.js. به همین دلیل الان یک `app/sitemap.ts` تک‌فایلی کافی و درست‌تر است؛ اگر روزی
 * تعداد Venue/City/Category خیلی بیشتر شد، همین تابع پایه‌ی chunk کردن (`SITEMAP_URL_LIMIT`)
 * را دارد و می‌شود بدون تغییر در Repositoryها به ساختار چندفایلی (`sitemap/[id]/route.ts`) رفت.
 */
export function toSitemapEntries(urls: SitemapUrlInput[]): MetadataRoute.Sitemap {
  return urls.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
  }));
}
