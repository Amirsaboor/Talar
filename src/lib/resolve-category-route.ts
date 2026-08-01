import { notFound } from 'next/navigation';
import { cityNameFromSlug, isAllowedCitySlug } from '@/shared/config/site.config';

export const categoryLabels: Record<string, string> = {
  '1': 'تالار پذیرایی',
  '2': 'باغ‌تالار',
  '3': 'تشریفات',
  '4': 'آتلیه عکاسی',
  '5': 'مزون لباس',
  '6': 'آرایشگاه عروس',
  '7': 'گل‌آرایی',
  '8': 'گروه موسیقی',
  all: 'همه تالارها',
  luxury: 'مجموعه لوکس',
  economy: 'مجموعه اقتصادی',
};

export interface ResolvedCategoryRoute {
  kind: 'city' | 'category';
  /** برای city: نام واقعی شهر (مثل «مشهد»)؛ برای category: کلید دسته (1..8/all/luxury/economy) */
  key: string;
  title: string;
  breadcrumb: string;
  subtitle: string;
  eyebrow: string;
}

/**
 * منبع واحد تشخیص «شهر» در برابر «دسته‌بندی» از روی [...slug].
 * هم page.tsx و هم generateMetadata دقیقاً از همین تابع استفاده می‌کنند تا هیچ‌وقت
 * این دو جا نسبت به هم عقب نیفتند (مثلاً یکی notFound بدهد و دیگری ندهد).
 */
export function resolveCategoryRoute(slug: string[]): ResolvedCategoryRoute {
  // /category/city/mashhad -> صفحه شهر؛ فقط شهرهای مجاز (site.config) پذیرفته می‌شوند
  if (slug[0] === 'city' && slug[1]) {
    if (!isAllowedCitySlug(slug[1])) {
      notFound();
    }
    const city = cityNameFromSlug(slug[1]) as string;
    return {
      kind: 'city',
      key: city,
      title: `تالارها و باغ‌تالارهای ${city}`,
      breadcrumb: city,
      subtitle: `از تالارهای سنتی تا باغ‌تالارهای مدرن؛ گزینه‌های متنوعی برای مراسم شما در ${city}.`,
      eyebrow: `${city}، خراسان رضوی`,
    };
  }

  const key = slug[0] ?? 'all';
  const label = categoryLabels[key] ?? 'تالارها';
  return {
    kind: 'category',
    key,
    title: label,
    breadcrumb: label,
    subtitle: 'مکان‌ها و خدماتی که با فیلترهای زیر می‌توانید به دقیق‌ترین انتخاب برسید.',
    eyebrow: 'دسته‌بندی',
  };
}
