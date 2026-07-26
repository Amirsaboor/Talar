import type { VenueDetail } from '@/data/venue-details';
import SimilarVenueCard from './SimilarVenueCard';

interface Props {
  venues: VenueDetail[];
}

export default function VenueSimilarVenues({ venues }: Props) {
  if (venues.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-sand-200">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">تالارهای مشابه</h2>
      <div className="rail flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        {venues.map((v) => (
          <SimilarVenueCard key={v.slug} venue={v} />
        ))}
      </div>
    </section>
  );
}
