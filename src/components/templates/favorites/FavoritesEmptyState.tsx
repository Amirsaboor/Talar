import Link from 'next/link';
import { Heart, ArrowLeft } from 'lucide-react';

export default function FavoritesEmptyState() {
  return (
    <div className="text-center py-20 px-6">
      <Heart size={72} strokeWidth={1.1} className="mx-auto mb-6 fill-[#E2D2AC] stroke-[#B8863E]" />
      <h2 className="font-semibold text-lg mb-2">هنوز تالاری ذخیره نکرده‌اید</h2>
      <p className="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
        هنگام مرور تالارها، روی نماد قلب بزنید تا گزینه‌های موردعلاقه‌تان اینجا جمع شوند و بعداً
        راحت‌تر مقایسه‌شان کنید.
      </p>
      <Link
        href="/category/all"
        className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring"
      >
        مشاهده تالارها
        <ArrowLeft size={14} />
      </Link>
    </div>
  );
}
