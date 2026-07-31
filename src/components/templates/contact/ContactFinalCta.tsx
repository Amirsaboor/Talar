import { Phone } from 'lucide-react';

export default function ContactFinalCta() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-l from-emerald-900 to-emerald-800" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
        <h2 className="text-2xl sm:text-3xl font-extralight leading-tight mb-4">نیاز به راهنمایی دارید؟</h2>
        <p className="text-sand-100/80 mb-8 text-sm">همکاران ما آماده‌اند تا در انتخاب بهترین تالار کمکتان کنند.</p>
        <a
          href="tel:02191000000"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-8 py-3.5 rounded-full transition-colors focus-ring"
        >
          <Phone size={16} />
          تماس فوری
        </a>
      </div>
    </section>
  );
}
