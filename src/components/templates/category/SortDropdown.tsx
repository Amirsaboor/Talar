'use client';

import { searchSortOptions, type SearchSortOption } from '@/lib/venue-search';

interface Props {
  value: SearchSortOption;
  onChange: (value: SearchSortOption) => void;
}

export default function SortDropdown({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <label htmlFor="sort" className="text-xs text-ink-faint">
        مرتب‌سازی:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SearchSortOption)}
        className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring"
      >
        {searchSortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
