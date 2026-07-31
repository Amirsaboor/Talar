import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/modules/layout/Navbar';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { siteConfig } from '@/shared/config/site.config';
import JsonLd from '@/components/modules/json-ld/JsonLd';
import { buildOrganizationSchema, buildWebSiteSchema } from '@/shared/seo/schema/organization';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazir',
  display: 'swap',
});

const homeTitle = `${siteConfig.name} | کشف و انتخاب بهترین تالارها و باغ‌تالارهای مشهد، طرقبه و شاندیز`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    // صفحات دیگر فقط عنوان خودشان را برمی‌گردانند (مثلاً «درباره ما»)؛ این تمپلیت
    // پسوند «| تالارگاه» را خودکار اضافه می‌کند تا در هیچ page.tsx تکرار نشود
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: homeTitle,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: homeTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="bg-sand-50 text-ink antialiased">
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebSiteSchema()} />
        <FavoritesProvider>
          <Navbar />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
