import FaqExplorer from '@/components/templates/faq/FaqExplorer';
import FaqHelpSection from '@/components/templates/faq/FaqHelpSection';
import FaqFinalCta from '@/components/templates/faq/FaqFinalCta';

export default function FaqPage() {
  return (
    <div className="bg-sand-50 text-ink antialiased">
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
