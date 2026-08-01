export interface FaqItem {
  question: string;
  answer: string;
}

/** قابل‌استفاده هم در صفحه /faq و هم بخش FAQ داخل صفحه Venue */
export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
