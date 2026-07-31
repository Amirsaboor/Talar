'use client';

import { toPersianDigits } from '@/lib/persian-numbers';
import { searchSortOptions, type SearchSortOption } from '@/lib/venue-search';

interface Props {
  resultCount: number;
  city: string;
  cities: string[];
  onCityChange: (value: string) => void;
  sort: SearchSortOption;
  onSortChange: (value: SearchSortOption) => void;
}

export default function SearchFilters({
  resultCount,
  city,
  cities,
  onCityChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <p className="text-sm text-ink-soft">
        <span className="font-semibold text-ink num">{toPersianDigits(resultCount)}</span> تالار
        پیدا شد
      </p>

      <div className="flex items-center gap-2">
        <select
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          aria-label="فیلتر بر اساس شهر"
          className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring"
        >
          <option value="all">همه شهرها</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SearchSortOption)}
          aria-label="مرتب‌سازی نتایج"
          className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring"
        >
          {searchSortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
