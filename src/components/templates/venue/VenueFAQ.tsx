import { Plus } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueFAQ({ venue }: { venue: VenueDetail }) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">پرسش‌های متداول درباره این تالار</h2>
      <div>
        {venue.faqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-t border-sand-200 py-4 [&_summary::-webkit-details-marker]:hidden last:border-b"
          >
            <summary className="flex items-center justify-between gap-3 cursor-pointer text-sm font-medium focus-ring">
              <span className="min-w-0">{faq.question}</span>
              <Plus size={16} strokeWidth={1.8} className="shrink-0 text-ink-soft transition-transform group-open:rotate-45" />
            </summary>
            <p className="text-sm text-ink-soft leading-relaxed mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
