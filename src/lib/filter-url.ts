import { DEFAULT_FILTERS, type CategoryFiltersState } from './category-filters';
import { searchSortOptions, type SearchSortOption } from './venue-search';

/**
 * تبدیل دوطرفه CategoryFiltersState <-> Query String.
 * تنها جایی که فرمت هر پارامتر URL تعریف می‌شود؛ useCategoryFilters فقط این توابع را صدا می‌زند.
 *
 * فرمت‌ها:
 *   city=مشهد                 (فقط اگر 'all' نباشد)
 *   areas=سعادت‌آباد,ولنجک      (کاما جدا؛ هیچ برچسبی خودش کاما ندارد)
 *   capacity=100-250  یا  500+ (بازه یا "حداقل به‌بالا")
 *   budget=300-700    یا  700+
 *   space=فضای باز,فضای بسته
 *   amenities=پارکینگ,اتاق VIP
 *   rating=4.5
 *   type=تالار پذیرایی,باغ تالار
 *   sort=cheapest              (فقط اگر relevance نباشد)
 *   page=2                     (فقط اگر >۱ باشد)
 */
export function filtersToSearchParams(
  filters: CategoryFiltersState,
  sort: SearchSortOption,
  page: number
): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.city !== 'all') params.set('city', filters.city);
  if (filters.areas.length > 0) params.set('areas', filters.areas.join(','));

  if (filters.capacityMin > 0 || filters.capacityMax < Infinity) {
    params.set(
      'capacity',
      filters.capacityMax === Infinity
        ? `${filters.capacityMin}+`
        : `${filters.capacityMin}-${filters.capacityMax}`
    );
  }

  if (filters.budgetMin != null || filters.budgetMax != null) {
    params.set(
      'budget',
      filters.budgetMax == null ? `${filters.budgetMin ?? 0}+` : `${filters.budgetMin ?? 0}-${filters.budgetMax}`
    );
  }

  if (filters.spaceTypes.length > 0) params.set('space', filters.spaceTypes.join(','));
  if (filters.amenities.length > 0) params.set('amenities', filters.amenities.join(','));
  if (filters.minRating != null) params.set('rating', String(filters.minRating));
  if (filters.venueTypes.length > 0) params.set('type', filters.venueTypes.join(','));

  if (sort !== 'relevance') params.set('sort', sort);
  if (page > 1) params.set('page', String(page));

  return params;
}

export interface ParsedFilterState {
  filters: CategoryFiltersState;
  sort: SearchSortOption;
  page: number;
}

/** اگر یک پارامتر معتبر نبود (مثلاً someone دستی URL را دستکاری کرد)، همان مقدار پیش‌فرض می‌ماند */
export function searchParamsToFilters(searchParams: URLSearchParams): ParsedFilterState {
  const filters: CategoryFiltersState = { ...DEFAULT_FILTERS };

  const city = searchParams.get('city');
  if (city) filters.city = city;

  const areas = searchParams.get('areas');
  if (areas) filters.areas = areas.split(',').filter(Boolean);

  const capacity = searchParams.get('capacity');
  if (capacity) {
    if (capacity.endsWith('+')) {
      const min = Number(capacity.slice(0, -1));
      if (!Number.isNaN(min)) {
        filters.capacityMin = min;
        filters.capacityMax = Infinity;
      }
    } else {
      const [minStr, maxStr] = capacity.split('-');
      const min = Number(minStr);
      const max = Number(maxStr);
      if (!Number.isNaN(min) && !Number.isNaN(max)) {
        filters.capacityMin = min;
        filters.capacityMax = max;
      }
    }
  }

  const budget = searchParams.get('budget');
  if (budget) {
    if (budget.endsWith('+')) {
      const min = Number(budget.slice(0, -1));
      if (!Number.isNaN(min)) {
        filters.budgetMin = min;
        filters.budgetMax = null;
      }
    } else {
      const [minStr, maxStr] = budget.split('-');
      const min = minStr ? Number(minStr) : NaN;
      const max = maxStr ? Number(maxStr) : NaN;
      filters.budgetMin = Number.isNaN(min) ? null : min;
      filters.budgetMax = Number.isNaN(max) ? null : max;
    }
  }

  const space = searchParams.get('space');
  if (space) filters.spaceTypes = space.split(',').filter(Boolean);

  const amenities = searchParams.get('amenities');
  if (amenities) filters.amenities = amenities.split(',').filter(Boolean);

  const rating = searchParams.get('rating');
  if (rating) {
    const value = Number(rating);
    if (!Number.isNaN(value)) filters.minRating = value;
  }

  const type = searchParams.get('type');
  if (type) filters.venueTypes = type.split(',').filter(Boolean);

  const sortParam = searchParams.get('sort');
  const sort: SearchSortOption =
    sortParam && searchSortOptions.some((o) => o.value === sortParam)
      ? (sortParam as SearchSortOption)
      : 'relevance';

  const page = Number(searchParams.get('page')) || 1;

  return { filters, sort, page };
}
