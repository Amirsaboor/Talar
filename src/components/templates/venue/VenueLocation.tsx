import { MapPin } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueLocation({ venue }: { venue: VenueDetail }) {
  return (
    <section id="map" className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-2">موقعیت مکانی</h2>
      <p className="text-sm text-ink-soft mb-4 truncate">{venue.address}</p>
      <div className="rounded-2xl overflow-hidden aspect-16/8 bg-sand-200 relative">
        <img
          src={venue.images[1] ?? venue.images[0]}
          alt={`نقشه موقعیت ${venue.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/10 flex items-center justify-center">
          <span className="bg-sand-50 rounded-full p-3 shadow-card">
            <MapPin size={22} strokeWidth={1.8} className="text-garnet-700" />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {venue.nearbyTags.map((tag) => (
          <span key={tag} className="text-xs bg-sand-100 text-ink-soft px-3 py-1.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
