'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  type ArrayFilterKey,
  type CapacityOption,
  type CategoryFiltersState,
  type CategoryVenue,
  DEFAULT_FILTERS,
  activeFilterCount,
  filterCategoryVenues,
} from '@/lib/category-filters';
import { sortVenues, type SearchSortOption } from '@/lib/venue-search';

const PAGE_SIZE = 9;

export function useCategoryFilters<T extends CategoryVenue>(venues: T[]) {
  const [filters, setFilters] = useState<CategoryFiltersState>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SearchSortOption>('relevance');
  const [page, setPageState] = useState(1);

  /** افزودن/حذف یک مقدار در فیلترهای چندانتخابی (منطقه، امکانات، نوع فضا، نوع تالار) */
  const toggle = (key: ArrayFilterKey, value: string) => {
    setFilters((f) => {
      const list = f[key];
      const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
      return { ...f, [key]: next };
    });
  };

  /** برای دکمه‌های تک‌انتخابی (مثل «فضا» در شیت موبایل): با کلیک دوباره، انتخاب پاک می‌شود */
  const setSingle = (key: ArrayFilterKey, value: string) => {
    setFilters((f) => ({ ...f, [key]: f[key].includes(value) ? [] : [value] }));
  };

  /** انتخاب بازه ظرفیت از پیش‌تعریف‌شده (کلیک دوباره روی گزینه فعال، آن را پاک می‌کند) */
  const setCapacityPreset = (option: CapacityOption) => {
    setFilters((f) => {
      const isActive = f.capacityMin === option.min && f.capacityMax === option.max;
      return isActive
        ? { ...f, capacityMin: 0, capacityMax: Infinity }
        : { ...f, capacityMin: option.min, capacityMax: option.max };
    });
  };

  /** اسلایدر ظرفیت در شیت موبایل، فقط سقف ظرفیت را تنظیم می‌کند */
  const setCapacityMax = (max: number) => {
    setFilters((f) => ({ ...f, capacityMax: max }));
  };

  const setBudget = (min: number | null, max: number | null) => {
    setFilters((f) => ({ ...f, budgetMin: min, budgetMax: max }));
  };

  const setMinRating = (value: number) => {
    setFilters((f) => ({ ...f, minRating: f.minRating === value ? null : value }));
  };

  const removeFilter = (key: ArrayFilterKey, value: string) => toggle(key, value);

  const clearCapacity = () => setFilters((f) => ({ ...f, capacityMin: 0, capacityMax: Infinity }));

  const clearAll = () => setFilters(DEFAULT_FILTERS);

  const allResults = useMemo(
    () => sortVenues(filterCategoryVenues(venues, filters), sort),
    [venues, filters, sort]
  );

  const totalPages = Math.max(1, Math.ceil(allResults.length / PAGE_SIZE));
  // اگر بعد از تغییر فیلتر تعداد صفحات کم شد، صفحه فعلی را در بازه معتبر نگه می‌داریم
  const currentPage = Math.min(page, totalPages);

  // با هر تغییر فیلتر یا مرتب‌سازی، نتایج عوض می‌شود، پس باید به صفحه اول برگردیم
  useEffect(() => {
    setPageState(1);
  }, [filters, sort]);

  const setPage = (next: number) => {
    setPageState(Math.min(Math.max(1, next), totalPages));
  };

  const results = useMemo(
    () => allResults.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [allResults, currentPage]
  );

  const count = useMemo(() => activeFilterCount(filters), [filters]);

  return {
    filters,
    toggle,
    setSingle,
    setCapacityPreset,
    setCapacityMax,
    setBudget,
    setMinRating,
    removeFilter,
    clearCapacity,
    clearAll,
    activeCount: count,
    sort,
    setSort,
    results,
    totalCount: allResults.length,
    page: currentPage,
    totalPages,
    setPage,
  };
}

export type UseCategoryFiltersReturn = ReturnType<typeof useCategoryFilters>;
