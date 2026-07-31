'use client';

import { useEffect } from 'react';
import Footer from '@/components/modules/layout/Footer';
import GenericErrorState from '@/components/modules/empty-states/GenericErrorState';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // در پروژه واقعی اینجا خطا به سرویس مانیتورینگ (مثل Sentry) گزارش می‌شود
    console.error(error);
  }, [error]);

  return (
    <>
      <main id="main" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <GenericErrorState onRetry={reset} />
      </main>
      <Footer />
    </>
  );
}
