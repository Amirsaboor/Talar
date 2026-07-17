import FAQSection from '@/components/modules/layout/FAQSection';
import Footer from '@/components/modules/layout/Footer';
import CategoriesCard from '@/components/templates/home/CategoriesCard';
import CTASection from '@/components/templates/home/CTASection';
import { VenueCard } from '@/components/templates/home/VenueCard';
import { categories } from '@/data/categories';
import { Venues } from '@/data/venues';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-sand-50 text-ink antialiased">
      <Link
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >
        رفتن به محتوای اصلی
      </Link>

      <main id="main">
        {/* <!-- ============ HERO ============ --> */}
        <section className="relative">
          <div className="relative h-[86vh] min-h-140 sm:h-[80vh] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
              alt="باغ‌تالار عروسی با نورپردازی گرم در غروب"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/35 to-ink/10"></div>
            <div className="absolute inset-0 bg-linear-to-l from-emerald-900/30 to-transparent"></div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-28 sm:pb-24">
              <p className="text-gold-300 text-sm sm:text-base font-medium tracking-wide mb-4">
                بیش از ۲٬۴۰۰ تالار و باغ‌تالار در سراسر ایران
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

          {/* <!-- Floating search card --> */}
          <div className="relative z-10 -mt-20 sm:-mt-16 px-4 sm:px-6 lg:px-8">
            <form className="max-w-5xl mx-auto bg-sand-50 rounded-3xl shadow-lift p-4 sm:p-3 border border-sand-200/70">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors">
                  <label htmlFor="city" className="text-xs font-medium text-ink-faint">
                    شهر
                  </label>
                  <select
                    id="city"
                    className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                  >
                    <option>تهران</option>
                    <option>اصفهان</option>
                    <option>شیراز</option>
                    <option>مشهد</option>
                    <option>رشت</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors sm:border-r sm:border-sand-200">
                  <label htmlFor="etype" className="text-xs font-medium text-ink-faint">
                    نوع مراسم
                  </label>
                  <select
                    id="etype"
                    className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                  >
                    <option>عروسی</option>
                    <option>نامزدی</option>
                    <option>عقد</option>
                    <option>جشن سالگرد</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors sm:border-r sm:border-sand-200">
                  <label htmlFor="guests" className="text-xs font-medium text-ink-faint">
                    تعداد مهمان
                  </label>
                  <select
                    id="guests"
                    className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                  >
                    <option>تا ۱۰۰ نفر</option>
                    <option>۱۰۰ تا ۲۵۰ نفر</option>
                    <option>۲۵۰ تا ۵۰۰ نفر</option>
                    <option>بیش از ۵۰۰ نفر</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 px-2 py-2">
                  <div className="flex flex-col gap-1 px-2 py-1 flex-1">
                    <label htmlFor="budget" className="text-xs font-medium text-ink-faint">
                      بودجه تقریبی
                    </label>
                    <select
                      id="budget"
                      className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                    >
                      <option>نامشخص</option>
                      <option>اقتصادی</option>
                      <option>متوسط</option>
                      <option>لوکس</option>
                    </select>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="shrink-0 flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 font-medium text-sm px-5 sm:px-6 h-12 rounded-xl transition-colors focus-ring w-full sm:w-auto"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    جست‌وجو
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <div className="divider-motif mt-16 sm:mt-20" role="presentation"></div>

        {/* <!-- ============ QUICK CATEGORIES ============ --> */}
        <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-gold-600 text-sm font-medium mb-2">شروع کنید از</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">دسته‌بندی خدمات مراسم</h2>
            </div>
          </div>

          {/* تغییر اصلی در کلاس‌های ظرف (Container) انجام شده است */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 px-4 sm:px-0">
            {categories.map((category) => (
              <CategoriesCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* <!-- ============ FEATURED VENUES ============ --> */}
        <section id="featured" className="bg-sand-100/60 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-gold-600 text-sm font-medium mb-2">پیشنهاد ویژه تالارگاه</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">تالارهای برگزیده این هفته</h2>
              </div>
              <Link
                href="category.html"
                className="hidden sm:block text-sm text-emerald-700 hover:text-emerald-800 font-medium focus-ring"
              >
                مشاهده همه ←
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Venues.map((venue) => (
                <VenueCard venue={venue} key={venue.id} />
              ))}
            </div>

            <Link
              href="category.html"
              className="sm:hidden mt-6 flex items-center justify-center text-sm text-emerald-700 font-medium focus-ring"
            >
              مشاهده همه تالارها ←
            </Link>
          </div>
        </section>

        {/* <!-- ============ POPULAR CITIES ============ --> */}
        <section id="cities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="mb-8">
            <p className="text-gold-600 text-sm font-medium mb-2">جست‌وجو بر اساس مقصد</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">شهرهای محبوب</h2>
          </div>

          <div className="rail flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <Link
              href="category.html"
              className="group relative shrink-0 w-64 sm:w-auto h-72 rounded-3xl overflow-hidden focus-ring"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                alt="تهران"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent"></div>
              <div className="absolute bottom-4 right-4 text-sand-50">
                <p className="text-lg font-semibold">تهران</p>
                <p className="text-xs text-sand-100/85 num">۵۴۰ تالار</p>
              </div>
            </Link>
            <Link
              href="category.html"
              className="group relative shrink-0 w-64 sm:w-auto h-72 rounded-3xl overflow-hidden focus-ring"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                alt="اصفهان"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent"></div>
              <div className="absolute bottom-4 right-4 text-sand-50">
                <p className="text-lg font-semibold">اصفهان</p>
                <p className="text-xs text-sand-100/85 num">۲۱۰ تالار</p>
              </div>
            </Link>
            <Link
              href="category.html"
              className="group relative shrink-0 w-64 sm:w-auto h-72 rounded-3xl overflow-hidden focus-ring"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                alt="شیراز"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent"></div>
              <div className="absolute bottom-4 right-4 text-sand-50">
                <p className="text-lg font-semibold">شیراز</p>
                <p className="text-xs text-sand-100/85 num">۱۸۵ تالار</p>
              </div>
            </Link>
            <Link
              href="category.html"
              className="group relative shrink-0 w-64 sm:w-auto h-72 rounded-3xl overflow-hidden focus-ring"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                alt="رشت"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent"></div>
              <div className="absolute bottom-4 right-4 text-sand-50">
                <p className="text-lg font-semibold">رشت</p>
                <p className="text-xs text-sand-100/85 num">۹۶ تالار</p>
              </div>
            </Link>
          </div>
        </section>

        <div className="divider-motif" role="presentation"></div>

        {/* <!-- ============ LUXURY COLLECTION ============ --> */}
        <section id="luxury" className="bg-emerald-900 text-sand-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-gold-300 text-sm font-medium mb-3">مجموعه لوکس</p>
                <h2 className="text-3xl sm:text-4xl font-extralight leading-tight mb-5">
                  برای شب‌هایی که <span className="font-medium">فراموش‌نشدنی</span> می‌مانند
                </h2>
                <p className="text-sand-100/80 leading-relaxed mb-8 max-w-md">
                  گلچینی از باشکوه‌ترین تالارها با معماری خاص، خدمات پذیرایی درجه‌یک و تیم اجرایی
                  حرفه‌ای، برای زوج‌هایی که به دنبال تجربه‌ای استثنایی هستند.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-sand-50/5 border border-sand-50/15 rounded-2xl p-4">
                    <p className="text-2xl font-semibold num text-gold-300">۹۵٪</p>
                    <p className="text-xs text-sand-100/70 mt-1">رضایت مهمانان از خدمات لوکس</p>
                  </div>
                  <div className="bg-sand-50/5 border border-sand-50/15 rounded-2xl p-4">
                    <p className="text-2xl font-semibold num text-gold-300">۴۸</p>
                    <p className="text-xs text-sand-100/70 mt-1">تالار منتخب در سطح کشور</p>
                  </div>
                </div>
                <Link
                  href="category.html"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium text-sm px-6 py-3.5 rounded-full transition-colors focus-ring"
                >
                  مشاهده مجموعه لوکس
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 5 7 12l7 7" />
                  </svg>
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden aspect-4/5 shadow-lift">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                    alt="سالن پذیرایی لوکس با شمع و تزیینات طلایی"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="hidden sm:block absolute -bottom-6 -right-6 bg-sand-50 text-ink rounded-2xl p-4 shadow-card w-48">
                  <p className="text-xs text-ink-faint mb-1">تالار کاخ گلستان</p>
                  <p className="font-semibold text-sm">شروع از ۲٬۳۰۰ میلیون تومان</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ============ ECONOMY COLLECTION ============ --> */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-gold-600 text-sm font-medium mb-2">برای هر بودجه‌ای</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">مجموعه اقتصادی</h2>
            </div>
            <Link
              href="category.html"
              className="hidden sm:block text-sm text-emerald-700 hover:text-emerald-800 font-medium focus-ring"
            >
              مقایسه تالارها ←
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <article className="bg-sand-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                  alt="تالار ساده و شیک برای مراسم کوچک"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium leading-snug">تالار نگین سبز</h3>
                <p className="text-xs text-ink-faint mt-0.5">کرج</p>
                <p className="text-xs font-semibold mt-2 num">از ۲۲۰ میلیون</p>
              </div>
            </article>
            <article className="bg-sand-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                  alt="سالن پذیرایی روشن و مدرن"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium leading-snug">سالن باران</h3>
                <p className="text-xs text-ink-faint mt-0.5">تهران، شرق</p>
                <p className="text-xs font-semibold mt-2 num">از ۱۹۰ میلیون</p>
              </div>
            </article>
            <article className="bg-sand-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                  alt="باغ تالار کوچک با نورپردازی"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium leading-snug">باغ سرو</h3>
                <p className="text-xs text-ink-faint mt-0.5">شهریار</p>
                <p className="text-xs font-semibold mt-2 num">از ۲۶۰ میلیون</p>
              </div>
            </article>
            <article className="bg-sand-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                  alt="تالار کوچک با تزیینات ساده و شیک"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium leading-snug">تالار مهتاب</h3>
                <p className="text-xs text-ink-faint mt-0.5">قزوین</p>
                <p className="text-xs font-semibold mt-2 num">از ۱۷۰ میلیون</p>
              </div>
            </article>
          </div>
        </section>

        <div className="divider-motif" role="presentation"></div>

        {/* <!-- ============ WHY CHOOSE US ============ --> */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-gold-600 text-sm font-medium mb-2">چرا تالارگاه؟</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              تصمیم‌گیری آسان‌تر برای مهم‌ترین شب زندگی
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center px-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-800 flex items-center justify-center mb-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E7D0A0"
                  strokeWidth="1.8"
                >
                  <path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">اطلاعات شفاف</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                قیمت، ظرفیت و امکانات هر تالار پیش از تماس، کامل و واقعی در اختیار شماست.
              </p>
            </div>
            <div className="text-center px-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-800 flex items-center justify-center mb-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E7D0A0"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M8 2v4M16 2v4M3 10h18" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">مقایسه سریع</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                چند تالار را کنار هم بگذارید و بهترین گزینه را بر اساس بودجه و نیازتان انتخاب کنید.
              </p>
            </div>
            <div className="text-center px-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-800 flex items-center justify-center mb-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E7D0A0"
                  strokeWidth="1.8"
                >
                  <path d="M4 21v-7a8 8 0 0 1 16 0v7" />
                  <path d="M4 21h16" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">بدون واسطه</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                مستقیم با مسئول هر تالار در ارتباط باشید، بدون هزینه اضافه یا کمیسیون پنهان.
              </p>
            </div>
            <div className="text-center px-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-800 flex items-center justify-center mb-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E7D0A0"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">صرفه‌جویی در زمان</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                در عرض چند دقیقه، از میان صدها گزینه به فهرست کوتاهی می‌رسید.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- ============ HOW IT WORKS ============ --> */}
        <section className="bg-sand-100/60 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-gold-600 text-sm font-medium mb-2">مسیر ساده</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">چطور کار می‌کند</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 relative">
              <div className="hidden sm:block absolute top-14 right-[16.5%] left-[16.5%] h-px bg-sand-300"></div>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-arch bg-sand-50 border border-sand-300 flex items-center justify-center relative z-10 shadow-soft">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#255245"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3 className="font-semibold mt-5 mb-2">جست‌وجو کنید</h3>
                <p className="text-sm text-ink-soft leading-relaxed max-w-xs mx-auto">
                  شهر، نوع مراسم و بودجه‌تان را انتخاب کنید تا گزینه‌های مناسب نمایش داده شود.
                </p>
              </div>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-arch bg-sand-50 border border-sand-300 flex items-center justify-center relative z-10 shadow-soft">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#255245"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                </div>
                <h3 className="font-semibold mt-5 mb-2">مقایسه کنید</h3>
                <p className="text-sm text-ink-soft leading-relaxed max-w-xs mx-auto">
                  جزئیات، تصاویر و قیمت چند تالار را کنار هم بررسی کنید.
                </p>
              </div>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-arch bg-sand-50 border border-sand-300 flex items-center justify-center relative z-10 shadow-soft">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#255245"
                    strokeWidth="1.8"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </div>
                <h3 className="font-semibold mt-5 mb-2">تماس بگیرید</h3>
                <p className="text-sm text-ink-soft leading-relaxed max-w-xs mx-auto">
                  مستقیم با تالار موردنظر تماس بگیرید و بازدید یا رزرو خود را نهایی کنید.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ============ STATISTICS ============ --> */}
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-emerald-800 num">۲٬۴۰۰+</p>
              <p className="text-sm text-ink-faint mt-2">تالار ثبت‌شده</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-emerald-800 num">۳۱</p>
              <p className="text-sm text-ink-faint mt-2">شهر تحت پوشش</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-emerald-800 num">۵۸٬۰۰۰+</p>
              <p className="text-sm text-ink-faint mt-2">زوج خوشحال</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-emerald-800 num">۲۱۰٬۰۰۰+</p>
              <p className="text-sm text-ink-faint mt-2">بازدید ماهانه</p>
            </div>
          </div>
        </section>

        <div className="divider-motif" role="presentation"></div>

        {/* <!-- ============ TESTIMONIALS ============ --> */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="mb-10">
            <p className="text-gold-600 text-sm font-medium mb-2">تجربه زوج‌ها</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              چه کسانی از تالارگاه استفاده کرده‌اند
            </h2>
          </div>
          <div className="rail flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <figure className="shrink-0 w-80 sm:w-auto bg-sand-100/60 rounded-3xl p-6">
              <div className="flex items-center gap-1 text-gold-500 mb-4" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
              </div>
              <blockquote className="text-sm leading-relaxed text-ink-soft">
                «در کمتر از یک هفته سه تالار مناسب بودجه‌مان را پیدا و مقایسه کردیم. کل روند خیلی
                ساده‌تر از چیزی بود که فکرش را می‌کردیم.»
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-5">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium">نگار احمدی</p>
                  <p className="text-xs text-ink-faint">تهران</p>
                </div>
              </figcaption>
            </figure>
            <figure className="shrink-0 w-80 sm:w-auto bg-sand-100/60 rounded-3xl p-6">
              <div className="flex items-center gap-1 text-gold-500 mb-4" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
              </div>
              <blockquote className="text-sm leading-relaxed text-ink-soft">
                «عکس‌ها و قیمت‌ها دقیقاً همان چیزی بود که وقتی از تالار بازدید کردیم دیدیم. هیچ
                غافلگیری بدی نداشتیم.»
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-5">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium">امیرحسین رضایی</p>
                  <p className="text-xs text-ink-faint">اصفهان</p>
                </div>
              </figcaption>
            </figure>
            <figure className="shrink-0 w-80 sm:w-auto bg-sand-100/60 rounded-3xl p-6">
              <div className="flex items-center gap-1 text-gold-500 mb-4" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
                </svg>
              </div>
              <blockquote className="text-sm leading-relaxed text-ink-soft">
                «فیلتر بودجه خیلی کمک کرد. توانستیم باغ‌تالار خوبی خارج از تهران پیدا کنیم که
                به‌صرفه‌تر بود.»
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-5">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium">سارا محمدی</p>
                  <p className="text-xs text-ink-faint">کرج</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* <!-- ============ FAQ ============ --> */}
        <section id="faq" className="bg-sand-100/60 py-14 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-gold-600 text-sm font-medium mb-2">راهنما</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">پرسش‌های متداول</h2>
            </div>

            <FAQSection />
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
