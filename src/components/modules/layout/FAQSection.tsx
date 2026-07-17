// components/FAQSection.tsx
import { FaqData } from '@/data/faq-data';
import React from 'react';

const FAQSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {' '}
      {FaqData.map((faq, index) => (
        <details
          key={index}
          className="group bg-sand-50 rounded-2xl p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
            {faq.question}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#54493D"
              strokeWidth="2"
              className="shrink-0 transition-transform duration-300 group-open:rotate-45"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="text-sm text-ink-soft leading-relaxed mt-3">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQSection;
