'use client';

import { Star } from 'lucide-react';
import { parsePersianNumber } from '@/lib/persian-numbers';
import {
  AREA_OPTIONS,
  AMENITY_OPTIONS,
  CAPACITY_OPTIONS,
  RATING_OPTIONS,
  SPACE_OPTIONS,
} from '@/lib/category-filters';
import type { UseCategoryFiltersReturn } from '@/hooks/useCategoryFilters';

type Props = Pick<
  UseCategoryFiltersReturn,
  'filters' | 'toggle' | 'setCapacityPreset' | 'setBudget' | 'setMinRating' | 'clearAll'
>;

export default function FilterSidebar({
  filters,
  toggle,
  setCapacityPreset,
  setBudget,
  setMinRating,
  clearAll,
}: Props) {
  return (
    <aside className="hidden lg:block" aria-label="فیلترها">
      <div className="sticky top-40 space-y-7">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">فیلترها</h2>
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-garnet-700 hover:underline focus-ring"
          >
            پاک‌کردن همه
          </button>
        </div>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">منطقه</legend>
          <div className="space-y-2.5">
            {AREA_OPTIONS.map((area) => (
              <label
                key={area}
                className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.areas.includes(area)}
                  onChange={() => toggle('areas', area)}
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
            {CAPACITY_OPTIONS.map((option) => (
              <label
                key={option.label}
                className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"
              >
                <input
                  type="radio"
                  name="capacity"
                  checked={filters.capacityMin === option.min && filters.capacityMax === option.max}
                  onChange={() => setCapacityPreset(option)}
                  className="w-4 h-4 border-sand-300 text-emerald-700 focus-ring"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">
            بودجه <span className="text-ink-faint font-normal num">(میلیون تومان)</span>
          </legend>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="از ۲۰۰"
              value={filters.budgetMin ?? ''}
              onChange={(e) =>
                setBudget(e.target.value ? Number(e.target.value) : null, filters.budgetMax)
              }
              className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num"
            />
            <span className="text-ink-faint text-sm">تا</span>
            <input
              type="number"
              placeholder="۱٬۵۰۰"
              value={filters.budgetMax ?? ''}
              onChange={(e) =>
                setBudget(filters.budgetMin, e.target.value ? Number(e.target.value) : null)
              }
              className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num"
            />
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">نوع تالار</legend>
          <div className="flex flex-wrap gap-2">
            {SPACE_OPTIONS.map((label) => (
              <label key={label} className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.spaceTypes.includes(label)}
                  onChange={() => toggle('spaceTypes', label)}
                  className="peer sr-only"
                />
                <span className="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">امکانات</legend>
          <div className="space-y-2.5">
            {AMENITY_OPTIONS.map((label) => (
              <label
                key={label}
                className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(label)}
                  onChange={() => toggle('amenities', label)}
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
            {RATING_OPTIONS.map((label) => {
              const value = parsePersianNumber(label);
              const active = filters.minRating === value;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setMinRating(value)}
                  aria-pressed={active}
                  className={`flex items-center gap-1 text-xs px-3 py-2 rounded-full border transition-colors focus-ring ${
                    active
                      ? 'bg-gold-500/15 border-gold-500 text-ink'
                      : 'border-sand-300 hover:border-gold-500'
                  }`}
                >
                  <Star size={12} className="fill-[#B8863E] text-[#B8863E]" />
                  <span className="num">{label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>
    </aside>
  );
}
