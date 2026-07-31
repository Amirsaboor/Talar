import { Star } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueReviews({ venue }: { venue: VenueDetail }) {
  return (
    <section id="reviews" className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">نظرات مهمانان</h2>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-8">
        <div className="text-center shrink-0">
          <p className="text-5xl font-semibold num">{venue.rating}</p>
          <div className="flex items-center gap-0.5 justify-center mt-2" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#B8863E] text-[#B8863E]" />
            ))}
          </div>
          <p className="text-xs text-ink-faint mt-2 num">از {venue.reviewCount} نظر</p>
        </div>
        <div className="flex-1 space-y-1.5 max-w-sm min-w-0">
          {venue.ratingBreakdown.map((pct, i) => (
            <div key={i} className="flex items-center gap-3 text-xs">
              <span className="w-2 text-ink-faint num">{5 - i}</span>
              <div className="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden">
                <div className="h-full bg-gold-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {venue.reviews.map((review) => (
          <article key={`${review.name}-${review.date}`} className="border-t border-sand-200 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center text-sm font-medium text-ink-soft shrink-0">
                {review.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{review.name}</p>
                <p className="text-xs text-ink-faint">{review.date}</p>
              </div>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed">{review.text}</p>
          </article>
        ))}
      </div>

      <button className="mt-6 text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors focus-ring">
        مشاهده همه {venue.reviewCount} نظر
      </button>
    </section>
  );
}
