import { parsePersianNumber } from './persian-numbers';

export interface CategoryVenue {
  id: number | string;
  title: string;
  location: string;
  rating: string;
  ratingCount: string;
  capacity: string;
  verified: boolean;
  tags: string[];
  price: string;
  href: string;
  image: string;
}

/** مناطق قابل انتخاب برای فیلتر (تطبیق به‌صورت زیررشته با location هر تالار) */
export const AREA_OPTIONS = ['وکیل‌آباد', 'احمدآباد', 'سجاد', 'کوه‌سنگی', 'عبدالمطلب', 'هاشمی‌نژاد', 'طرقبه', 'شاندیز'];

export interface CapacityOption {
  label: string;
  min: number;
  max: number;
}

export const CAPACITY_OPTIONS: CapacityOption[] = [
  { label: 'تا ۱۰۰ نفر', min: 0, max: 100 },
  { label: '۱۰۰ تا ۲۵۰ نفر', min: 100, max: 250 },
  { label: '۲۵۰ تا ۵۰۰ نفر', min: 250, max: 500 },
  { label: 'بیش از ۵۰۰ نفر', min: 500, max: Infinity },
];

export const SPACE_OPTIONS = ['فضای باز', 'فضای بسته'];

export interface BudgetTier {
  label: string;
  min: number;
  max: number;
}

/** بازه‌های قیمتی بر اساس پراکندگی واقعی قیمت‌های داده نمونه (میلیون تومان) */
export const BUDGET_TIERS: BudgetTier[] = [
  { label: 'اقتصادی', min: 0, max: 300 },
  { label: 'متوسط', min: 300, max: 700 },
  { label: 'لوکس', min: 700, max: Infinity },
];

export const AMENITY_OPTIONS = [
  'پارکینگ',
  'تشریفات و پذیرایی',
  'اتاق VIP',
  'سن اجرا',
  'سیستم صوتی و موسیقی',
  'سرمایش و گرمایش',
  'دسترسی معلولین',
];

export const RATING_OPTIONS = ['۴.۵+', '۴.۰+'];

/** نوع تالار برای شیت فیلتر موبایل؛ چون داده نمونه فیلد نوع ندارد، از عنوان استنتاج می‌شود */
export const VENUE_TYPE_OPTIONS = ['تالار پذیرایی', 'باغ تالار', 'هتل'];

export function inferVenueType(title: string): string {
  if (title.includes('باغ')) return 'باغ تالار';
  if (title.includes('هتل')) return 'هتل';
  return 'تالار پذیرایی';
}

export type ArrayFilterKey = 'areas' | 'spaceTypes' | 'amenities' | 'venueTypes';

export interface CategoryFiltersState {
  areas: string[];
  capacityMin: number;
  capacityMax: number;
  budgetMin: number | null;
  budgetMax: number | null;
  spaceTypes: string[];
  amenities: string[];
  minRating: number | null;
  venueTypes: string[];
}

/** هیچ فیلتری به‌صورت پیش‌فرض فعال نیست؛ همه تالارها نمایش داده می‌شوند تا کاربر خودش انتخاب کند */
export const DEFAULT_FILTERS: CategoryFiltersState = {
  areas: [],
  capacityMin: 0,
  capacityMax: Infinity,
  budgetMin: null,
  budgetMax: null,
  spaceTypes: [],
  amenities: [],
  minRating: null,
  venueTypes: [],
};

/** آیا برچسب امکانات با یکی از تگ‌های تالار همخوانی دارد (تطبیق زیررشته‌ای، با پشتیبانی از عبارات «X و Y») */
function amenityMatchesTag(amenity: string, tag: string): boolean {
  if (tag.includes(amenity) || amenity.includes(tag)) return true;
  return amenity.split(/\s+و\s+/).some((part) => {
    const p = part.trim();
    return p.length > 1 && (tag.includes(p) || p.includes(tag));
  });
}

/** برچسب قابل‌نمایش برای بازه ظرفیت فعلی؛ اگر با یکی از گزینه‌های آماده مطابقت داشت همان برچسب، وگرنه بازه دستی */
export function capacityLabel(min: number, max: number): string {
  const preset = CAPACITY_OPTIONS.find((o) => o.min === min && o.max === max);
  if (preset) return preset.label;
  if (max === Infinity) return `بیش از ${min} نفر`;
  if (min === 0) return `تا ${max} نفر`;
  return `${min} تا ${max} نفر`;
}

/**
 * فهرست شماره صفحات قابل‌نمایش در پجینیشن.
 * پیاده‌سازی واقعی در PaginationHelper مشترک (`@/shared/lib/pagination`) است؛
 * اینجا فقط برای سازگاری با importهای فعلی (`@/lib/category-filters`) دوباره صادر می‌شود
 * تا فقط یک نسخه از این منطق در کل پروژه وجود داشته باشد.
 */
export { paginationRange } from '@/shared/lib/pagination';

export function activeFilterCount(filters: CategoryFiltersState): number {
  return (
    filters.areas.length +
    (filters.capacityMin > 0 || filters.capacityMax < Infinity ? 1 : 0) +
    (filters.budgetMin != null || filters.budgetMax != null ? 1 : 0) +
    filters.spaceTypes.length +
    filters.amenities.length +
    (filters.minRating != null ? 1 : 0) +
    filters.venueTypes.length
  );
}

export function filterCategoryVenues<T extends CategoryVenue>(
  venues: T[],
  filters: CategoryFiltersState
): T[] {
  return venues.filter((v) => {
    if (filters.areas.length > 0 && !filters.areas.some((a) => v.location.includes(a))) {
      return false;
    }

    const capacity = parsePersianNumber(v.capacity);
    if (capacity < filters.capacityMin || capacity > filters.capacityMax) return false;

    const price = parsePersianNumber(v.price);
    if (filters.budgetMin != null && price < filters.budgetMin) return false;
    if (filters.budgetMax != null && price > filters.budgetMax) return false;

    if (
      filters.spaceTypes.length > 0 &&
      !filters.spaceTypes.some((s) => v.tags.some((t) => t.includes(s)))
    ) {
      return false;
    }

    if (
      filters.amenities.length > 0 &&
      !filters.amenities.every((am) => v.tags.some((tag) => amenityMatchesTag(am, tag)))
    ) {
      return false;
    }

    if (filters.minRating != null && parsePersianNumber(v.rating) < filters.minRating) {
      return false;
    }

    if (filters.venueTypes.length > 0 && !filters.venueTypes.includes(inferVenueType(v.title))) {
      return false;
    }

    return true;
  });
}
