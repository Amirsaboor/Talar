'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { amenityOptions, budgetOptions, capacityOptions, type CategoryFilters } from '@/lib/category-filters';

interface Props {
  filters: CategoryFilters;
  resultCount: number;
  setFilter: <K extends keyof CategoryFilters>(key: K, value: CategoryFilters[K]) => void;
  toggleArrayFilter: (key: 'areas' | 'amenities', value: string) => void;
  onReset: () => void;
}

export default function MobileFilterSheet({ filters, resultCount, setFilter, toggleArrayFilter, onReset }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3.5 rounded-full shadow-lift transition-colors focus-ring"
      >
        <SlidersHorizontal size={16} />
        فیلترها
      </button>

      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-ink/50 z-[60] transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-sheet-title"
        className={`fixed inset-x-0 bottom-0 z-[70] bg-sand-50 rounded-t-3xl shadow-lift max-h-[88vh] flex flex-col lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="shrink-0 relative flex items-center justify-between px-5 pt-4 pb-3 border-b border-sand-200">
          <span className="w-10 h-1.5 bg-sand-300 rounded-full absolute top-2 right-1/2 translate-x-1/2" />
          <h2 id="filter-sheet-title" className="font-semibold text-lg mt-2">
            فیلترها
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="بستن فیلترها"
            className="mt-2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-sand-100 transition-colors focus-ring"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-5 space-y-6 min-w-0">
          <div className="border-b border-sand-200 pb-5">
            <h3 className="text-sm font-semibold mb-3">ظرفیت</h3>
            <div className="flex flex-wrap gap-2">
              {capacityOptions.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setFilter('capacityMin', opt.min)}
                  className={`text-xs px-3.5 py-2.5 rounded-full border transition-colors focus-ring ${
                    filters.capacityMin === opt.min
                      ? 'bg-emerald-800 text-sand-50 border-emerald-800'
                      : 'border-sand-300 text-ink-soft'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-sand-200 pb-5">
            <h3 className="text-sm font-semibold mb-3">بودجه (میلیون تومان)</h3>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFilter('budget', opt.value)}
                  className={`text-xs px-3.5 py-2.5 rounded-full border transition-colors focus-ring ${
                    filters.budget === opt.value
                      ? 'bg-emerald-800 text-sand-50 border-emerald-800'
                      : 'border-sand-300 text-ink-soft'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-sand-200 pb-5">
            <h3 className="text-sm font-semibold mb-3">فضا</h3>
            <div className="flex gap-2">
              {[
                { label: 'همه', value: 'any' as const },
                { label: 'سرپوشیده', value: 'closed' as const },
                { label: 'روباز', value: 'open' as const },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFilter('space', opt.value)}
                  className={`flex-1 text-sm py-2.5 rounded-xl transition-colors focus-ring ${
                    filters.space === opt.value
                      ? 'bg-emerald-800 text-sand-50 font-medium'
                      : 'bg-sand-100 text-ink-soft'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">امکانات</h3>
            <div className="flex flex-wrap gap-2">
              {amenityOptions.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleArrayFilter('amenities', label)}
                  className={`text-xs px-3 py-2.5 rounded-full focus-ring transition-colors ${
                    filters.amenities.includes(label)
                      ? 'bg-emerald-800 text-sand-50 font-medium'
                      : 'bg-sand-100 text-ink-soft'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3 px-5 py-4 border-t border-sand-200 bg-sand-50">
          <button
            onClick={onReset}
            className="text-sm font-medium text-garnet-600 hover:text-garnet-700 px-4 py-3 focus-ring rounded-xl shrink-0"
          >
            پاک‌کردن
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 min-w-0 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-full transition-colors focus-ring truncate"
          >
            نمایش {resultCount} تالار
          </button>
        </div>
      </div>
    </>
  );
}
