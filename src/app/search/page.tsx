export default function Page() {

  return (
    <div>
        <main id="main">
        {/* <!-- ============ SEARCH HERO + BAR ============ --> */}
        <section className="bg-emerald-900 pb-8 pt-8 sm:pt-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold-300 text-xs font-medium mb-2 text-center">جست‌وجوی هوشمند</p>
            <h1 className="text-sand-50 text-2xl sm:text-3xl font-semibold text-center mb-6">تالار موردنظرتان را پیدا کنید</h1>

            {/* <!-- Large search bar with autosuggest --> */}
            <div className="relative">
              <div className="flex items-center gap-2 bg-sand-50 rounded-2xl p-2 shadow-lift">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A7D6E" strokeWidth="2" className="shrink-0 mr-2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                <input
                  id="search-input"
                  type="text"
                  placeholder="نام تالار، شهر یا منطقه را جست‌وجو کنید…"
                  className="flex-1 bg-transparent text-sm sm:text-base focus:outline-none py-2.5"
                />
                <button className="shrink-0 flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-5 h-11 rounded-xl transition-colors focus-ring">
                  جست‌وجو
                </button>
              </div>

              {/* <!-- Autosuggest dropdown --> */}
              <div id="suggest-panel" className="hidden absolute top-full inset-x-0 mt-2 bg-sand-50 rounded-2xl shadow-lift p-5 z-30 text-right">
                <div className="mb-5">
                  <p className="text-xs font-medium text-ink-faint mb-2.5">جست‌وجوهای اخیر شما</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-1.5 text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                      باغ‌تالار کرج
                    </button>
                    <button className="flex items-center gap-1.5 text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                      تالار ایوان طلایی
                    </button>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-medium text-ink-faint mb-2.5">پرطرفدارترین جست‌وجوها</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">تالار لوکس تهران</button>
                    <button className="text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">باغ‌تالار زیر ۳۰۰ میلیون</button>
                    <button className="text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring">تالار فضای باز اصفهان</button>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-faint mb-2.5 flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17h4l10-10 -4-4L3 13Z" /><path d="M17 4 20 7" /></svg>
                    رو به رشد این هفته
                  </p>
                  <ul className="space-y-1">
                    <li><a href="#" className="flex items-center justify-between text-sm text-ink-soft hover:text-ink px-2 py-2 rounded-lg hover:bg-sand-100 transition-colors focus-ring">تالار مشهد <span className="text-xs text-emerald-700 num">+۴۰٪</span></a></li>
                    <li><a href="#" className="flex items-center justify-between text-sm text-ink-soft hover:text-ink px-2 py-2 rounded-lg hover:bg-sand-100 transition-colors focus-ring">باغ‌تالار شمال <span className="text-xs text-emerald-700 num">+۲۸٪</span></a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Quick facet row --> */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <button className="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="11" r="2.4" /></svg>
                شهر
              </button>
              <button className="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /></svg>
                ظرفیت
              </button>
              <button className="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                بودجه
              </button>
              <button className="flex items-center gap-1.5 text-xs bg-sand-50/10 text-sand-50 border border-sand-50/20 px-3.5 py-2 rounded-full hover:bg-sand-50/20 transition-colors focus-ring">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                امتیاز
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">

            {/* <!-- ============ DESKTOP SIDEBAR FILTERS ============ --> */}
            <aside className="hidden lg:block" aria-label="فیلترها">
              <div className="sticky top-28 space-y-7">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold">فیلترها</h2>
                  <button className="text-xs text-garnet-700 hover:underline focus-ring">پاک‌کردن همه</button>
                </div>
                <fieldset className="border-t border-sand-200 pt-5">
                  <legend className="text-sm font-medium mb-3">شهر</legend>
                  <select className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring">
                    <option>همه شهرها</option><option>تهران</option><option>اصفهان</option><option>شیراز</option><option>مشهد</option>
                  </select>
                </fieldset>
                <fieldset className="border-t border-sand-200 pt-5">
                  <legend className="text-sm font-medium mb-3">بودجه <span className="text-ink-faint font-normal num">(میلیون تومان)</span></legend>
                  <div className="flex items-center gap-3">
                    <input type="number" placeholder="از" className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
                    <span className="text-ink-faint text-sm">تا</span>
                    <input type="number" placeholder="تا" className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
                  </div>
                </fieldset>
                <fieldset className="border-t border-sand-200 pt-5">
                  <legend className="text-sm font-medium mb-3">ظرفیت</legend>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="radio" name="cap" className="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" /> تا ۱۰۰ نفر</label>
                    <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="radio" name="cap" className="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" /> ۱۰۰ تا ۲۵۰ نفر</label>
                    <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="radio" name="cap" className="w-4 h-4 border-sand-300 text-emerald-700 focus-ring" /> بیش از ۲۵۰ نفر</label>
                  </div>
                </fieldset>
                <fieldset className="border-t border-sand-200 pt-5">
                  <legend className="text-sm font-medium mb-3">نوع فضا</legend>
                  <div className="flex gap-2">
                    <label className="cursor-pointer"><input type="checkbox" className="peer sr-only" /><span className="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">باغ / فضای باز</span></label>
                    <label className="cursor-pointer"><input type="checkbox" className="peer sr-only" /><span className="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">فضای بسته</span></label>
                  </div>
                </fieldset>
                <fieldset className="border-t border-sand-200 pt-5">
                  <legend className="text-sm font-medium mb-3">خدمات و امکانات</legend>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" /> پارکینگ</label>
                    <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" /> تشریفات کامل</label>
                    <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring" /> سالن VIP</label>
                  </div>
                </fieldset>
                <fieldset className="border-t border-sand-200 pt-5">
                  <legend className="text-sm font-medium mb-3">حداقل امتیاز</legend>
                  <div className="flex gap-2">
                    <button type="button" className="text-xs px-3 py-2 rounded-full border border-sand-300 hover:border-gold-500 transition-colors focus-ring num">۴.۵+</button>
                    <button type="button" className="text-xs px-3 py-2 rounded-full border border-sand-300 hover:border-gold-500 transition-colors focus-ring num">۴.۰+</button>
                  </div>
                </fieldset>
                <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer border-t border-sand-200 pt-5">
                  <input type="checkbox" className="w-4 h-4 rounded border-sand-300 text-garnet-700 focus-ring" />
                  فقط تالارهای دارای تخفیف ویژه
                </label>
                <button type="button" className="w-full bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3 rounded-xl transition-colors focus-ring">اعمال فیلترها</button>
              </div>
            </aside>

            {/* <!-- ============ RESULTS ============ --> */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                  تهران
                  <button aria-label="حذف فیلتر" className="focus-ring rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M18 6 6 18M6 6l12 12" /></svg></button>
                </span>
                <span className="flex items-center gap-1.5 text-xs bg-emerald-800 text-sand-50 pr-3 pl-2 py-1.5 rounded-full">
                  زیر ۵۰۰ میلیون
                  <button aria-label="حذف فیلتر" className="focus-ring rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M18 6 6 18M6 6l12 12" /></svg></button>
                </span>
                <button className="text-xs text-garnet-700 hover:underline focus-ring">پاک‌کردن همه</button>
              </div>

              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-ink-soft"><span className="font-semibold text-ink num">۸۶</span> تالار پیدا شد</p>
                <select className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring">
                  <option>پیشنهادی</option><option>محبوب‌ترین</option><option>بالاترین امتیاز</option><option>ارزان‌ترین</option><option>گران‌ترین</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <article className="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" className="block focus-ring">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="تالار ایوان طلایی" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" className="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span className="absolute top-3 right-3 flex items-center gap-1 bg-sand-50/90 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                        تأییدشده
                      </span>
                      <span className="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۶۰۰ نفر</span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold leading-snug">تالار ایوان طلایی</h3>
                        <div className="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span className="num">۴.۹</span>
                        </div>
                      </div>
                      <p className="text-sm text-ink-faint mt-1">تهران، سعادت‌آباد</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p className="text-sm"><span className="text-ink-faint">شروع از</span> <span className="font-semibold num">۸۵۰</span> <span className="text-ink-faint">میلیون</span></p>
                        <span className="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article className="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" className="block focus-ring">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="باغ‌تالار نارنجستان" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" className="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span className="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۴۰۰ نفر</span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold leading-snug">باغ‌تالار نارنجستان</h3>
                        <div className="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span className="num">۴.۸</span>
                        </div>
                      </div>
                      <p className="text-sm text-ink-faint mt-1">کرج، ملارد</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p className="text-sm"><span className="text-ink-faint">شروع از</span> <span className="font-semibold num">۴۹۰</span> <span className="text-ink-faint">میلیون</span></p>
                        <span className="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده</span>
                      </div>
                    </div>
                  </a>
                </article>

                <article className="group bg-sand-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <a href="venue.html" className="block focus-ring">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src="./1.png" alt="تالار نگین سبز" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <button aria-label="افزودن به علاقه‌مندی‌ها" className="absolute top-3 left-3 w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A2331" strokeWidth="2"><path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" /></svg>
                      </button>
                      <span className="absolute top-3 right-3 bg-garnet-700 text-sand-50 text-[11px] font-medium px-2.5 py-1 rounded-full">تخفیف ویژه</span>
                      <span className="absolute bottom-3 right-3 bg-emerald-900/85 text-sand-50 text-xs px-3 py-1 rounded-full">ظرفیت ۲۰۰ نفر</span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold leading-snug">تالار نگین سبز</h3>
                        <div className="flex items-center gap-1 text-xs text-ink-soft shrink-0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#B8863E" stroke="#B8863E"><path d="m12 2 3.1 6.6 7.2.9-5.3 4.9 1.4 7.2L12 18l-6.4 3.6 1.4-7.2-5.3-4.9 7.2-.9Z" /></svg>
                          <span className="num">۴.۶</span>
                        </div>
                      </div>
                      <p className="text-sm text-ink-faint mt-1">کرج</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand-200">
                        <p className="text-sm"><span className="text-ink-faint">شروع از</span> <span className="font-semibold num">۲۲۰</span> <span className="text-ink-faint">میلیون</span></p>
                        <span className="text-xs font-medium bg-emerald-800 text-sand-50 px-3.5 py-2 rounded-full">مشاهده</span>
                      </div>
                    </div>
                  </a>
                </article>
              </div>

              {/* <!-- Infinite scroll sentinel / load more --> */}
              <div className="flex justify-center mt-10">
                <button className="flex items-center gap-2 text-sm text-ink-soft border border-sand-300 hover:border-ink hover:text-ink px-6 py-3 rounded-full transition-colors focus-ring">
                  نمایش تالارهای بیشتر
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* // <!-- ============ MOBILE FLOATING FILTER TRIGGER ============ --> */}
      <button  className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-ink text-sand-50 text-sm font-medium px-6 py-3.5 rounded-full shadow-lift focus-ring">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
        فیلترها
      </button>
      <div id="filter-backdrop" className="lg:hidden fixed inset-0 bg-ink/50 z-50 opacity-0 pointer-events-none"></div>
      <div id="filter-drawer" className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-sand-50 rounded-t-3xl max-h-[85vh] overflow-y-auto translate-y-full" role="dialog" aria-modal="true" aria-label="فیلترها">
        <div className="sticky top-0 bg-sand-50 flex items-center justify-between px-5 py-4 border-b border-sand-200">
          <h2 className="font-semibold">فیلترها</h2>
          <button  aria-label="بستن" className="w-9 h-9 rounded-full hover:bg-sand-100 flex items-center justify-center focus-ring">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-5 space-y-6">
          <fieldset>
            <legend className="text-sm font-medium mb-3">شهر</legend>
            <select className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring"><option>همه شهرها</option><option>تهران</option><option>اصفهان</option></select>
          </fieldset>
          <fieldset className="border-t border-sand-200 pt-5">
            <legend className="text-sm font-medium mb-3">بودجه (میلیون تومان)</legend>
            <div className="flex items-center gap-3">
              <input type="number" placeholder="از" className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
              <span className="text-ink-faint text-sm">تا</span>
              <input type="number" placeholder="تا" className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num" />
            </div>
          </fieldset>
        </div>
        <div className="sticky bottom-0 bg-sand-50 border-t border-sand-200 p-5">
          <button  className="w-full bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-xl transition-colors focus-ring">نمایش ۸۶ نتیجه</button>
        </div>
      </div>
    </div>
    
  );
}
