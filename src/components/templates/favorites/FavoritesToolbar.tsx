'use client';

import { LayoutGrid } from 'lucide-react';
import { toPersianDigits } from '@/lib/persian-numbers';
import { sortOptions, type FavoritesSortOption } from '@/hooks/useFavoriteVenues';

interface Props {
  count: number;
  sort: FavoritesSortOption;
  onSortChange: (value: FavoritesSortOption) => void;
}

export default function FavoritesToolbar({ count, sort, onSortChange }: Props) {
  const canCompare = count >= 2;

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold">علاقه‌مندی‌های من</h1>
        <p className="text-sm text-ink-faint mt-2">
          <span className="num font-medium text-ink">{toPersianDigits(count)}</span> تالار ذخیره
          شده
        </p>
      </div>

      {count > 0 && (
        <div className="flex items-center gap-2">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as FavoritesSortOption)}
            aria-label="مرتب‌سازی علاقه‌مندی‌ها"
            className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            disabled={!canCompare}
            title={canCompare ? undefined : 'برای مقایسه حداقل ۲ تالار نگه دارید'}
            aria-disabled={!canCompare}
            className="flex items-center gap-1.5 bg-emerald-800 text-sand-50 text-sm font-medium px-5 py-2.5 rounded-full transition-colors focus-ring enabled:hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <LayoutGrid size={14} />
            مقایسه تالارها
          </button>
        </div>
      )}
    </div>
  );
}
