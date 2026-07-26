import Link from 'next/link';
import { Heart, Star, Check } from 'lucide-react';
import type { CategoryVenue } from '@/data/category-venues';

interface Props {
  venue: CategoryVenue;
}

export default function CategoryVenueCard({ venue }: Props) {
  return (
    <article className="group min-w-0 bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
      <Link href={venue.href} className="block focus-ring">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={venue.image}
            alt={venue.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <button
            aria-label="افزودن به علاقه‌مندی‌ها"
            className="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring"
          >
            <Heart size={17} className="stroke-[#7A2331]" />
          </button>
          {venue.verified && (
            <span className="absolute top-3 right-3 flex items-center gap-1 bg-sand-50/90 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
              <Check size={11} strokeWidth={3} />
              تأییدشده
            </span>
          )}
          <span className="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full whitespace-nowrap">
            ظرفیت {venue.capacity}
          </span>
        </div>

        <div className="p-5 min-w-0">
          <div className="flex items-start justify-between gap-2">
            {/* min-w-0 + break-words اینجا حیاتی است: بدون آن، عنوان بلند کارت را از ستون گرید بیرون می‌زند */}
            <h3 className="min-w-0 font-semibold leading-snug break-words line-clamp-2">
              {venue.title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-ink-soft shrink-0">
              <Star size={13} className="fill-[#B8863E] text-[#B8863E] shrink-0" />
              <span className="num">{venue.rating}</span>
              <span className="text-ink-faint num">({venue.ratingCount})</span>
            </div>
          </div>
          <p className="text-sm text-ink-faint mt-1 truncate">{venue.location}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {venue.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-sand-200">
            <p className="text-sm min-w-0 truncate">
              <span className="text-ink-faint">شروع از </span>
              <span className="font-semibold num">{venue.price}</span>
              <span className="text-ink-faint"> میلیون</span>
            </p>
            <span className="shrink-0 text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">
              مشاهده جزئیات
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
