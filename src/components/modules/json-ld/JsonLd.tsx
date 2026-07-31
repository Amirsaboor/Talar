/**
 * تنها کامپوننتی که مجاز است `<script type="application/ld+json">` بسازد.
 * همه Builderهای Schema (organization, venue, breadcrumb, faq, collection-page, ...)
 * فقط یک شیء داده تولید می‌کنند و رندرش را به همین کامپوننت می‌سپارند.
 *
 * جایگزینی `<` با `\u003c` برای جلوگیری از شکستن تگ `</script>` در صورتی که یکی از
 * مقادیر متنی (مثلاً نام یک تالار) به‌طور تصادفی رشته `</script>` را در خودش داشته باشد؛
 * بدون این escape، dangerouslySetInnerHTML یک نقطه‌ی نظری برای XSS باز می‌کند.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
