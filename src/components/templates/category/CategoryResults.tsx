'use client';

import { useMemo } from 'react';
import type { CategoryVenue } from '@/data/category-venues';
import { areaOptions, cityOptions } from '@/lib/category-filters';
import { useCategoryFilters } from '@/hooks/useCategoryFilters';
import CategorySearchBar from './CategorySearchBar';
import FilterSidebar from './FilterSidebar';
import MobileFilterSheet from './MobileFilterSheet';
import ActiveFilterChips from './ActiveFilterChips';
import SortDropdown from './SortDropdown';
import CategoryVenueCard from './CategoryVenueCard';
import EmptyState from './EmptyState';
import Pagination from './Pagination';

interface Props {
  venues: CategoryVenue[];
}

export default function CategoryResults({ venues }: Props) {
  const cities = useMemo(() => cityOptions(venues), [venues]);
  const areas = useMemo(() => areaOptions(venues), [venues]);

  const {
    filters,
    setFilter,
    toggleArrayFilter,
    resetFilters,
    resultCount,
    pageItems,
    currentPage,
    totalPages,
  } = useCategoryFilters(venues);

  return (
    <>
      <CategorySearchBar filters={filters} cities={cities} setFilter={setFilter} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <FilterSidebar
            filters={filters}
            areas={areas}
            setFilter={setFilter}
            toggleArrayFilter={toggleArrayFilter}
            onReset={resetFilters}
          />

          <div className="min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="min-w-0">
                <p className="text-sm text-ink-soft">
                  نمایش <span className="font-semibold text-ink num">{pageItems.length}</span> تالار از{' '}
                  <span className="num">{resultCount}</span> نتیجه
                </p>
                <ActiveFilterChips
                  filters={filters}
                  setFilter={setFilter}
                  toggleArrayFilter={toggleArrayFilter}
                  onReset={resetFilters}
                />
              </div>

              <SortDropdown value={filters.sortBy} onChange={(v) => setFilter('sortBy', v)} />
            </div>

            {pageItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {pageItems.map((venue) => (
                  <CategoryVenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            ) : (
              <EmptyState onReset={resetFilters} />
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setFilter('page', page);
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />
          </div>
        </div>
      </div>

      <MobileFilterSheet
        filters={filters}
        resultCount={resultCount}
        setFilter={setFilter}
        toggleArrayFilter={toggleArrayFilter}
        onReset={resetFilters}
      />
    </>
  );
}
