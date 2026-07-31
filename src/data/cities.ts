const img1 =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop';
const img2 =
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop';
const img3 =
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop';

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
