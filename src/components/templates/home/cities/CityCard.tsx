import Link from 'next/link';

interface Props {
  city: {
    id: number;
    name: string;
    slug: string;
    image: string;
    venueCount: string;
  };
}

export default function CityCard({ city }: Props) {
  return (
    <Link
      href={`/category/city/${city.slug}`}
      className="group relative shrink-0 w-64 sm:w-auto h-72 rounded-3xl overflow-hidden focus-ring"
    >
      <img
        src={city.image}
        alt={city.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="absolute bottom-4 right-4 text-sand-50">
        <p className="text-lg font-semibold">{city.name}</p>
        <p className="text-xs text-sand-100/85 num">{city.venueCount} تالار</p>
      </div>
    </Link>
  );
}
