import Link from 'next/link';
import { Heart, Star } from 'lucide-react'; // وارد کردن آیکون‌ها

export const VenueCard = ({ venue }) => {
  return (
    <article className="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={venue.image}
          alt={venue.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* آیکون قلب با Lucide */}
        <button
          aria-label="افزودن به علاقه‌مندی‌ها"
          className="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring"
        >
          <Heart size={18} className="stroke-[#7A2331]" />
        </button>

        <span className="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">
          ظرفیت {venue.capacity}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug">{venue.title}</h3>

          {/* آیکون ستاره با Lucide */}
          <div className="flex items-center gap-1 text-xs text-ink-soft shrink-0">
            <Star size={14} className="fill-[#B8863E] text-[#B8863E]" />
            <span className="num">{venue.rating}</span>
          </div>
        </div>

        <p className="text-sm text-ink-faint mt-1">{venue.location}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {venue.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
          <p className="text-sm">
            <span className="text-ink-faint">شروع از</span>
            <span className="font-semibold num">{venue.price}</span>
            <span className="text-ink-faint">میلیون تومان</span>
          </p>
          <Link
            href={venue.href}
            className="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full hover:bg-emerald-700 transition-colors focus-ring"
          >
            مشاهده
          </Link>
        </div>
      </div>
    </article>
  );
};
