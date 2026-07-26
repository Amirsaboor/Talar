export default function Page() {

  return (

      <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold">علاقه‌مندی‌های من</h1>
            <p className="text-sm text-ink-faint mt-2" id="saved-count-text">
              <span id="saved-count" className="num font-medium text-ink">۰</span> تالار ذخیره شده
            </p>
          </div>
          <div className="flex items-center gap-2" id="controls-row">
            <select id="sort-select" className="text-sm bg-sand-100 rounded-full px-4 py-2.5 focus-ring">
              <option value="recent">جدیدترین ذخیره</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
              <option value="rating">بالاترین امتیاز</option>
            </select>
            <button id="compare-btn" className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-5 py-2.5 rounded-full transition-colors focus-ring">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></svg>
              مقایسه تالارها
            </button>
          </div>
        </div>

        {/* <!-- Grid populated by JS --> */}
        <div id="favorites-grid" className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"></div>

        {/* <!-- ============ EMPTY STATE (shown by JS when there are no favorites) ============ --> */}
        <div id="empty-state" className="hidden text-center py-20 px-6">
          <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="#E2D2AC" strokeWidth="1.1" className="mx-auto mb-6">
            <path d="M20.8 8.6c0-2.5-2-4.4-4.4-4.4-1.6 0-3.1.9-3.9 2.2A4.5 4.5 0 0 0 8.6 4.2c-2.5 0-4.4 2-4.4 4.4 0 5.2 8.3 10 8.3 10s8.3-4.8 8.3-10Z" stroke="#B8863E" />
          </svg>
          <h2 className="font-semibold text-lg mb-2">هنوز تالاری ذخیره نکرده‌اید</h2>
          <p className="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
            هنگام مرور تالارها، روی نماد قلب بزنید تا گزینه‌های موردعلاقه‌تان اینجا جمع شوند و بعداً راحت‌تر مقایسه‌شان کنید.
          </p>
          <a href="category.html" className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">
            مشاهده تالارها
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 19 3 12l7-7M3 12h18" /></svg>
          </a>
        </div>
      </main>

  );
}
