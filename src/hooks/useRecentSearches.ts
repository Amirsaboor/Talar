'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'talargah:recent-searches';
const MAX_ITEMS = 5;

function readFromStorage(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/** تاریخچه جست‌وجوهای اخیر کاربر، ذخیره‌شده در localStorage */
export function useRecentSearches() {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(readFromStorage());
  }, []);

  const addSearch = useCallback((term: string) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    setRecent((current) => {
      const next = [trimmed, ...current.filter((t) => t !== trimmed)].slice(0, MAX_ITEMS);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ذخیره‌سازی ناموفق؛ state حافظه‌ای همچنان کار می‌کند
      }
      return next;
    });
  }, []);

  return { recent, addSearch };
}
