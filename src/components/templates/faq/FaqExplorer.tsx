'use client';

import { useMemo, useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import { FaqData, faqCategories, type FaqCategory } from '@/data/faq-data';
import FAQCard from '@/components/modules/faq/FAQCard';

export default function FaqExplorer() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FaqCategory | 'all'>('all');

  const results = useMemo(() => {
    const q = query.trim();
    return FaqData.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesQuery = !q || faq.question.includes(q) || faq.answer.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <>
      {/* ============ HERO + SEARCH ============ */}
      <section className="bg-emerald-900 py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-300 text-xs font-medium mb-2">راهنما</p>
          <h1 className="text-sand-50 text-2xl sm:text-4xl font-semibold mb-3">
            چطور می‌توانیم کمک کنیم؟
          </h1>
          <p className="text-sand-100/70 text-sm mb-7">
            پاسخ اکثر سوالات رایج درباره تالارگاه را همین‌جا پیدا می‌کنید.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search size={17} className="absolute top-1/2 -translate-y-1/2 right-4 text-ink-faint" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جست‌وجو در سوالات…"
              className="w-full bg-sand-50 rounded-2xl pr-11 pl-4 py-3.5 text-sm focus-ring"
            />
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* ============ CATEGORIES ============ */}
        <div className="rail flex gap-2 overflow-x-auto mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 text-sm font-medium px-4 py-2.5 rounded-full transition-colors focus-ring ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-sand-50'
                  : 'bg-sand-100 text-ink-soft hover:bg-sand-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ============ FAQ ACCORDION ============ */}
        {results.length > 0 ? (
          <div className="space-y-3">
            {results.map((faq) => (
              <FAQCard key={faq.id} faq={faq} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchX size={64} strokeWidth={1.3} className="mx-auto mb-5 text-sand-300" />
            <p className="font-medium mb-1">نتیجه‌ای پیدا نشد</p>
            <p className="text-sm text-ink-faint">عبارت دیگری را امتحان کنید یا مستقیم با پشتیبانی تماس بگیرید.</p>
          </div>
        )}
      </div>
    </>
  );
}
