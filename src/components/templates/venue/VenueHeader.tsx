import { Check, Star, MapPin, ChevronLeft } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueHeader({ venue }: { venue: VenueDetail }) {
  return (
    <div className="flex items-start justify-between gap-4 pb-6 border-b border-sand-200 flex-wrap">
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h1 className="text-2xl sm:text-3xl font-semibold break-words">{venue.title}</h1>
          {venue.verified && (
            <span className="flex items-center gap-1 bg-emerald-800/10 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0">
              <Check size={11} strokeWidth={3} />
              تأییدشده
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-sm text-ink-soft flex-wrap">
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-[#B8863E] text-[#B8863E]" />
            <span className="font-medium text-ink num">{venue.rating}</span>
            <a href="#reviews" className="text-ink-faint hover:text-ink transition-colors focus-ring num">
              ({venue.reviewCount} نظر)
            </a>
          </span>
          <span className="text-ink-300">·</span>
          <span className="flex items-center gap-1 min-w-0">
            <MapPin size={14} strokeWidth={1.8} className="shrink-0" />
            <span className="truncate">{venue.address}</span>
          </span>
        </div>
      </div>
      <a
        href="#map"
        className="hidden sm:flex shrink-0 items-center gap-1.5 text-sm text-emerald-700 border-b border-emerald-700 pb-0.5 hover:text-emerald-800 hover:border-emerald-800 transition-colors focus-ring"
      >
        نمایش روی نقشه
        <ChevronLeft size={14} />
      </a>
    </div>
  );
}
