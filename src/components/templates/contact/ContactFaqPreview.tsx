import Link from 'next/link';
import { FaqData } from '@/data/faq-data';
import FAQCard from '@/components/modules/faq/FAQCard';

const previewFaqs = FaqData.filter((faq) => faq.featured).slice(0, 2);

export default function ContactFaqPreview() {
  return (
    <section className="mt-16 pt-12 border-t border-sand-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">پرسش‌های پرتکرار</h2>
        <Link href="/faq" className="text-sm text-emerald-700 hover:text-emerald-800 font-medium focus-ring">
          مشاهده همه سوالات ←
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {previewFaqs.map((faq) => (
          <FAQCard key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
