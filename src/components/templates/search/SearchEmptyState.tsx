import { SearchX } from 'lucide-react';

export default function SearchEmptyState({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="text-center py-20 px-6">
      <SearchX size={72} strokeWidth={1.1} className="mx-auto mb-6 text-sand-300" />
      <h2 className="font-semibold text-lg mb-2">نتیجه‌ای برای «{query}» پیدا نشد</h2>
      <p className="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
        عبارت دیگری امتحان کنید یا فیلتر شهر را پاک کنید تا نتایج بیشتری ببینید.
      </p>
      <button
        onClick={onClear}
        className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring"
      >
        پاک‌کردن جست‌وجو
      </button>
    </div>
  );
}
