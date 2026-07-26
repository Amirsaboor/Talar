import { Star } from 'lucide-react';

export default function FilterSidebar() {
  return (
    <aside className="hidden lg:block" aria-label="فیلترها">
      <div className="sticky top-40 space-y-7">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">فیلترها</h2>
          <button className="text-xs text-garnet-700 hover:underline focus-ring">
            پاک‌کردن همه
          </button>
        </div>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">منطقه</legend>
          <div className="space-y-2.5">
            {['سعادت‌آباد', 'ولنجک', 'پاسداران', 'شرق تهران'].map((area, i) => (
              <label
                key={area}
                className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={i === 0}
                  className="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring"
                />
                {area}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">ظرفیت</legend>
          <div className="space-y-2.5">
            {['تا ۱۰۰ نفر', '۱۰۰ تا ۲۵۰ نفر', '۲۵۰ تا ۵۰۰ نفر', 'بیش از ۵۰۰ نفر'].map(
              (label, i) => (
                <label
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"
                >
                  <input
                    type="radio"
                    name="capacity"
                    defaultChecked={i === 1}
                    className="w-4 h-4 border-sand-300 text-emerald-700 focus-ring"
                  />
                  {label}
                </label>
              )
            )}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">
            بودجه <span className="text-ink-faint font-normal num">(میلیون تومان)</span>
          </legend>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="از ۲۰۰"
              className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num"
            />
            <span className="text-ink-faint text-sm">تا</span>
            <input
              type="number"
              placeholder="۱٬۵۰۰"
              className="w-full text-sm bg-sand-100 rounded-lg px-3 py-2.5 focus-ring num"
            />
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">نوع تالار</legend>
          <div className="flex flex-wrap gap-2">
            {['فضای باز', 'فضای بسته'].map((label, i) => (
              <label key={label} className="cursor-pointer">
                <input type="checkbox" defaultChecked={i === 0} className="peer sr-only" />
                <span className="block text-xs px-3.5 py-2 rounded-full border border-sand-300 peer-checked:bg-emerald-800 peer-checked:text-sand-50 peer-checked:border-emerald-800 transition-colors">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">امکانات</legend>
          <div className="space-y-2.5">
            {[
              'پارکینگ',
              'تشریفات و پذیرایی',
              'اتاق VIP',
              'سن اجرا',
              'سیستم صوتی و موسیقی',
              'سرمایش و گرمایش',
              'دسترسی معلولین',
            ].map((label) => (
              <label
                key={label}
                className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-sand-300 text-emerald-700 focus-ring"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-sand-200 pt-5">
          <legend className="text-sm font-medium mb-3">حداقل امتیاز</legend>
          <div className="flex gap-2">
            {['۴.۵+', '۴.۰+'].map((label) => (
              <button
                key={label}
                type="button"
                className="flex items-center gap-1 text-xs px-3 py-2 rounded-full border border-sand-300 hover:border-gold-500 transition-colors focus-ring"
              >
                <Star size={12} className="fill-[#B8863E] text-[#B8863E]" />
                <span className="num">{label}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <button
          type="button"
          className="w-full bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium py-3 rounded-xl transition-colors focus-ring"
        >
          اعمال فیلترها
        </button>
      </div>
    </aside>
  );
}
