export default function AboutMission() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-emerald-900 text-sand-50 rounded-3xl p-8 sm:p-10">
          <span className="text-gold-300 text-xs font-medium">مأموریت</span>
          <h2 className="text-xl sm:text-2xl font-light leading-relaxed mt-3">
            دسترسی همه به اطلاعات شفاف و کامل هر تالار، بدون واسطه و بدون هزینه اضافه.
          </h2>
        </div>
        <div className="bg-sand-100/60 rounded-3xl p-8 sm:p-10">
          <span className="text-gold-600 text-xs font-medium">چشم‌انداز</span>
          <h2 className="text-xl sm:text-2xl font-light leading-relaxed mt-3 text-ink-soft">
            تبدیل شدن به اولین مرجعی که هر زوج ایرانی، پیش از تصمیم‌گیری درباره مراسم عروسی‌اش،
            سراغ آن می‌رود.
          </h2>
        </div>
      </div>
    </section>
  );
}
