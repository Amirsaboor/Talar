import type { Metadata } from 'next';
import { siteConfig } from '@/shared/config/site.config';

/**
 * قرارداد مشترک همه Builderهای Metadata (venue/category/city/home/search/...).
 * هر Builder صفحه یک تابع با این امضاست: پارامترهای خودش را می‌گیرد و Metadata کامل برمی‌گرداند.
 * افزودن نوع صفحه جدید یعنی فقط یک تابع جدید با این نوع، بدون تغییر در buildMetadata یا بقیه صفحات.
 * (در این پروژه Builderها تابع‌های ساده‌اند، نه کلاس — هم‌راستا با سبک Repositoryهای فاز ۱
 * که آن‌ها هم factory function هستند، نه یک لایه DI سنگین.)
 */
export type PageMetadataBuilder<TParams = void> = (
  params: TParams
) => Metadata | Promise<Metadata>;

export interface BuildMetadataParams {
  /** فقط عنوان همین صفحه (بدون «| تالارگاه»)؛ پسوند را title.template در layout ریشه اضافه می‌کند */
  title: string;
  description?: string;
  /** مسیر نسبی صفحه برای canonical/OG url، مثل '/about' یا '/category/mashhad' */
  path?: string;
  /** مسیر نسبی تصویر OG؛ پیش‌فرض تصویر عمومی سایت (app/opengraph-image.tsx) */
  image?: string;
  /** صفحات پویا/بدون محتوای منحصربه‌فرد (مثل نتایج جستجو) باید noIndex شوند */
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * تنها تابعی که باید برای ساخت Metadata در هر page.tsx صدا زده شود.
 * همه چیزهایی که قبلاً باید در هر صفحه دستی تکرار می‌شد (OpenGraph، Twitter Card،
 * Canonical، Robots پیش‌فرض) اینجا یک‌بار تعریف شده. اگر صفحه‌ای Metadata خاص‌تر
 * لازم دارد (مثل Venue یا Category در فاز ۳)، دور همین تابع یک Builder اختصاصی
 * می‌سازد، نه این‌که از صفر شروع کند.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image = '/opengraph-image',
  noIndex = false,
  keywords,
}: BuildMetadataParams): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
