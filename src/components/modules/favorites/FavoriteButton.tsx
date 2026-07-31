'use client';

import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';

interface Props {
  slug: string;
  title: string;
  className?: string;
}

/** دکمه قلب برای افزودن/حذف یک تالار از علاقه‌مندی‌ها؛ روی هر کارت تالار در سایت قابل استفاده است */
export default function FavoriteButton({ slug, title, className = '' }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(slug);

  return (
    <button
      type="button"
      onClick={(e) => {
        // جلوگیری از فعال‌شدن لینک اطراف کارت هنگام کلیک روی قلب
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(slug);
      }}
      aria-pressed={active}
      aria-label={active ? `حذف ${title} از علاقه‌مندی‌ها` : `افزودن ${title} به علاقه‌مندی‌ها`}
      className={`w-9 h-9 rounded-full bg-sand-50/90 flex items-center justify-center hover:scale-105 transition-transform focus-ring ${className}`}
    >
      <Heart
        size={17}
        className={active ? 'fill-[#7A2331] stroke-[#7A2331]' : 'stroke-[#7A2331]'}
      />
    </button>
  );
}
