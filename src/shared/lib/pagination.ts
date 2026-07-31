export interface PaginatedResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

/**
 * برش یک آرایه به صفحه مشخص؛ منبع واحد منطق صفحه‌بندی در کل پروژه.
 * هر جای دیگر (useCategoryFilters، useVenueSearch، هر هوک/سرویس آینده) باید از همین
 * تابع استفاده کند، نه این‌که خودش دوباره Math.ceil/slice بنویسد.
 */
export function paginate<T>(items: T[], page: number, pageSize: number): PaginatedResult<T> {
  const totalCount = items.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    totalCount,
    totalPages,
  };
}

/**
 * فهرست شماره صفحات قابل‌نمایش در UI پجینیشن را برمی‌گرداند.
 * همیشه صفحه اول/آخر و بازه‌ای اطراف صفحه فعلی نشان داده می‌شود؛ فاصله‌های بزرگ با '…' جایگزین می‌شوند.
 */
export function paginationRange(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | 'ellipsis')[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push('ellipsis');
    result.push(p);
  });
  return result;
}
