'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

export default function MobileFilterSheet({ resultCount }: { resultCount: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [minCapacity, setMinCapacity] = useState(400);

  return (
    <>
      {/* Floating trigger button (mobile only) */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3.5 rounded-full shadow-lift transition-colors focus-ring"
      >
        <SlidersHorizontal size={16} />
        فیلترها
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-ink/50 z-60 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Bottom sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-sheet-title"
        className={`fixed inset-x-0 bottom-0 z-70 bg-sand-50 rounded-t-3xl shadow-lift max-h-[88vh] flex flex-col lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="shrink-0 relative flex items-center justify-between px-5 pt-4 pb-3 border-b border-sand-200">
          <span className="w-10 h-1.5 bg-sand-300 rounded-full absolute top-2 right-1/2 translate-x-1/2" />
          <h2 id="filter-sheet-title" className="font-semibold text-lg mt-2">
            فیلترها
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="بستن فیلترها"
            className="mt-2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-sand-100 transition-colors focus-ring"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-5 space-y-6">
          {/* Venue type */}
          <div className="border-b border-sand-200 pb-5">
            <h3 className="text-sm font-semibold mb-3">نوع تالار</h3>
            <div className="space-y-3">
              {[
                { label: 'تالار پذیرایی', count: '۹۸', defaultChecked: true },
                { label: 'باغ تالار', count: '۵۲', defaultChecked: false },
                { label: 'هتل', count: '۱۸', defaultChecked: false },
              ].map((item) => (
                <label
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"
                >
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="w-5 h-5 rounded border-sand-300 accent-emerald-800 focus-ring"
                  />
                  {item.label} <span className="text-ink-faint text-xs num mr-auto">{item.count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity */}
          <div className="border-b border-sand-200 pb-5">
            <h3 className="text-sm font-semibold mb-3">ظرفیت مهمان</h3>
            <div className="flex items-center justify-between text-xs text-ink-faint mb-2 num">
              <span>۵۰ نفر</span>
              <span>۱۰۰۰+ نفر</span>
            </div>
            <input
              type="range"
              min={50}
              max={1000}
              value={minCapacity}
              onChange={(e) => setMinCapacity(Number(e.target.value))}
              className="w-full focus-ring"
              aria-label="حداقل ظرفیت"
            />
            <p className="text-xs text-ink-soft mt-2">
              تا <span className="font-semibold num">{minCapacity}</span> نفر
            </p>
          </div>

          {/* Budget */}
          <div className="border-b border-sand-200 pb-5">
            <h3 className="text-sm font-semibold mb-3">محدوده قیمت (میلیون تومان)</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="از"
                className="w-full text-sm bg-sand-100 rounded-xl px-3 py-3 focus-ring border border-transparent focus:border-gold-500 num"
              />
              <span className="text-ink-faint">—</span>
              <input
                type="number"
                placeholder="تا"
                className="w-full text-sm bg-sand-100 rounded-xl px-3 py-3 focus-ring border border-transparent focus:border-gold-500 num"
              />
            </div>
          </div>

          {/* Space */}
          <div className="border-b border-sand-200 pb-5">
            <h3 className="text-sm font-semibold mb-3">فضا</h3>
            <div className="flex gap-2">
              <button className="flex-1 text-sm py-2.5 rounded-xl bg-emerald-800 text-sand-50 font-medium focus-ring">
                سرپوشیده
              </button>
              <button className="flex-1 text-sm py-2.5 rounded-xl bg-sand-100 text-ink-soft focus-ring">
                روباز
              </button>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-sm font-semibold mb-3">امکانات</h3>
            <div className="flex flex-wrap gap-2">
              {['پارکینگ', 'سالن VIP', 'کترینگ', 'سیستم صوتی', 'تهویه مطبوع'].map((label, i) => (
                <button
                  key={label}
                  className={`text-xs px-3 py-2.5 rounded-full focus-ring ${
                    i === 0
                      ? 'bg-emerald-800 text-sand-50 font-medium'
                      : 'bg-sand-100 text-ink-soft'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3 px-5 py-4 border-t border-sand-200 bg-sand-50">
          <button className="text-sm font-medium text-garnet-600 hover:text-garnet-700 px-4 py-3 focus-ring rounded-xl shrink-0">
            پاک‌کردن
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3.5 rounded-full transition-colors focus-ring"
          >
            نمایش {resultCount} تالار
          </button>
        </div>
      </div>
    </>
  );
}
