import Link from 'next/link';

interface Props {
  venue: {
    id: number;
    title: string;
    location: string;
    price: string;
    image: string;
    href: string;
  };
}

export default function EconomyVenueCard({ venue }: Props) {
  return (
    <Link href={venue.href} className="block group focus-ring rounded-2xl">
      <article className="bg-sand-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
        <div className="aspect-square overflow-hidden">
          <img
            src={venue.image}
            alt={venue.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-3 min-w-0">
          <h3 className="text-sm font-medium leading-snug truncate">{venue.title}</h3>
          <p className="text-xs text-ink-faint mt-0.5 truncate">{venue.location}</p>
          <p className="text-xs font-semibold mt-2 num">از {venue.price} میلیون</p>
        </div>
      </article>
    </Link>
  );
}
