'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { VenueDetail } from '@/data/venue-details';

interface Props {
  faqs: VenueDetail['faqs'];
}

export default function VenueFAQAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">پرسش‌های متداول درباره این تالار</h2>
      <div>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-t border-sand-200 py-4 last:border-b">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-right cursor-pointer text-sm font-medium focus-ring"
              >
                {faq.question}
                <Plus
                  size={16}
                  strokeWidth={1.8}
                  className={`shrink-0 text-ink-soft transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="text-sm text-ink-soft leading-relaxed mt-3">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
