'use client';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { toPersianDigits } from '@/lib/persian-numbers';
import { useCategoryFilters } from '@/hooks/useCategoryFilters';
import { searchSortOptions } from '@/lib/venue-search';
import { capacityLabel, paginationRange, type CategoryVenue } from '@/lib/category-filters';
import NoSearchResultsState from '@/components/modules/empty-states/NoSearchResultsState';
import EmptyCategoryState from '@/components/modules/empty-states/EmptyCategoryState';
import FilterSidebar from './FilterSidebar';
import MobileFilterSheet from './MobileFilterSheet';
import CategoryVenueCard from './CategoryVenueCard';

interface Chip {
  key: string;
  label: string;
  onRemove: () => void;
}

export default function CategoryResults({ venues }: { venues: CategoryVenue[] }) {
  const {
    filters,
    toggle,
    setSingle,
    setCapacityPreset,
    setCapacityMax,
    clearCapacity,
    setBudget,
    setMinRating,
    clearAll,
    sort,
    setSort,
    results,
    totalCount,
    page,
    totalPages,
    setPage,
  } = useCategoryFilters(venues);

  const chips: Chip[] = [
    ...filters.areas.map((area) => ({
      key: `area-${area}`,
      label: area,
      onRemove: () => toggle('areas', area),
    })),
    ...(filters.capacityMin > 0 || filters.capacityMax < Infinity
      ? [
          {
            key: 'capacity',
            label: capacityLabel(filters.capacityMin, filters.capacityMax),
            onRemove: clearCapacity,
          },
        ]
      : []),
    ...(filters.budgetMin != null || filters.budgetMax != null
      ? [
          {
            key: 'budget',
            label: `بودجه ${filters.budgetMin ? toPersianDigits(filters.budgetMin) : ''}${
              filters.budgetMin && filters.budgetMax ? ' تا ' : ''
            }${filters.budgetMax ? toPersianDigits(filters.budgetMax) : ''} میلیون`,
            onRemove: () => setBudget(null, null),
          },
        ]
      : []),
    ...filters.spaceTypes.map((space) => ({
      key: `space-${space}`,
      label: space,
      onRemove: () => toggle('spaceTypes', space),
    })),
    ...filters.amenities.map((amenity) => ({
      key: `amenity-${amenity}`,
      label: amenity,
      onRemove: () => toggle('amenities', amenity),
    })),
    ...(filters.minRating != null
      ? [
          {
            key: 'rating',
            label: `${toPersianDigits(filters.minRating)}+ امتیاز`,
            onRemove: () => setMinRating(filters.minRating as number),
          },
        ]
      : []),
    ...filters.venueTypes.map((type) => ({
      key: `type-${type}`,
      label: type,
      onRemove: () => toggle('venueTypes', type),
    })),
  ];

  if (venues.length === 0) {
    return <EmptyCategoryState />;
  }

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8">
      <FilterSidebar
        filters={filters}
        toggle={toggle}
        setCapacityPreset={setCapacityPreset}
        setBudget={setBudget}
        setMinRating={setMinRating}
        clearAll={clearAll}
      />

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-sm text-ink-soft">
              نمایش <span className="font-semibold text-ink num">{toPersianDigits(results.length)}</span> تالار از{' '}
              <span className="num">{toPersianDigits(totalCount)}</span> نتیجه
            </p>
            {chips.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {chips.map((chip) => (
                  <span
                    key={chip.key}
                    className="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full"
                  >
                    {chip.label}
                    <button
                      onClick={chip.onRemove}
                      aria-label={`حذف فیلتر ${chip.label}`}
                      className="focus-ring rounded-full"
                    >
                      <X size={12} strokeWidth={2.4} />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearAll}
                  className="text-xs text-garnet-700 hover:underline focus-ring"
                >
                  پاک‌کردن همه
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="sort" className="text-xs text-ink-faint">
              مرتب‌سازی:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring"
            >
              {searchSortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {results.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {results.map((venue) => (
                <CategoryVenueCard key={venue.id} venue={venue} />
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                aria-label="صفحه‌بندی نتایج"
                className="flex items-center justify-center gap-2 mt-12"
              >
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-faint hover:border-ink hover:text-ink transition-colors focus-ring disabled:opacity-40"
                  aria-label="صفحه قبل"
                >
                  <ChevronRight size={16} />
                </button>

                {paginationRange(page, totalPages).map((p, i) =>
                  p === 'ellipsis' ? (
                    <span key={`ellipsis-${i}`} className="px-1 text-ink-faint">
                      …
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      aria-current={p === page ? 'page' : undefined}
                      className={`w-11 h-11 rounded-full text-sm font-medium num focus-ring transition-colors ${
                        p === page
                          ? 'bg-emerald-800 text-sand-50'
                          : 'text-ink-soft hover:bg-sand-100'
                      }`}
                    >
                      {toPersianDigits(p)}
                    </button>
                  )
                )}

                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                  className="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-soft hover:border-ink hover:text-ink transition-colors focus-ring disabled:opacity-40"
                  aria-label="صفحه بعد"
                >
                  <ChevronLeft size={16} />
                </button>
              </nav>
            )}
          </>
        ) : (
          <NoSearchResultsState onClearFilters={clearAll} />
        )}
      </div>

      <MobileFilterSheet
        filters={filters}
        toggle={toggle}
        setSingle={setSingle}
        setCapacityMax={setCapacityMax}
        setBudget={setBudget}
        clearAll={clearAll}
        venues={venues}
        resultCount={totalCount}
      />
    </div>
  );
}
