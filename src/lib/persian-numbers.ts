const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

/** تبدیل عدد یا رشته انگلیسی به ارقام فارسی، مثل ۱۲۳۴ */
export function toPersianDigits(value: number | string): string {
  return String(value).replace(/[0-9]/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}

/** تبدیل ارقام فارسی/عربی داخل یک رشته به ارقام انگلیسی معمولی */
export function toEnglishDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - '٠'.charCodeAt(0)));
}

/**
 * استخراج عدد قابل مقایسه از رشته‌های قیمتی/امتیازی فارسی، مثل «۱٬۱۰۰ میلیون تومان» یا «۴.۹»
 * جداکننده هزارگان (٬ , ) حذف می‌شود و فقط اولین عدد رشته برگردانده می‌شود.
 */
export function parsePersianNumber(value: string): number {
  const normalized = toEnglishDigits(value).replace(/[٬,]/g, '');
  const match = normalized.match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
}
