'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
import { paginate } from '@/shared/lib/pagination';
import { filtersToSearchParams, searchParamsToFilters } from '@/lib/filter-url';

const PAGE_SIZE = 9;

/**
 * تمام state فیلترها (شهر، منطقه، ظرفیت، بودجه، امکانات، امتیاز، نوع تالار، سورت، صفحه)
 * منبع حقیقتش URL Search Params است، نه فقط یک متغیر React. یعنی:
 *   - رفرش صفحه فیلترها را نگه می‌دارد
 *   - لینک فیلترشده قابل اشتراک‌گذاری است
 *   - دکمه Back/Forward مرورگر درست کار می‌کند (چون router.replace خودش را در history جای می‌دهد)
 */
export function useCategoryFilters<T extends CategoryVenue>(venues: T[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<CategoryFiltersState>(
    () => searchParamsToFilters(searchParams).filters
  );
  const [sort, setSort] = useState<SearchSortOption>(() => searchParamsToFilters(searchParams).sort);
  const [page, setPageState] = useState(() => searchParamsToFilters(searchParams).page);

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

  const setCity = (city: string) => setFilters((f) => ({ ...f, city }));

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

  // با هر تغییر فیلتر یا مرتب‌سازی (نه در رندر اول)، نتایج عوض می‌شود، پس به صفحه اول برمی‌گردیم.
  // بدون این isFirstRender، همین افکت در mount هم اجرا می‌شد و ?page= دقیق‌شده از URL
  // (مثلاً لینک اشتراک‌گذاری‌شده به صفحه ۳) بلافاصله پاک می‌شد.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPageState(1);
  }, [filters, sort]);

  const paginated = useMemo(() => paginate(allResults, page, PAGE_SIZE), [allResults, page]);

  // همگام‌سازی کامل URL (فیلترها + سورت + صفحه) — تنها جای واقعی نوشتن URL.
  // عمداً فقط به filters/sort/paginated.page وابسته است، نه به router/pathname/searchParams —
  // چون آن‌ها با خودِ router.replace عوض می‌شوند و وابسته‌کردنشان حلقه بی‌پایان می‌ساخت.
  useEffect(() => {
    const params = filtersToSearchParams(filters, sort, paginated.page);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, sort, paginated.page]);

  const setPage = (next: number) => {
    setPageState(Math.min(Math.max(1, next), paginated.totalPages));
  };

  const count = useMemo(() => activeFilterCount(filters), [filters]);

  return {
    filters,
    setCity,
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
    results: paginated.items,
    totalCount: paginated.totalCount,
    page: paginated.page,
    totalPages: paginated.totalPages,
    setPage,
  };
}

export type UseCategoryFiltersReturn = ReturnType<typeof useCategoryFilters>;
