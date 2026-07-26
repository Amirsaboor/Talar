'use client';

import { X } from 'lucide-react';
import { budgetOptions, capacityOptions, type CategoryFilters } from '@/lib/category-filters';

interface Props {
  filters: CategoryFilters;
  setFilter: <K extends keyof CategoryFilters>(key: K, value: CategoryFilters[K]) => void;
  toggleArrayFilter: (key: 'areas' | 'amenities', value: string) => void;
  onReset: () => void;
}

export default function ActiveFilterChips({ filters, setFilter, toggleArrayFilter, onReset }: Props) {
  const chips: { key: string; label: string; clear: () => void }[] = [];

  if (filters.query) {
    chips.push({ key: 'query', label: `«${filters.query}»`, clear: () => setFilter('query', '') });
  }
  if (filters.city) {
    chips.push({ key: 'city', label: filters.city, clear: () => setFilter('city', '') });
  }
  const capacityLabel = capacityOptions.find((c) => c.min === filters.capacityMin && c.min !== 0)?.label;
  if (capacityLabel) {
    chips.push({ key: 'capacity', label: capacityLabel, clear: () => setFilter('capacityMin', 0) });
  }
  if (filters.budget !== 'any') {
    chips.push({
      key: 'budget',
      label: budgetOptions.find((b) => b.value === filters.budget)!.label,
      clear: () => setFilter('budget', 'any'),
    });
  }
  if (filters.space !== 'any') {
    chips.push({
      key: 'space',
      label: filters.space === 'open' ? 'فضای باز' : 'فضای بسته',
      clear: () => setFilter('space', 'any'),
    });
  }
  filters.areas.forEach((area) => {
    chips.push({ key: `area-${area}`, label: area, clear: () => toggleArrayFilter('areas', area) });
  });
  filters.amenities.forEach((amenity) => {
    chips.push({
      key: `amenity-${amenity}`,
      label: amenity,
      clear: () => toggleArrayFilter('amenities', amenity),
    });
  });
  if (filters.minRating) {
    chips.push({ key: 'rating', label: `${filters.minRating}+ امتیاز`, clear: () => setFilter('minRating', 0) });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mt-2">
      {chips.map((chip) => (
        <span
          key={chip.key}
          className="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full max-w-full"
        >
          <span className="truncate max-w-40">{chip.label}</span>
          <button onClick={chip.clear} aria-label={`حذف فیلتر ${chip.label}`} className="focus-ring rounded-full shrink-0">
            <X size={12} strokeWidth={2.4} />
          </button>
        </span>
      ))}
      <button onClick={onReset} className="text-xs text-garnet-700 hover:underline focus-ring shrink-0">
        پاک‌کردن همه
      </button>
    </div>
  );
}
