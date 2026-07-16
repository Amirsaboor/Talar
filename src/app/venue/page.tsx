export default function Page() {
  return (
    <body class="bg-sand-50 text-ink antialiased pb-24 lg:pb-0">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >رفتن به محتوای اصلی</a
    >

    <!-- ============ HEADER (shared) ============ -->
        <header class="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <a href="index.html" class="flex items-center gap-2 focus-ring">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#B8863E" stroke-width="1.4" />
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
                stroke-width="2"
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
                stroke-width="2"
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
                stroke-width="2"
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

    <main id="main">
      <!-- ============ BREADCRUMB ============ -->
      <nav aria-label="مسیر صفحه" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <ol class="flex items-center gap-2 text-xs text-ink-faint flex-wrap" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="index.html" itemprop="item" class="hover:text-ink transition-colors focus-ring"><span itemprop="name">خانه</span></a>
            <meta itemprop="position" content="1" />
          </li>
          <li aria-hidden="true">/</li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="category.html" itemprop="item" class="hover:text-ink transition-colors focus-ring"><span itemprop="name">تالارهای تهران</span></a>
            <meta itemprop="position" content="2" />
          </li>
          <li aria-hidden="true">/</li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="text-ink-soft" aria-current="page">
            <span itemprop="name">تالار ایوان طلایی</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </nav>

      <!-- ============ HERO GALLERY ============ -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div class="grid grid-cols-4 grid-rows-2 gap-2 rounded-3xl overflow-hidden h-[280px] sm:h-[420px] relative">
          <button class="col-span-4 sm:col-span-2 row-span-2 relative overflow-hidden group focus-ring" aria-label="مشاهده تمام‌صفحه تصویر ۱">
            <img src="./1.png" alt="نمای اصلی سالن پذیرایی ایوان طلایی" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="eager" />
          </button>
          <button class="hidden sm:block relative overflow-hidden group focus-ring" aria-label="مشاهده تمام‌صفحه تصویر ۲">
            <img src="./1.png" alt="میز شام تزیین‌شده تالار" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
          </button>
          <button class="hidden sm:block relative overflow-hidden group focus-ring" aria-label="مشاهده تمام‌صفحه تصویر ۳">
            <img src="./1.png" alt="فضای باز تالار" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
          </button>
          <button class="hidden sm:block relative overflow-hidden group focus-ring" aria-label="مشاهده تمام‌صفحه تصویر ۴">
            <img src="./1.png" alt="سالن VIP تالار" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
          </button>
          <button class="hidden sm:block relative overflow-hidden group focus-ring" aria-label="مشاهده همه ۲۴ تصویر">
            <img src="./1.png" alt="نورپردازی داخلی تالار" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-ink/55 flex items-center justify-center">
              <span class="text-sand-50 text-sm font-medium">۲۴+ تصویر</span>
            </div>
          </button>
          <span class="absolute bottom-4 right-4 bg-sand-50/95 text-xs text-ink px-3 py-1.5 rounded-full num">۱ / ۲۴</span>
        </div>
      </section>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div class="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">

          <!-- ============ MAIN COLUMN ============ -->
          <div>
            <!-- Venue summary -->
            <div class="flex items-start justify-between gap-4 pb-6 border-b border-sand-200">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <h1 class="text-2xl sm:text-3xl font-semibold">تالار ایوان طلایی</h1>
                  <span class="flex items-center gap-1 bg-emerald-800/10 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
                    تأییدشده
                  </span>
                </div>
                <div class="flex items-center gap-3 text-sm text-ink-soft flex-wrap">
                  <span class="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                    <span class="font-medium text-ink num">۴.۹</span>
                    <a href="#reviews" class="text-ink-faint hover:text-ink transition-colors focus-ring num">(۲۱۴ نظر)</a>
                  </span>
                  <span class="text-ink-300">·</span>
                  <span class="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="11" r="2.4"/></svg>
                    تهران، سعادت‌آباد، خیابان سرو
                  </span>
                </div>
              </div>
              <a href="#map" class="hidden sm:flex shrink-0 items-center gap-1.5 text-sm text-emerald-700 border-b border-emerald-700 pb-0.5 hover:text-emerald-800 hover:border-emerald-800 transition-colors focus-ring">
                نمایش روی نقشه
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 5 7 12l7 7"/></svg>
              </a>
            </div>

            <!-- Quick info cards -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
              <div class="bg-sand-100/60 rounded-2xl p-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" stroke-width="1.6" class="mb-2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <p class="text-xs text-ink-faint">ظرفیت</p>
                <p class="text-sm font-semibold mt-0.5 num">۶۰۰ نفر</p>
              </div>
              <div class="bg-sand-100/60 rounded-2xl p-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" stroke-width="1.6" class="mb-2.5"><path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="11" r="2.4"/></svg>
                <p class="text-xs text-ink-faint">نوع تالار</p>
                <p class="text-sm font-semibold mt-0.5">فضای بسته و باز</p>
              </div>
              <div class="bg-sand-100/60 rounded-2xl p-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" stroke-width="1.6" class="mb-2.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <p class="text-xs text-ink-faint">محدوده قیمت</p>
                <p class="text-sm font-semibold mt-0.5 num">از ۸۵۰ میلیون</p>
              </div>
              <div class="bg-sand-100/60 rounded-2xl p-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" stroke-width="1.6" class="mb-2.5"><path d="M19 17h2l-1.5-6H4.5L3 17h2M5 17v3M19 17v3M6 11l1.5-4h9L18 11"/></svg>
                <p class="text-xs text-ink-faint">پارکینگ</p>
                <p class="text-sm font-semibold mt-0.5 num">۸۰ خودرو</p>
              </div>
            </div>

            <!-- About -->
            <section class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-4">درباره تالار</h2>
              <div class="text-[15px] text-ink-soft leading-[2] space-y-4">
                <p>
                  تالار ایوان طلایی با بیش از پانزده سال سابقه در برگزاری مراسم عروسی، یکی از شناخته‌شده‌ترین تالارهای منطقه سعادت‌آباد تهران است.
                  فضای اصلی سالن با سقف‌های بلند و نورپردازی گرم طراحی شده و می‌تواند تا ۶۰۰ مهمان را به‌طور هم‌زمان در بخش‌های جداگانه بانوان و آقایان پذیرایی کند.
                </p>
                <p>
                  بخش بیرونی تالار شامل باغچه‌ای با درختان کهن‌سال است که برای عکاسی و پذیرایی پیش از مراسم استفاده می‌شود.
                  آشپزخانه تالار به‌صورت مستقل مدیریت می‌شود و امکان سفارشی‌سازی منو بر اساس سلیقه و بودجه مهمانان وجود دارد.
                </p>
              </div>
            </section>

            <!-- Amenities -->
            <section class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-6">امکانات تالار</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><path d="M19 17h2l-1.5-6H4.5L3 17h2M5 17v3M19 17v3M6 11l1.5-4h9L18 11"/></svg>
                  <span class="text-sm text-ink-soft">پارکینگ اختصاصی</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><path d="M20.4 4.6a5 5 0 0 0-7.1 0L12 5.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 20.4l8.4-8.7a5 5 0 0 0 0-7.1Z"/></svg>
                  <span class="text-sm text-ink-soft">اتاق عروس</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16"/></svg>
                  <span class="text-sm text-ink-soft">اتاق داماد</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><rect x="3" y="12" width="18" height="8" rx="1"/><path d="M7 12V8a5 5 0 0 1 10 0v4"/></svg>
                  <span class="text-sm text-ink-soft">سن اجرا و DJ</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M22 10 12 4 2 10"/></svg>
                  <span class="text-sm text-ink-soft">صفحه‌نمایش LED</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2"/><circle cx="12" cy="12" r="4"/></svg>
                  <span class="text-sm text-ink-soft">سرمایش و گرمایش</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><rect x="3" y="8" width="14" height="10" rx="1"/><path d="M17 11.5 21 9v6l-4-2.5"/></svg>
                  <span class="text-sm text-ink-soft">دوربین ثبت مراسم</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><circle cx="12" cy="5" r="2"/><path d="M12 7v5M8 22l4-10 4 10M6 13h12"/></svg>
                  <span class="text-sm text-ink-soft">دسترسی ویلچر</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z"/></svg>
                  <span class="text-sm text-ink-soft">نمازخانه</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.6" class="shrink-0"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 17h6M5 17l1-9h12l1 9M6 8l2-4h8l2 4"/></svg>
                  <span class="text-sm text-ink-soft">پارکبان (والت)</span>
                </div>
              </div>
            </section>

            <!-- Food menu -->
            <section class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-2">منوی پذیرایی</h2>
              <p class="text-sm text-ink-faint mb-6">پکیج‌های زیر قابل سفارشی‌سازی هستند؛ برای دریافت منوی کامل با تالار تماس بگیرید.</p>
              <div class="grid sm:grid-cols-3 gap-5">
                <div class="rounded-2xl overflow-hidden border border-sand-200">
                  <div class="aspect-[3/2] overflow-hidden">
                    <img src="./1.png" alt="پکیج پذیرایی کلاسیک" class="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div class="p-4">
                    <h3 class="font-medium text-sm">پکیج کلاسیک</h3>
                    <p class="text-xs text-ink-faint mt-1.5 leading-relaxed">دو نوع غذای ایرانی، پیش‌غذا و نوشیدنی</p>
                    <p class="text-sm font-semibold mt-3 num">هر نفر از ۱٬۲۰۰٬۰۰۰ تومان</p>
                  </div>
                </div>
                <div class="rounded-2xl overflow-hidden border-2 border-gold-500 relative">
                  <span class="absolute top-3 left-3 bg-gold-500 text-ink text-[10px] font-medium px-2.5 py-1 rounded-full z-10">پرطرفدار</span>
                  <div class="aspect-[3/2] overflow-hidden">
                    <img src="./1.png" alt="پکیج پذیرایی ویژه" class="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div class="p-4">
                    <h3 class="font-medium text-sm">پکیج ویژه</h3>
                    <p class="text-xs text-ink-faint mt-1.5 leading-relaxed">سه نوع غذا، میز میوه و شیرینی، نوشیدنی متنوع</p>
                    <p class="text-sm font-semibold mt-3 num">هر نفر از ۱٬۸۵۰٬۰۰۰ تومان</p>
                  </div>
                </div>
                <div class="rounded-2xl overflow-hidden border border-sand-200">
                  <div class="aspect-[3/2] overflow-hidden">
                    <img src="./1.png" alt="پکیج پذیرایی لوکس" class="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div class="p-4">
                    <h3 class="font-medium text-sm">پکیج لوکس</h3>
                    <p class="text-xs text-ink-faint mt-1.5 leading-relaxed">منوی باز چهار نوع غذا، بار میوه و دسر کامل</p>
                    <p class="text-sm font-semibold mt-3 num">هر نفر از ۲٬۶۰۰٬۰۰۰ تومان</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Pricing -->
            <section class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-6">محدوده قیمت اجاره سالن</h2>
              <div class="rounded-2xl bg-sand-100/60 divide-y divide-sand-200">
                <div class="flex items-center justify-between px-5 py-4">
                  <div>
                    <p class="text-sm font-medium">روزهای عادی هفته</p>
                    <p class="text-xs text-ink-faint mt-0.5">شنبه تا چهارشنبه</p>
                  </div>
                  <p class="text-sm font-semibold num">۸۵۰ میلیون تومان</p>
                </div>
                <div class="flex items-center justify-between px-5 py-4">
                  <div>
                    <p class="text-sm font-medium">پنجشنبه و جمعه</p>
                    <p class="text-xs text-ink-faint mt-0.5">تقاضای بالا</p>
                  </div>
                  <p class="text-sm font-semibold num">۱٬۱۵۰ میلیون تومان</p>
                </div>
                <div class="flex items-center justify-between px-5 py-4">
                  <div>
                    <p class="text-sm font-medium">فصل اوج (بهار و تابستان)</p>
                    <p class="text-xs text-ink-faint mt-0.5">اردیبهشت تا شهریور</p>
                  </div>
                  <p class="text-sm font-semibold num">+۱۵٪ نسبت به نرخ عادی</p>
                </div>
              </div>
              <div class="flex items-start gap-2.5 mt-4 text-xs text-ink-faint bg-gold-300/25 rounded-xl px-4 py-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9A6E30" stroke-width="1.8" class="shrink-0 mt-0.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>
                قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.
              </div>
            </section>

            <!-- Gallery -->
            <section class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-6">گالری تصاویر</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div class="aspect-square rounded-xl overflow-hidden"><img src="./1.png" alt="نمای سالن" class="w-full h-full object-cover" loading="lazy" /></div>
                <div class="aspect-square rounded-xl overflow-hidden"><img src="./1.png" alt="چیدمان میز" class="w-full h-full object-cover" loading="lazy" /></div>
                <div class="aspect-square rounded-xl overflow-hidden"><img src="./1.png" alt="فضای باز" class="w-full h-full object-cover" loading="lazy" /></div>
                <div class="aspect-square rounded-xl overflow-hidden"><img src="./1.png" alt="سالن VIP" class="w-full h-full object-cover" loading="lazy" /></div>
                <div class="aspect-square rounded-xl overflow-hidden"><img src="./1.png" alt="نورپردازی" class="w-full h-full object-cover" loading="lazy" /></div>
                <div class="relative aspect-square rounded-xl overflow-hidden">
                  <img src="./1.png" alt="ورودی تالار" class="w-full h-full object-cover" loading="lazy" />
                  <button class="absolute inset-0 bg-ink/55 flex items-center justify-center text-sand-50 text-sm font-medium focus-ring">مشاهده همه</button>
                </div>
              </div>
            </section>

            <!-- Video -->
            <section class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-6">ویدیوی تالار</h2>
              <div class="relative aspect-video rounded-2xl overflow-hidden bg-ink">
                <img src="./1.png" alt="پیش‌نمایش ویدیوی معرفی تالار" class="w-full h-full object-cover opacity-70" loading="lazy" />
                <button aria-label="پخش ویدیو" class="absolute inset-0 flex items-center justify-center focus-ring">
                  <span class="w-16 h-16 rounded-full bg-sand-50/95 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#211C16"><path d="M8 5v14l11-7Z"/></svg>
                  </span>
                </button>
              </div>
            </section>

            <!-- Virtual tour -->
            <section class="py-8 border-t border-sand-200">
              <div class="rounded-2xl bg-emerald-900 text-sand-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
                <div>
                  <h2 class="text-lg font-semibold mb-1.5">تور مجازی ۳۶۰ درجه</h2>
                  <p class="text-sm text-sand-100/70 max-w-md">قبل از تماس، یک قدم در فضای تالار قدم بزنید — بدون نیاز به حضور فیزیکی.</p>
                </div>
                <button class="shrink-0 flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>
                  شروع تور مجازی
                </button>
              </div>
            </section>

            <!-- Location -->
            <section id="map" class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-2">موقعیت مکانی</h2>
              <p class="text-sm text-ink-soft mb-4">تهران، سعادت‌آباد، خیابان سرو غربی، پلاک ۴۵</p>
              <div class="rounded-2xl overflow-hidden aspect-[16/8] bg-sand-200 relative">
                <img src="./1.png" alt="نقشه موقعیت تالار در سعادت‌آباد تهران" class="w-full h-full object-cover" loading="lazy" />
                <div class="absolute inset-0 bg-ink/10 flex items-center justify-center">
                  <span class="bg-sand-50 rounded-full p-3 shadow-card">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A2A38" stroke-width="1.8"><path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="11" r="2.4"/></svg>
                  </span>
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="text-xs bg-sand-100 text-ink-soft px-3 py-1.5 rounded-full">۵ دقیقه تا بزرگراه همت</span>
                <span class="text-xs bg-sand-100 text-ink-soft px-3 py-1.5 rounded-full">نزدیک مترو شهید کلانتری</span>
                <span class="text-xs bg-sand-100 text-ink-soft px-3 py-1.5 rounded-full">پارکینگ سرپوشیده ۸۰ نفره</span>
              </div>
            </section>

            <!-- Reviews -->
            <section id="reviews" class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-6">نظرات مهمانان</h2>
              <div class="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-8">
                <div class="text-center shrink-0">
                  <p class="text-5xl font-semibold num">۴.۹</p>
                  <div class="flex items-center gap-0.5 justify-center mt-2" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                  </div>
                  <p class="text-xs text-ink-faint mt-2 num">از ۲۱۴ نظر</p>
                </div>
                <div class="flex-1 space-y-1.5 max-w-sm">
                  <div class="flex items-center gap-3 text-xs">
                    <span class="w-2 text-ink-faint num">۵</span>
                    <div class="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden"><div class="h-full bg-gold-500 w-[85%]"></div></div>
                  </div>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="w-2 text-ink-faint num">۴</span>
                    <div class="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden"><div class="h-full bg-gold-500 w-[10%]"></div></div>
                  </div>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="w-2 text-ink-faint num">۳</span>
                    <div class="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden"><div class="h-full bg-gold-500 w-[3%]"></div></div>
                  </div>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="w-2 text-ink-faint num">۲</span>
                    <div class="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden"><div class="h-full bg-gold-500 w-[1%]"></div></div>
                  </div>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="w-2 text-ink-faint num">۱</span>
                    <div class="flex-1 h-1.5 rounded-full bg-sand-200 overflow-hidden"><div class="h-full bg-gold-500 w-[1%]"></div></div>
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <article class="border-t border-sand-200 pt-6">
                  <div class="flex items-center gap-3 mb-3">
                    <img src="./1.png" alt="" class="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p class="text-sm font-medium">نگار احمدی</p>
                      <p class="text-xs text-ink-faint">مهر ۱۴۰۳</p>
                    </div>
                  </div>
                  <p class="text-sm text-ink-soft leading-relaxed">
                    فضای سالن واقعاً چشم‌نواز بود و پرسنل بسیار محترمانه برخورد کردند. تنها نکته این بود که پارکینگ در شب‌های شلوغ کمی زود پر می‌شود.
                  </p>
                  <div class="flex gap-2 mt-3">
                    <div class="w-14 h-14 rounded-lg overflow-hidden"><img src="./1.png" alt="عکس ارسالی مهمان" class="w-full h-full object-cover" loading="lazy" /></div>
                    <div class="w-14 h-14 rounded-lg overflow-hidden"><img src="./1.png" alt="عکس ارسالی مهمان" class="w-full h-full object-cover" loading="lazy" /></div>
                  </div>
                </article>
                <article class="border-t border-sand-200 pt-6">
                  <div class="flex items-center gap-3 mb-3">
                    <img src="./1.png" alt="" class="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p class="text-sm font-medium">امیرحسین رضایی</p>
                      <p class="text-xs text-ink-faint">شهریور ۱۴۰۳</p>
                    </div>
                  </div>
                  <p class="text-sm text-ink-soft leading-relaxed">
                    منوی غذا فراتر از انتظارمان بود. هماهنگی‌های قبل از مراسم هم دقیق و بدون تأخیر انجام شد.
                  </p>
                </article>
              </div>

              <button class="mt-6 text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors focus-ring">مشاهده همه ۲۱۴ نظر</button>
            </section>

            <!-- FAQ -->
            <section class="py-8 border-t border-sand-200">
              <h2 class="text-xl font-semibold mb-6">پرسش‌های متداول درباره این تالار</h2>
              <div>
                <details class="group border-t border-sand-200 py-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex items-center justify-between cursor-pointer text-sm font-medium focus-ring">
                    آیا امکان بازدید حضوری قبل از رزرو وجود دارد؟
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.8" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                  </summary>
                  <p class="text-sm text-ink-soft leading-relaxed mt-3">بله، با هماهنگی قبلی از طریق تماس تلفنی می‌توانید در روزهای غیر مراسم از سالن بازدید کنید.</p>
                </details>
                <details class="group border-t border-sand-200 py-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex items-center justify-between cursor-pointer text-sm font-medium focus-ring">
                    آیا تالار امکان آوردن تشریفات خارجی را می‌دهد؟
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.8" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                  </summary>
                  <p class="text-sm text-ink-soft leading-relaxed mt-3">خدمات پذیرایی و آشپزخانه داخلی تالار الزامی است، اما گل‌آرایی و عکاسی را می‌توانید آزادانه انتخاب کنید.</p>
                </details>
                <details class="group border-t border-b border-sand-200 py-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex items-center justify-between cursor-pointer text-sm font-medium focus-ring">
                    بیعانه رزرو چقدر است؟
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#54493D" stroke-width="1.8" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                  </summary>
                  <p class="text-sm text-ink-soft leading-relaxed mt-3">معمولاً ۲۰٪ از مبلغ کل به‌عنوان بیعانه در زمان عقد قرارداد دریافت می‌شود؛ جزئیات دقیق را با تالار هماهنگ کنید.</p>
                </details>
              </div>
            </section>
          </div>

          <!-- ============ STICKY SIDEBAR (desktop) ============ -->
          <aside class="hidden lg:block">
            <div class="sticky top-28 rounded-3xl border border-sand-200 p-6 shadow-soft">
              <p class="text-sm text-ink-faint">شروع قیمت اجاره سالن</p>
              <p class="text-2xl font-semibold mt-1 num">۸۵۰ میلیون تومان</p>
              <div class="flex flex-col gap-3 mt-6">
                <a href="tel:02191000000" class="flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z"/></svg>
                  تماس با تالار
                </a>
                <button class="flex items-center justify-center gap-2 border border-sand-300 hover:border-ink text-ink text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 20l1-5.6A8.5 8.5 0 1 1 21 11.5Z"/></svg>
                  درخواست مشاوره رایگان
                </button>
                <a href="#map" class="flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-800 text-sm font-medium py-2 transition-colors focus-ring">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="11" r="2.4"/></svg>
                  مسیریابی تا تالار
                </a>
              </div>
              <p class="text-xs text-ink-faint text-center mt-4">پاسخ‌گویی معمولاً کمتر از ۲ ساعت</p>
            </div>
          </aside>
        </div>
      </div>

      <!-- ============ SIMILAR VENUES ============ -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-sand-200">
        <h2 class="text-xl sm:text-2xl font-semibold mb-6">تالارهای مشابه</h2>
        <div class="rail flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <a href="venue.html" class="group shrink-0 w-72 sm:w-auto focus-ring">
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="./1.png" alt="باغ‌تالار نارنجستان" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="flex items-start justify-between mt-3">
              <div>
                <h3 class="text-sm font-medium">باغ‌تالار نارنجستان</h3>
                <p class="text-xs text-ink-faint mt-0.5">کرج، ملارد</p>
              </div>
              <span class="flex items-center gap-1 text-xs shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                <span class="num">۴.۸</span>
              </span>
            </div>
          </a>
          <a href="venue.html" class="group shrink-0 w-72 sm:w-auto focus-ring">
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="./1.png" alt="تالار افرا سفید" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="flex items-start justify-between mt-3">
              <div>
                <h3 class="text-sm font-medium">تالار افرا سفید</h3>
                <p class="text-xs text-ink-faint mt-0.5">اصفهان، چهارباغ</p>
              </div>
              <span class="flex items-center gap-1 text-xs shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                <span class="num">۵.۰</span>
              </span>
            </div>
          </a>
          <a href="venue.html" class="group shrink-0 w-72 sm:w-auto focus-ring">
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="./1.png" alt="سالن باران" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="flex items-start justify-between mt-3">
              <div>
                <h3 class="text-sm font-medium">سالن باران</h3>
                <p class="text-xs text-ink-faint mt-0.5">تهران، شرق</p>
              </div>
              <span class="flex items-center gap-1 text-xs shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z"/></svg>
                <span class="num">۴.۴</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      <!-- ============ FINAL CTA ============ -->
      <section class="relative overflow-hidden py-16">
        <div class="absolute inset-0 bg-gradient-to-l from-emerald-900 to-emerald-800"></div>
        <div class="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
          <h2 class="text-2xl sm:text-3xl font-extralight leading-tight mb-4">
            این تالار مناسب مراسم شماست؟
          </h2>
          <p class="text-sand-100/80 mb-8 text-sm">همین حالا با تالار تماس بگیرید یا درخواست مشاوره رایگان ثبت کنید.</p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:02191000000" class="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-6 py-3.5 rounded-full transition-colors focus-ring">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z"/></svg>
              تماس با تالار
            </a>
            <button class="inline-flex items-center justify-center gap-2 border border-sand-50/30 hover:border-sand-50 text-sand-50 font-medium px-6 py-3.5 rounded-full transition-colors focus-ring">
              درخواست مشاوره
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- ============ STICKY MOBILE CTA ============ -->
    <div class="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-sand-50/95 backdrop-blur-md border-t border-sand-200 px-4 py-3">
      <div class="flex items-center gap-2">
        <div class="flex-1 min-w-0">
          <p class="text-[11px] text-ink-faint">شروع از</p>
          <p class="text-sm font-semibold num truncate">۸۵۰ میلیون تومان</p>
        </div>
        <button class="flex items-center gap-1.5 border border-sand-300 text-ink text-sm font-medium px-4 h-12 rounded-xl focus-ring shrink-0">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 20l1-5.6A8.5 8.5 0 1 1 21 11.5Z"/></svg>
          مشاوره
        </button>
        <a href="tel:02191000000" class="flex items-center gap-1.5 bg-emerald-800 text-sand-50 text-sm font-medium px-5 h-12 rounded-xl focus-ring shrink-0">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z"/></svg>
          تماس
        </a>
      </div>
    </div>

    <!-- ============ FOOTER (shared) ============ -->
    <footer class="bg-ink text-sand-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
          <div class="col-span-2 lg:col-span-1">
            <div class="flex items-center gap-2 mb-4">
              <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#D4B274" stroke-width="1.4" />
                <circle cx="15" cy="15" r="5" fill="#D4B274" />
              </svg>
              <span class="font-bold">تالارگاه</span>
            </div>
            <p class="text-sm text-sand-100/60 leading-relaxed">مرجع کشف و انتخاب تالار عروسی در سراسر ایران.</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold mb-4">دسته‌بندی‌ها</h3>
            <ul class="space-y-2.5 text-sm text-sand-100/60">
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تالار پذیرایی</a></li>
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">باغ تالار</a></li>
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تشریفات</a></li>
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">آتلیه عکاسی</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold mb-4">شهرها</h3>
            <ul class="space-y-2.5 text-sm text-sand-100/60">
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تهران</a></li>
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">اصفهان</a></li>
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">شیراز</a></li>
              <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">مشهد</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold mb-4">تماس با ما</h3>
            <ul class="space-y-2.5 text-sm text-sand-100/60">
              <li>۰۲۱-۹۱۰۰۰۰۰۰</li>
              <li>info@talargah.ir</li>
              <li>تهران، خیابان ولیعصر</li>
            </ul>
          </div>
          <div class="col-span-2 lg:col-span-1">
            <h3 class="text-sm font-semibold mb-4">ما را دنبال کنید</h3>
            <div class="flex gap-3">
              <a href="#" aria-label="اینستاگرام" class="w-9 h-9 rounded-full bg-sand-50/10 flex items-center justify-center hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="1" /></svg>
              </a>
              <a href="#" aria-label="تلگرام" class="w-9 h-9 rounded-full bg-sand-50/10 flex items-center justify-center hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m22 2-11 20-2.5-8L2 11.5Z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-sand-50/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-100/50">
          <p>© ۱۴۰۴ تالارگاه. تمامی حقوق محفوظ است.</p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-sand-100 transition-colors focus-ring">حریم خصوصی</a>
            <a href="#" class="hover:text-sand-100 transition-colors focus-ring">قوانین استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  </body>
  );
}
