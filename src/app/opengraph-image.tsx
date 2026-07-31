import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * OG Image پیش‌فرض برای هر صفحه‌ای که خودش opengraph-image اختصاصی نساخته.
 * مثل icon.tsx، عمداً بدون متن فارسی (محدودیت فونت در محیط بدون اینترنت).
 * وقتی فایل فونت Vazirmatn در دسترس باشد، می‌شود نام سایت و شعار را هم به این تصویر
 * اضافه کرد (از طریق آپشن `fonts` در ImageResponse).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1b3e32',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'rgba(253, 251, 247, 0.06)',
          }}
        >
          <div
            style={{
              width: 100,
              height: 116,
              background: '#b8863e',
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              marginBottom: 26,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
