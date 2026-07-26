import Link from 'next/link';
import { Star } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function SimilarVenueCard({ venue }: { venue: VenueDetail }) {
  return (
    <Link href={`/venue/${venue.slug}`} className="group shrink-0 w-72 sm:w-auto focus-ring">
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
        <img
          src={venue.images[0]}
          alt={venue.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between mt-3">
        <div>
          <h3 className="text-sm font-medium">{venue.title}</h3>
          <p className="text-xs text-ink-faint mt-0.5">{venue.location}</p>
        </div>
        <span className="flex items-center gap-1 text-xs shrink-0">
          <Star size={12} className="fill-[#B8863E] text-[#B8863E]" />
          <span className="num">{venue.rating}</span>
        </span>
      </div>
    </Link>
  );
}
