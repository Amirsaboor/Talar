export default function Page() {
  return (
    <body class="bg-sand-50 text-ink antialiased">

      <header class="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 lg:h-20">
            <a href="index.html" class="flex items-center gap-2 focus-ring">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#B8863E" strokeWidth="1.4" />
                <circle cx="15" cy="15" r="5" fill="#1B3E32" />
              </svg>
              <span class="text-lg lg:text-xl font-bold tracking-tight">تالارگاه</span>
            </a>

            <nav class="hidden lg:flex items-center gap-1" aria-label="ناوبری اصلی">
              <a href="category.html" class="px-4 py-2 rounded-full text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">تالارها</a>
              <a href="search.html" class="px-4 py-2 rounded-full text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">جست‌وجو</a>
              <a href="favorites.html" class="px-4 py-2 rounded-full text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">علاقه‌مندی‌ها</a>
              <a href="about.html" class="px-4 py-2 rounded-full text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">درباره ما</a>
              <a href="faq.html" class="px-4 py-2 rounded-full text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">سوالات متداول</a>
              <a href="contact.html" class="px-4 py-2 rounded-full text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">تماس با ما</a>
            </nav>

            <div class="flex items-center gap-2">
              <a
                href="search.html"
                class="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full border border-sand-300 text-sm text-ink-soft hover:border-gold-500 hover:text-ink transition-colors focus-ring"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                جست‌وجوی تالار
              </a>
              <button
                id="mobile-menu-btn"
                class="lg:hidden p-2.5 rounded-full hover:bg-sand-100 focus-ring"
                aria-label="باز کردن منو"
                aria-expanded="false"
                aria-controls="mobile-menu"
                onclick="var m=document.getElementById('mobile-menu');var o=this.querySelector('.icon-open');var c=this.querySelector('.icon-close');var exp=this.getAttribute('aria-expanded')==='true';this.setAttribute('aria-expanded',exp?'false':'true');m.classList.toggle('hidden');o.classList.toggle('hidden');c.classList.toggle('hidden');"
              >
                <svg
                  class="icon-open"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                <svg
                  class="icon-close hidden"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <a
                href="#admin"
                class="hidden lg:inline text-xs text-ink-faint hover:text-ink-soft transition-colors focus-ring"
              >ورود مدیر</a
              >
            </div>
          </div>
        </div>
        <div id="mobile-menu" class="hidden lg:hidden border-t border-sand-200/80 bg-sand-50">
          <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col" aria-label="ناوبری موبایل">
            <a href="index.html" class="px-4 py-3 rounded-xl text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">خانه</a>
            <a href="category.html" class="px-4 py-3 rounded-xl text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">تالارها</a>
            <a href="search.html" class="px-4 py-3 rounded-xl text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">جست‌وجو</a>
            <a href="favorites.html" class="px-4 py-3 rounded-xl text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">علاقه‌مندی‌ها</a>
            <a href="about.html" class="px-4 py-3 rounded-xl text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">درباره ما</a>
            <a href="faq.html" class="px-4 py-3 rounded-xl text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">سوالات متداول</a>
            <a href="contact.html" class="px-4 py-3 rounded-xl text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring">تماس با ما</a>
          </nav>
        </div>
      </header>

      <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        <div>
          <h1 class="text-2xl font-semibold mb-2">حالت‌های خالی و خطا</h1>
          <p class="text-sm text-ink-soft leading-relaxed max-w-2xl">
            فلسفه طراحی این صفحه ساده است: هیچ صفحه خالی یا خطایی نباید کاربر را در بن‌بست بگذارد. هر حالت، دلیل اتفاق را ساده توضیح می‌دهد و همیشه حداقل یک اقدام بعدی روشن پیش پای کاربر می‌گذارد — نه فقط پیام «مشکلی پیش آمد».
            هرکدام از بخش‌های زیر را می‌توانید مستقیماً در صفحه واقعی مربوطه کپی کنید.
          </p>
        </div>

        <!-- ============ 1. 404 PAGE ============ -->
        <section class="border-t border-sand-200 pt-10">
          <p class="text-xs font-medium text-gold-600 mb-4">۱ · صفحه ۴۰۴</p>
          <div class="bg-sand-100/50 rounded-3xl p-8 sm:p-14 text-center">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" class="mx-auto mb-6">
              <circle cx="12" cy="12" r="9" stroke="#E2D2AC" strokeWidth="1.2" />
              <path d="M9 10c.3-1 1-1.5 2-1.5S13 9 12.5 10 11 11.5 11 13" stroke="#B8863E" strokeWidth="1.3" stroke-linecap="round" />
              <circle cx="11" cy="16" r=".8" fill="#B8863E" />
            </svg>
            <p class="text-5xl font-light num text-ink-300 mb-3">۴۰۴</p>
            <h2 class="text-xl font-semibold mb-2">این صفحه پیدا نشد</h2>
            <p class="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-7">
              ممکن است آدرس اشتباه باشد یا این صفحه جابه‌جا شده باشد. نگران نباشید، از اینجا می‌توانید مسیر خود را ادامه دهید.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="index.html" class="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">بازگشت به خانه</a>
              <a href="category.html" class="inline-flex items-center justify-center gap-2 border border-sand-300 hover:border-ink text-ink text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">جست‌وجوی تالارها</a>
            </div>
          </div>
        </section>

        <!-- ============ 2. NO SEARCH RESULTS ============ -->
        <section class="border-t border-sand-200 pt-10">
          <p class="text-xs font-medium text-gold-600 mb-4">۲ · جست‌وجوی بدون نتیجه</p>
          <div class="bg-sand-100/50 rounded-3xl p-8 sm:p-14 text-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.2" class="mx-auto mb-6">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6" stroke="#B8863E" />
            </svg>
            <h2 class="text-xl font-semibold mb-2">تالاری با این فیلترها پیدا نشد</h2>
            <p class="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
              به نظر می‌رسد فیلترهای انتخابی محدودند. این گزینه‌ها را امتحان کنید:
            </p>
            <ul class="inline-flex flex-col gap-2 text-sm text-ink-soft mb-7 text-right">
              <li class="flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg> شهر دیگری را امتحان کنید</li>
              <li class="flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg> برخی فیلترها را حذف کنید</li>
              <li class="flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg> محدوده بودجه را افزایش دهید</li>
            </ul>
            <div>
              <button class="bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">پاک‌کردن فیلترها</button>
            </div>
          </div>
        </section>

        <!-- ============ 3. EMPTY FAVORITES ============ -->
        <section class="border-t border-sand-200 pt-10">
          <p class="text-xs font-medium text-gold-600 mb-4">۳ · علاقه‌مندی‌های خالی</p>
          <div class="bg-sand-100/50 rounded-3xl p-8 sm:p-14 text-center">
            <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.1" class="mx-auto mb-6">
              <path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" stroke="#B8863E" />
            </svg>
            <h2 class="text-xl font-semibold mb-2">هنوز تالاری ذخیره نکرده‌اید</h2>
            <p class="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-7">
              هنگام مرور تالارها، روی نماد قلب بزنید تا گزینه‌های موردعلاقه‌تان اینجا جمع شوند.
            </p>
            <a href="category.html" class="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">مشاهده تالارها</a>
          </div>
        </section>

        <!-- ============ 4. EMPTY CATEGORY ============ -->
        <section class="border-t border-sand-200 pt-10">
          <p class="text-xs font-medium text-gold-600 mb-4">۴ · دسته‌بندی خالی</p>
          <div class="bg-sand-100/50 rounded-3xl p-8 sm:p-14 text-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.2" class="mx-auto mb-6">
              <rect x="4" y="7" width="16" height="13" rx="2" /><path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="#B8863E" />
            </svg>
            <h2 class="text-xl font-semibold mb-2">هنوز تالاری در این دسته‌بندی ثبت نشده</h2>
            <p class="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-7">
              به‌زودی تالارهای بیشتری در این بخش اضافه می‌شوند. در همین حال می‌توانید سایر دسته‌بندی‌ها را مرور کنید.
            </p>
            <a href="index.html#categories" class="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">مشاهده دسته‌بندی‌ها</a>
          </div>
        </section>

        <!-- ============ 5. LOADING SKELETONS ============ -->
        <section class="border-t border-sand-200 pt-10">
          <p class="text-xs font-medium text-gold-600 mb-4">۵ · اسکلت‌های بارگذاری</p>

          <p class="text-sm font-medium mb-3">کارت تالار</p>
          <div class="grid sm:grid-cols-3 gap-4 mb-8">
            <div class="bg-sand-50 rounded-3xl overflow-hidden shadow-soft">
              <div class="aspect-[4/3] skeleton"></div>
              <div class="p-5 space-y-3">
                <div class="h-4 w-3/4 rounded skeleton"></div>
                <div class="h-3 w-1/2 rounded skeleton"></div>
                <div class="h-8 w-full rounded-xl skeleton mt-3"></div>
              </div>
            </div>
            <div class="bg-sand-50 rounded-3xl overflow-hidden shadow-soft">
              <div class="aspect-[4/3] skeleton"></div>
              <div class="p-5 space-y-3">
                <div class="h-4 w-3/4 rounded skeleton"></div>
                <div class="h-3 w-1/2 rounded skeleton"></div>
                <div class="h-8 w-full rounded-xl skeleton mt-3"></div>
              </div>
            </div>
            <div class="bg-sand-50 rounded-3xl overflow-hidden shadow-soft hidden sm:block">
              <div class="aspect-[4/3] skeleton"></div>
              <div class="p-5 space-y-3">
                <div class="h-4 w-3/4 rounded skeleton"></div>
                <div class="h-3 w-1/2 rounded skeleton"></div>
                <div class="h-8 w-full rounded-xl skeleton mt-3"></div>
              </div>
            </div>
          </div>

          <p class="text-sm font-medium mb-3">گالری تصاویر</p>
          <div class="grid grid-cols-4 grid-rows-2 gap-2 h-56 rounded-3xl overflow-hidden mb-8">
            <div class="col-span-2 row-span-2 skeleton"></div>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
          </div>

          <p class="text-sm font-medium mb-3">جزئیات تالار</p>
          <div class="space-y-3 mb-8 max-w-md">
            <div class="h-6 w-2/3 rounded skeleton"></div>
            <div class="h-4 w-1/2 rounded skeleton"></div>
            <div class="h-24 w-full rounded-xl skeleton"></div>
          </div>

          <p class="text-sm font-medium mb-3">نتایج جست‌وجو (ردیفی)</p>
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-4">
              <div class="w-20 h-16 rounded-xl skeleton shrink-0"></div>
              <div class="flex-1 space-y-2">
                <div class="h-3.5 w-1/3 rounded skeleton"></div>
                <div class="h-3 w-1/4 rounded skeleton"></div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-20 h-16 rounded-xl skeleton shrink-0"></div>
              <div class="flex-1 space-y-2">
                <div class="h-3.5 w-1/3 rounded skeleton"></div>
                <div class="h-3 w-1/4 rounded skeleton"></div>
              </div>
            </div>
          </div>

          <p class="text-sm font-medium mb-3">جدول</p>
          <div class="rounded-2xl overflow-hidden border border-sand-200">
            <div class="grid grid-cols-4 gap-4 p-4 border-b border-sand-200">
              <div class="h-3 rounded skeleton"></div><div class="h-3 rounded skeleton"></div><div class="h-3 rounded skeleton"></div><div class="h-3 rounded skeleton"></div>
            </div>
            <div class="grid grid-cols-4 gap-4 p-4 border-b border-sand-200">
              <div class="h-3 rounded skeleton"></div><div class="h-3 rounded skeleton"></div><div class="h-3 rounded skeleton"></div><div class="h-3 rounded skeleton"></div>
            </div>
          </div>
        </section>

        <!-- ============ 6. GENERIC ERROR ============ -->
        <section class="border-t border-sand-200 pt-10">
          <p class="text-xs font-medium text-gold-600 mb-4">۶ · خطای عمومی</p>
          <div class="bg-sand-100/50 rounded-3xl p-8 sm:p-14 text-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.2" class="mx-auto mb-6">
              <circle cx="12" cy="12" r="9" /><path d="M12 8v5" stroke="#8A2A38" /><circle cx="12" cy="16" r=".8" fill="#8A2A38" stroke="none" />
            </svg>
            <h2 class="text-xl font-semibold mb-2">مشکلی پیش آمد</h2>
            <p class="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-7">
              دریافت اطلاعات با خطا مواجه شد. لطفاً دوباره تلاش کنید؛ اگر مشکل ادامه داشت، با پشتیبانی در تماس باشید.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button class="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5" /></svg>
                تلاش دوباره
              </button>
              <a href="index.html" class="inline-flex items-center justify-center gap-2 border border-sand-300 hover:border-ink text-ink text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">بازگشت به خانه</a>
              <a href="contact.html" class="inline-flex items-center justify-center gap-2 border border-sand-300 hover:border-ink text-ink text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">تماس با پشتیبانی</a>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
