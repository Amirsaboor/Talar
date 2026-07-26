import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Check,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  ChevronLeft,
  Play,
  Compass,
  Info,
} from 'lucide-react';
import Footer from '@/components/modules/layout/Footer';
import SimilarVenueCard from '@/components/templates/venue/SimilarVenueCard';
import { iconMap } from '@/components/templates/venue/icon-map';
import { venueDetails, venueSlugs } from '@/data/venue-details';

export function generateStaticParams() {
  return venueSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venue = venueDetails[slug];
  if (!venue) return {};
  return {
    title: `${venue.title} | تالارگاه`,
    description: venue.about[0],
  };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venue = venueDetails[slug];

  if (!venue) notFound();

  const similarVenues = Object.values(venueDetails)
    .filter((v) => v.slug !== venue.slug)
    .slice(0, 3);

  return (
    <div className="bg-sand-50 text-ink antialiased pb-24 lg:pb-0">
      <main id="main">
        {/* ============ BREADCRUMB ============ */}
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

        {/* ============ HERO GALLERY ============ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-3xl overflow-hidden h-[280px] sm:h-[420px] relative">
            <div className="col-span-4 sm:col-span-2 row-span-2 relative overflow-hidden">
              <img
                src={venue.images[0]}
                alt={`نمای اصلی ${venue.title}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {venue.images.slice(1, 4).map((src, i) => (
              <div key={i} className="hidden sm:block relative overflow-hidden">
                <img
                  src={src}
                  alt={`تصویر ${i + 2} ${venue.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {venue.images[4] && (
              <div className="hidden sm:block relative overflow-hidden">
                <img
                  src={venue.images[4]}
                  alt={`تصویر ۵ ${venue.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/55 flex items-center justify-center">
                  <span className="text-sand-50 text-sm font-medium">۲۴+ تصویر</span>
                </div>
              </div>
            )}
            <span className="absolute bottom-4 right-4 bg-sand-50/95 text-xs text-ink px-3 py-1.5 rounded-full num">
              ۱ / ۲۴
            </span>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">
            {/* ============ MAIN COLUMN ============ */}
            <div>
              {/* Venue summary */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-sand-200">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-semibold">{venue.title}</h1>
                    {venue.verified && (
                      <span className="flex items-center gap-1 bg-emerald-800/10 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <Check size={11} strokeWidth={3} />
                        تأییدشده
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink-soft flex-wrap">
                    <span className="flex items-center gap-1">
                      <Star size={14} className="fill-[#B8863E] text-[#B8863E]" />
                      <span className="font-medium text-ink num">{venue.rating}</span>
                      <a
                        href="#reviews"
                        className="text-ink-faint hover:text-ink transition-colors focus-ring num"
                      >
                        ({venue.reviewCount} نظر)
                      </a>
                    </span>
                    <span className="text-ink-300">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} strokeWidth={1.8} />
                      {venue.address}
                    </span>
                  </div>
                </div>
                <a
                  href="#map"
                  className="hidden sm:flex shrink-0 items-center gap-1.5 text-sm text-emerald-700 border-b border-emerald-700 pb-0.5 hover:text-emerald-800 hover:border-emerald-800 transition-colors focus-ring"
                >
                  نمایش روی نقشه
                  <ChevronLeft size={14} />
                </a>
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
                {venue.quickInfo.map((item, i) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={i} className="bg-sand-100/60 rounded-2xl p-4">
                      <Icon size={20} strokeWidth={1.6} className="mb-2.5 text-emerald-800" />
                      <p className="text-xs text-ink-faint">{item.label}</p>
                      <p className="text-sm font-semibold mt-0.5 num">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* About */}
              <section className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-4">درباره تالار</h2>
                <div className="text-[15px] text-ink-soft leading-[2] space-y-4">
                  {venue.about.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              {/* Amenities */}
              <section className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-6">امکانات تالار</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
                  {venue.amenities.map((item, i) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <Icon size={20} strokeWidth={1.6} className="shrink-0 text-ink-soft" />
                        <span className="text-sm text-ink-soft">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Food menu */}
              <section className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-2">منوی پذیرایی</h2>
                <p className="text-sm text-ink-faint mb-6">
                  پکیج‌های زیر قابل سفارشی‌سازی هستند؛ برای دریافت منوی کامل با تالار تماس بگیرید.
                </p>
                <div className="grid sm:grid-cols-3 gap-5">
                  {venue.menuPackages.map((pkg, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl overflow-hidden relative ${
                        pkg.featured ? 'border-2 border-gold-500' : 'border border-sand-200'
                      }`}
                    >
                      {pkg.featured && (
                        <span className="absolute top-3 left-3 bg-gold-500 text-ink text-[10px] font-medium px-2.5 py-1 rounded-full z-10">
                          پرطرفدار
                        </span>
                      )}
                      <div className="aspect-3/2 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-sm">{pkg.name}</h3>
                        <p className="text-xs text-ink-faint mt-1.5 leading-relaxed">
                          {pkg.description}
                        </p>
                        <p className="text-sm font-semibold mt-3 num">{pkg.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <section className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-6">محدوده قیمت اجاره سالن</h2>
                <div className="rounded-2xl bg-sand-100/60 divide-y divide-sand-200">
                  {venue.pricing.map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-4">
                      <div>
                        <p className="text-sm font-medium">{row.label}</p>
                        <p className="text-xs text-ink-faint mt-0.5">{row.sublabel}</p>
                      </div>
                      <p className="text-sm font-semibold num">{row.price}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2.5 mt-4 text-xs text-ink-faint bg-gold-300/25 rounded-xl px-4 py-3">
                  <Info size={15} strokeWidth={1.8} className="shrink-0 mt-0.5 text-gold-600" />
                  {venue.priceNote}
                </div>
              </section>

              {/* Gallery */}
              <section className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-6">گالری تصاویر</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {venue.images.map((src, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                      <img
                        src={src}
                        alt={`گالری ${venue.title} ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {i === venue.images.length - 1 && (
                        <button className="absolute inset-0 bg-ink/55 flex items-center justify-center text-sand-50 text-sm font-medium focus-ring">
                          مشاهده همه
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Video */}
              <section className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-6">ویدیوی تالار</h2>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-ink">
                  <img
                    src={venue.images[0]}
                    alt={`پیش‌نمایش ویدیوی معرفی ${venue.title}`}
                    className="w-full h-full object-cover opacity-70"
                    loading="lazy"
                  />
                  <button
                    aria-label="پخش ویدیو"
                    className="absolute inset-0 flex items-center justify-center focus-ring"
                  >
                    <span className="w-16 h-16 rounded-full bg-sand-50/95 flex items-center justify-center">
                      <Play size={22} className="fill-[#211C16] text-[#211C16]" />
                    </span>
                  </button>
                </div>
              </section>

              {/* Virtual tour */}
              <section className="py-8 border-t border-sand-200">
                <div className="rounded-2xl bg-emerald-900 text-sand-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
                  <div>
                    <h2 className="text-lg font-semibold mb-1.5">تور مجازی ۳۶۰ درجه</h2>
                    <p className="text-sm text-sand-100/70 max-w-md">
                      قبل از تماس، یک قدم در فضای تالار قدم بزنید — بدون نیاز به حضور فیزیکی.
                    </p>
                  </div>
                  <button className="shrink-0 flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">
                    <Compass size={16} />
                    شروع تور مجازی
                  </button>
                </div>
              </section>

              {/* Location */}
              <section id="map" className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-2">موقعیت مکانی</h2>
                <p className="text-sm text-ink-soft mb-4">{venue.address}</p>
                <div className="rounded-2xl overflow-hidden aspect-16/8 bg-sand-200 relative">
                  <img
                    src={venue.images[1] ?? venue.images[0]}
                    alt={`نقشه موقعیت ${venue.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/10 flex items-center justify-center">
                    <span className="bg-sand-50 rounded-full p-3 shadow-card">
                      <MapPin size={22} strokeWidth={1.8} className="text-garnet-700" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {venue.nearbyTags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-sand-100 text-ink-soft px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <section id="reviews" className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-6">نظرات مهمانان</h2>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-8">
                  <div className="text-center shrink-0">
                    <p className="text-5xl font-semibold num">{venue.rating}</p>
                    <div className="flex items-center gap-0.5 justify-center mt-2" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} className="fill-[#B8863E] text-[#B8863E]" />
                      ))}
                    </div>
                    <p className="text-xs text-ink-faint mt-2 num">از {venue.reviewCount} نظر</p>
                  </div>
                  <div className="flex-1 space-y-1.5 max-w-sm">
                    {venue.ratingBreakdown.map((pct, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs">
                        <span className="w-2 text-ink-faint num">{5 - i}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden">
                          <div className="h-full bg-gold-500" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {venue.reviews.map((review, i) => (
                    <article key={i} className="border-t border-sand-200 pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center text-sm font-medium text-ink-soft">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{review.name}</p>
                          <p className="text-xs text-ink-faint">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-sm text-ink-soft leading-relaxed">{review.text}</p>
                    </article>
                  ))}
                </div>

                <button className="mt-6 text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors focus-ring">
                  مشاهده همه {venue.reviewCount} نظر
                </button>
              </section>

              {/* FAQ */}
              <section className="py-8 border-t border-sand-200">
                <h2 className="text-xl font-semibold mb-6">پرسش‌های متداول درباره این تالار</h2>
                <div>
                  {venue.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group border-t border-sand-200 py-4 [&_summary::-webkit-details-marker]:hidden last:border-b"
                    >
                      <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-ring">
                        {faq.question}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#54493D"
                          strokeWidth="1.8"
                          className="shrink-0 transition-transform group-open:rotate-45"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </summary>
                      <p className="text-sm text-ink-soft leading-relaxed mt-3">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* ============ STICKY SIDEBAR (desktop) ============ */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl border border-sand-200 p-6 shadow-soft">
                <p className="text-sm text-ink-faint">شروع قیمت اجاره سالن</p>
                <p className="text-2xl font-semibold mt-1 num">{venue.startingPrice}</p>
                <div className="flex flex-col gap-3 mt-6">
                  <a
                    href="tel:02191000000"
                    className="flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring"
                  >
                    <Phone size={16} />
                    تماس با تالار
                  </a>
                  <button className="flex items-center justify-center gap-2 border border-sand-300 hover:border-ink text-ink text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring">
                    <MessageCircle size={16} />
                    درخواست مشاوره رایگان
                  </button>
                  <a
                    href="#map"
                    className="flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-800 text-sm font-medium py-2 transition-colors focus-ring"
                  >
                    <MapPin size={15} />
                    مسیریابی تا تالار
                  </a>
                </div>
                <p className="text-xs text-ink-faint text-center mt-4">
                  پاسخ‌گویی معمولاً کمتر از ۲ ساعت
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* ============ SIMILAR VENUES ============ */}
        {similarVenues.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-sand-200">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">تالارهای مشابه</h2>
            <div className="rail flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              {similarVenues.map((v) => (
                <SimilarVenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}

        {/* ============ FINAL CTA ============ */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-900 to-emerald-800" />
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
            <h2 className="text-2xl sm:text-3xl font-extralight leading-tight mb-4">
              این تالار مناسب مراسم شماست؟
            </h2>
            <p className="text-sand-100/80 mb-8 text-sm">
              همین حالا با تالار تماس بگیرید یا درخواست مشاوره رایگان ثبت کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:02191000000"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-6 py-3.5 rounded-full transition-colors focus-ring"
              >
                <Phone size={16} />
                تماس با تالار
              </a>
              <button className="inline-flex items-center justify-center gap-2 border border-sand-50/30 hover:border-sand-50 text-sand-50 font-medium px-6 py-3.5 rounded-full transition-colors focus-ring">
                درخواست مشاوره
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ============ STICKY MOBILE CTA ============ */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-sand-50/95 backdrop-blur-md border-t border-sand-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-ink-faint">شروع از</p>
            <p className="text-sm font-semibold num truncate">{venue.startingPrice}</p>
          </div>
          <button className="flex items-center gap-1.5 border border-sand-300 text-ink text-sm font-medium px-4 h-12 rounded-xl focus-ring shrink-0">
            <MessageCircle size={15} />
            مشاوره
          </button>
          <a
            href="tel:02191000000"
            className="flex items-center gap-1.5 bg-emerald-800 text-sand-50 text-sm font-medium px-5 h-12 rounded-xl focus-ring shrink-0"
          >
            <Phone size={15} />
            تماس
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
