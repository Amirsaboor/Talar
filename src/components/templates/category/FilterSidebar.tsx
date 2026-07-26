'use client';

import { Star } from 'lucide-react';
import {
  amenityOptions,
  budgetOptions,
  capacityOptions,
  type CategoryFilters,
} from '@/lib/category-filters';

interface Props {
  filters: CategoryFilters;
  areas: string[];
  setFilter: <K extends keyof CategoryFilters>(key: K, value: CategoryFilters[K]) => void;
  toggleArrayFilter: (key: 'areas' | 'amenities', value: string) => void;
  onReset: () => void;
}

export default function FilterSidebar({ filters, areas, setFilter, toggleArrayFilter, onReset }: Props) {
  return (
    <aside className="hidden lg:block" aria-label="فیلترها">
      <div className="sticky top-40 space-y-7">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">فیلترها</h2>
          <button type="button" onClick={onReset} className="text-xs text-garnet-700 hover:underline focus-ring">
            پاک‌کردن همه
          </button>
        </div>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">منطقه</legend>
          <div className="space-y-2.5">
            {areas.map((area) => (
              <label key={area} className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.areas.includes(area)}
                  onChange={() => toggleArrayFilter('areas', area)}
                  className="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring"
                />
                {area}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">ظرفیت</legend>
          <div className="space-y-2.5">
            {capacityOptions.map((opt) => (
              <label key={opt.label} className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                <input
                  type="radio"
                  name="capacity"
                  checked={filters.capacityMin === opt.min}
                  onChange={() => setFilter('capacityMin', opt.min)}
                  className="w-4 h-4 border-sand-300 text-emerald-700 focus-ring"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">
            بودجه <span className="text-ink-faint font-normal">(میلیون تومان)</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {budgetOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFilter('budget', opt.value)}
                className={`text-xs px-3.5 py-2 rounded-full border transition-colors focus-ring ${
                  filters.budget === opt.value
                    ? 'bg-emerald-800 text-sand-50 border-emerald-800'
                    : 'border-sand-300 text-ink-soft'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">نوع تالار</legend>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'همه', value: 'any' as const },
              { label: 'فضای باز', value: 'open' as const },
              { label: 'فضای بسته', value: 'closed' as const },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFilter('space', opt.value)}
                className={`text-xs px-3.5 py-2 rounded-full border transition-colors focus-ring ${
                  filters.space === opt.value
                    ? 'bg-emerald-800 text-sand-50 border-emerald-800'
                    : 'border-sand-300 text-ink-soft'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">امکانات</legend>
          <div className="space-y-2.5">
            {amenityOptions.map((label) => (
              <label key={label} className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(label)}
                  onChange={() => toggleArrayFilter('amenities', label)}
                  className="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">حداقل امتیاز</legend>
          <div className="flex gap-2">
            {[4.5, 4.0].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => setFilter('minRating', filters.minRating === rating ? 0 : rating)}
                className={`flex items-center gap-1 text-xs px-3 py-2 rounded-full border transition-colors focus-ring ${
                  filters.minRating === rating
                    ? 'bg-emerald-800 text-sand-50 border-emerald-800'
                    : 'border-sand-300 hover:border-gold-500'
                }`}
              >
                <Star size={12} className="fill-[#B8863E] text-[#B8863E]" />
                <span className="num">{rating}+</span>
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </aside>
  );
}
