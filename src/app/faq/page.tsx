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

      <main id="main">
        <!-- ============ HERO + SEARCH ============ -->
        <section class="bg-emerald-900 py-14 sm:py-20">
          <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p class="text-gold-300 text-xs font-medium mb-2">راهنما</p>
            <h1 class="text-sand-50 text-2xl sm:text-4xl font-semibold mb-3">چطور می‌توانیم کمک کنیم؟</h1>
            <p class="text-sand-100/70 text-sm mb-7">پاسخ اکثر سوالات رایج درباره تالارگاه را همین‌جا پیدا می‌کنید.</p>
            <div class="relative max-w-md mx-auto">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8A7D6E" strokeWidth="2" class="absolute top-1/2 -translate-y-1/2 right-4"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
              <input
                id="faq-search"
                type="text"
                placeholder="جست‌وجو در سوالات…"
                class="w-full bg-sand-50 rounded-2xl pr-11 pl-4 py-3.5 text-sm focus-ring"
                oninput="filterFaq()"
              />
            </div>
          </div>
        </section>

        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          <!-- ============ CATEGORIES ============ -->
          <div class="rail flex gap-2 overflow-x-auto mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            <button data-cat="all" onclick="setCategory('all', this)" class="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-emerald-800 text-sand-50 focus-ring">همه</button>
            <button data-cat="booking" onclick="setCategory('booking', this)" class="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">رزرو</button>
            <button data-cat="pricing" onclick="setCategory('pricing', this)" class="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">قیمت‌گذاری</button>
            <button data-cat="venue" onclick="setCategory('venue', this)" class="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">اطلاعات تالار</button>
            <button data-cat="services" onclick="setCategory('services', this)" class="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">خدمات</button>
            <button data-cat="payment" onclick="setCategory('payment', this)" class="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">پرداخت</button>
            <button data-cat="support" onclick="setCategory('support', this)" class="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">پشتیبانی</button>
          </div>

          <!-- ============ FAQ ACCORDION ============ -->
          <div id="faq-list" class="space-y-3">
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="booking" data-q="چطور می‌توانم یک تالار را رزرو کنم">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                چطور می‌توانم یک تالار را رزرو کنم؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">رزرو نهایی به‌صورت مستقیم و خارج از پلتفرم، با خود تالار انجام می‌شود. تالارگاه فقط اطلاعات و راه ارتباطی را در اختیارتان قرار می‌دهد.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="booking" data-q="آیا امکان لغو یا تغییر رزرو وجود دارد">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا امکان لغو یا تغییر رزرو وجود دارد؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">قوانین لغو و تغییر رزرو توسط هر تالار به‌صورت جداگانه تعیین می‌شود؛ حتماً پیش از عقد قرارداد از این موارد مطلع شوید.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="pricing" data-q="قیمت‌های نمایش‌داده‌شده نهایی هستند">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                قیمت‌های نمایش‌داده‌شده نهایی هستند؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">قیمت‌ها تقریبی و بر اساس اعلام تالار هستند. قیمت نهایی را باید هنگام تماس یا بازدید حضوری تأیید کنید.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="pricing" data-q="آیا هزینه‌ای برای استفاده از تالارگاه پرداخت می‌کنم">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا هزینه‌ای برای استفاده از تالارگاه پرداخت می‌کنم؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">خیر، جست‌وجو و مقایسه تالارها برای کاربران کاملاً رایگان است.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="venue" data-q="اطلاعات ظرفیت و امکانات هر تالار چقدر دقیق است">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                اطلاعات ظرفیت و امکانات هر تالار چقدر دقیق است؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">اطلاعات هر تالار پیش از انتشار توسط تیم ما بررسی و تأیید می‌شود، اما همچنان توصیه می‌کنیم پیش از تصمیم نهایی از تالار بازدید کنید.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="venue" data-q="آیا می‌توانم چند تالار را با هم مقایسه کنم">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا می‌توانم چند تالار را با هم مقایسه کنم؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">بله، از صفحه علاقه‌مندی‌ها می‌توانید تالارهای ذخیره‌شده را کنار هم مقایسه کنید.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="services" data-q="آیا تالارها تشریفات و پذیرایی هم ارائه می‌دهند">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا تالارها تشریفات و پذیرایی هم ارائه می‌دهند؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">بسیاری از تالارها آشپزخانه و تشریفات داخلی دارند؛ این اطلاعات در صفحه هر تالار مشخص شده است.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="payment" data-q="بیعانه رزرو معمولاً چقدر است">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                بیعانه رزرو معمولاً چقدر است؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">این مبلغ توسط هر تالار تعیین می‌شود؛ معمولاً بین ۱۵ تا ۳۰ درصد مبلغ کل است.</p>
            </details>
            <details class="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="support" data-q="اگر مشکلی با تالار پیش بیاید تالارگاه کمک می‌کند">
              <summary class="flex items-center justify-between cursor-pointer font-medium focus-ring">
                اگر مشکلی با تالار پیش بیاید، تالارگاه کمک می‌کند؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p class="text-sm text-ink-soft leading-relaxed mt-3">بله، تیم پشتیبانی ما آماده کمک برای پیگیری و میانجی‌گری در صورت بروز مشکل است.</p>
            </details>
          </div>

          <!-- No results state -->
          <div id="faq-empty" class="hidden text-center py-16">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.3" class="mx-auto mb-5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            <p class="font-medium mb-1">نتیجه‌ای پیدا نشد</p>
            <p class="text-sm text-ink-faint">عبارت دیگری را امتحان کنید یا مستقیم با پشتیبانی تماس بگیرید.</p>
          </div>
        </div>

        <!-- ============ STILL NEED HELP ============ -->
        <section class="bg-sand-100/60 py-14 sm:py-20">
          <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-xl sm:text-2xl font-semibold mb-8">هنوز به کمک نیاز دارید؟</h2>
            <div class="grid sm:grid-cols-3 gap-4">
              <a href="tel:02191000000" class="bg-sand-50 hover:shadow-card rounded-2xl p-5 transition-shadow focus-ring">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" /></svg>
                <p class="text-sm font-medium">تماس تلفنی</p>
              </a>
              <a href="#" class="bg-sand-50 hover:shadow-card rounded-2xl p-5 transition-shadow focus-ring">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 20l1-5.6A8.5 8.5 0 1 1 21 11.5Z" /></svg>
                <p class="text-sm font-medium">واتساپ</p>
              </a>
              <a href="mailto:info@talargah.ir" class="bg-sand-50 hover:shadow-card rounded-2xl p-5 transition-shadow focus-ring">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                <p class="text-sm font-medium">ایمیل</p>
              </a>
            </div>
          </div>
        </section>

        <!-- ============ FINAL CTA ============ -->
        <section class="relative overflow-hidden py-16">
          <div class="absolute inset-0 bg-gradient-to-l from-emerald-900 to-emerald-800"></div>
          <div class="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
            <h2 class="text-2xl sm:text-3xl font-extralight leading-tight mb-4">پاسختان را پیدا نکردید؟</h2>
            <a href="contact.html" class="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-8 py-3.5 rounded-full transition-colors focus-ring">تماس با پشتیبانی</a>
          </div>
        </section>
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
            <div><h3 class="text-sm font-semibold mb-4">دسته‌بندی‌ها</h3><ul class="space-y-2.5 text-sm text-sand-100/60"><li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تالار پذیرایی</a></li></ul></div>
            <div><h3 class="text-sm font-semibold mb-4">شهرها</h3><ul class="space-y-2.5 text-sm text-sand-100/60"><li><a href="category.html" class="hover:text-sand-50 transition-colors focus-ring">تهران</a></li></ul></div>
            <div><h3 class="text-sm font-semibold mb-4">تماس با ما</h3><ul class="space-y-2.5 text-sm text-sand-100/60"><li>۰۲۱-۹۱۰۰۰۰۰۰</li></ul></div>
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
