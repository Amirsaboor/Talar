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
        <!-- ============ SEARCH HERO + BAR ============ -->
        <section class="bg-emerald-900 pb-8 pt-8 sm:pt-10">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p class="text-gold-300 text-xs font-medium mb-2 text-center">جست‌وجوی هوشمند</p>
            <h1 class="text-sand-50 text-2xl sm:text-3xl font-semibold text-center mb-6">تالار موردنظرتان را پیدا کنید</h1>

            <!-- Large search bar with autosuggest -->
            <div class="relative">
              <div class="flex items-center gap-2 bg-sand-50 rounded-2xl p-2 shadow-lift">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A7D6E" stroke-width="2" class="shrink-0 mr-2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                <input
                  id="search-input"
                  type="text"
                  placeholder="نام تالار، شهر یا منطقه را جست‌وجو کنید…"
                  class="flex-1 bg-transparent text-sm sm:text-base focus:outline-none py-2.5"
                  onfocus="document.getElementById('suggest-panel').classList.remove('hidden')"
                />
                <button class="shrink-0 flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-5 h-11 rounded-xl transition-colors focus-ring">
                  جست‌وجو
                </button>
              </div>

              <!-- Autosuggest dropdown -->
              <div id="suggest-panel" class="hidden absolute top-full inset-x-0 mt-2 bg-sand-50 rounded-2xl shadow-lift p-5 z-30 text-right">
                <div class="mb-5">
                  <p class="text-xs font-medium text-ink-faint mb-2.5">جست‌وجوهای اخیر شما</p>
                  <div class="flex flex-wrap gap-2">
                    <button class="flex items-center gap-1.5 text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                      باغ‌تالار کرج
                    </button>
                    <button class="flex items-center gap-1.5 text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                      تالار ایوان طلایی
                    </button>
                  </div>
                </div>
                <div class="mb-5">
                  <p class="text-xs font-medium text-ink-faint mb-2.5">پرطرفدارترین جست‌وجوها</p>
                  <div class="flex flex-wrap gap-2">
                    <button class="text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">تالار لوکس تهران</button>
                    <button class="text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">باغ‌تالار زیر ۳۰۰ میلیون</button>
                    <button class="text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">تالار فضای باز اصفهان</button>
                  </div>
                </div>
                <div>
                  <p class="text-xs font-medium text-ink-faint mb-2.5 flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17h4l10-10 -4-4L3 13Z" /><path d="M17 4 20 7" /></svg>
                    رو به رشد این هفته
                  </p>
                  <ul class="space-y-1">
                    <li><a href="#" class="flex items-center justify-between text-sm text-ink-soft hover:text-ink px-2 py-2 rounded-lg hover:bg-sand-100 transition-colors focus-ring">تالار مشهد <span class="text-xs text-emerald-700 num">+۴۰٪</span></a></li>
                    <li><a href="#" class="flex items-center justify-between text-sm text-ink-soft hover:text-ink px-2 py-2 rounded-lg hover:bg-sand-100 transition-colors focus-ring">باغ‌تالار شمال <span class="text-xs text-emerald-700 num">+۲۸٪</span></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Quick facet row -->
            <div class="flex flex-wrap items-center justify-center gap-2 mt-5">
              <button class="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="11" r="2.4" /></svg>
                شهر
              </button>
              <button class="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /></svg>
                ظرفیت
              </button>
              <button class="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                بودجه
              </button>
              <button class="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                امتیاز
              </button>
            </div>
          </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid lg:grid-cols-[280px_1fr] gap-8">

            <!-- ============ DESKTOP SIDEBAR FILTERS ============ -->
            <aside class="hidden lg:block" aria-label="فیلترها">
              <div class="sticky top-28 space-y-7">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-semibold">فیلترها</h2>
                  <button class="text-xs text-garnet-700 hover:underline focus-ring">پاک‌کردن همه</button>
                </div>
                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">شهر</legend>
                  <select class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring">
                    <option>همه شهرها</option><option>تهران</option><option>اصفهان</option><option>شیراز</option><option>مشهد</option>
                  </select>
                </fieldset>
                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">بودجه <span class="text-ink-faint font-normal num">(میلیون تومان)</span></legend>
                  <div class="flex items-center gap-3">
                    <input type="number" placeholder="از" class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
                    <span class="text-ink-faint text-sm">تا</span>
                    <input type="number" placeholder="تا" class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
                  </div>
                </fieldset>
                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">ظرفیت</legend>
                  <div class="space-y-2.5">
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="radio" name="cap" class="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" /> تا ۱۰۰ نفر</label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="radio" name="cap" class="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" /> ۱۰۰ تا ۲۵۰ نفر</label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="radio" name="cap" class="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" /> بیش از ۲۵۰ نفر</label>
                  </div>
                </fieldset>
                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">نوع فضا</legend>
                  <div class="flex gap-2">
                    <label class="cursor-pointer"><input type="checkbox" class="peer sr-only" /><span class="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">باغ / فضای باز</span></label>
                    <label class="cursor-pointer"><input type="checkbox" class="peer sr-only" /><span class="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">فضای بسته</span></label>
                  </div>
                </fieldset>
                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">خدمات و امکانات</legend>
                  <div class="space-y-2.5">
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" /> پارکینگ</label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" /> تشریفات کامل</label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" /> سالن VIP</label>
                  </div>
                </fieldset>
                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">حداقل امتیاز</legend>
                  <div class="flex gap-2">
                    <button type="button" class="text-xs px-3 py-2 rounded-full border border-sand-300 hover:border-gold-500 transition-colors focus-ring num">۴.۵+</button>
                    <button type="button" class="text-xs px-3 py-2 rounded-full border border-sand-300 hover:border-gold-500 transition-colors focus-ring num">۴.۰+</button>
                  </div>
                </fieldset>
                <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer border-t border-sand-200 pt-5">
                  <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-garnet-700 focus-ring" />
                  فقط تالارهای دارای تخفیف ویژه
                </label>
                <button type="button" class="w-full bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3 rounded-xl transition-colors focus-ring">اعمال فیلترها</button>
              </div>
            </aside>

            <!-- ============ RESULTS ============ -->
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-4">
                <span class="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                  تهران
                  <button aria-label="حذف فیلتر" class="focus-ring rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18M6 6l12 12" /></svg></button>
                </span>
                <span class="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                  زیر ۵۰۰ میلیون
                  <button aria-label="حذف فیلتر" class="focus-ring rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18M6 6l12 12" /></svg></button>
                </span>
                <button class="text-xs text-garnet-700 hover:underline focus-ring">پاک‌کردن همه</button>
              </div>

              <div class="flex items-center justify-between mb-5">
                <p class="text-sm text-ink-soft"><span class="font-semibold text-ink num">۸۶</span> تالار پیدا شد</p>
                <select class="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring">
                  <option>پیشنهادی</option><option>محبوب‌ترین</option><option>بالاترین امتیاز</option><option>ارزان‌ترین</option><option>گران‌ترین</option>
                </select>
              </div>

              <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="تالار ایوان طلایی" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" stroke-width="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute top-3 right-3 flex items-center gap-1 bg-sand-50/90 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5" /></svg>
                        تأییدشده
                      </span>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۶۰۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">تالار ایوان طلایی</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۴.۹</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">تهران، سعادت‌آباد</p>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۸۵۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="باغ‌تالار نارنجستان" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" stroke-width="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۴۰۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">باغ‌تالار نارنجستان</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۴.۸</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">کرج، ملارد</p>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۴۹۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="تالار نگین سبز" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" stroke-width="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute top-3 right-3 bg-garnet-700 text-sand-50 text-[11px] font-medium px-2.5 py-1 rounded-full">تخفیف ویژه</span>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۲۰۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">تالار نگین سبز</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۴.۶</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">کرج</p>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۲۲۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده</span>
                      </div>
                    </div>
                  </a>
                </article>
              </div>

              <!-- Infinite scroll sentinel / load more -->
              <div class="flex justify-center mt-10">
                <button class="flex items-center gap-2 text-sm text-ink-soft border border-sand-300 hover:border-ink hover:text-ink px-6 py-3 rounded-full transition-colors focus-ring">
                  نمایش تالارهای بیشتر
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- ============ MOBILE FLOATING FILTER TRIGGER ============ -->
      <button onclick="document.body.classList.add('filters-open')" class="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-ink text-sand-50 text-sm font-medium px-6 py-3.5 rounded-full shadow-lift focus-ring">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
        فیلترها
      </button>
      <div id="filter-backdrop" class="lg:hidden fixed inset-0 bg-ink/50 z-50 opacity-0 pointer-events-none" onclick="document.body.classList.remove('filters-open')"></div>
      <div id="filter-drawer" class="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-sand-50 rounded-t-3xl max-h-[85vh] overflow-y-auto translate-y-full" role="dialog" aria-modal="true" aria-label="فیلترها">
        <div class="sticky top-0 bg-sand-50 flex items-center justify-between px-5 py-4 border-b border-sand-200">
          <h2 class="font-semibold">فیلترها</h2>
          <button onclick="document.body.classList.remove('filters-open')" aria-label="بستن" class="w-9 h-9 rounded-full hover:bg-sand-100 flex items-center justify-center focus-ring">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div class="p-5 space-y-6">
          <fieldset>
            <legend class="text-sm font-medium mb-3">شهر</legend>
            <select class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring"><option>همه شهرها</option><option>تهران</option><option>اصفهان</option></select>
          </fieldset>
          <fieldset class="border-t border-sand-200 pt-5">
            <legend class="text-sm font-medium mb-3">بودجه (میلیون تومان)</legend>
            <div class="flex items-center gap-3">
              <input type="number" placeholder="از" class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
              <span class="text-ink-faint text-sm">تا</span>
              <input type="number" placeholder="تا" class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
            </div>
          </fieldset>
        </div>
        <div class="sticky bottom-0 bg-sand-50 border-t border-sand-200 p-5">
          <button onclick="document.body.classList.remove('filters-open')" class="w-full bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring">نمایش ۸۶ نتیجه</button>
        </div>
      </div>

      <!-- ============ FOOTER ============ -->
      <footer class="bg-ink text-sand-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
            <div class="col-span-2 lg:col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#D4B274" stroke-width="1.4" /><circle cx="15" cy="15" r="5" fill="#D4B274" /></svg>
                <span class="font-bold">تالارگاه</span>
              </div>
              <p class="text-sm text-sand-100/60 leading-relaxed">مرجع کشف و انتخاب تالار عروسی در سراسر ایران.</p>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">دسته‌بندی‌ها</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60">
                <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تالار پذیرایی</a></li>
                <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">باغ تالار</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">شهرها</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60">
                <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تهران</a></li>
                <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">اصفهان</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">تماس با ما</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60">
                <li>۰۲۱-۹۱۰۰۰۰۰۰</li>
                <li>info@talargah.ir</li>
              </ul>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <h3 class="text-sm font-semibold mb-4">ما را دنبال کنید</h3>
              <div class="flex gap-3">
                <a href="#" aria-label="اینستاگرام" class="w-9 h-9 rounded-full bg-sand-50/10 flex items-center justify-center hover:bg-sand-50/20 transition-colors focus-ring">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="1" /></svg>
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
