import { Heart } from 'lucide-react';
import EmptyState from './EmptyState';

export default function EmptyFavoritesState() {
  return (
    <EmptyState
      icon={Heart}
      title="هنوز تالاری ذخیره نکرده‌اید"
      description="هنگام مرور تالارها، روی نماد قلب بزنید تا گزینه‌های موردعلاقه‌تان اینجا جمع شوند و بعداً راحت‌تر مقایسه‌شان کنید."
      actions={[{ label: 'مشاهده تالارها', href: '/category/all' }]}
    />
  );
}
