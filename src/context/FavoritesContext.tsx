'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

const STORAGE_KEY = 'talargah:favorites';

interface FavoriteEntry {
  slug: string;
  addedAt: number;
}

interface FavoritesContextValue {
  favorites: FavoriteEntry[];
  favoriteSlugs: Set<string>;
  isFavorite: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
  count: number;
  isHydrated: boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function readFromStorage(): FavoriteEntry[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FavoriteEntry[]) : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // خواندن مقدار اولیه از localStorage فقط سمت کلاینت (جلوگیری از خطای hydration در SSR)
  useEffect(() => {
    setFavorites(readFromStorage());
    setIsHydrated(true);
  }, []);

  // هماهنگ‌سازی بین چند تب باز مرورگر
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setFavorites(readFromStorage());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const persist = useCallback((next: FavoriteEntry[]) => {
    setFavorites(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ذخیره‌سازی ناموفق (مثلاً حالت خصوصی مرورگر)؛ state داخل حافظه همچنان کار می‌کند
    }
  }, []);

  const toggleFavorite = useCallback(
    (slug: string) => {
      setFavorites((current) => {
        const exists = current.some((f) => f.slug === slug);
        const next = exists
          ? current.filter((f) => f.slug !== slug)
          : [...current, { slug, addedAt: Date.now() }];
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const favoriteSlugs = useMemo(() => new Set(favorites.map((f) => f.slug)), [favorites]);

  const isFavorite = useCallback((slug: string) => favoriteSlugs.has(slug), [favoriteSlugs]);

  const value: FavoritesContextValue = {
    favorites,
    favoriteSlugs,
    isFavorite,
    toggleFavorite,
    count: favorites.length,
    isHydrated,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites باید داخل FavoritesProvider استفاده شود');
  return ctx;
}
