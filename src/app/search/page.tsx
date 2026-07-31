import { Suspense } from 'react';
import SearchPageContent from '@/components/templates/search/SearchPageContent';

export default function SearchPage() {
  return (
    <main id="main">
      <Suspense fallback={null}>
        <SearchPageContent />
      </Suspense>
    </main>
  );
}
