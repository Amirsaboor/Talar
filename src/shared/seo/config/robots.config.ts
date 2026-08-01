/**
 * تنظیمات مرکزی robots.ts (فاز ۵).
 *
 * برای بستن کل سایت به روی ربات‌ها در staging/development، متغیر محیطی زیر را ست کنید:
 *   NEXT_PUBLIC_APP_ENV=staging   (یا development)
 *
 * وقتی این متغیر اصلاً ست نشده باشد، production در نظر گرفته می‌شود (سایت باز است).
 * این پیش‌فرض عمدی است: یک env var فراموش‌شده نباید بی‌سروصدا کل سایت را از گوگل
 * مخفی کند؛ باید صریحاً غیرپروداکشن بودن اعلام شود، نه برعکس.
 */
export const robotsConfig = {
  isProduction:
    process.env.NEXT_PUBLIC_APP_ENV !== 'staging' &&
    process.env.NEXT_PUBLIC_APP_ENV !== 'development',

  /**
   * مسیرهایی که هرگز نباید ایندکس شوند.
   * - /api, /admin, /dashboard: فعلاً در پروژه وجود ندارند، برای آینده اضافه شده‌اند
   * - /search: نتایج کاملاً به Query String وابسته است (هم‌راستا با فاز ۳.۴ که noindex کرد)
   * - /favorites: صفحه کاملاً شخصی/سمت-کاربر (localStorage)، برای هیچ بازدیدکننده‌ای
   *   محتوای یکسان و قابل‌ایندکس ندارد
   * - /empty-states: صفحه پیش‌نمایش/توسعه داخلی، هرگز نباید عمومی دیده شود
   * - الگوهای ?q= و ?page=: برای هر صفحه‌ای که در آینده این پارامترها را بگیرد
   *   (مثلاً فاز ۹.۱ که Pagination دسته‌بندی را URL-based می‌کند)
   */
  disallow: ['/api', '/admin', '/dashboard', '/search', '/favorites', '/empty-states', '/*?q=', '/*?page='],
} as const;
