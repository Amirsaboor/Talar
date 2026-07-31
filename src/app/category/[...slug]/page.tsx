import Link from 'next/link';
import { MapPin, Users, ArrowLeftRight, Search } from 'lucide-react';
import Footer from '@/components/modules/layout/Footer';
import CategoryResults from '@/components/templates/category/CategoryResults';
import { categoryVenues } from '@/data/category-venues';
import { resolveCategoryRoute } from '@/lib/resolve-category-route';
import JsonLd from '@/components/modules/json-ld/JsonLd';
import { buildCollectionPageSchema } from '@/shared/seo/schema/collection-page';
import { buildBreadcrumbSchema } from '@/shared/seo/schema/breadcrumb';
export { generateMetadata } from './metadata';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { title, breadcrumb, subtitle, eyebrow } = resolveCategoryRoute(slug ?? []);
  const resultCount = String(categoryVenues.length); // عدد واقعی؛ نسخه قبلی «* ۲۸» بود و ساختگی
  const path = `/category/${(slug ?? []).join('/')}`;

  return (
    <div className="bg-sand-50 text-ink antialiased">
      {/*
        نکته: itemList دقیقاً همان categoryVenues کامل است که CategoryResults هم می‌گیرد —
        یعنی همان باگ شناخته‌شده («صفحه شهر/دسته‌بندی هنوز واقعاً بر اساس شهر/دسته فیلتر
        نمی‌شود») اینجا هم منعکس می‌شود. عمداً یک ItemList «درست‌شده» نساختم، چون Structured
        Data باید با محتوای واقعی صفحه یکی باشد؛ وقتی آن باگ رفع شد این خودکار درست می‌شود.
      */}
      <JsonLd
        data={buildCollectionPageSchema({
          name: title,
          description: subtitle,
          path,
          items: categoryVenues.map((v) => ({ name: v.title, path: v.href })),
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
                    <option>طرقبه</option>
                    <option>شاندیز</option>
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
          <CategoryResults venues={categoryVenues} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
