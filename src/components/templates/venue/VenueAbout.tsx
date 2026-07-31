import type { VenueDetail } from '@/data/venue-details';

export default function VenueAbout({ venue }: { venue: VenueDetail }) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-4">درباره تالار</h2>
      <div className="text-[15px] text-ink-soft leading-[2] space-y-4">
        {venue.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
