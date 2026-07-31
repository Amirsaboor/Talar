'use client';

import { useMemo, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { categoryVenues } from '@/data/category-venues';
import { useRecentSearches } from './useRecentSearches';
import { getVenueQueryService } from '@/data-access/services/venue-query.service';
import { uniqueCities, type SearchSortOption } from '@/lib/venue-search';

const DEBOUNCE_MS = 300;
const PAGE_SIZE = 9;

export function useVenueSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [query, setQueryState] = useState(searchParams.get('q') ?? '');
  const [city, setCity] = useState(searchParams.get('city') ?? 'all');
  const [sort, setSort] = useState<SearchSortOption>('relevance');
  const [page, setPageState] = useState(Number(searchParams.get('page')) || 1);
  const { recent, addSearch } = useRecentSearches();

  // به‌روزرسانی URL با تاخیر کوتاه تا با هر ضربه کلید درخواست جدید ثبت نشود
  const syncUrl = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (nextQuery: string, nextCity: string, nextPage: number) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const params = new URLSearchParams();
        if (nextQuery) params.set('q', nextQuery);
        if (nextCity !== 'all') params.set('city', nextCity);
        if (nextPage > 1) params.set('page', String(nextPage));
        const qs = params.toString();
        startTransition(() => {
          router.replace(qs ? `/search?${qs}` : '/search', { scroll: false });
        });
      }, DEBOUNCE_MS);
    };
  }, [router, startTransition]);

  const setQuery = (value: string) => {
    setQueryState(value);
    setPageState(1);
    syncUrl(value, city, 1);
  };

  const setCityFilter = (value: string) => {
    setCity(value);
    setPageState(1);
    syncUrl(query, value, 1);
  };

  const setPage = (next: number) => {
    setPageState(next);
    syncUrl(query, city, next);
  };

  const commitSearch = (term: string) => {
    setQuery(term);
    addSearch(term);
  };

  const cities = useMemo(() => uniqueCities(categoryVenues), []);

  // فیلتر + مرتب‌سازی + صفحه‌بندی همه یک‌جا از VenueQueryService مشترک می‌آید
  // (همان سرویسی که useCategoryFilters و در آینده جست‌وجوی زنده Hero هم از آن استفاده می‌کنند)
  const result = useMemo(
    () => getVenueQueryService().query({ query, city, sort, page, pageSize: PAGE_SIZE }),
    [query, city, sort, page]
  );

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return categoryVenues.filter((v) => v.title.includes(query.trim())).slice(0, 5);
  }, [query]);

  return {
    query,
    setQuery,
    commitSearch,
    city,
    setCity: setCityFilter,
    cities,
    sort,
    setSort,
    results: result.items,
    totalCount: result.totalCount,
    page: result.page,
    totalPages: result.totalPages,
    setPage,
    suggestions,
    recentSearches: recent,
  };
}
