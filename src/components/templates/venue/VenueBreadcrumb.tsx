import Link from 'next/link';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueBreadcrumb({ venue }: { venue: VenueDetail }) {
  return (
    <nav aria-label="مسیر صفحه" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
      <ol className="flex items-center gap-2 text-xs text-ink-faint flex-wrap">
        <li>
          <Link href="/" className="hover:text-ink transition-colors focus-ring">
            خانه
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/category/all" className="hover:text-ink transition-colors focus-ring">
            {venue.category}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-ink-soft" aria-current="page">
          {venue.title}
        </li>
      </ol>
    </nav>
  );
}
