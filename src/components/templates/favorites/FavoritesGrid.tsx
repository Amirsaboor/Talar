import CategoryVenueCard from '@/components/templates/category/CategoryVenueCard';
import type { CardVenue } from '@/lib/venue-adapters';

export default function FavoritesGrid({ venues }: { venues: CardVenue[] }) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {venues.map((venue) => (
        <CategoryVenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
