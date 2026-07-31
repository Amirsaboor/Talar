import Link from 'next/link';
import { getVenueRepository } from '@/data-access';
import BudgetVenueCard from '../BudgetVenueCard';

const ECONOMY_VENUE_COUNT = 4;

/**
 * بخش «مجموعه اقتصادی» صفحه اصلی.
 * چهار تالار با ارزان‌ترین قیمت واقعی از طریق VenueRepository (نه لیست دستی جدا).
 */
export default function EconomySection() {
  const budgetVenues = getVenueRepository().findCheapest(ECONOMY_VENUE_COUNT);

  if (budgetVenues.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-gold-600 text-sm font-medium mb-2">برای هر بودجه‌ای</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">مجموعه اقتصادی</h2>
        </div>
        <Link
          href="/category/all"
          className="hidden sm:block text-sm text-emerald-700 hover:text-emerald-800 font-medium focus-ring"
        >
          مقایسه تالارها ←
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {budgetVenues.map((venue) => (
          <BudgetVenueCard
            key={venue.id}
            title={venue.title}
            image={venue.image}
            location={venue.location}
            price={venue.price}
            href={venue.href}
          />
        ))}
      </div>

      <Link
        href="/category/all"
        className="sm:hidden mt-6 flex items-center justify-center text-sm text-emerald-700 font-medium focus-ring"
      >
        مقایسه تالارها ←
      </Link>
    </section>
  );
}
