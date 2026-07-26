import { Info } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

interface Props {
  rows: VenueDetail['pricing'];
  note: string;
}

export default function VenuePricing({ rows, note }: Props) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">محدوده قیمت اجاره سالن</h2>
      <div className="rounded-2xl bg-sand-100/60 divide-y divide-sand-200">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-sm font-medium">{row.label}</p>
              <p className="text-xs text-ink-faint mt-0.5">{row.sublabel}</p>
            </div>
            <p className="text-sm font-semibold num">{row.price}</p>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-2.5 mt-4 text-xs text-ink-faint bg-gold-300/25 rounded-xl px-4 py-3">
        <Info size={15} strokeWidth={1.8} className="shrink-0 mt-0.5 text-gold-600" />
        {note}
      </div>
    </section>
  );
}
