import type { Metadata } from 'next';
import { buildMetadata } from '@/shared/seo/metadata';
import ContactHero from '@/components/templates/contact/ContactHero';
import ContactChannels from '@/components/templates/contact/ContactChannels';
import ContactForm from '@/components/templates/contact/ContactForm';
import OfficeLocation from '@/components/templates/contact/OfficeLocation';
import ContactFaqPreview from '@/components/templates/contact/ContactFaqPreview';
import ContactFinalCta from '@/components/templates/contact/ContactFinalCta';

export const metadata: Metadata = buildMetadata({
  title: 'تماس با ما',
  description:
    'راه‌های ارتباطی با تیم تالارگاه؛ پرسش، پیشنهاد یا درخواست همکاری خود را برای ما بفرستید.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="bg-sand-50 text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-100 focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >
        رفتن به محتوای اصلی
      </a>

      <main id="main">
        <ContactHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <ContactChannels />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
            <section>
              <h2 className="text-xl font-semibold mb-1">فرم تماس</h2>
              <p className="text-sm text-ink-faint mb-6">معمولاً در کمتر از ۲ ساعت کاری پاسخ می‌دهیم.</p>
              <ContactForm />
            </section>

            <OfficeLocation />
          </div>

          <ContactFaqPreview />
        </div>

        <ContactFinalCta />
      </main>
    </div>
  );
}
