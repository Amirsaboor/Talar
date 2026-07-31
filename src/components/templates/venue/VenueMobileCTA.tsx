import { Phone, MessageCircle } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueMobileCta({ venue }: { venue: VenueDetail }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-sand-50/95 backdrop-blur-md border-t border-sand-200 px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-ink-faint">شروع از</p>
          <p className="text-sm font-semibold num truncate">{venue.startingPrice}</p>
        </div>
        <button className="flex items-center gap-1.5 border border-sand-300 text-ink text-sm font-medium px-4 h-12 rounded-xl focus-ring shrink-0">
          <MessageCircle size={15} />
          مشاوره
        </button>
        <a
          href="tel:02191000000"
          className="flex items-center gap-1.5 bg-emerald-800 text-sand-50 text-sm font-medium px-5 h-12 rounded-xl focus-ring shrink-0"
        >
          <Phone size={15} />
          تماس
        </a>
      </div>
    </div>
  );
}
