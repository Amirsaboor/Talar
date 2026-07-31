import Divider from '@/components/modules/divider';
import FAQSection from '@/components/modules/faq/FAQSection';
import Footer from '@/components/modules/layout/Footer';
import CategoriesCard from '@/components/templates/home/CategoriesCard';
import CTASection from '@/components/templates/home/CTASection';
import Header from '@/components/templates/home/Header';
import TestimonialsSection from '@/components/templates/home/testimonials/TestimonialsSection';
import { VenueCard } from '@/components/templates/home/VenueCard';
import CitiesSection from '@/components/templates/home/cities/CitiesSection';
import EconomySection from '@/components/templates/home/economy/EconomySection';
import LuxurySection from '@/components/templates/home/luxury/LuxurySection';
import WhyChooseSection from '@/components/templates/home/whyChoose/WhyChooseSection';
import { getCategoryRepository, getVenueRepository } from '@/data-access';
import { buildMetadata } from '@/shared/seo/metadata';
import { siteConfig } from '@/shared/config/site.config';
import type { Metadata } from 'next';
import Link from 'next/link';

// آمار واقعی (نه عدد ثابت) در description صفحه اصلی
export function generateMetadata(): Metadata {
  const total = getVenueRepository().count();
  return buildMetadata({
    title: `${siteConfig.name} | کشف و انتخاب بهترین تالارها و باغ‌تالارهای مشهد، طرقبه و شاندیز`,
    description: `${total} تالار و باغ‌تالار در مشهد، طرقبه و شاندیز — مقایسه کنید، فیلتر کنید و بدون نیاز به ثبت‌نام با مکان موردنظر خود تماس بگیرید.`,
    path: '/',
  });
}

export default function Page() {
  const categories = getCategoryRepository().findAll();
  const featuredVenues = getVenueRepository().findFeatured(3);

  return (
    <div className="bg-sand-50 text-ink antialiased">
      <Link
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-100 focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >
        رفتن به محتوای اصلی
      </Link>

      <main id="main">
        <Header />
        <Divider />

        {/* ============ QUICK CATEGORIES ============ */}
        <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-gold-600 text-sm font-medium mb-2">شروع کنید از</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">دسته‌بندی خدمات مراسم</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 px-4 sm:px-0">
            {categories.map((category) => (
              <CategoriesCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* ============ FEATURED VENUES ============ */}
        <section id="featured" className="bg-sand-100/60 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-gold-600 text-sm font-medium mb-2">پیشنهاد ویژه تالارگاه</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">تالارهای برگزیده این هفته</h2>
              </div>
              <Link
                href="/category/all"
                className="hidden sm:block text-sm text-emerald-700 hover:text-emerald-800 font-medium focus-ring"
              >
                مشاهده همه ←
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVenues.map((venue) => (
                <VenueCard venue={venue} key={venue.id} />
              ))}
            </div>

            <Link
              href="/category/all"
              className="sm:hidden mt-6 flex items-center justify-center text-sm text-emerald-700 font-medium focus-ring"
            >
              مشاهده همه تالارها ←
            </Link>
          </div>
        </section>

        {/* ============ POPULAR CITIES ============ */}
        <CitiesSection />

        <Divider />

        {/* ============ LUXURY COLLECTION ============ */}
        <LuxurySection />

        {/* ============ ECONOMY COLLECTION ============ */}
        <EconomySection />

        <Divider />

        {/* ============ WHY CHOOSE US ============ */}
        <WhyChooseSection />

        <Divider />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
