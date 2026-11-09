'use client';

import { useEffect, useMemo, useState } from 'react';
import { getVenueQueryService } from '@/data-access/services/venue-query.service';
import type { CategoryFiltersState } from '@/lib/category-filters';
import type { SearchSortOption } from '@/lib/venue-search';

const DEFAULT_PAGE_SIZE = 9;

export interface LiveVenueSearchParams {
  query?: string;
  city?: string;
  filters?: Partial<CategoryFiltersState>;
  sort?: SearchSortOption;
  pageSize?: number;
}

/**
 * هوک سبک روی VenueQueryService مشترک (فاز ۱) برای هر بخشی که فقط یک نتیجه‌ی زنده
 * و صفحه‌بندی‌شده لازم دارد و خودش state پیچیده فیلترها را مدیریت نمی‌کند
 * (آن را useCategoryFilters/useVenueSearch در صفحات خودشان انجام می‌دهند).
 * مصرف‌کننده فعلی: بخش «همه تالارها» زیر Hero صفحه اصلی (فاز ۸).
 *
 * توجه: filters/city/sort را از بیرون می‌گیرد، خودش تغییرشان نمی‌دهد — یعنی صاحب
 * state واقعی فیلترها همان کامپوننتی‌ست که این هوک را صدا می‌زند (مثل HeroSearchForm).
 */
export function useLiveVenueSearch({
  query = '',
  city = 'all',
  filters,
  sort = 'relevance',
  pageSize = DEFAULT_PAGE_SIZE,
}: LiveVenueSearchParams) {
  const [page, setPageState] = useState(1);

  // با هر تغییر فیلتر، سورت یا عبارت جست‌وجو، نتایج عوض می‌شود؛ برگشت به صفحه اول
  useEffect(() => {
    setPageState(1);
  }, [query, city, filters, sort]);

  const result = useMemo(
    () => getVenueQueryService().query({ query, city, filters, sort, page, pageSize }),
    [query, city, filters, sort, page, pageSize]
  );

  const setPage = (next: number) => {
    setPageState(Math.min(Math.max(1, next), result.totalPages));
  };

  return { ...result, setPage };
}
