'use client';

import { useRef, useState } from 'react';
import { Search, Clock, TrendingUp } from 'lucide-react';
import { popularSearches } from '@/data/popular-searches';
import type { categoryVenues } from '@/data/category-venues';

interface Props {
  query: string;
  onQueryChange: (value: string) => void;
  onCommit: (term: string) => void;
  suggestions: (typeof categoryVenues)[number][];
  recentSearches: string[];
}

export default function SearchBar({
  query,
  onQueryChange,
  onCommit,
  suggestions,
  recentSearches,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const showRecentAndPopular = query.trim().length === 0;

  return (
    <div className="relative" ref={containerRef}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCommit(query);
          setIsOpen(false);
        }}
        className="flex items-center gap-2 bg-sand-50 rounded-2xl p-2 shadow-lift"
      >
        <Search size={18} className="shrink-0 mr-2 text-ink-faint" strokeWidth={2} />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          placeholder="نام تالار، شهر یا منطقه را جست‌وجو کنید…"
          className="flex-1 bg-transparent text-sm sm:text-base focus:outline-none py-2.5"
        />
        <button
          type="submit"
          className="shrink-0 flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-5 h-11 rounded-xl transition-colors focus-ring"
        >
          جست‌وجو
        </button>
      </form>

      {isOpen && (showRecentAndPopular || suggestions.length > 0) && (
        <div className="absolute top-full inset-x-0 mt-2 bg-sand-50 rounded-2xl shadow-lift p-5 z-30 text-right">
          {showRecentAndPopular ? (
            <>
              {recentSearches.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-medium text-ink-faint mb-2.5">جست‌وجوهای اخیر شما</p>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onMouseDown={() => onCommit(term)}
                        className="flex items-center gap-1.5 text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring"
                      >
                        <Clock size={12} strokeWidth={2} />
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <p className="text-xs font-medium text-ink-faint mb-2.5 flex items-center gap-1.5">
                  <TrendingUp size={12} strokeWidth={2} />
                  پرطرفدارترین جست‌وجوها
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onMouseDown={() => onCommit(term)}
                      className="text-xs bg-sand-100 hover:bg-sand-200 text-ink-soft px-3 py-2 rounded-full transition-colors focus-ring"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <ul className="space-y-1">
              {suggestions.map((venue) => (
                <li key={venue.id}>
                  <button
                    type="button"
                    onMouseDown={() => onCommit(venue.title)}
                    className="w-full flex items-center justify-between text-sm text-ink-soft hover:text-ink px-2 py-2 rounded-lg hover:bg-sand-100 transition-colors focus-ring"
                  >
                    {venue.title}
                    <span className="text-xs text-ink-faint">{venue.location}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
