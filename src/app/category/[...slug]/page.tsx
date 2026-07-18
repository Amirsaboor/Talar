export default function Page() {
  return (
    <div class="bg-sand-50 text-ink antialiased">
      <a
        href="#main"
        class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >رفتن به محتوای اصلی</a
      >

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

      <main id="main">
        <!-- ============ BREADCRUMB ============ -->
        <nav aria-label="مسیر صفحه" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <ol class="flex items-center gap-1.5 text-xs sm:text-sm text-ink-faint">
            <li>
              <a href="index.html" class="hover:text-ink transition-colors focus-ring rounded"
              >خانه</a
              >
            </li>
            <li aria-hidden="true" class="text-sand-300">/</li>
            <li>
              <a href="category.html" class="hover:text-ink transition-colors focus-ring rounded">شهرها</a>
            </li>
            <li aria-hidden="true" class="text-sand-300">/</li>
            <li class="text-ink font-medium" aria-current="page">تالارهای مشهد</li>
          </ol>
        </nav>

        <!-- ============ CATEGORY HERO ============ -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-8">
          <div class="relative rounded-3xl overflow-hidden h-52 sm:h-64 lg:h-72">
            <img
              src="./1.png"
              alt="نمایی از یک تالار عروسی در مشهد با نورپردازی گرم"
              class="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/5"></div>
            <div class="relative h-full flex flex-col justify-end p-5 sm:p-8">
              <p class="text-gold-300 text-xs sm:text-sm font-medium mb-2">مشهد، خراسان رضوی</p>
              <h1 class="text-sand-50 font-semibold text-2xl sm:text-4xl leading-snug max-w-xl">
                تالارها و باغ‌تالارهای مشهد
              </h1>
              <p
                class="text-sand-100/85 text-sm sm:text-base mt-2 max-w-lg leading-relaxed hidden sm:block"
              >
                از تالارهای سنتی نزدیک حرم مطهر تا باغ‌تالارهای مدرن حومه شهر؛
                <span class="num">۱۶۸</span> گزینه برای مراسم شما.
              </p>
              <p class="text-sand-100 text-sm mt-3 num font-medium">۱۶۸ تالار موجود</p>
            </div>
          </div>
        </section>

        <!-- ============ STICKY SEARCH BAR ============ -->
        <div id="search-wrap" class="sticky top-16 lg:top-20 z-40 mt-6">
          <div class="bg-sand-50/95 backdrop-blur-md border-y border-sand-200/80 py-3">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <form
                class="bg-sand-50 rounded-2xl sm:rounded-full shadow-card border border-sand-200/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-1 p-2"
              >
                <div
                  class="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8A7D6E"
                    strokeWidth="1.8"
                    class="shrink-0"
                  >
                    <path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                    <circle cx="12" cy="11" r="2.4" />
                  </svg>
                  <select
                    class="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate"
                  >
                    <option>مشهد</option>
                    <option>تهران</option>
                    <option>اصفهان</option>
                    <option>شیراز</option>
                  </select>
                </div>
                <div class="hidden sm:block w-px h-6 bg-sand-200 shrink-0"></div>
                <div
                  class="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8A7D6E"
                    strokeWidth="1.8"
                    class="shrink-0"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
                  </svg>
                  <select
                    class="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate"
                  >
                    <option>۱۰۰ تا ۲۵۰ نفر</option>
                    <option>تا ۱۰۰ نفر</option>
                    <option>۲۵۰ تا ۵۰۰ نفر</option>
                    <option>بیش از ۵۰۰ نفر</option>
                  </select>
                </div>
                <div class="hidden sm:block w-px h-6 bg-sand-200 shrink-0"></div>
                <div
                  class="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-sand-100 transition-colors flex-1 min-w-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8A7D6E"
                    strokeWidth="1.8"
                    class="shrink-0"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <select
                    class="bg-transparent text-sm font-medium text-ink focus-ring rounded w-full truncate"
                  >
                    <option>بودجه نامشخص</option>
                    <option>اقتصادی</option>
                    <option>متوسط</option>
                    <option>لوکس</option>
                  </select>
                </div>
                <button
                  type="submit"
                  class="shrink-0 flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 font-medium text-sm px-6 h-12 rounded-full transition-colors focus-ring w-full sm:w-auto"
                >
                  <svg
                    width="16"
                    height="16"
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
              </form>
            </div>
          </div>
        </div>

        <!-- ============ RESULTS + FILTERS ============ -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div class="grid lg:grid-cols-[280px_1fr] gap-8">

            <!-- ============ DESKTOP SIDEBAR FILTERS ============ -->
            <aside class="hidden lg:block" aria-label="فیلترها">
              <div class="sticky top-40 space-y-7">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-semibold">فیلترها</h2>
                  <button class="text-xs text-garnet-700 hover:underline focus-ring">پاک‌کردن همه</button>
                </div>

                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">منطقه</legend>
                  <div class="space-y-2.5">
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" checked />
                      سعادت‌آباد
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      ولنجک
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      پاسداران
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      شرق تهران
                    </label>
                  </div>
                </fieldset>

                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">ظرفیت</legend>
                  <div class="space-y-2.5">
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="radio" name="capacity" class="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" />
                      تا ۱۰۰ نفر
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="radio" name="capacity" class="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" checked />
                      ۱۰۰ تا ۲۵۰ نفر
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="radio" name="capacity" class="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" />
                      ۲۵۰ تا ۵۰۰ نفر
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="radio" name="capacity" class="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" />
                      بیش از ۵۰۰ نفر
                    </label>
                  </div>
                </fieldset>

                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">بودجه <span class="text-ink-faint font-normal num">(میلیون تومان)</span></legend>
                  <div class="flex items-center gap-3">
                    <input type="number" placeholder="از ۲۰۰" class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
                    <span class="text-ink-faint text-sm">تا</span>
                    <input type="number" placeholder="۱٬۵۰۰" class="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
                  </div>
                </fieldset>

                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">نوع تالار</legend>
                  <div class="flex flex-wrap gap-2">
                    <label class="cursor-pointer">
                      <input type="checkbox" class="peer sr-only" checked />
                      <span class="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">فضای باز</span>
                    </label>
                    <label class="cursor-pointer">
                      <input type="checkbox" class="peer sr-only" />
                      <span class="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">فضای بسته</span>
                    </label>
                  </div>
                </fieldset>

                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">امکانات</legend>
                  <div class="space-y-2.5">
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      پارکینگ
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      تشریفات و پذیرایی
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      اتاق VIP
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      سن اجرا
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      سیستم صوتی و موسیقی
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      سرمایش و گرمایش
                    </label>
                    <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                      <input type="checkbox" class="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" />
                      دسترسی معلولین
                    </label>
                  </div>
                </fieldset>

                <fieldset class="border-t border-sand-200 pt-5">
                  <legend class="text-sm font-medium mb-3">حداقل امتیاز</legend>
                  <div class="flex gap-2">
                    <button type="button" class="flex items-center gap-1 text-xs px-3 py-2 rounded-full border border-sand-300 hover:border-gold-500 transition-colors focus-ring">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                      <span class="num">۴.۵+</span>
                    </button>
                    <button type="button" class="flex items-center gap-1 text-xs px-3 py-2 rounded-full border border-sand-300 hover:border-gold-500 transition-colors focus-ring">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                      <span class="num">۴.۰+</span>
                    </button>
                  </div>
                </fieldset>

                <button type="button" class="w-full bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3 rounded-xl transition-colors focus-ring">
                  اعمال فیلترها
                </button>
              </div>
            </aside>

            <!-- ============ RESULTS COLUMN ============ -->
            <div>
              <!-- Result summary + sort -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <p class="text-sm text-ink-soft">
                    نمایش <span class="font-semibold text-ink num">۲۴</span> تالار از
                    <span class="num">۵۴۰</span> نتیجه
                  </p>
                  <div class="flex flex-wrap items-center gap-2 mt-2">
                    <span class="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                      ۱۰۰ تا ۲۵۰ نفر
                      <button aria-label="حذف فیلتر ظرفیت" class="focus-ring rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M18 6 6 18M6 6l12 12" /></svg>
                      </button>
                    </span>
                    <span class="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                      سعادت‌آباد
                      <button aria-label="حذف فیلتر منطقه" class="focus-ring rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M18 6 6 18M6 6l12 12" /></svg>
                      </button>
                    </span>
                    <button class="text-xs text-garnet-700 hover:underline focus-ring">پاک‌کردن همه</button>
                  </div>
                </div>

                <div class="flex items-center gap-2 shrink-0">
                  <label for="sort" class="text-xs text-ink-faint">مرتب‌سازی:</label>
                  <select id="sort" class="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring">
                    <option>پیشنهادی</option>
                    <option>جدیدترین</option>
                    <option>محبوب‌ترین</option>
                    <option>بالاترین امتیاز</option>
                    <option>ارزان‌ترین</option>
                    <option>گران‌ترین</option>
                  </select>
                </div>
              </div>

              <!-- Venue grid -->
              <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="تالار ایوان طلایی" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute top-3 right-3 flex items-center gap-1 bg-sand-50/90 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
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
                          <span class="text-ink-faint num">(۲۱۴)</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">تهران، سعادت‌آباد</p>
                      <div class="flex flex-wrap gap-1.5 mt-3">
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">پارکینگ اختصاصی</span>
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">سالن VIP</span>
                      </div>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۸۵۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده جزئیات</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="باغ‌تالار نارنجستان" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute top-3 right-3 flex items-center gap-1 bg-sand-50/90 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                        تأییدشده
                      </span>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۴۰۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">باغ‌تالار نارنجستان</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۴.۸</span>
                          <span class="text-ink-faint num">(۱۵۸)</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">کرج، ملارد</p>
                      <div class="flex flex-wrap gap-1.5 mt-3">
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">فضای باز</span>
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">آشپزخانه سنتی</span>
                      </div>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۴۹۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده جزئیات</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="تالار افرا سفید" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۸۵۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">تالار افرا سفید</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۵.۰</span>
                          <span class="text-ink-faint num">(۹۶)</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">اصفهان، چهارباغ</p>
                      <div class="flex flex-wrap gap-1.5 mt-3">
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">دکوراسیون کلاسیک</span>
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">اتاق عروس</span>
                      </div>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۱٬۱۰۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده جزئیات</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="تالار نگین سبز" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۲۰۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">تالار نگین سبز</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۴.۶</span>
                          <span class="text-ink-faint num">(۷۲)</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">کرج</p>
                      <div class="flex flex-wrap gap-1.5 mt-3">
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">مقرون‌به‌صرفه</span>
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">پارکینگ</span>
                      </div>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۲۲۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده جزئیات</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="سالن باران" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute top-3 right-3 flex items-center gap-1 bg-sand-50/90 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                        تأییدشده
                      </span>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۳۰۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">سالن باران</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۴.۴</span>
                          <span class="text-ink-faint num">(۴۴)</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">تهران، شرق</p>
                      <div class="flex flex-wrap gap-1.5 mt-3">
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">فضای بسته</span>
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">سیستم صوتی</span>
                      </div>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۱۹۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده جزئیات</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article class="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" class="block focus-ring">
                    <div class="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="باغ سرو" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" class="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span class="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۲۵۰ نفر</span>
                    </div>
                    <div class="p-5">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-semibold leading-snug">باغ سرو</h3>
                        <div class="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span class="num">۴.۷</span>
                          <span class="text-ink-faint num">(۶۱)</span>
                        </div>
                      </div>
                      <p class="text-sm text-ink-faint mt-1">شهریار</p>
                      <div class="flex flex-wrap gap-1.5 mt-3">
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">فضای باز</span>
                        <span class="text-xs bg-sand-100 text-ink-soft px-2.5 py-1 rounded-full">مقرون‌به‌صرفه</span>
                      </div>
                      <div class="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p class="text-sm"><span class="text-ink-faint">شروع از</span> <span class="font-semibold num">۲۶۰</span> <span class="text-ink-faint">میلیون</span></p>
                        <span class="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده جزئیات</span>
                      </div>
                    </div>
                  </a>
                </article>
              </div>

              <!-- ============ PAGINATION ============ -->
              <nav aria-label="صفحه‌بندی نتایج" class="flex items-center justify-center gap-2 mt-12">
                <button class="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-faint hover:border-ink hover:text-ink transition-colors focus-ring" aria-label="صفحه قبل" disabled>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button class="w-11 h-11 rounded-full bg-emerald-800 text-sand-50 text-sm font-medium num focus-ring" aria-current="page">۱</button>
                <button class="w-11 h-11 rounded-full text-sm text-ink-soft hover:bg-sand-100 transition-colors num focus-ring">۲</button>
                <button class="w-11 h-11 rounded-full text-sm text-ink-soft hover:bg-sand-100 transition-colors num focus-ring">۳</button>
                <span class="px-1 text-ink-faint">…</span>
                <button class="w-11 h-11 rounded-full text-sm text-ink-soft hover:bg-sand-100 transition-colors num focus-ring">۲۳</button>
                <button class="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-soft hover:border-ink hover:text-ink transition-colors focus-ring" aria-label="صفحه بعد">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </nav>

              <!-- ============ EMPTY STATE (shown instead of the grid + pagination above when a search returns zero results) ============ -->
              <div class="hidden text-center py-20 px-6">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.2" class="mx-auto mb-6"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6" stroke="#B8863E" /></svg>
                <h3 class="font-semibold text-lg mb-2">تالاری با این فیلترها پیدا نشد</h3>
                <p class="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
                  به نظر می‌رسد فیلترهای انتخابی خیلی محدودند. کمی محدوده بودجه یا ظرفیت را باز کنید تا نتایج بیشتری ببینید.
                </p>
                <button class="bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">
                  پاک‌کردن فیلترها
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- ============ MOBILE FILTER BOTTOM SHEET ============ -->
      <div
        id="filter-backdrop"
        class="fixed inset-0 bg-ink/50 z-[60] opacity-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        id="filter-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-sheet-title"
        class="fixed inset-x-0 bottom-0 z-[70] bg-sand-50 rounded-t-3xl shadow-lift translate-y-full max-h-[88vh] flex flex-col lg:hidden"
      >
        <div
          class="shrink-0 flex items-center justify-between px-5 pt-4 pb-3 border-b border-sand-200"
        >
          <span
            class="w-10 h-1.5 bg-sand-300 rounded-full absolute top-2 right-1/2 translate-x-1/2"
          ></span>
          <h2 id="filter-sheet-title" class="font-semibold text-lg mt-2">فیلترها</h2>
          <button
            id="close-filters"
            aria-label="بستن فیلترها"
            class="mt-2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-sand-100 transition-colors focus-ring"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="overflow-y-auto flex-1 px-5 py-5 space-y-6">
          <!-- Venue type -->
          <div class="border-b border-sand-200 pb-5">
            <h3 class="text-sm font-semibold mb-3">نوع تالار</h3>
            <div class="space-y-3">
              <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  class="w-5 h-5 rounded border-sand-300 accent-emerald-800 focus-ring"
                />
                تالار پذیرایی <span class="text-ink-faint text-xs num mr-auto">۹۸</span>
              </label>
              <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                <input
                  type="checkbox"
                  class="w-5 h-5 rounded border-sand-300 accent-emerald-800 focus-ring"
                />
                باغ تالار <span class="text-ink-faint text-xs num mr-auto">۵۲</span>
              </label>
              <label class="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
                <input
                  type="checkbox"
                  class="w-5 h-5 rounded border-sand-300 accent-emerald-800 focus-ring"
                />
                هتل <span class="text-ink-faint text-xs num mr-auto">۱۸</span>
              </label>
            </div>
          </div>

          <!-- Capacity -->
          <div class="border-b border-sand-200 pb-5">
            <h3 class="text-sm font-semibold mb-3">ظرفیت مهمان</h3>
            <div class="flex items-center justify-between text-xs text-ink-faint mb-2 num">
              <span>۵۰ نفر</span>
              <span>۱۰۰۰+ نفر</span>
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              value="400"
              class="w-full focus-ring"
              aria-label="حداقل ظرفیت"
            />
            <p class="text-xs text-ink-soft mt-2">
              تا <span class="font-semibold num">۴۰۰</span> نفر
            </p>
          </div>

          <!-- Budget -->
          <div class="border-b border-sand-200 pb-5">
            <h3 class="text-sm font-semibold mb-3">محدوده قیمت (میلیون تومان)</h3>
            <div class="flex items-center gap-2">
              <input
                type="number"
                placeholder="از"
                class="w-full text-sm bg-sand-100 rounded-xl px-3 py-3 focus-ring border border-transparent focus:border-gold-500 num"
              />
              <span class="text-ink-faint">—</span>
              <input
                type="number"
                placeholder="تا"
                class="w-full text-sm bg-sand-100 rounded-xl px-3 py-3 focus-ring border border-transparent focus:border-gold-500 num"
              />
            </div>
          </div>

          <!-- Space -->
          <div class="border-b border-sand-200 pb-5">
            <h3 class="text-sm font-semibold mb-3">فضا</h3>
            <div class="flex gap-2">
              <button
                class="flex-1 text-sm py-2.5 rounded-xl bg-emerald-800 text-sand-50 font-medium focus-ring"
              >
                سرپوشیده
              </button>
              <button class="flex-1 text-sm py-2.5 rounded-xl bg-sand-100 text-ink-soft focus-ring">
                روباز
              </button>
            </div>
          </div>

          <!-- Amenities -->
          <div>
            <h3 class="text-sm font-semibold mb-3">امکانات</h3>
            <div class="flex flex-wrap gap-2">
              <button
                class="text-xs px-3 py-2.5 rounded-full bg-emerald-800 text-sand-50 font-medium focus-ring"
              >
                پارکینگ
              </button>
              <button class="text-xs px-3 py-2.5 rounded-full bg-sand-100 text-ink-soft focus-ring">
                سالن VIP
              </button>
              <button class="text-xs px-3 py-2.5 rounded-full bg-sand-100 text-ink-soft focus-ring">
                کترینگ
              </button>
              <button class="text-xs px-3 py-2.5 rounded-full bg-sand-100 text-ink-soft focus-ring">
                سیستم صوتی
              </button>
              <button class="text-xs px-3 py-2.5 rounded-full bg-sand-100 text-ink-soft focus-ring">
                تهویه مطبوع
              </button>
            </div>
          </div>
        </div>

        <div class="shrink-0 flex items-center gap-3 px-5 py-4 border-t border-sand-200 bg-sand-50">
          <button
            class="text-sm font-medium text-garnet-600 hover:text-garnet-700 px-4 py-3 focus-ring rounded-xl shrink-0"
          >
            پاک‌کردن
          </button>
          <button
            id="apply-filters"
            class="flex-1 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-full transition-colors focus-ring"
          >
            نمایش ۱۶۸ تالار
          </button>
        </div>
      </div>

      <!-- ============ FOOTER ============ -->
      <footer class="bg-ink text-sand-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
            <div class="col-span-2 lg:col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                  <path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#D4B274" strokeWidth="1.4" />
                  <circle cx="15" cy="15" r="5" fill="#D4B274" />
                </svg>
                <span class="font-bold">تالارگاه</span>
              </div>
              <p class="text-sm text-sand-100/60 leading-relaxed">
                مرجع کشف و انتخاب تالار عروسی در سراسر ایران.
              </p>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">دسته‌بندی‌ها</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60">
                <li>
                  <a href="category.html" class="hover:text-sand-50 transition-colors focus-ring"
                  >تالار پذیرایی</a
                  >
                </li>
                <li>
                  <a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">باغ تالار</a>
                </li>
                <li>
                  <a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تشریفات</a>
                </li>
                <li>
                  <a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">آتلیه عکاسی</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">شهرها</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60">
                <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تهران</a></li>
                <li>
                  <a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">اصفهان</a>
                </li>
                <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">شیراز</a></li>
                <li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">مشهد</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-4">تماس با ما</h3>
              <ul class="space-y-2.5 text-sm text-sand-100/60">
                <li class="num">۰۲۱-۹۱۰۰۰۰۰۰</li>
                <li>info@talargah.ir</li>
                <li>تهران، خیابان ولیعصر</li>
              </ul>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <h3 class="text-sm font-semibold mb-4">ما را دنبال کنید</h3>
              <div class="flex gap-3">
                <a
                  href="#"
                  aria-label="اینستاگرام"
                  class="w-9 h-9 rounded-full bg-sand-50/10 flex items-center justify-center hover:bg-sand-50/20 transition-colors focus-ring"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="تلگرام"
                  class="w-9 h-9 rounded-full bg-sand-50/10 flex items-center justify-center hover:bg-sand-50/20 transition-colors focus-ring"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="m22 2-11 20-2.5-8L2 11.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="border-t border-sand-50/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-100/50"
          >
            <p>© ۱۴۰۴ تالارگاه. تمامی حقوق محفوظ است.</p>
            <div class="flex gap-4">
              <a href="#" class="hover:text-sand-100 transition-colors focus-ring">حریم خصوصی</a>
              <a href="#" class="hover:text-sand-100 transition-colors focus-ring">قوانین استفاده</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
