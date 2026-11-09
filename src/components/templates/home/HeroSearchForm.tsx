'use client';

import { Search } from 'lucide-react';
import { CAPACITY_OPTIONS, BUDGET_TIERS } from '@/lib/category-filters';
import type { CityEntity } from '@/data-access/types';

interface Props {
  cities: CityEntity[];
  city: string;
  onCityChange: (value: string) => void;
  capacity: string;
  onCapacityChange: (value: string) => void;
  budget: string;
  onBudgetChange: (value: string) => void;
  onSubmit: () => void;
}

export default function HeroSearchForm({
  cities,
  city,
  onCityChange,
  capacity,
  onCapacityChange,
  budget,
  onBudgetChange,
  onSubmit,
}: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="max-w-5xl mx-auto bg-sand-50 rounded-3xl shadow-lift p-4 sm:p-3 border border-sand-200/70"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors">
          <label htmlFor="hero-city" className="text-xs font-medium text-ink-faint">
            شهر
          </label>
          <select
            id="hero-city"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
          >
            <option value="all">همه شهرها</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors sm:border-r sm:border-sand-200">
          <label htmlFor="hero-guests" className="text-xs font-medium text-ink-faint">
            تعداد مهمان
          </label>
          <select
            id="hero-guests"
            value={capacity}
            onChange={(e) => onCapacityChange(e.target.value)}
            className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
          >
            <option value="all">هر ظرفیتی</option>
            {CAPACITY_OPTIONS.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 px-2 py-2 sm:border-r sm:border-sand-200">
          <div className="flex flex-col gap-1 px-2 py-1 flex-1">
            <label htmlFor="hero-budget" className="text-xs font-medium text-ink-faint">
              بودجه تقریبی
            </label>
            <select
              id="hero-budget"
              value={budget}
              onChange={(e) => onBudgetChange(e.target.value)}
              className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
            >
              <option value="all">نامشخص</option>
              {BUDGET_TIERS.map((tier) => (
                <option key={tier.label} value={tier.label}>
                  {tier.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="shrink-0 flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 font-medium text-sm px-5 sm:px-6 h-12 rounded-xl transition-colors focus-ring w-full sm:w-auto"
          >
            <Search size={17} strokeWidth={2} />
            جست‌وجو
          </button>
        </div>
      </div>
    </form>
  );
}
