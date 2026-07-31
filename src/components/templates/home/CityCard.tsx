import Link from 'next/link';
import { toPersianDigits } from '@/lib/persian-numbers';

interface Props {
  name: string;
  slug: string;
  image: string;
  count: number;
}

export default function CityCard({ name, slug, image, count }: Props) {
  return (
    <Link
      href={`/category/city/${slug}`}
      className="group relative shrink-0 w-64 sm:w-auto h-72 rounded-3xl overflow-hidden focus-ring"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="absolute bottom-4 right-4 text-sand-50">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-xs text-sand-100/85 num">{toPersianDigits(count)} تالار</p>
      </div>
    </Link>
  );
}
