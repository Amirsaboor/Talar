'use client';

import { useMemo, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { categoryVenues } from '@/data/category-venues';
import { useRecentSearches } from './useRecentSearches';
import {
  filterVenues,
  sortVenues,
  uniqueCities,
  type SearchSortOption,
} from '@/lib/venue-search';

const DEBOUNCE_MS = 300;

export function useVenueSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [query, setQueryState] = useState(searchParams.get('q') ?? '');
  const [city, setCity] = useState(searchParams.get('city') ?? 'all');
  const [sort, setSort] = useState<SearchSortOption>('relevance');
  const { recent, addSearch } = useRecentSearches();

  // به‌روزرسانی URL با تاخیر کوتاه تا با هر ضربه کلید درخواست جدید ثبت نشود
  const syncUrl = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (nextQuery: string, nextCity: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const params = new URLSearchParams();
        if (nextQuery) params.set('q', nextQuery);
        if (nextCity !== 'all') params.set('city', nextCity);
        const qs = params.toString();
        startTransition(() => {
          router.replace(qs ? `/search?${qs}` : '/search', { scroll: false });
        });
      }, DEBOUNCE_MS);
    };
  }, [router, startTransition]);

  const setQuery = (value: string) => {
    setQueryState(value);
    syncUrl(value, city);
  };

  const setCityFilter = (value: string) => {
    setCity(value);
    syncUrl(query, value);
  };

  const commitSearch = (term: string) => {
    setQuery(term);
    addSearch(term);
  };

  const cities = useMemo(() => uniqueCities(categoryVenues), []);

  const results = useMemo(() => {
    const filtered = filterVenues(categoryVenues, { query, city });
    return sortVenues(filtered, sort);
  }, [query, city, sort]);

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
    results,
    suggestions,
    recentSearches: recent,
  };
}
