import CategoryVenueCard from '@/components/templates/category/CategoryVenueCard';
import type { categoryVenues } from '@/data/category-venues';

export default function SearchResultsGrid({
  venues,
}: {
  venues: (typeof categoryVenues)[number][];
}) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {venues.map((venue) => (
        <CategoryVenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
