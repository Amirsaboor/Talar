import { iconMap } from './icon-map';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueQuickInfo({ venue }: { venue: VenueDetail }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
      {venue.quickInfo.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <div key={item.label} className="bg-sand-100/60 rounded-2xl p-4 min-w-0">
            <Icon size={20} strokeWidth={1.6} className="mb-2.5 text-emerald-800" />
            <p className="text-xs text-ink-faint truncate">{item.label}</p>
            <p className="text-sm font-semibold mt-0.5 num truncate">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}
