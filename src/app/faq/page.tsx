export default function Page() {


  return (

      <main id="main">
        {/* <!-- ============ HERO + SEARCH ============ --> */}
        <section className="bg-emerald-900 py-14 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold-300 text-xs font-medium mb-2">راهنما</p>
            <h1 className="text-sand-50 text-2xl sm:text-4xl font-semibold mb-3">چطور می‌توانیم کمک کنیم؟</h1>
            <p className="text-sand-100/70 text-sm mb-7">پاسخ اکثر سوالات رایج درباره تالارگاه را همین‌جا پیدا می‌کنید.</p>
            <div className="relative max-w-md mx-auto">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8A7D6E" strokeWidth="2" className="absolute top-1/2 -translate-y-1/2 right-4"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
              <input
                id="faq-search"
                type="text"
                placeholder="جست‌وجو در سوالات…"
                className="w-full bg-sand-50 rounded-2xl pr-11 pl-4 py-3.5 text-sm focus-ring"
              />
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* <!-- ============ CATEGORIES ============ --> */}
          <div className="rail flex gap-2 overflow-x-auto mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            <button data-cat="all"  className="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-emerald-800 text-sand-50 focus-ring">همه</button>
            <button data-cat="booking"  className="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">رزرو</button>
            <button data-cat="pricing"  className="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">قیمت‌گذاری</button>
            <button data-cat="venue"  className="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">اطلاعات تالار</button>
            <button data-cat="services"  className="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">خدمات</button>
            <button data-cat="payment"  className="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">پرداخت</button>
            <button data-cat="support"  className="cat-btn shrink-0 text-sm font-medium px-4 py-2.5 rounded-full bg-sand-100 text-ink-soft hover:bg-sand-200 transition-colors focus-ring">پشتیبانی</button>
          </div>

          {/* ============ FAQ ACCORDION ============ */}
          <div id="faq-list" className="space-y-3">
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="booking" data-q="چطور می‌توانم یک تالار را رزرو کنم">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                چطور می‌توانم یک تالار را رزرو کنم؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">رزرو نهایی به‌صورت مستقیم و خارج از پلتفرم، با خود تالار انجام می‌شود. تالارگاه فقط اطلاعات و راه ارتباطی را در اختیارتان قرار می‌دهد.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="booking" data-q="آیا امکان لغو یا تغییر رزرو وجود دارد">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا امکان لغو یا تغییر رزرو وجود دارد؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">قوانین لغو و تغییر رزرو توسط هر تالار به‌صورت جداگانه تعیین می‌شود؛ حتماً پیش از عقد قرارداد از این موارد مطلع شوید.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="pricing" data-q="قیمت‌های نمایش‌داده‌شده نهایی هستند">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                قیمت‌های نمایش‌داده‌شده نهایی هستند؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">قیمت‌ها تقریبی و بر اساس اعلام تالار هستند. قیمت نهایی را باید هنگام تماس یا بازدید حضوری تأیید کنید.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="pricing" data-q="آیا هزینه‌ای برای استفاده از تالارگاه پرداخت می‌کنم">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا هزینه‌ای برای استفاده از تالارگاه پرداخت می‌کنم؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">خیر، جست‌وجو و مقایسه تالارها برای کاربران کاملاً رایگان است.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="venue" data-q="اطلاعات ظرفیت و امکانات هر تالار چقدر دقیق است">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                اطلاعات ظرفیت و امکانات هر تالار چقدر دقیق است؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">اطلاعات هر تالار پیش از انتشار توسط تیم ما بررسی و تأیید می‌شود، اما همچنان توصیه می‌کنیم پیش از تصمیم نهایی از تالار بازدید کنید.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="venue" data-q="آیا می‌توانم چند تالار را با هم مقایسه کنم">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا می‌توانم چند تالار را با هم مقایسه کنم؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">بله، از صفحه علاقه‌مندی‌ها می‌توانید تالارهای ذخیره‌شده را کنار هم مقایسه کنید.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="services" data-q="آیا تالارها تشریفات و پذیرایی هم ارائه می‌دهند">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                آیا تالارها تشریفات و پذیرایی هم ارائه می‌دهند؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">بسیاری از تالارها آشپزخانه و تشریفات داخلی دارند؛ این اطلاعات در صفحه هر تالار مشخص شده است.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="payment" data-q="بیعانه رزرو معمولاً چقدر است">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                بیعانه رزرو معمولاً چقدر است؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">این مبلغ توسط هر تالار تعیین می‌شود؛ معمولاً بین ۱۵ تا ۳۰ درصد مبلغ کل است.</p>
            </details>
            <details className="faq-item group bg-sand-100/60 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden" data-cat="support" data-q="اگر مشکلی با تالار پیش بیاید تالارگاه کمک می‌کند">
              <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                اگر مشکلی با تالار پیش بیاید، تالارگاه کمک می‌کند؟
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54493D" strokeWidth="2" className="shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">بله، تیم پشتیبانی ما آماده کمک برای پیگیری و میانجی‌گری در صورت بروز مشکل است.</p>
            </details>
          </div>

          {/* <!-- No results state --> */}
          <div id="faq-empty" className="hidden text-center py-16">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.3" className="mx-auto mb-5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            <p className="font-medium mb-1">نتیجه‌ای پیدا نشد</p>
            <p className="text-sm text-ink-faint">عبارت دیگری را امتحان کنید یا مستقیم با پشتیبانی تماس بگیرید.</p>
          </div>
        </div>

        {/* <!-- ============ STILL NEED HELP ============ --> */}
        <section className="bg-sand-100/60 py-14 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-8">هنوز به کمک نیاز دارید؟</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="tel:02191000000" className="bg-sand-50 hover:shadow-card rounded-2xl p-5 transition-shadow focus-ring">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" className="mx-auto mb-3"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" /></svg>
                <p className="text-sm font-medium">تماس تلفنی</p>
              </a>
              <a href="#" className="bg-sand-50 hover:shadow-card rounded-2xl p-5 transition-shadow focus-ring">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" className="mx-auto mb-3"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 20l1-5.6A8.5 8.5 0 1 1 21 11.5Z" /></svg>
                <p className="text-sm font-medium">واتساپ</p>
              </a>
              <a href="mailto:info@talargah.ir" className="bg-sand-50 hover:shadow-card rounded-2xl p-5 transition-shadow focus-ring">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3E32" strokeWidth="1.6" className="mx-auto mb-3"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                <p className="text-sm font-medium">ایمیل</p>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- ============ FINAL CTA ============ --> */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-linear-to-l from-emerald-900 to-emerald-800"></div>
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
            <h2 className="text-2xl sm:text-3xl font-extralight leading-tight mb-4">پاسختان را پیدا نکردید؟</h2>
            <a href="contact.html" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-8 py-3.5 rounded-full transition-colors focus-ring">تماس با پشتیبانی</a>
          </div>
        </section>
      </main>
  );
}
