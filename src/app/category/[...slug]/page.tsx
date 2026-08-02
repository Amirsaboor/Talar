import Link from 'next/link';
import { Suspense } from 'react';
import Footer from '@/components/modules/layout/Footer';
import CategoryResults from '@/components/templates/category/CategoryResults';
import { resolveCategoryRoute, resolveCategoryVenues } from '@/lib/resolve-category-route';
import JsonLd from '@/components/modules/json-ld/JsonLd';
import { buildCollectionPageSchema } from '@/shared/seo/schema/collection-page';
import { buildBreadcrumbSchema } from '@/shared/seo/schema/breadcrumb';
import { SectionErrorBoundary } from '@/components/modules/error-boundary/SectionErrorBoundary';
export { generateMetadata } from './metadata';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = resolveCategoryRoute(slug ?? []);
  const { title, breadcrumb, subtitle, eyebrow } = route;
  const venues = resolveCategoryVenues(route);
  const resultCount = String(venues.length); // عدد واقعی و واقعاً scoped به همین شهر/دسته
  const path = `/category/${(slug ?? []).join('/')}`;

  return (
    <div className="bg-sand-50 text-ink antialiased">
      <JsonLd
        data={buildCollectionPageSchema({
          name: title,
          description: subtitle,
          path,
          items: venues.map((v) => ({ name: v.title, path: v.href })),
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'خانه', path: '/' },
          { name: breadcrumb, path },
        ])}
      />
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
              src="/images/3.webp"
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

        {/* ============ RESULTS + FILTERS (شامل نوار سرچ استیکی) ============ */}
        {/* Suspense لازم است چون useCategoryFilters داخلش از useSearchParams استفاده می‌کند (برای ?page=) */}
        <Suspense fallback={null}>
          <SectionErrorBoundary message="نمایش فهرست تالارها با خطا مواجه شد.">
            <CategoryResults venues={venues} />
          </SectionErrorBoundary>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
