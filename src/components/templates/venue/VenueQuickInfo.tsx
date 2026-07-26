import { iconMap } from './icon-map';
import type { VenueDetail } from '@/data/venue-details';

interface Props {
  items: VenueDetail['quickInfo'];
}

export default function VenueQuickInfo({ items }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
      {items.map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <div key={i} className="bg-sand-100/60 rounded-2xl p-4">
            <Icon size={20} strokeWidth={1.6} className="mb-2.5 text-emerald-800" />
            <p className="text-xs text-ink-faint">{item.label}</p>
            <p className="text-sm font-semibold mt-0.5 num">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}
