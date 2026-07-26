interface Props {
  onReset: () => void;
}

export default function EmptyState({ onReset }: Props) {
  return (
    <div className="text-center py-16 px-4">
      <h3 className="font-semibold text-lg mb-2">تالاری با این فیلترها پیدا نشد</h3>
      <p className="text-sm text-ink-faint max-w-md mx-auto">
        به نظر می‌رسد فیلترهای انتخابی خیلی محدودند. کمی فیلترها را باز کنید تا نتایج بیشتری ببینید.
      </p>
      <button onClick={onReset} className="mt-4 text-sm font-medium text-emerald-800 hover:underline focus-ring">
        پاک‌کردن فیلترها
      </button>
    </div>
  );
}
