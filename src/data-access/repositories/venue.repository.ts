import { categoryVenues } from '@/data/category-venues';
import { venueDetails, venueSlugs } from '@/data/venue-details';
import { Venues as featuredVenuesRaw } from '@/data/venues';
import { sortVenues, cityOf, type SearchSortOption } from '@/lib/venue-search';
import type { VenueDetail, VenueSummary } from '../types';

export interface VenueListParams {
  city?: string;
  categoryId?: number | string;
  sort?: SearchSortOption;
}

/**
 * قرارداد دسترسی به داده تالارها.
 * مصرف‌کننده‌ها (Page ها، Metadata Builder ها، Sitemap Generator ها) فقط به این Interface
 * وابسته‌اند، نه به شکل خام فایل‌های src/data. این یعنی روزی که داده از یک API/DB واقعی
 * می‌آید، فقط یک پیاده‌سازی جدید از همین Interface لازم است (Repository Pattern + DIP).
 */
export interface VenueTeaser {
  id: number | string;
  title: string;
  image: string;
  location: string;
  rating: number | string;
  capacity: string;
  tags: string[];
  price: string;
  href: string;
}

export interface VenueRepository {
  findAll(params?: VenueListParams): VenueSummary[];
  findBySlug(slug: string): VenueDetail | null;
  findFeatured(limit?: number): VenueTeaser[];
  findCheapest(limit?: number): VenueSummary[];
  getAllSlugs(): string[];
  count(params?: Pick<VenueListParams, 'city' | 'categoryId'>): number;
}

/**
 * پیاده‌سازی فعلی: داده از فایل‌های استاتیک src/data خوانده می‌شود.
 * وقتی API/DB واقعی آماده شد، یک `ApiVenueRepository` جدید با همین Interface نوشته
 * و در Factory (`getVenueRepository`) جایگزین می‌شود؛ هیچ مصرف‌کننده‌ای تغییر نمی‌کند.
 */
class InMemoryVenueRepository implements VenueRepository {
  findAll(params: VenueListParams = {}): VenueSummary[] {
    let result: VenueSummary[] = categoryVenues;

    if (params.city) {
      result = result.filter((v) => cityOf(v.location) === params.city);
    }

    if (params.categoryId != null) {
      result = result.filter((v) => String(v.categoryId) === String(params.categoryId));
    }

    if (params.sort) {
      result = sortVenues(result, params.sort);
    }

    return result;
  }

  findBySlug(slug: string): VenueDetail | null {
    return venueDetails[slug] ?? null;
  }

  findFeatured(limit = 3): VenueTeaser[] {
    return featuredVenuesRaw.slice(0, limit);
  }

  findCheapest(limit = 4): VenueSummary[] {
    return sortVenues(categoryVenues, 'price-asc').slice(0, limit);
  }

  getAllSlugs(): string[] {
    return venueSlugs;
  }

  count(params: Pick<VenueListParams, 'city' | 'categoryId'> = {}): number {
    return this.findAll(params).length;
  }
}

let instance: VenueRepository | null = null;

/** نقطه واحد دسترسی به VenueRepository؛ همه‌جای پروژه باید فقط از همین تابع استفاده کند */
export function getVenueRepository(): VenueRepository {
  if (!instance) {
    instance = new InMemoryVenueRepository();
  }
  return instance;
}
