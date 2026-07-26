'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { CategoryVenue } from '@/data/category-venues';
import {
  defaultFilters,
  filterVenues,
  paginate,
  sortVenues,
  totalPages as calcTotalPages,
  type CategoryFilters,
} from '@/lib/category-filters';
import { filtersFromSearchParams, filtersToSearchParams } from '@/lib/category-url-params';

const URL_SYNC_DEBOUNCE_MS = 300;

export function useCategoryFilters(venues: CategoryVenue[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // خواندن state اولیه از URL فعلی؛ یعنی رفرش یا اشتراک‌گذاری لینک، فیلترها را حفظ می‌کند
  const [filters, setFilters] = useState<CategoryFilters>(() => filtersFromSearchParams(searchParams));

  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // هر تغییر در فیلترها، با یک تأخیر کوتاه در URL نوشته می‌شود (بدون اسپم کردن تاریخچه مرورگر)
  useEffect(() => {
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(() => {
      const qs = filtersToSearchParams(filters).toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, URL_SYNC_DEBOUNCE_MS);

    return () => {
      if (syncTimer.current) clearTimeout(syncTimer.current);
    };
  }, [filters, pathname, router]);

  /** تغییر یک فیلد؛ تغییر هر فیلتری غیر از صفحه، صفحه را به ۱ برمی‌گرداند */
  const setFilter = useCallback(
    <K extends keyof CategoryFilters>(key: K, value: CategoryFilters[K]) => {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
        page: key === 'page' ? (value as number) : 1,
      }));
    },
    []
  );

  /** toggle برای فیلترهای چندانتخابی (منطقه، امکانات) */
  const toggleArrayFilter = useCallback((key: 'areas' | 'amenities', value: string) => {
    setFilters((prev) => {
      const current = prev[key];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: next, page: 1 };
    });
  }, []);

  const resetFilters = useCallback(() => setFilters(defaultFilters), []);

  const filteredVenues = useMemo(() => filterVenues(venues, filters), [venues, filters]);
  const sortedVenues = useMemo(
    () => sortVenues(filteredVenues, filters.sortBy),
    [filteredVenues, filters.sortBy]
  );

  const pages = calcTotalPages(sortedVenues.length);
  const currentPage = Math.min(filters.page, pages);
  const pageItems = useMemo(
    () => paginate(sortedVenues, currentPage),
    [sortedVenues, currentPage]
  );

  return {
    filters,
    setFilter,
    toggleArrayFilter,
    resetFilters,
    results: sortedVenues,
    resultCount: sortedVenues.length,
    pageItems,
    currentPage,
    totalPages: pages,
  };
}
