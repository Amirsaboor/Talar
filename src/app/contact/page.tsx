
export default function Page() {


  return (
    <div class="bg-sand-50 text-ink antialiased">
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
        <!-- ============ HERO ============ -->
        <section class="relative h-64 sm:h-80 overflow-hidden">
          <img src="./1.png" alt="تیم پشتیبانی در حال پاسخ‌گویی به تماس مشتریان" class="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"></div>
          <div class="relative h-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 text-center items-center">
            <h1 class="text-sand-50 text-2xl sm:text-4xl font-semibold mb-2">در تصمیم‌گیری کنارتان هستیم</h1>
            <p class="text-sand-100/85 text-sm sm:text-base max-w-md">سوال، درخواست مشاوره یا گزارش مشکل دارید؟ تیم ما آماده پاسخ‌گویی است.</p>
          </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          <!-- ============ CONTACT CARDS ============ -->
          <div class="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
            <a href="tel:02191000000" class="bg-sand-100/60 hover:bg-sand-100 rounded-2xl p-5 text-center transition-colors focus-ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" /></svg>
              <p class="text-xs font-medium">تماس تلفنی</p>
              <p class="text-[11px] text-ink-faint mt-1 num">۰۲۱-۹۱۰۰۰۰۰۰</p>
            </a>
            <a href="mailto:info@talargah.ir" class="bg-sand-100/60 hover:bg-sand-100 rounded-2xl p-5 text-center transition-colors focus-ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
              <p class="text-xs font-medium">ایمیل</p>
              <p class="text-[11px] text-ink-faint mt-1">info@talargah.ir</p>
            </a>
            <a href="#" class="bg-sand-100/60 hover:bg-sand-100 rounded-2xl p-5 text-center transition-colors focus-ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 20l1-5.6A8.5 8.5 0 1 1 21 11.5Z" /></svg>
              <p class="text-xs font-medium">واتساپ</p>
              <p class="text-[11px] text-ink-faint mt-1 num">۰۹۱۲۰۰۰۰۰۰۰</p>
            </a>
            <a href="#" class="bg-sand-100/60 hover:bg-sand-100 rounded-2xl p-5 text-center transition-colors focus-ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><path d="m22 2-11 20-2.5-8L2 11.5Z" /></svg>
              <p class="text-xs font-medium">تلگرام</p>
              <p class="text-[11px] text-ink-faint mt-1">talargah_support@</p>
            </a>
            <a href="#" class="bg-sand-100/60 hover:bg-sand-100 rounded-2xl p-5 text-center transition-colors focus-ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="1" /></svg>
              <p class="text-xs font-medium">اینستاگرام</p>
              <p class="text-[11px] text-ink-faint mt-1">talargah.ir@</p>
            </a>
            <div class="bg-sand-100/60 rounded-2xl p-5 text-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-3"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              <p class="text-xs font-medium">ساعات پاسخ‌گویی</p>
              <p class="text-[11px] text-ink-faint mt-1">شنبه تا پنجشنبه، ۹ تا ۱۹</p>
            </div>
          </div>

          <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">

            <!-- ============ CONTACT FORM ============ -->
            <section>
              <h2 class="text-xl font-semibold mb-1">فرم تماس</h2>
              <p class="text-sm text-ink-faint mb-6">معمولاً در کمتر از ۲ ساعت کاری پاسخ می‌دهیم.</p>

              <form id="contact-form" class="space-y-5" novalidate>
                <div class="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label for="name" class="block text-sm font-medium mb-1.5">نام و نام خانوادگی</label>
                    <input id="name" name="name" type="text" required class="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring" placeholder="مثلاً نگار احمدی" />
                    <p class="error-msg hidden text-xs text-garnet-700 mt-1.5">لطفاً نام خود را وارد کنید.</p>
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium mb-1.5">شماره تماس</label>
                    <input id="phone" name="phone" type="tel" required class="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring num" placeholder="۰۹۱۲۱۲۳۴۵۶۷" />
                    <p class="error-msg hidden text-xs text-garnet-700 mt-1.5">شماره تماس معتبر وارد کنید.</p>
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-1.5">ایمیل <span class="text-ink-faint font-normal">(اختیاری)</span></label>
                  <input id="email" name="email" type="email" class="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring" placeholder="example@email.com" dir="ltr" />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium mb-1.5">موضوع</label>
                  <select id="subject" name="subject" required class="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring">
                    <option value="">انتخاب کنید</option>
                    <option>درخواست مشاوره برای انتخاب تالار</option>
                    <option>سوال درباره یک تالار خاص</option>
                    <option>گزارش مشکل یا خطا</option>
                    <option>ثبت تالار در پلتفرم</option>
                    <option>سایر موارد</option>
                  </select>
                  <p class="error-msg hidden text-xs text-garnet-700 mt-1.5">لطفاً موضوع پیام را انتخاب کنید.</p>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium mb-1.5">پیام شما</label>
                  <textarea id="message" name="message" required rows="5" class="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring resize-none" placeholder="پیام خود را اینجا بنویسید…"></textarea>
                  <p class="error-msg hidden text-xs text-garnet-700 mt-1.5">لطفاً پیام خود را بنویسید.</p>
                </div>

                <button id="submit-btn" type="submit" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-8 py-3.5 rounded-xl transition-colors focus-ring">
                  <svg id="submit-spinner" class="spinner hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" stroke-opacity=".25" /><path d="M21 12a9 9 0 0 0-9-9" /></svg>
                  <span id="submit-text">ارسال پیام</span>
                </button>

                <!-- Success state -->
                <div id="success-msg" class="hidden items-start gap-3 bg-emerald-800/10 text-emerald-800 rounded-xl px-4 py-4 mt-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" class="shrink-0 mt-0.5"><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.5 2.5 5-5" /></svg>
                  <div>
                    <p class="text-sm font-medium">پیام شما ارسال شد</p>
                    <p class="text-xs mt-1 opacity-80">همکاران ما در اسرع وقت با شما تماس می‌گیرند.</p>
                  </div>
                </div>
              </form>
            </section>

            <!-- ============ OFFICE LOCATION ============ -->
            <section>
              <h2 class="text-xl font-semibold mb-4">دفتر مرکزی</h2>
              <div class="rounded-2xl overflow-hidden aspect-[4/3] relative mb-4">
                <img src="./1.png" alt="نقشه موقعیت دفتر مرکزی تالارگاه در تهران" class="w-full h-full object-cover" loading="lazy" />
                <div class="absolute inset-0 bg-ink/10 flex items-center justify-center">
                  <span class="bg-sand-50 rounded-full p-3 shadow-card">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A2A38" strokeWidth="1.8"><path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="11" r="2.4" /></svg>
                  </span>
                </div>
              </div>
              <p class="text-sm text-ink-soft leading-relaxed mb-2">تهران، خیابان ولیعصر، بالاتر از پارک ملت، برج نگین، طبقه ۸</p>
              <a href="#" class="inline-flex items-center gap-1.5 text-sm text-emerald-700 hover:text-emerald-800 font-medium mb-4 focus-ring">
                مسیریابی تا دفتر
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 5 7 12l7 7" /></svg>
              </a>
              <div class="flex items-start gap-2.5 text-xs text-ink-faint bg-gold-300/25 rounded-xl px-4 py-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9A6E30" strokeWidth="1.8" class="shrink-0 mt-0.5"><path d="M19 17h2l-1.5-6H4.5L3 17h2M5 17v3M19 17v3M6 11l1.5-4h9L18 11" /></svg>
                پارکینگ عمومی برج نگین در دسترس است؛ ورود از خیابان فرعی سمت راست ساختمان.
              </div>

              <!-- Support promise -->
              <div class="grid grid-cols-3 gap-3 mt-8">
                <div class="text-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                  <p class="text-[11px] text-ink-soft leading-relaxed">پاسخ سریع</p>
                </div>
                <div class="text-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-2"><path d="M20.4 4.6a5 5 0 0 0-7.1 0L12 5.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 20.4l8.4-8.7a5 5 0 0 0 0-7.1Z" /></svg>
                  <p class="text-[11px] text-ink-soft leading-relaxed">پشتیبانی حرفه‌ای</p>
                </div>
                <div class="text-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" class="mx-auto mb-2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  <p class="text-[11px] text-ink-soft leading-relaxed">مشاوره رایگان</p>
                </div>
              </div>
            </section>
          </div>

          <!-- ============ FAQ PREVIEW ============ -->
          <section class="mt-16 pt-12 border-t border-sand-200">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold">پرسش‌های پرتکرار</h2>
              <a href="faq.html" class="text-sm text-emerald-700 hover:text-emerald-800 font-medium focus-ring">مشاهده همه سوالات ←</a>
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <details class="group bg-sand-100/60 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex items-center justify-between cursor-pointer text-sm font-medium focus-ring">
                  آیا استفاده از تالارگاه رایگان است؟
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p class="text-xs text-ink-soft leading-relaxed mt-2.5">بله، کاملاً رایگان و بدون نیاز به ثبت‌نام.</p>
              </details>
              <details class="group bg-sand-100/60 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex items-center justify-between cursor-pointer text-sm font-medium focus-ring">
                  چطور تالارم را ثبت کنم؟
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" class="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p class="text-xs text-ink-soft leading-relaxed mt-2.5">از طریق فرم بالا با موضوع «ثبت تالار» با ما تماس بگیرید.</p>
              </details>
            </div>
          </section>
        </div>

        <!-- ============ FINAL CTA ============ -->
        <section class="relative overflow-hidden py-16">
          <div class="absolute inset-0 bg-gradient-to-l from-emerald-900 to-emerald-800"></div>
          <div class="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
            <h2 class="text-2xl sm:text-3xl font-extralight leading-tight mb-4">نیاز به راهنمایی دارید؟</h2>
            <p class="text-sand-100/80 mb-8 text-sm">همکاران ما آماده‌اند تا در انتخاب بهترین تالار کمکتان کنند.</p>
            <a href="tel:02191000000" class="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-8 py-3.5 rounded-full transition-colors focus-ring">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" /></svg>
              تماس فوری
            </a>
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
    </div>
  );
}
