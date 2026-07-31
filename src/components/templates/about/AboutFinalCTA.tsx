import Link from 'next/link';

export default function AboutFinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-l from-emerald-900 to-emerald-800" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
        <h2 className="text-2xl sm:text-4xl font-extralight leading-tight mb-4">به ما ملحق شوید</h2>
        <p className="text-sand-100/80 mb-8">
          چه به‌دنبال تالار می‌گردید، چه صاحب یک تالار هستید؛ تالارگاه برای شما ساخته شده.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/category/all"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-6 py-3.5 rounded-full transition-colors focus-ring"
          >
            جست‌وجوی تالار
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-sand-50/30 hover:border-sand-50 text-sand-50 font-medium px-6 py-3.5 rounded-full transition-colors focus-ring"
          >
            ثبت تالار شما
          </Link>
        </div>
      </div>
    </section>
  );
}
