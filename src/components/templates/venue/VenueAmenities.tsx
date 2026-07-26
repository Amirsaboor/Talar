import { iconMap } from './icon-map';
import type { VenueDetail } from '@/data/venue-details';

interface Props {
  items: VenueDetail['amenities'];
}

export default function VenueAmenities({ items }: Props) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">امکانات تالار</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
        {items.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={i} className="flex items-center gap-3">
              <Icon size={20} strokeWidth={1.6} className="shrink-0 text-ink-soft" />
              <span className="text-sm text-ink-soft">{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
