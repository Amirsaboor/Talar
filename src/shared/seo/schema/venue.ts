import { parsePersianNumber } from '@/lib/persian-numbers';
import { cityOf } from '@/lib/venue-search';
import { siteConfig } from '@/shared/config/site.config';
import type { VenueDetail } from '@/data-access/types';

/**
 * ترکیب LocalBusiness + EventVenue + AggregateRating + Review + Offer برای صفحه Venue
 * (Composite: چند schema.org type مرتبط در یک شیء).
 *
 * دو چیز عمداً حذف شده‌اند، چون داده واقعی‌شان در venue-details.ts وجود ندارد و
 * جعل‌کردنشان گمراه‌کننده و برخلاف دستورالعمل Structured Data گوگل است:
 *  - geo (GeoCoordinates): هیچ فیلد lat/lng در داده نیست.
 *  - review[].datePublished: داده فقط «ماه سال شمسی» دارد (مثلاً «مهر ۱۴۰۳»)، نه روز
 *    دقیق و نه تقویم میلادی؛ ساختن یک تاریخ ISO دقیق از این یعنی جعل دقتی که وجود ندارد.
 *  - review[].reviewRating: نظرات تک‌تک امتیاز ستاره‌ای ندارند، فقط venue.rating کلی هست.
 */
export function buildVenueSchema(venue: VenueDetail, slug: string) {
  const url = `${siteConfig.url}/venue/${slug}`;
  // تومان × ۱۰ = ریال؛ این یک تبدیل واحد ثابت است (نه نرخ ارز)، نه تقریب
  const priceRial = parsePersianNumber(venue.startingPrice) * 1_000_000 * 10;

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EventVenue'],
    '@id': url,
    name: venue.title,
    url,
    image: venue.images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.address,
      addressLocality: cityOf(venue.location),
      addressRegion: 'خراسان رضوی',
      addressCountry: 'IR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: venue.rating,
      reviewCount: parsePersianNumber(venue.reviewCount),
    },
    review: venue.reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.text,
    })),
    offers: {
      '@type': 'Offer',
      price: priceRial,
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
      url,
    },
  };
}
