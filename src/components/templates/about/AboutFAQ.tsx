'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function AboutFAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
        چند پرسش رایج درباره ما
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="bg-sand-100/60 rounded-2xl p-5">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-right cursor-pointer font-medium focus-ring"
              >
                {faq.question}
                <Plus
                  size={18}
                  strokeWidth={2}
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
