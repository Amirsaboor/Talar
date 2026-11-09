'use client';

import { MapPin, Users, ArrowLeftRight, Search } from 'lucide-react';
import { getCityRepository } from '@/data-access/repositories/city.repository';
import {
  CAPACITY_OPTIONS,
  BUDGET_TIERS,
  type CategoryFiltersState,
  type CapacityOption,
} from '@/lib/category-filters';

interface Props {
  filters: CategoryFiltersState;
  setCity: (city: string) => void;
  setCapacityPreset: (option: CapacityOption) => void;
  setBudget: (min: number | null, max: number | null) => void;
}

/**
 * نوار سرچ استیکی بالای صفحه Category/City.
 * قبلاً یه نسخه دیگه از این کامپوننت (با API متفاوت: budgetOptions/capacityOptions/
 * CategoryFilters) تو پروژه بود که هیچ‌جا import نمی‌شد و اصلاً کامپایل هم نمی‌شد
 * (چون به exportهایی وابسته بود که وجود نداشتن). این نسخه جایگزینش شد و واقعاً به
 * همون state ای وصله که FilterSidebar/MobileFilterSheet هم استفاده می‌کنن
 * (useCategoryFilters)، نه یه state جدا.
 */
export default function CategorySearchBar({ filters, setCity, setCapacityPreset, setBudget }: Props) {
  const cities = getCityRepository().findAll();

  const activeCapacityLabel =
    CAPACITY_OPTIONS.find((o) => o.min === filters.capacityMin && o.max === filters.capacityMax)?.label ??
    'all';

  const activeBudgetLabel =
    BUDGET_TIERS.find(
      (t) => t.min === filters.budgetMin && (t.max === Infinity ? null : t.max) === filters.budgetMax
    )?.label ?? 'all';

  return (
    <div className="sticky top-16 lg:top-20 z-40 mt-6">
      <div className="bg-sand-50/95 backdrop-blur-md border-y border-sand-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-sand-50 rounded-2xl sm:rounded-full shadow-card border border-sand-200/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-1 p-2"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
              <MapPin size={16} className="shrink-0 text-ink-faint" strokeWidth={1.8} />
              <select
                value={filters.city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate"
              >
                <option value="all">همه شهرها</option>
                {cities.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block w-px h-6 bg-sand-200 shrink-0" />
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
              <Users size={16} className="shrink-0 text-ink-faint" strokeWidth={1.8} />
              <select
                value={activeCapacityLabel}
                onChange={(e) => {
                  const option = CAPACITY_OPTIONS.find((o) => o.label === e.target.value);
                  if (option) setCapacityPreset(option);
                }}
                className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate"
              >
                <option value="all">هر ظرفیتی</option>
                {CAPACITY_OPTIONS.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block w-px h-6 bg-sand-200 shrink-0" />
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
              <ArrowLeftRight size={16} className="shrink-0 text-ink-faint rotate-90" strokeWidth={1.8} />
              <select
                value={activeBudgetLabel}
                onChange={(e) => {
                  const tier = BUDGET_TIERS.find((t) => t.label === e.target.value);
                  setBudget(tier ? tier.min : null, tier ? (tier.max === Infinity ? null : tier.max) : null);
                }}
                className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate"
              >
                <option value="all">بودجه نامشخص</option>
                {BUDGET_TIERS.map((tier) => (
                  <option key={tier.label} value={tier.label}>
                    {tier.label}
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
