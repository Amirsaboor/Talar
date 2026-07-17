import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Header from '@/components/modules/layout/Header';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazir',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'تالارگاه | کشف و انتخاب بهترین تالارها و باغ‌تالارهای ایران',
  description:
    'بهترین تالارهای پذیرایی، باغ‌تالارها و خدمات عروسی را در چند دقیقه پیدا کنید، مقایسه کنید و با مکان موردنظر خود تماس بگیرید.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="bg-sand-50 text-ink antialiased">
       <Header />
        {children}
      </body>
    </html>
  );
}
