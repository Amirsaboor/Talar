const img1 =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop';
const img2 =
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop';

/** تصویر و اسلاگ هر شهر برای لینک به /category/city/[slug]؛ شمار واقعی تالارها هر شهر از داده اصلی محاسبه می‌شود */
export const cityMeta: Record<string, { slug: string; image: string }> = {
  تهران: { slug: 'tehran', image: img1 },
  اصفهان: { slug: 'isfahan', image: img2 },
  کرج: { slug: 'karaj', image: img2 },
  شهریار: { slug: 'shahriar', image: img1 },
  شیراز: { slug: 'shiraz', image: img1 },
  رشت: { slug: 'rasht', image: img2 },
};
