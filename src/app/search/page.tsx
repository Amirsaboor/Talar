import { Suspense } from 'react';
import type { Metadata } from 'next';
import SearchPageContent from '@/components/templates/search/SearchPageContent';
import { buildMetadata } from '@/shared/seo/metadata';
import { SectionErrorBoundary } from '@/components/modules/error-boundary/SectionErrorBoundary';

// نتایج این صفحه کاملاً به Query String (?q=, ?city=, ?page=) وابسته‌اند، پس همیشه noindex
export const metadata: Metadata = buildMetadata({
  title: 'جست‌وجوی تالار',
  description: 'در میان تمام تالارها و باغ‌تالارهای ثبت‌شده روی تالارگاه جست‌وجو کنید.',
  path: '/search',
  noIndex: true,
});

export default function SearchPage() {
  return (
    <main id="main">
      <SectionErrorBoundary message="نمایش نتایج جست‌وجو با خطا مواجه شد.">
        <Suspense fallback={null}>
          <SearchPageContent />
        </Suspense>
      </SectionErrorBoundary>
    </main>
  );
}
