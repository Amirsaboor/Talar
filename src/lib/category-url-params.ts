import { defaultFilters, type BudgetOption, type CategoryFilters, type SortOption, type SpaceOption } from './category-filters';

const BUDGET_VALUES: BudgetOption[] = ['any', 'economy', 'medium', 'luxury'];
const SPACE_VALUES: SpaceOption[] = ['any', 'open', 'closed'];
const SORT_VALUES: SortOption[] = ['recommended', 'newest', 'popular', 'rating', 'cheapest', 'expensive'];

function oneOf<T extends string>(value: string | null, allowed: T[], fallback: T): T {
  return (allowed as string[]).includes(value ?? '') ? (value as T) : fallback;
}

/** خواندن state فیلترها از query string فعلی (برای بازگشت‌پذیری URL) */
export function filtersFromSearchParams(params: URLSearchParams): CategoryFilters {
  return {
    query: params.get('q') ?? defaultFilters.query,
    city: params.get('city') ?? defaultFilters.city,
    capacityMin: Number(params.get('cap') ?? defaultFilters.capacityMin) || 0,
    budget: oneOf(params.get('budget'), BUDGET_VALUES, defaultFilters.budget),
    areas: params.get('areas')?.split(',').filter(Boolean) ?? defaultFilters.areas,
    space: oneOf(params.get('space'), SPACE_VALUES, defaultFilters.space),
    amenities: params.get('amenities')?.split(',').filter(Boolean) ?? defaultFilters.amenities,
    minRating: Number(params.get('rating') ?? defaultFilters.minRating) || 0,
    sortBy: oneOf(params.get('sort'), SORT_VALUES, defaultFilters.sortBy),
    page: Math.max(1, Number(params.get('page') ?? 1) || 1),
  };
}

/** نوشتن state فیلترها به‌صورت query string (فقط مقادیر غیر پیش‌فرض) */
export function filtersToSearchParams(filters: CategoryFilters): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.query) params.set('q', filters.query);
  if (filters.city) params.set('city', filters.city);
  if (filters.capacityMin) params.set('cap', String(filters.capacityMin));
  if (filters.budget !== 'any') params.set('budget', filters.budget);
  if (filters.areas.length) params.set('areas', filters.areas.join(','));
  if (filters.space !== 'any') params.set('space', filters.space);
  if (filters.amenities.length) params.set('amenities', filters.amenities.join(','));
  if (filters.minRating) params.set('rating', String(filters.minRating));
  if (filters.sortBy !== 'recommended') params.set('sort', filters.sortBy);
  if (filters.page > 1) params.set('page', String(filters.page));

  return params;
}
