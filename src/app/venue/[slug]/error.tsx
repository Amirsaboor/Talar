'use client';

import { useEffect } from 'react';
import Footer from '@/components/modules/layout/Footer';
import GenericErrorState from '@/components/modules/empty-states/GenericErrorState';

export default function VenueError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <main id="main" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <GenericErrorState
          onRetry={reset}
          title="نمایش این تالار با خطا مواجه شد"
          description="در دریافت اطلاعات این تالار مشکلی پیش آمد. دوباره تلاش کنید یا به فهرست تالارها برگردید."
        />
      </main>
      <Footer />
    </>
  );
}
