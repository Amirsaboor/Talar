import { Play } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueVideo({ venue }: { venue: VenueDetail }) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">ویدیوی تالار</h2>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-ink">
        <img
          src={venue.images[0]}
          alt={`پیش‌نمایش ویدیوی معرفی ${venue.title}`}
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <button aria-label="پخش ویدیو" className="absolute inset-0 flex items-center justify-center focus-ring">
          <span className="w-16 h-16 rounded-full bg-sand-50/95 flex items-center justify-center">
            <Play size={22} className="fill-[#211C16] text-[#211C16]" />
          </span>
        </button>
      </div>
    </section>
  );
}
