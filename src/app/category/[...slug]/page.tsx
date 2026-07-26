import { Suspense } from 'react';
import Link from 'next/link';
import Footer from '@/components/modules/layout/Footer';
import CategoryResults from '@/components/templates/category/CategoryResults';
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

  return (
    <div className="bg-sand-50 text-ink antialiased">
      <main id="main">
        {/* ============ BREADCRUMB ============ */}
        <nav aria-label="مسیر صفحه" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-faint flex-wrap">
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
              <h1 className="text-sand-50 font-semibold text-2xl sm:text-4xl leading-snug max-w-xl break-words">
                {title}
              </h1>
              <p className="text-sand-100/85 text-sm sm:text-base mt-2 max-w-lg leading-relaxed hidden sm:block">
                {subtitle}
              </p>
              <p className="text-sand-100 text-sm mt-3 num font-medium">
                {categoryVenues.length} تالار موجود
              </p>
            </div>
          </div>
        </section>

        {/* ============ SEARCH + FILTERS + RESULTS ============ */}
        <Suspense fallback={<CategoryResultsSkeleton />}>
          <CategoryResults venues={categoryVenues} />
        </Suspense>
      </main>
    </div>
  );
}

function CategoryResultsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 animate-pulse">
      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <div className="hidden lg:block h-96 bg-sand-100 rounded-3xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 bg-sand-100 rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
