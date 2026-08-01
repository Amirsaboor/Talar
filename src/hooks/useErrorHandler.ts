'use client';

import { useCallback, useState } from 'react';

/**
 * Error Boundary فقط خطاهایی را می‌گیرد که در «فاز رندر» پرتاب شوند؛ خطای داخل
 * event handler یا کد async (مثل fetch.catch) را نمی‌گیرد. این هوک راهی می‌دهد که
 * چنین خطایی را دستی به نزدیک‌ترین SectionErrorBoundary «پرتاب» کنیم: خطا را با
 * یک تابع به‌روزرسان به setState می‌دهیم که خودش throw می‌کند؛ React این تابع را
 * در فاز رندر اجرا می‌کند، پس Boundary بالادستی آن را می‌گیرد.
 *
 * مثال:
 *   const handleError = useErrorHandler();
 *   someAsyncCall().catch(handleError);
 */
export function useErrorHandler(): (error: unknown) => void {
  const [, setState] = useState<unknown>();

  return useCallback((error: unknown) => {
    setState(() => {
      throw error instanceof Error ? error : new Error(String(error));
    });
  }, []);
}
