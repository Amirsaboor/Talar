import { cityMeta } from '@/data/cities';

/**
 * تنظیمات مرکزی سایت — تنها منبع معتبر (Single Source of Truth) برای مقادیری
 * که باید در چند لایه مختلف (فیلتر، Repository، Metadata، Sitemap، فرم جستجو) یکسان باشند.
 *
 * هر جای دیگر پروژه که نیاز به «شهرهای مجاز» یا اطلاعات پایه سایت دارد،
 * باید از همین فایل import کند، نه این‌که دوباره هاردکد کند.
 *
 * نکته: چک‌لیست فاز ۲ یک فایل جدا `shared/seo/config/site.config.ts` پیشنهاد داده بود؛
 * عمداً همه‌چیز همین‌جا نگه داشته شده تا دو فایل «site.config» در دو مسیر نزدیک به هم
 * نداشته باشیم (خودِ همین دوگانگی نمونه‌ای از مشکلی‌ست که این لایه قرار است حل کند).
 * منطق ساخت Metadata (`buildMetadata`) در `shared/seo/metadata.ts` از همین یک فایل تغذیه می‌کند.
 */
export const siteConfig = {
  name: 'تالارگاه',
  /** برای title.template و جاهایی که فقط نام کوتاه لازم است */
  shortName: 'تالارگاه',
  description:
    'بهترین تالارهای پذیرایی، باغ‌تالارها و خدمات عروسی مشهد، طرقبه و شاندیز را در چند دقیقه پیدا کنید، مقایسه کنید و با مکان موردنظر خود تماس بگیرید.',
  /** دامنه رسمی؛ منبع Canonical URL و OpenGraph URL برای همه صفحات */
  url: 'https://talargah.ir',
  locale: 'fa_IR',
  keywords: [
    'تالار عروسی مشهد',
    'باغ تالار مشهد',
    'تالار پذیرایی مشهد',
    'تالار عروسی طرقبه',
    'تالار عروسی شاندیز',
  ],
  social: {
    instagram: 'https://instagram.com/talargah.ir',
    telegram: 'https://t.me/talargah_support',
  },
  /** برابر emerald-800 برند (globals.css)؛ برای manifest.ts و meta theme-color */
  themeColor: '#1b3e32',
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
