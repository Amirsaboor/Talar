'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
function toFa(n: number) {
  return String(n)
    .split('')
    .map((c) => (c >= '0' && c <= '9' ? faDigits[Number(c)] : c))
    .join('');
}

function getPageList(current: number, total: number): (number | 'gap')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set<number>([1, total, current, current - 1, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const result: (number | 'gap')[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) result.push('gap');
    result.push(p);
    prev = p;
  }
  return result;
}

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  const pages = getPageList(currentPage, totalPages);

  return (
    <nav aria-label="صفحه‌بندی نتایج" className="flex items-center justify-center gap-2 mt-12 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-faint hover:border-ink hover:text-ink transition-colors focus-ring disabled:opacity-40 disabled:pointer-events-none"
        aria-label="صفحه قبل"
      >
        <ChevronRight size={16} />
      </button>

      {pages.map((p, i) =>
        p === 'gap' ? (
          <span key={`gap-${i}`} className="px-1 text-ink-faint">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-current={p === currentPage ? 'page' : undefined}
            className={`w-11 h-11 rounded-full text-sm font-medium num transition-colors focus-ring ${
              p === currentPage ? 'bg-emerald-800 text-sand-50' : 'text-ink-soft hover:bg-sand-100'
            }`}
          >
            {toFa(p)}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-11 h-11 rounded-full border border-sand-300 flex items-center justify-center text-ink-soft hover:border-ink hover:text-ink transition-colors focus-ring disabled:opacity-40 disabled:pointer-events-none"
        aria-label="صفحه بعد"
      >
        <ChevronLeft size={16} />
      </button>
    </nav>
  );
}
