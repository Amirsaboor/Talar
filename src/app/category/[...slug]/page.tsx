import Link from 'next/link';
import { MapPin, Users, ArrowLeftRight, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Footer from '@/components/modules/layout/Footer';
import FilterSidebar from '@/components/templates/category/FilterSidebar';
import MobileFilterSheet from '@/components/templates/category/MobileFilterSheet';
import CategoryVenueCard from '@/components/templates/category/CategoryVenueCard';
import { categoryVenues } from '@/data/category-venues';

const cityLabels: Record<string, string> = {
  tehran: 'تهران',
  isfahan: 'اصفهان',
  shiraz: 'شیراز',
  rasht: 'رشت',
  mashhad: 'مشهد',
};

const categoryLabels: Record<string, string> = {
  '1': 'تالار پذیرایی',
  '2': 'باغ‌تالار',
  '3': 'تشریفات',
  '4': 'آتلیه عکاسی',
  '5': 'مزون لباس',
  '6': 'آرایشگاه عروس',
  '7': 'گل‌آرایی',
  '8': 'گروه موسیقی',
  all: 'همه تالارها',
  luxury: 'مجموعه لوکس',
  economy: 'مجموعه اقتصادی',
};

function resolveCategory(slug: string[]) {
  // /category/city/tehran -> city page
  if (slug[0] === 'city' && slug[1]) {
    const city = cityLabels[slug[1]] ?? slug[1];
    return {
      title: `تالارها و باغ‌تالارهای ${city}`,
      breadcrumb: city,
      subtitle: `از تالارهای سنتی تا باغ‌تالارهای مدرن؛ گزینه‌های متنوعی برای مراسم شما در ${city}.`,
      eyebrow: `${city}، ایران`,
    };
  }

  const key = slug[0] ?? 'all';
  const label = categoryLabels[key] ?? 'تالارها';
  return {
    title: label,
    breadcrumb: label,
    subtitle: 'مکان‌ها و خدماتی که با فیلترهای زیر می‌توانید به دقیق‌ترین انتخاب برسید.',
    eyebrow: 'دسته‌بندی',
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { title, breadcrumb, subtitle, eyebrow } = resolveCategory(slug ?? []);
  const resultCount = String(categoryVenues.length * 28); // نمایشی

  return (
    <div className="bg-sand-50 text-ink antialiased">
      <main id="main">
        {/* ============ BREADCRUMB ============ */}
        <nav aria-label="مسیر صفحه" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-faint">
            <li>
              <Link href="/" className="hover:text-ink transition-colors focus-ring rounded">
                خانه
              </Link>
            </li>
            <li aria-hidden="true" className="text-sand-300">
              /
            </li>
            <li>
              <Link href="/category/all" className="hover:text-ink transition-colors focus-ring rounded">
                تالارها
              </Link>
            </li>
            <li aria-hidden="true" className="text-sand-300">
              /
            </li>
            <li className="text-ink font-medium" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        {/* ============ CATEGORY HERO ============ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-8">
          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 lg:h-72">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/40 to-ink/5" />
            <div className="relative h-full flex flex-col justify-end p-5 sm:p-8">
              <p className="text-gold-300 text-xs sm:text-sm font-medium mb-2">{eyebrow}</p>
              <h1 className="text-sand-50 font-semibold text-2xl sm:text-4xl leading-snug max-w-xl">
                {title}
              </h1>
              <p className="text-sand-100/85 text-sm sm:text-base mt-2 max-w-lg leading-relaxed hidden sm:block">
                {subtitle}
              </p>
              <p className="text-sand-100 text-sm mt-3 num font-medium">{resultCount} تالار موجود</p>
            </div>
          </div>
        </section>

        {/* ============ STICKY SEARCH BAR ============ */}
        <div className="sticky top-16 lg:top-20 z-40 mt-6">
          <div className="bg-sand-50/95 backdrop-blur-md border-y border-sand-200/80 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <form className="bg-sand-50 rounded-2xl sm:rounded-full shadow-card border border-sand-200/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-1 p-2">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
                  <MapPin size={16} className="shrink-0 text-ink-faint" strokeWidth={1.8} />
                  <select className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate">
                    <option>مشهد</option>
                    <option>تهران</option>
                    <option>اصفهان</option>
                    <option>شیراز</option>
                  </select>
                </div>
                <div className="hidden sm:block w-px h-6 bg-sand-200 shrink-0" />
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
                  <Users size={16} className="shrink-0 text-ink-faint" strokeWidth={1.8} />
                  <select className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate">
                    <option>۱۰۰ تا ۲۵۰ نفر</option>
                    <option>تا ۱۰۰ نفر</option>
                    <option>۲۵۰ تا ۵۰۰ نفر</option>
                    <option>بیش از ۵۰۰ نفر</option>
                  </select>
                </div>
                <div className="hidden sm:block w-px h-6 bg-sand-200 shrink-0" />
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0">
                  <ArrowLeftRight size={16} className="shrink-0 text-ink-faint rotate-90" strokeWidth={1.8} />
                  <select className="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate">
                    <option>بودجه نامشخص</option>
                    <option>اقتصادی</option>
                    <option>متوسط</option>
                    <option>لوکس</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="shrink-0 flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 font-medium text-sm px-6 h-12 rounded-full transition-colors focus-ring w-full sm:w-auto"
                >
                  <Search size={16} strokeWidth={2} />
                  جست‌وجو
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ============ RESULTS + FILTERS ============ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <FilterSidebar />

            {/* ============ RESULTS COLUMN ============ */}
            <div>
              {/* Result summary + sort */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm text-ink-soft">
                    نمایش <span className="font-semibold text-ink num">{categoryVenues.length}</span> تالار از{' '}
                    <span className="num">{resultCount}</span> نتیجه
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                      ۱۰۰ تا ۲۵۰ نفر
                      <button aria-label="حذف فیلتر ظرفیت" className="focus-ring rounded-full">
                        <X size={12} strokeWidth={2.4} />
                      </button>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                      سعادت‌آباد
                      <button aria-label="حذف فیلتر منطقه" className="focus-ring rounded-full">
                        <X size={12} strokeWidth={2.4} />
                      </button>
                    </span>
                    <button className="text-xs text-garnet-700 hover:underline focus-ring">
                      پاک‌کردن همه
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <label htmlFor="sort" className="text-xs text-ink-faint">
                    مرتب‌سازی:
                  </label>
                  <select
                    id="sort"
                    className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring"
                  >
                    <option>پیشنهادی</option>
                    <option>جدیدترین</option>
                    <option>محبوب‌ترین</option>
                    <option>بالاترین امتیاز</option>
                    <option>ارزان‌ترین</option>
                    <option>گران‌ترین</option>
                  </select>
                </div>
              </div>

              {/* Venue grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryVenues.map((venue) => (
                  <CategoryVenueCard key={venue.id} venue={venue} />
                ))}
              </div>

              {/* ============ PAGINATION ============ */}
              <nav aria-label="صفحه‌بندی نتایج" className="flex items-center justify-center gap-2 mt-12">
                <button
                  className="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-faint hover:border-ink hover:text-ink transition-colors focus-ring disabled:opacity-40"
                  aria-label="صفحه قبل"
                  disabled
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  className="w-11 h-11 rounded-full bg-emerald-800 text-sand-50 text-sm font-medium num focus-ring"
                  aria-current="page"
                >
                  ۱
                </button>
                <button className="w-11 h-11 rounded-full text-sm text-ink-soft hover:bg-sand-100 transition-colors num focus-ring">
                  ۲
                </button>
                <button className="w-11 h-11 rounded-full text-sm text-ink-soft hover:bg-sand-100 transition-colors num focus-ring">
                  ۳
                </button>
                <span className="px-1 text-ink-faint">…</span>
                <button className="w-11 h-11 rounded-full text-sm text-ink-soft hover:bg-sand-100 transition-colors num focus-ring">
                  ۲۳
                </button>
                <button
                  className="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-soft hover:border-ink hover:text-ink transition-colors focus-ring"
                  aria-label="صفحه بعد"
                >
                  <ChevronLeft size={16} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <MobileFilterSheet resultCount={resultCount} />

      <Footer />
    </div>
  );
}
