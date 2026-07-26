'use client';

import { sortLabels, type SortOption } from '@/lib/category-filters';

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
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
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring"
      >
        {(Object.keys(sortLabels) as SortOption[]).map((key) => (
          <option key={key} value={key}>
            {sortLabels[key]}
          </option>
        ))}
      </select>
    </div>
  );
}
