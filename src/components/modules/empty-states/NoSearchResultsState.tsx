import { SearchX, Check } from 'lucide-react';
import EmptyState from './EmptyState';

const tips = ['شهر دیگری را امتحان کنید', 'برخی فیلترها را حذف کنید', 'محدوده بودجه را افزایش دهید'];

export default function NoSearchResultsState({ onClearFilters }: { onClearFilters: () => void }) {
  return (
    <EmptyState
      icon={SearchX}
      title="تالاری با این فیلترها پیدا نشد"
      description="به نظر می‌رسد فیلترهای انتخابی محدودند. این گزینه‌ها را امتحان کنید:"
      actions={[{ label: 'پاک‌کردن فیلترها', onClick: onClearFilters }]}
      extra={
        <ul className="inline-flex flex-col gap-2 text-sm text-ink-soft mb-7 text-right">
          {tips.map((tip) => (
            <li key={tip} className="flex items-center gap-2">
              <Check size={14} strokeWidth={2.2} className="text-emerald-800 shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      }
    />
  );
}
