import Link from 'next/link';
import { Star, Check } from 'lucide-react';
import FavoriteButton from '@/components/modules/favorites/FavoriteButton';
import { slugFromVenueHref } from '@/lib/utils';

interface Venue {
  id: number | string;
  title: string;
  image: string;
  location: string;
  rating: string;
  ratingCount: string;
  capacity: string;
  verified: boolean;
  tags: string[];
  price: string;
  href: string;
}

export default function CategoryVenueCard({ venue }: { venue: Venue }) {
  return (
    <article className="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
      <Link href={venue.href} className="block focus-ring">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={venue.image}
            alt={venue.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <FavoriteButton
            slug={slugFromVenueHref(venue.href)}
            title={venue.title}
            className="absolute top-3 left-3"
          />
          {venue.verified && (
            <span className="absolute top-3 right-3 flex items-center gap-1 bg-sand-50/90 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
              <Check size={11} strokeWidth={3} />
              تأییدشده
            </span>
          )}
          <span className="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">
            ظرفیت {venue.capacity}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-snug">{venue.title}</h3>
            <div className="flex items-center gap-1 text-xs text-ink-soft shrink-0">
              <Star size={13} className="fill-[#B8863E] text-[#B8863E]" />
              <span className="num">{venue.rating}</span>
              <span className="text-ink-faint num">({venue.ratingCount})</span>
            </div>
          </div>
          <p className="text-sm text-ink-faint mt-1">{venue.location}</p>
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
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
            <p className="text-sm">
              <span className="text-ink-faint">شروع از </span>
              <span className="font-semibold num">{venue.price}</span>
              <span className="text-ink-faint"> میلیون</span>
            </p>
            <span className="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">
              مشاهده جزئیات
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
