const img1 =
  '/images/6.webp';
const img2 =
  '/images/1.webp';
const img3 =
  '/images/2.webp';

/**
 * محدوده جغرافیایی سایت: فقط مشهد، طرقبه و شاندیز.
 * تصویر و اسلاگ هر شهر برای لینک به /category/city/[slug]؛
 * شمار واقعی تالارها هر شهر از داده اصلی (categoryVenues) محاسبه می‌شود، نه عدد ثابت.
 */
export const cityMeta: Record<string, { slug: string; image: string }> = {
  مشهد: { slug: 'mashhad', image: img1 },
  طرقبه: { slug: 'torghabeh', image: img2 },
  شاندیز: { slug: 'shandiz', image: img3 },
};

/** فهرست شهرهای مجاز پلتفرم؛ منبع واحد (Single Source of Truth) برای اعتبارسنجی City در فازهای بعدی */
export const ALLOWED_CITIES = Object.keys(cityMeta);
