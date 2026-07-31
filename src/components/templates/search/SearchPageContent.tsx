'use client';

import SearchBar from './SearchBar';
import SearchFilters from './SearchFilters';
import SearchResultsGrid from './SearchResultsGrid';
import NoSearchResultsState from '@/components/modules/empty-states/NoSearchResultsState';
import { useVenueSearch } from '@/hooks/useVenueSearch';

export default function SearchPageContent() {
  const {
    query,
    setQuery,
    commitSearch,
    city,
    setCity,
    cities,
    sort,
    setSort,
    results,
    suggestions,
    recentSearches,
  } = useVenueSearch();

  return (
    <>
      <section className="bg-emerald-900 pb-8 pt-8 sm:pt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-300 text-xs font-medium mb-2 text-center">جست‌وجوی هوشمند</p>
          <h1 className="text-sand-50 text-2xl sm:text-3xl font-semibold text-center mb-6">
            تالار موردنظرتان را پیدا کنید
          </h1>

          <SearchBar
            query={query}
            onQueryChange={setQuery}
            onCommit={commitSearch}
            suggestions={suggestions}
            recentSearches={recentSearches}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilters
          resultCount={results.length}
          city={city}
          cities={cities}
          onCityChange={setCity}
          sort={sort}
          onSortChange={setSort}
        />

        {results.length === 0 ? (
          <NoSearchResultsState
            onClearFilters={() => {
              setQuery('');
              setCity('all');
            }}
          />
        ) : (
          <SearchResultsGrid venues={results} />
        )}
      </div>
    </>
  );
}
