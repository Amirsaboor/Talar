'use client';

import { useMemo, useState } from 'react';
import { getCityRepository } from '@/data-access/repositories/city.repository';
import { toPersianDigits } from '@/lib/persian-numbers';
import { CAPACITY_OPTIONS, BUDGET_TIERS, type CategoryFiltersState } from '@/lib/category-filters';
import { useLiveVenueSearch } from '@/hooks/useLiveVenueSearch';
import { SectionErrorBoundary } from '@/components/modules/error-boundary/SectionErrorBoundary';
import NoSearchResultsState from '@/components/modules/empty-states/NoSearchResultsState';
import Pagination from '@/components/modules/pagination/Pagination';
import CategoryVenueCard from '@/components/templates/category/CategoryVenueCard';
import HeroSearchForm from './HeroSearchForm';

export default function Header() {
  const cities = useMemo(() => getCityRepository().findAll(), []);

  const [city, setCity] = useState('all');
  const [capacityLabel, setCapacityLabel] = useState('all');
  const [budgetLabel, setBudgetLabel] = useState('all');

  // برچسب‌های انتخاب‌شده تو select ها را به شکلی که VenueQueryService/filterCategoryVenues
  // می‌فهمد (بازه عددی) تبدیل می‌کند؛ فقط وقتی واقعاً چیزی انتخاب شده یک شیء جدید می‌سازد
  // تا مرجع filters بی‌دلیل عوض نشود (وگرنه useLiveVenueSearch هر رندر صفحه را ریست می‌کند)
  const filters: Partial<CategoryFiltersState> | undefined = useMemo(() => {
    const capacity = CAPACITY_OPTIONS.find((o) => o.label === capacityLabel);
    const budget = BUDGET_TIERS.find((t) => t.label === budgetLabel);
    if (!capacity && !budget) return undefined;
    return {
      ...(capacity && { capacityMin: capacity.min, capacityMax: capacity.max }),
      ...(budget && { budgetMin: budget.min, budgetMax: budget.max === Infinity ? null : budget.max }),
    };
  }, [capacityLabel, budgetLabel]);

  const { items, totalCount, page, totalPages, setPage } = useLiveVenueSearch({ city, filters });

  return (
    <section className="relative">
      <div className="relative h-[86vh] min-h-140 sm:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
          alt="باغ‌تالار عروسی با نورپردازی گرم در غروب"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/35 to-ink/10" />
        <div className="absolute inset-0 bg-linear-to-l from-emerald-900/30 to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-28 sm:pb-24">
          <p className="text-gold-300 text-sm sm:text-base font-medium tracking-wide mb-4">
            بهترین تالارها و باغ‌تالارهای مشهد، طرقبه و شاندیز
          </p>
          <h1 className="text-sand-50 font-extralight text-[2.35rem] leading-[1.2] sm:text-6xl sm:leading-[1.15] lg:text-7xl max-w-3xl">
            بهترین تالار عروسی‌تان را
            <span className="block font-medium">در چند دقیقه پیدا کنید</span>
          </h1>
          <p className="text-sand-100/90 mt-5 max-w-xl text-base sm:text-lg leading-relaxed">
            صدها تالار، باغ‌تالار و خدمات مراسم را مشاهده، مقایسه و بدون نیاز به ثبت‌نام با
            آن‌ها تماس بگیرید.
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-20 sm:-mt-16 px-4 sm:px-6 lg:px-8">
        <HeroSearchForm
          cities={cities}
          city={city}
          onCityChange={setCity}
          capacity={capacityLabel}
          onCapacityChange={setCapacityLabel}
          budget={budgetLabel}
          onBudgetChange={setBudgetLabel}
          onSubmit={() =>
            document.getElementById('all-venues')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        />
      </div>

      {/* ============ ALL VENUES (زنده، روی VenueQueryService) ============ */}
      <div
        id="all-venues"
        className="scroll-mt-16 lg:scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-14"
      >
        <SectionErrorBoundary message="نمایش تالارها با خطا مواجه شد.">
          <div className="mb-6">
            <p className="text-gold-600 text-sm font-medium mb-2">همه گزینه‌ها</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              <span className="num">{toPersianDigits(totalCount)}</span> تالار پیدا شد
            </h2>
          </div>

          {items.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((venue) => (
                  <CategoryVenueCard key={venue.id} venue={venue} />
                ))}
              </div>
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </>
          ) : (
            <NoSearchResultsState
              onClearFilters={() => {
                setCity('all');
                setCapacityLabel('all');
                setBudgetLabel('all');
              }}
            />
          )}
        </SectionErrorBoundary>
      </div>
    </section>
  );
}
