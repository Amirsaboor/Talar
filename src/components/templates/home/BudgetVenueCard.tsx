import Link from 'next/link';
import FavoriteButton from '@/components/modules/favorites/FavoriteButton';
import { slugFromVenueHref } from '@/lib/utils';

interface Props {
  title: string;
  image: string;
  location: string;
  price: string;
  href: string;
}

export default function BudgetVenueCard({ title, image, location, price, href }: Props) {
  return (
    <article className="group relative bg-sand-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
      <Link href={href} className="block focus-ring">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium leading-snug">{title}</h3>
          <p className="text-xs text-ink-faint mt-0.5">{location}</p>
          <p className="text-xs font-semibold mt-2 num">از {price} میلیون</p>
        </div>
      </Link>
      <FavoriteButton
        slug={slugFromVenueHref(href)}
        title={title}
        className="absolute top-2 left-2"
      />
    </article>
  );
}
