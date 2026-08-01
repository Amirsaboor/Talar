import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/shared/seo/metadata';
import Footer from '@/components/modules/layout/Footer';
import Divider from '@/components/modules/divider';
import AboutHero from '@/components/templates/about/AboutHero';
import AboutTimeline from '@/components/templates/about/AboutTimeline';
import AboutMission from '@/components/templates/about/AboutMission';
import AboutValues from '@/components/templates/about/AboutValues';
import AboutStats from '@/components/templates/about/AboutStats';
import AboutTrust from '@/components/templates/about/AboutTrust';
import AboutTeam from '@/components/templates/about/AboutTeam';
import AboutPartners from '@/components/templates/about/AboutPartners';
import AboutFAQ from '@/components/templates/about/AboutFAQ';
import AboutFinalCTA from '@/components/templates/about/AboutFinalCTA';
import { aboutTimeline } from '@/data/about-timeline';
import { aboutValues } from '@/data/about-values';
import { aboutStats } from '@/data/about-stats';
import { aboutTrustPoints } from '@/data/about-trust';
import { teamMembers } from '@/data/team';
import { partners } from '@/data/partners';
import { aboutFaqs } from '@/data/about-faq';

export const metadata: Metadata = buildMetadata({
  title: 'درباره ما',
  description:
    'تالارگاه چطور شکل گرفت، مأموریت و ارزش‌های ما، و تیمی که پشت این پلتفرم ایستاده‌اند.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Link
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-100 focus:bg-emerald-800 focus:text-sand-50 focus:px-4 focus:py-2 focus:rounded-full"
      >
        رفتن به محتوای اصلی
      </Link>

      <main id="main">
        <AboutHero />
        <AboutTimeline steps={aboutTimeline} />
        <Divider />
        <AboutMission />
        <AboutValues values={aboutValues} />
        <AboutStats stats={aboutStats} />
        <AboutTrust points={aboutTrustPoints} />
        <AboutTeam members={teamMembers} />
        <AboutPartners partners={partners} />
        <AboutFAQ faqs={aboutFaqs} />
        <AboutFinalCTA />
      </main>
      <Footer />
    </>
  );
}
