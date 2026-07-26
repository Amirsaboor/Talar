'use client';

import { MapPin, Users, ArrowLeftRight, Search } from 'lucide-react';
import { budgetOptions, capacityOptions, type CategoryFilters } from '@/lib/category-filters';

interface Props {
  filters: CategoryFilters;
  cities: string[];
  setFilter: <K extends keyof CategoryFilters>(key: K, value: CategoryFilters[K]) => void;
}

export default function CategorySearchBar({ filters, cities, setFilter }: Props) {
  return (
    <div className="sticky top-16 lg:top-20 z-40 mt-6">
      <div className="bg-sand-50/95 backdrop-blur-md border-y border-sand-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-sand-50 rounded-2xl sm:rounded-full shadow-card border border-sand-200/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-1 p-2"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
              <Search size={16} className="shrink-0 text-ink-faint" strokeWidth={1.8} />
              <input
                type="search"
                value={filters.query}
                onChange={(e) => setFilter('query', e.target.value)}
                placeholder="جست‌وجوی نام یا منطقه…"
                className="bg-transparent text-sm font-medium text-ink placeholder:text-ink-faint placeholder:font-normal focus-ring rounded w-full min-w-0"
              />
            </div>

            <div className="hidden sm:block w-px h-6 bg-sand-200 shrink-0" />
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
              <MapPin size={16} className="shrink-0 text-ink-faint" strokeWidth={1.8} />
              <select
                value={filters.city}
                onChange={(e) => setFilter('city', e.target.value)}
                className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full min-w-0 truncate"
              >
                <option value="">همه شهرها</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden sm:block w-px h-6 bg-sand-200 shrink-0" />
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
              <Users size={16} className="shrink-0 text-ink-faint" strokeWidth={1.8} />
              <select
                value={filters.capacityMin}
                onChange={(e) => setFilter('capacityMin', Number(e.target.value))}
                className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full min-w-0 truncate"
              >
                {capacityOptions.map((opt, i) => (
                  <option key={`${opt.label}-${i}`} value={opt.min}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden sm:block w-px h-6 bg-sand-200 shrink-0" />
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
              <ArrowLeftRight size={16} className="shrink-0 text-ink-faint rotate-90" strokeWidth={1.8} />
              <select
                value={filters.budget}
                onChange={(e) => setFilter('budget', e.target.value as CategoryFilters['budget'])}
                className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full min-w-0 truncate"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label === 'همه' ? 'بودجه نامشخص' : opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="shrink-0 flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 font-medium text-sm px-6 h-12 rounded-full transition-colors focus-ring w-full sm:w-auto"
            >
              <Search size={16} strokeWidth={2} />
              جست‌وجو
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
