'use client';

/**
 * فقط وقتی رندر می‌شود که خودِ Root Layout (app/layout.tsx) کرش کند — یعنی حتی
 * Navbar/Footer/FavoritesProvider هم ممکن است علت خطا باشند. به همین دلیل عمداً
 * به هیچ‌کدام از کامپوننت‌های دیگر پروژه وابسته نیست و خودش <html>/<body> می‌سازد
 * (طبق قرارداد Next.js برای global-error.tsx).
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ background: '#fdfbf7', color: '#1c1917' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            fontFamily: 'sans-serif',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <h1 style={{ fontSize: '1.375rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              مشکلی در بارگذاری سایت پیش آمد
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#78716c', marginBottom: '1.5rem' }}>
              لطفاً دوباره تلاش کنید. اگر مشکل ادامه داشت، صفحه را رفرش کنید.
            </p>
            <button
              onClick={reset}
              style={{
                background: '#1b3e32',
                color: '#fdfbf7',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.75rem 1.75rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              تلاش دوباره
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
