import { Info } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenuePricing({ venue }: { venue: VenueDetail }) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">محدوده قیمت اجاره سالن</h2>
      <div className="rounded-2xl bg-sand-100/60 divide-y divide-sand-200">
        {venue.pricing.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-2 px-5 py-4">
            <div className="min-w-0">
              <p className="text-sm font-medium">{row.label}</p>
              <p className="text-xs text-ink-faint mt-0.5">{row.sublabel}</p>
            </div>
            <p className="text-sm font-semibold num shrink-0">{row.price}</p>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-2.5 mt-4 text-xs text-ink-faint bg-gold-300/25 rounded-xl px-4 py-3">
        <Info size={15} strokeWidth={1.8} className="shrink-0 mt-0.5 text-gold-600" />
        {venue.priceNote}
      </div>
    </section>
  );
}
