// components/FAQSection.tsx
import { FaqData } from '@/data/faq-data';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import FAQCard from './FAQCard';

const FAQSection = () => {
  return (
    <section id="faq" className="bg-sand-100/60 py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold-600 text-sm font-medium mb-2">راهنما</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">پرسش‌های متداول</h2>
        </div>
        <div className="flex flex-col gap-4">
          {FaqData.map((faq) => (
           <FAQCard faq={faq}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
