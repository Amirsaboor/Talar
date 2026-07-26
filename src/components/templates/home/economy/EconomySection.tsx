import Link from 'next/link';
import { economyVenues } from '@/data/economy-venues';
import EconomyVenueCard from './EconomyVenueCard';

export default function EconomySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-gold-600 text-sm font-medium mb-2">برای هر بودجه‌ای</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">مجموعه اقتصادی</h2>
        </div>
        <Link
          href="/category/economy"
          className="hidden sm:block text-sm text-emerald-700 hover:text-emerald-800 font-medium focus-ring"
        >
          مقایسه تالارها ←
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {economyVenues.map((venue) => (
          <EconomyVenueCard key={venue.id} venue={venue} />
        ))}
      </div>

      <Link
        href="/category/economy"
        className="sm:hidden mt-6 flex items-center justify-center text-sm text-emerald-700 font-medium focus-ring"
      >
        مقایسه تالارها ←
      </Link>
    </section>
  );
}
