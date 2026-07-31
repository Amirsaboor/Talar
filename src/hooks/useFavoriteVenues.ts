'use client';

import { useMemo, useState } from 'react';
import { useFavorites } from '@/context/FavoritesContext';
import { venueDetails } from '@/data/venue-details';
import { toCardVenue } from '@/lib/venue-adapters';
import { parsePersianNumber } from '@/lib/persian-numbers';

export type FavoritesSortOption = 'recent' | 'price-asc' | 'price-desc' | 'rating';

export const sortOptions: { value: FavoritesSortOption; label: string }[] = [
  { value: 'recent', label: 'جدیدترین ذخیره' },
  { value: 'price-asc', label: 'ارزان‌ترین' },
  { value: 'price-desc', label: 'گران‌ترین' },
  { value: 'rating', label: 'بالاترین امتیاز' },
];

/** لیست تالارهای علاقه‌مندی به‌همراه منطق مرتب‌سازی؛ داده اصلی از venue-details.ts خوانده می‌شود */
export function useFavoriteVenues() {
  const { favorites, isHydrated } = useFavorites();
  const [sort, setSort] = useState<FavoritesSortOption>('recent');

  const venues = useMemo(() => {
    // فقط علاقه‌مندی‌هایی که هنوز در دیتابیس تالارها وجود دارند نمایش داده می‌شوند
    const withAddedAt = favorites
      .map((f) => ({ detail: venueDetails[f.slug], addedAt: f.addedAt }))
      .filter((f): f is { detail: (typeof venueDetails)[string]; addedAt: number } =>
        Boolean(f.detail)
      );

    const sorted = [...withAddedAt].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return parsePersianNumber(a.detail.startingPrice) - parsePersianNumber(b.detail.startingPrice);
        case 'price-desc':
          return parsePersianNumber(b.detail.startingPrice) - parsePersianNumber(a.detail.startingPrice);
        case 'rating':
          return b.detail.rating - a.detail.rating;
        case 'recent':
        default:
          return b.addedAt - a.addedAt;
      }
    });

    return sorted.map((f) => toCardVenue(f.detail));
  }, [favorites, sort]);

  return { venues, count: venues.length, sort, setSort, isHydrated };
}
