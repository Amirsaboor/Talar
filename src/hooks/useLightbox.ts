'use client';

import { useCallback, useState } from 'react';

/** مدیریت state بازبودن/بسته‌بودن و ایندکس فعلی یک گالری تمام‌صفحه */
export function useLightbox(itemCount: number) {
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % itemCount)),
    [itemCount]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + itemCount) % itemCount)),
    [itemCount]
  );

  return { index, isOpen: index !== null, open, close, next, prev };
}
