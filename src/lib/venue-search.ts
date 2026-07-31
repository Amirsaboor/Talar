import { parsePersianNumber } from './persian-numbers';

export interface SearchableVenue {
  id: number | string;
  title: string;
  location: string;
  rating: string;
  price: string;
}

export type SearchSortOption = 'relevance' | 'rating' | 'price-asc' | 'price-desc';

export const searchSortOptions: { value: SearchSortOption; label: string }[] = [
  { value: 'relevance', label: 'پیشنهادی' },
  { value: 'rating', label: 'بالاترین امتیاز' },
  { value: 'price-asc', label: 'ارزان‌ترین' },
  { value: 'price-desc', label: 'گران‌ترین' },
];

/** استخراج نام شهر از رشته موقعیت مکانی، مثل «تهران، سعادت‌آباد» -> «تهران» */
export function cityOf(location: string): string {
  return location.split('،')[0].trim();
}

/** فهرست یکتای شهرها بر اساس داده واقعی تالارها (نه هاردکد) */
export function uniqueCities<T extends { location: string }>(venues: T[]): string[] {
  return Array.from(new Set(venues.map((v) => cityOf(v.location))));
}

export interface CityStat {
  name: string;
  count: number;
}

/** تعداد واقعی تالارهای هر شهر، مرتب‌شده از پرتعدادترین به کم‌تعدادترین */
export function citiesWithCounts<T extends { location: string }>(venues: T[]): CityStat[] {
  const counts = new Map<string, number>();
  for (const v of venues) {
    const city = cityOf(v.location);
    counts.set(city, (counts.get(city) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/** آیا تالار با متن جست‌وجو (در عنوان یا موقعیت) مطابقت دارد؟ */
export function matchesQuery(venue: SearchableVenue, query: string): boolean {
  const q = query.trim();
  if (!q) return true;
  return venue.title.includes(q) || venue.location.includes(q);
}

export function filterVenues<T extends SearchableVenue & { location: string }>(
  venues: T[],
  { query, city }: { query: string; city: string }
): T[] {
  return venues.filter((v) => {
    const matchesCity = city === 'all' || cityOf(v.location) === city;
    return matchesCity && matchesQuery(v, query);
  });
}

export function sortVenues<T extends SearchableVenue>(
  venues: T[],
  sort: SearchSortOption
): T[] {
  if (sort === 'relevance') return venues;
  const sorted = [...venues];
  sorted.sort((a, b) => {
    switch (sort) {
      case 'rating':
        return parsePersianNumber(b.rating) - parsePersianNumber(a.rating);
      case 'price-asc':
        return parsePersianNumber(a.price) - parsePersianNumber(b.price);
      case 'price-desc':
        return parsePersianNumber(b.price) - parsePersianNumber(a.price);
      default:
        return 0;
    }
  });
  return sorted;
}
