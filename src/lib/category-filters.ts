import type { CategoryVenue } from '@/data/category-venues';

export type BudgetOption = 'any' | 'economy' | 'medium' | 'luxury';
export type SpaceOption = 'any' | 'open' | 'closed';
export type SortOption = 'recommended' | 'newest' | 'popular' | 'rating' | 'cheapest' | 'expensive';

export interface CategoryFilters {
  query: string;
  city: string; // '' = همه شهرها
  capacityMin: number; // 0 = بدون محدودیت
  budget: BudgetOption;
  areas: string[];
  space: SpaceOption;
  amenities: string[];
  minRating: number; // 0 = بدون محدودیت
  sortBy: SortOption;
  page: number;
}

export const PAGE_SIZE = 6;

export const defaultFilters: CategoryFilters = {
  query: '',
  city: '',
  capacityMin: 0,
  budget: 'any',
  areas: [],
  space: 'any',
  amenities: [],
  minRating: 0,
  sortBy: 'recommended',
  page: 1,
};

export const capacityOptions: { label: string; min: number }[] = [
  { label: 'همه ظرفیت‌ها', min: 0 },
  { label: 'تا ۲۵۰ نفر', min: 0 },
  { label: '۲۵۰ تا ۵۰۰ نفر', min: 250 },
  { label: 'بیش از ۵۰۰ نفر', min: 500 },
];

export const budgetOptions: { label: string; value: BudgetOption }[] = [
  { label: 'همه', value: 'any' },
  { label: 'اقتصادی', value: 'economy' },
  { label: 'متوسط', value: 'medium' },
  { label: 'لوکس', value: 'luxury' },
];

export const budgetRanges: Record<BudgetOption, [number, number]> = {
  any: [0, Infinity],
  economy: [0, 300],
  medium: [300, 700],
  luxury: [700, Infinity],
};

export const sortLabels: Record<SortOption, string> = {
  recommended: 'پیشنهادی',
  newest: 'جدیدترین',
  popular: 'محبوب‌ترین',
  rating: 'بالاترین امتیاز',
  cheapest: 'ارزان‌ترین',
  expensive: 'گران‌ترین',
};

export const amenityOptions = [
  'پارکینگ اختصاصی',
  'سالن VIP',
  'فضای باز',
  'سیستم صوتی',
  'تشریفات کامل',
  'آشپزخانه سنتی',
];

export function cityOptions(venues: CategoryVenue[]): string[] {
  return Array.from(new Set(venues.map((v) => v.city)));
}

export function areaOptions(venues: CategoryVenue[]): string[] {
  return Array.from(new Set(venues.map((v) => v.area)));
}

/** فیلتر خالص روی یک لیست تالار — بدون هیچ وابستگی به React/URL */
export function filterVenues(
  venues: CategoryVenue[],
  filters: Pick<
    CategoryFilters,
    'query' | 'city' | 'capacityMin' | 'budget' | 'areas' | 'space' | 'amenities' | 'minRating'
  >
): CategoryVenue[] {
  const query = filters.query.trim();
  const [budgetMin, budgetMax] = budgetRanges[filters.budget];

  return venues.filter((v) => {
    if (query && !v.title.includes(query) && !v.location.includes(query)) return false;
    if (filters.city && v.city !== filters.city) return false;
    if (filters.capacityMin && v.capacityNum < filters.capacityMin) return false;
    if (v.priceNum < budgetMin || v.priceNum > budgetMax) return false;
    if (filters.areas.length && !filters.areas.includes(v.area)) return false;
    if (filters.space !== 'any' && v.space !== filters.space) return false;
    if (filters.minRating && v.ratingNum < filters.minRating) return false;
    if (filters.amenities.length && !filters.amenities.every((a) => v.tags.includes(a))) {
      return false;
    }
    return true;
  });
}

/** مرتب‌سازی خالص — تابع جدا از فیلتر برای تک‌مسئولیتی بودن */
export function sortVenues(venues: CategoryVenue[], sortBy: SortOption): CategoryVenue[] {
  const sorted = [...venues];
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    case 'popular':
      return sorted.sort((a, b) => b.ratingCountNum - a.ratingCountNum);
    case 'rating':
      return sorted.sort((a, b) => b.ratingNum - a.ratingNum);
    case 'cheapest':
      return sorted.sort((a, b) => a.priceNum - b.priceNum);
    case 'expensive':
      return sorted.sort((a, b) => b.priceNum - a.priceNum);
    default:
      return sorted; // پیشنهادی: همان ترتیب پیش‌فرض دیتاست
  }
}

export function paginate<T>(items: T[], page: number, pageSize = PAGE_SIZE): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function totalPages(count: number, pageSize = PAGE_SIZE): number {
  return Math.max(1, Math.ceil(count / pageSize));
}
