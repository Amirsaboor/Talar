import { Phone } from 'lucide-react';

export default function VenueFinalCta() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-l from-emerald-900 to-emerald-800" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
        <h2 className="text-2xl sm:text-3xl font-extralight leading-tight mb-4">
          این تالار مناسب مراسم شماست؟
        </h2>
        <p className="text-sand-100/80 mb-8 text-sm">
          همین حالا با تالار تماس بگیرید یا درخواست مشاوره رایگان ثبت کنید.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:02191000000"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-6 py-3.5 rounded-full transition-colors focus-ring"
          >
            <Phone size={16} />
            تماس با تالار
          </a>
          <button className="inline-flex items-center justify-center gap-2 border border-sand-50/30 hover:border-sand-50 text-sand-50 font-medium px-6 py-3.5 rounded-full transition-colors focus-ring">
            درخواست مشاوره
          </button>
        </div>
      </div>
    </section>
  );
}
