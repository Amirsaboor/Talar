'use client';


export default function Page() {
  return (
    <div className="bg-sand-50 text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >
        رفتن به محتوای اصلی
      </a>

      <main id="main">
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
            alt="جشن عروسی در باغ‌تالاری با نورپردازی شبانه"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10"></div>
          <div className="relative h-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 text-center items-center">
            <p className="text-gold-300 text-sm font-medium mb-3">درباره تالارگاه</p>
            <h1 className="text-sand-50 font-extralight text-3xl sm:text-5xl leading-tight">
              چون انتخاب یک تالار<span className="block font-medium">فقط درباره یک روز نیست</span>
            </h1>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-gold-600 text-sm font-medium mb-2 text-center">داستان ما</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-14">
            از یک دغدغه شخصی تا یک پلتفرم ملی
          </h2>

          <div className="space-y-10 relative">
            <div className="hidden sm:block absolute top-2 bottom-2 right-2 w-px bg-sand-300"></div>

            <div className="flex gap-6">
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <span className="w-4 h-4 rounded-full bg-gold-500 ring-4 ring-sand-50 z-10"></span>
              </div>
              <div>
                <p className="text-xs text-ink-faint num mb-1">۱۴۰۰</p>
                <h3 className="font-semibold mb-2">شروع از یک تجربه ناخوشایند</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  بنیان‌گذاران تالارگاه هنگام برنامه‌ریزی برای عروسی خودشان، هفته‌ها وقت صرف تماس با
                  ده‌ها تالار کردند بدون این‌که قیمت یا ظرفیت دقیقی در اختیارشان قرار بگیرد. همین
                  تجربه، ایده اولیه پلتفرم را شکل داد.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <span className="w-4 h-4 rounded-full bg-gold-500 ring-4 ring-sand-50 z-10"></span>
              </div>
              <div>
                <p className="text-xs text-ink-faint num mb-1">۱۴۰۱</p>
                <h3 className="font-semibold mb-2">نسخه اول با ۴۰ تالار در تهران</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  تالارگاه با فهرستی کوچک از تالارهای تهران شروع به کار کرد و تمرکز اصلی بر شفافیت
                  قیمت و ظرفیت بود، همان چیزی که در تجربه اول وجود نداشت.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <span className="w-4 h-4 rounded-full bg-gold-500 ring-4 ring-sand-50 z-10"></span>
              </div>
              <div>
                <p className="text-xs text-ink-faint num mb-1">۱۴۰۲</p>
                <h3 className="font-semibold mb-2">گسترش به ۱۵ شهر</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  با استقبال زوج‌های بیشتری، پوشش پلتفرم به شهرهای بزرگ دیگر از جمله اصفهان، شیراز و
                  مشهد رسید.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <span className="w-4 h-4 rounded-full bg-emerald-800 ring-4 ring-sand-50 z-10"></span>
              </div>
              <div>
                <p className="text-xs text-ink-faint num mb-1">۱۴۰۴</p>
                <h3 className="font-semibold mb-2">امروز، ۲٬۴۰۰+ تالار در ۳۱ شهر</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  تالارگاه امروز به یکی از مراجع اصلی انتخاب تالار عروسی در ایران تبدیل شده، همچنان
                  با همان اصل اول: شفافیت کامل، بدون واسطه.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-motif" role="presentation"></div>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-emerald-900 text-sand-50 rounded-3xl p-8 sm:p-10">
              <span className="eyebrow text-gold-300 text-xs font-medium">مأموریت</span>
              <h2 className="text-xl sm:text-2xl font-light leading-relaxed mt-3">
                دسترسی همه به اطلاعات شفاف و کامل هر تالار، بدون واسطه و بدون هزینه اضافه.
              </h2>
            </div>
            <div className="bg-sand-100/60 rounded-3xl p-8 sm:p-10">
              <span className="text-gold-600 text-xs font-medium">چشم‌انداز</span>
              <h2 className="text-xl sm:text-2xl font-light leading-relaxed mt-3 text-ink-soft">
                تبدیل شدن به اولین مرجعی که هر زوج ایرانی، پیش از تصمیم‌گیری درباره مراسم عروسی‌اش،
                سراغ آن می‌رود.
              </h2>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-lg mx-auto mb-14">
            <p className="text-gold-600 text-sm font-medium mb-2">ارزش‌های ما</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              اصولی که هیچ‌وقت زیر پا نمی‌گذاریم
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
              <h3 className="font-semibold mb-2">صداقت</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                اطلاعاتی که نمایش می‌دهیم، همان چیزی است که در واقعیت خواهید دید.
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
              <h3 className="font-semibold mb-2">بی‌طرفی</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                هیچ تالاری به‌خاطر پرداخت بیشتر، جایگاه بهتری نمی‌گیرد.
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
              <h3 className="font-semibold mb-2">احترام به وقت شما</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                طراحی هر بخش پلتفرم با هدف کوتاه‌ترین مسیر تا تصمیم‌گیری انجام شده.
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
                  <path d="M20.4 4.6a5 5 0 0 0-7.1 0L12 5.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 20.4l8.4-8.7a5 5 0 0 0 0-7.1Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">همراهی واقعی</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                تیم پشتیبانی ما، خودش هم برای عروسی خانواده و دوستانش از همین پلتفرم استفاده می‌کند.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-ink text-sand-100 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-light num text-gold-300">۲٬۴۰۰+</p>
              <p className="text-xs text-sand-100/50 mt-2">تالار ثبت‌شده</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-light num text-gold-300">۳۱</p>
              <p className="text-xs text-sand-100/50 mt-2">شهر تحت پوشش</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-light num text-gold-300">۵۸٬۰۰۰+</p>
              <p className="text-xs text-sand-100/50 mt-2">زوج خوشحال</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-light num text-gold-300">۴</p>
              <p className="text-xs text-sand-100/50 mt-2">سال فعالیت</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-lg mx-auto mb-14">
            <p className="text-gold-600 text-sm font-medium mb-2">چرا به ما اعتماد کنید</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">هر ادعا، پشتوانه دارد</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="border border-sand-200 rounded-2xl p-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1B3E32"
                strokeWidth="1.6"
                className="mb-4"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <h3 className="font-semibold mb-2">تأیید حضوری تالارها</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                هر تالار پیش از انتشار در پلتفرم، توسط تیم ما بازدید و اطلاعاتش راستی‌آزمایی می‌شود.
              </p>
            </div>
            <div className="border border-sand-200 rounded-2xl p-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1B3E32"
                strokeWidth="1.6"
                className="mb-4"
              >
                <path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" />
              </svg>
              <h3 className="font-semibold mb-2">نظرات واقعی مهمانان</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                امتیازها و نظرات فقط از سوی کاربرانی ثبت می‌شود که واقعاً از تالار بازدید کرده‌اند.
              </p>
            </div>
            <div className="border border-sand-200 rounded-2xl p-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1B3E32"
                strokeWidth="1.6"
                className="mb-4"
              >
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h3 className="font-semibold mb-2">بدون کمیسیون پنهان</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                هزینه‌ای که به تالار می‌پردازید، دقیقاً همان چیزی است که به تالارگاه اعلام شده.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-lg mx-auto mb-14">
            <p className="text-gold-600 text-sm font-medium mb-2">تیم ما</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              افرادی که پشت تالارگاه ایستاده‌اند
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                alt="بنیان‌گذار و مدیرعامل تالارگاه"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-semibold text-sm">امیرحسین رضایی</h3>
              <p className="text-xs text-ink-faint mt-1">بنیان‌گذار و مدیرعامل</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                alt="مدیر محصول تالارگاه"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-semibold text-sm">نگار احمدی</h3>
              <p className="text-xs text-ink-faint mt-1">مدیر محصول</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                alt="مدیر ارتباط با تالارها"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-semibold text-sm">سارا محمدی</h3>
              <p className="text-xs text-ink-faint mt-1">مدیر ارتباط با تالارها</p>
            </div>
          </div>
        </section>

        <section className="bg-sand-100/60 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-ink-faint mb-8">همکاران و شرکای ما</p>
            <div className="rail flex sm:grid sm:grid-cols-5 gap-8 items-center justify-items-center overflow-x-auto">
              <span className="text-ink-300 font-semibold text-lg shrink-0">آژانس گل</span>
              <span className="text-ink-300 font-semibold text-lg shrink-0">مزون رویا</span>
              <span className="text-ink-300 font-semibold text-lg shrink-0">آتلیه نور</span>
              <span className="text-ink-300 font-semibold text-lg shrink-0">تشریفات پارسیان</span>
              <span className="text-ink-300 font-semibold text-lg shrink-0">گروه موسیقی آوا</span>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            چند پرسش رایج درباره ما
          </h2>
          <div className="space-y-3">
            <details className="group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا تالارگاه خودش صاحب تالارهاست؟
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#54493D"
                  strokeWidth="2"
                  className="shrink-0 transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">
                خیر، تالارگاه صرفاً یک پلتفرم معرفی و مقایسه است و تالارها به‌صورت مستقل اداره
                می‌شوند.
              </p>
            </details>
            <details className="group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                درآمد تالارگاه از کجاست؟
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#54493D"
                  strokeWidth="2"
                  className="shrink-0 transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">
                از عضویت تالارها در پلتفرم، بدون هیچ هزینه‌ای برای کاربران نهایی.
              </p>
            </details>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-linear-to-l from-emerald-900 to-emerald-800"></div>
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
            <h2 className="text-2xl sm:text-4xl font-extralight leading-tight mb-4">
              به ما ملحق شوید
            </h2>
            <p className="text-sand-100/80 mb-8">
              چه به‌دنبال تالار می‌گردید، چه صاحب یک تالار هستید؛ تالارگاه برای شما ساخته شده.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="category.html"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-6 py-3.5 rounded-full transition-colors focus-ring"
              >
                جست‌وجوی تالار
              </a>
              <a
                href="contact.html"
                className="inline-flex items-center justify-center gap-2 border border-sand-50/30 hover:border-sand-50 text-sand-50 font-medium px-6 py-3.5 rounded-full transition-colors focus-ring"
              >
                ثبت تالار شما
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
