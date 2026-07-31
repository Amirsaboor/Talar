import { Phone, MessageCircle, MapPin } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueBookingSidebar({ venue }: { venue: VenueDetail }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-3xl border border-sand-200 p-6 shadow-soft">
        <p className="text-sm text-ink-faint">شروع قیمت اجاره سالن</p>
        <p className="text-2xl font-semibold mt-1 num truncate">{venue.startingPrice}</p>
        <div className="flex flex-col gap-3 mt-6">
          <a
            href="tel:02191000000"
            className="flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring"
          >
            <Phone size={16} />
            تماس با تالار
          </a>
          <button className="flex items-center justify-center gap-2 border border-sand-300 hover:border-ink text-ink text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring">
            <MessageCircle size={16} />
            درخواست مشاوره رایگان
          </button>
          <a
            href="#map"
            className="flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-800 text-sm font-medium py-2 transition-colors focus-ring"
          >
            <MapPin size={15} />
            مسیریابی تا تالار
          </a>
        </div>
        <p className="text-xs text-ink-faint text-center mt-4">پاسخ‌گویی معمولاً کمتر از ۲ ساعت</p>
      </div>
    </aside>
  );
}
