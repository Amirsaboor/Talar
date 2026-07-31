import type { Metadata } from 'next';
import { buildMetadata } from '@/shared/seo/metadata';
import JsonLd from '@/components/modules/json-ld/JsonLd';
import { buildFaqSchema } from '@/shared/seo/schema/faq';
import { FaqData } from '@/data/faq-data';
import FaqExplorer from '@/components/templates/faq/FaqExplorer';
import FaqHelpSection from '@/components/templates/faq/FaqHelpSection';
import FaqFinalCta from '@/components/templates/faq/FaqFinalCta';

export const metadata: Metadata = buildMetadata({
  title: 'سوالات متداول',
  description: 'پاسخ پرتکرارترین سوالات درباره رزرو تالار، پرداخت و همکاری با تالارگاه.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <div className="bg-sand-50 text-ink antialiased">
      <JsonLd data={buildFaqSchema(FaqData)} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-100 focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >
        رفتن به محتوای اصلی
      </a>

      <main id="main">
        <FaqExplorer />
        <FaqHelpSection />
        <FaqFinalCta />
      </main>
    </div>
  );
}
