import type { ElementType } from 'react';
import type { CategoryVenue } from '@/lib/category-filters';
import type { VenueDetail } from '@/data/venue-details';

/** خلاصه یک تالار برای نمایش در کارت‌ها (لیست، جست‌وجو، صفحه اصلی) */
export type VenueSummary = CategoryVenue;

/** جزئیات کامل یک تالار برای صفحه اختصاصی آن */
export type { VenueDetail };

export interface CategoryEntity {
  id: number | string;
  name: string;
  href: string;
  icon: ElementType;
}

export interface CityEntity {
  /** نام فارسی شهر، مثل «مشهد» */
  name: string;
  /** اسلاگ انگلیسی برای URL، مثل «mashhad» */
  slug: string;
  image: string;
  /** تعداد واقعی تالارهای موجود در این شهر؛ همیشه محاسبه‌شده است، هرگز عدد ثابت نیست */
  venueCount: number;
}
