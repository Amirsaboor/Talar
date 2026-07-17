export default function Page() {

  return (
    <body class="bg-sand-50 text-ink antialiased">
      <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full">رفتن به محتوای اصلی</a>

      <!-- ============ HEADER ============ -->
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

      <main id="main" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 class="text-2xl sm:text-3xl font-semibold">علاقه‌مندی‌های من</h1>
            <p class="text-sm text-ink-faint mt-2" id="saved-count-text">
              <span id="saved-count" class="num font-medium text-ink">۰</span> تالار ذخیره شده
            </p>
          </div>
          <div class="flex items-center gap-2" id="controls-row">
            <select id="sort-select" class="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring">
              <option value="recent">جدیدترین ذخیره</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
              <option value="rating">بالاترین امتیاز</option>
            </select>
            <button id="compare-btn" class="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-5 py-2.5 rounded-full transition-colors focus-ring">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></svg>
              مقایسه تالارها
            </button>
          </div>
        </div>

        <!-- Grid populated by JS -->
        <div id="favorites-grid" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"></div>

        <!-- ============ EMPTY STATE (shown by JS when there are no favorites) ============ -->
        <div id="empty-state" class="hidden text-center py-20 px-6">
          <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.1" class="mx-auto mb-6">
            <path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" stroke="#B8863E" />
          </svg>
          <h2 class="font-semibold text-lg mb-2">هنوز تالاری ذخیره نکرده‌اید</h2>
          <p class="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
            هنگام مرور تالارها، روی نماد قلب بزنید تا گزینه‌های موردعلاقه‌تان اینجا جمع شوند و بعداً راحت‌تر مقایسه‌شان کنید.
          </p>
          <a href="category.html" class="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">
            مشاهده تالارها
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 19 3 12l7-7M3 12h18" /></svg>
          </a>
        </div>
      </main>

      <!-- ============ FOOTER ============ -->
      <footer class="bg-ink text-sand-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
            <div class="col-span-2 lg:col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#D4B274" strokeWidth="1.4" /><circle cx="15" cy="15" r="5" fill="#D4B274" /></svg>
                <span class="font-bold">تالارگاه</span>
              </div>
              <p class="text-sm text-sand-100/60 leading-relaxed">مرجع کشف و انتخاب تالار عروسی در سراسر ایران.</p>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">دسته‌بندی‌ها</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60"><li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تالار پذیرایی</a></li></ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">شهرها</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60"><li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تهران</a></li></ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">تماس با ما</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60"><li>۰۲۱-۹۱۰۰۰۰۰۰</li></ul>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <h3 class="text-sm font-semibold mb-4">ما را دنبال کنید</h3>
              <div class="flex gap-3">
                <a href="#" aria-label="اینستاگرام" class="w-9 h-9 rounded-full bg-sand-50/10 flex items-center justify-center hover:bg-sand-50/20 transition-colors focus-ring">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="1" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="border-t border-sand-50/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-100/50">
            <p>© ۱۴۰۴ تالارگاه. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}
