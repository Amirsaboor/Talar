import { notFound } from 'next/navigation';
import { cityNameFromSlug, isAllowedCitySlug } from '@/shared/config/site.config';
import { getVenueRepository } from '@/data-access/repositories/venue.repository';
import { parsePersianNumber } from './persian-numbers';
import { BUDGET_TIERS, type CategoryVenue } from './category-filters';

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

/**
 * لیست واقعیِ تالارهای متعلق به یک مسیر (شهر یا دسته‌بندی). این تابع همان چیزی‌ست که قبلاً
 * وجود نداشت: قبلاً هر مسیری (`/category/1`، `/category/city/mashhad`، `/category/luxury`)
 * دقیقاً همان آرایه کامل categoryVenues را نشان می‌داد، چون VenueRepository.findAll هم
 * پارامتر categoryId را (با این‌که در Interface تعریف شده بود) عملاً نادیده می‌گرفت.
 * آن باگ اینجا و در findAll دو جا با هم رفع شد.
 *
 * luxury/economy Entity واقعی در Repository ندارند (مثل ۱ تا ۸ که categoryId مشخص دارند)؛
 * تعریف‌شان همان بازه قیمتی BUDGET_TIERS است که در Hero و نوار سرچ Category هم استفاده می‌شود
 * — یک تعریف، همه‌جا یکسان.
 */
export function resolveCategoryVenues(route: ResolvedCategoryRoute): CategoryVenue[] {
  if (route.kind === 'city') {
    return getVenueRepository().findAll({ city: route.key });
  }

  if (route.key === 'all') {
    return getVenueRepository().findAll();
  }

  if (route.key === 'luxury' || route.key === 'economy') {
    const tier = BUDGET_TIERS.find((t) => t.label === (route.key === 'luxury' ? 'لوکس' : 'اقتصادی'))!;
    return getVenueRepository()
      .findAll()
      .filter((v) => {
        const price = parsePersianNumber(v.price);
        return price >= tier.min && price <= tier.max;
      });
  }

  return getVenueRepository().findAll({ categoryId: Number(route.key) });
}
