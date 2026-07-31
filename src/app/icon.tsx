import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/**
 * آیکون به‌صورت داینامیک ساخته می‌شود (بدون فایل PNG آماده).
 * عمداً از متن فارسی استفاده نشده: next/og برای رندر گلیف‌های غیر لاتین به یک فایل فونت
 * نیاز دارد که در این محیط (بدون دسترسی به اینترنت) قابل بارگذاری نبود؛ به‌جایش یک
 * نشان هندسی ساده (طاق/دروازه، به رنگ برند) که بدون فونت هم درست رندر می‌شود.
 * اگر فایل فونت Vazirmatn (ttf/otf) در اختیار باشد، می‌شود این را با یک مونوگرام
 * فارسی واقعی جایگزین کرد.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          background: '#1b3e32',
        }}
      >
        <div
          style={{
            width: 30,
            height: 34,
            background: '#b8863e',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            marginBottom: 8,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
