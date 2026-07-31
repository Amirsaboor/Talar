import { cityMeta } from '@/data/cities';

/**
 * تنظیمات مرکزی سایت — تنها منبع معتبر (Single Source of Truth) برای مقادیری
 * که باید در چند لایه مختلف (فیلتر، Repository، Metadata، Sitemap، فرم جستجو) یکسان باشند.
 *
 * هر جای دیگر پروژه که نیاز به «شهرهای مجاز» یا اطلاعات پایه سایت دارد،
 * باید از همین فایل import کند، نه این‌که دوباره هاردکد کند.
 */
export const siteConfig = {
  name: 'تالارگاه',
  /** شهرهای مجاز پلتفرم؛ منبع اصلی: src/data/cities.ts -> cityMeta */
  allowedCities: Object.keys(cityMeta) as readonly string[],
  cityMeta,
} as const;

export type AllowedCity = keyof typeof cityMeta;

/** آیا نام شهر داده‌شده جزو شهرهای مجاز پلتفرم است؟ */
export function isAllowedCity(city: string): city is AllowedCity {
  return city in cityMeta;
}

/** آیا اسلاگ شهر داده‌شده معتبر است؟ (مثل 'mashhad', 'torghabeh', 'shandiz') */
export function isAllowedCitySlug(slug: string): boolean {
  return Object.values(cityMeta).some((c) => c.slug === slug);
}

/** نام فارسی شهر را از روی اسلاگ آن برمی‌گرداند، یا در صورت نامعتبر بودن null */
export function cityNameFromSlug(slug: string): string | null {
  const entry = Object.entries(cityMeta).find(([, meta]) => meta.slug === slug);
  return entry ? entry[0] : null;
}
