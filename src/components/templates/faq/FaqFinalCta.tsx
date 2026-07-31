import Link from 'next/link';

export default function FaqFinalCta() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-linear-to-t from-emerald-900 to-emerald-800" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
        <h2 className="text-2xl sm:text-3xl font-extralight leading-tight mb-4">پاسختان را پیدا نکردید؟</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-8 py-3.5 rounded-full transition-colors focus-ring"
        >
          تماس با پشتیبانی
        </Link>
      </div>
    </section>
  );
}
