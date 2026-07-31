'use client';

import FavoritesToolbar from '@/components/templates/favorites/FavoritesToolbar';
import FavoritesGrid from '@/components/templates/favorites/FavoritesGrid';
import EmptyFavoritesState from '@/components/modules/empty-states/EmptyFavoritesState';
import { useFavoriteVenues } from '@/hooks/useFavoriteVenues';

export default function FavoritesPage() {
  const { venues, count, sort, setSort, isHydrated } = useFavoriteVenues();

  return (
    <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[60vh]">
      <FavoritesToolbar count={count} sort={sort} onSortChange={setSort} />

      {!isHydrated ? null : count === 0 ? (
        <EmptyFavoritesState />
      ) : (
        <FavoritesGrid venues={venues} />
      )}
    </main>
  );
}
