import {
  DEFAULT_FILTERS,
  type CategoryFiltersState,
} from './category-filters';

function numberParam(params: URLSearchParams, key: string, fallback: number): number {
  const value = params.get(key);
  if (value === null) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function listParam(params: URLSearchParams, key: string, fallback: string[]): string[] {
  const value = params.get(key);
  return value === null ? fallback : value.split(',').map((item) => item.trim()).filter(Boolean);
}

/** خواندن فیلترهای دسته‌بندی از query string */
export function filtersFromSearchParams(params: URLSearchParams): CategoryFiltersState {
  const budgetMin = params.has('budgetMin') ? numberParam(params, 'budgetMin', 0) : null;
  const budgetMax = params.has('budgetMax') ? numberParam(params, 'budgetMax', 0) : null;
  const minRating = params.has('rating')
    ? numberParam(params, 'rating', 0)
    : DEFAULT_FILTERS.minRating;

  return {
    city: params.get('city') ?? DEFAULT_FILTERS.city,
    areas: listParam(params, 'areas', DEFAULT_FILTERS.areas),
    capacityMin: numberParam(params, 'capMin', DEFAULT_FILTERS.capacityMin),
    capacityMax: numberParam(params, 'capMax', DEFAULT_FILTERS.capacityMax),
    budgetMin,
    budgetMax,
    spaceTypes: listParam(params, 'space', DEFAULT_FILTERS.spaceTypes),
    amenities: listParam(params, 'amenities', DEFAULT_FILTERS.amenities),
    minRating,
    venueTypes: listParam(params, 'types', DEFAULT_FILTERS.venueTypes),
  };
}

/** تبدیل فیلترهای فعال به query string برای لینک قابل‌بازیابی */
export function filtersToSearchParams(filters: CategoryFiltersState): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.city !== DEFAULT_FILTERS.city) params.set('city', filters.city);
  if (filters.areas.length) params.set('areas', filters.areas.join(','));
  if (filters.capacityMin !== DEFAULT_FILTERS.capacityMin) {
    params.set('capMin', String(filters.capacityMin));
  }
  if (filters.capacityMax !== DEFAULT_FILTERS.capacityMax) {
    params.set('capMax', String(filters.capacityMax));
  }
  if (filters.budgetMin !== null) params.set('budgetMin', String(filters.budgetMin));
  if (filters.budgetMax !== null) params.set('budgetMax', String(filters.budgetMax));
  if (filters.spaceTypes.length) params.set('space', filters.spaceTypes.join(','));
  if (filters.amenities.length) params.set('amenities', filters.amenities.join(','));
  if (filters.minRating !== null) params.set('rating', String(filters.minRating));
  if (filters.venueTypes.length) params.set('types', filters.venueTypes.join(','));

  return params;
}
