import { getVenueRepository } from '../repositories/venue.repository';
import { matchesQuery, sortVenues, type SearchSortOption } from '@/lib/venue-search';
import { DEFAULT_FILTERS, filterCategoryVenues, type CategoryFiltersState } from '@/lib/category-filters';
import { paginate, type PaginatedResult } from '@/shared/lib/pagination';
import type { VenueSummary } from '../types';

export interface VenueQueryParams {
  /** متن آزاد جست‌وجو (عنوان/موقعیت) — برای Hero و صفحه /search */
  query?: string;
  /** 'all' یا نام دقیق یک شهر مجاز */
  city?: string;
  /** فیلترهای غنی صفحه Category (منطقه، ظرفیت، بودجه، امکانات، امتیاز، نوع تالار...) */
  filters?: Partial<CategoryFiltersState>;
  sort?: SearchSortOption;
  page?: number;
  pageSize?: number;
}

/**
 * نقطه واحد فیلتر + مرتب‌سازی + صفحه‌بندی تالارها.
 *
 * قبل از این فایل، `useCategoryFilters` و `useVenueSearch` هرکدام مستقل داده را از جایی
 * می‌خواندند و خودشان فیلتر/سورت را پیاده‌سازی می‌کردند؛ این سرویس آن منطق مشترک (خواندن از
 * Repository، جست‌وجوی متنی، فیلترهای غنی، مرتب‌سازی، صفحه‌بندی) را یک‌جا جمع می‌کند تا Hero،
 * صفحه Search و صفحه Category همه از یک منبع حقیقت واحد تغذیه شوند.
 */
export interface VenueQueryService {
  query(params?: VenueQueryParams): PaginatedResult<VenueSummary>;
}

class InMemoryVenueQueryService implements VenueQueryService {
  query(params: VenueQueryParams = {}): PaginatedResult<VenueSummary> {
    const { query = '', city, filters, sort = 'relevance', page = 1, pageSize = 9 } = params;

    let result: VenueSummary[] = getVenueRepository().findAll({
      city: city && city !== 'all' ? city : undefined,
    });

    if (query.trim()) {
      result = result.filter((v) => matchesQuery(v, query));
    }

    if (filters) {
      result = filterCategoryVenues(result, { ...DEFAULT_FILTERS, ...filters });
    }

    result = sortVenues(result, sort);

    return paginate(result, page, pageSize);
  }
}

let instance: VenueQueryService | null = null;

/** نقطه واحد دسترسی به VenueQueryService؛ همه‌جای پروژه باید فقط از همین تابع استفاده کند */
export function getVenueQueryService(): VenueQueryService {
  if (!instance) {
    instance = new InMemoryVenueQueryService();
  }
  return instance;
}
