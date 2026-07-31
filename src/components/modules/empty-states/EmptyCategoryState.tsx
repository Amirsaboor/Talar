import { FolderOpen } from 'lucide-react';
import EmptyState from './EmptyState';

export default function EmptyCategoryState() {
  return (
    <EmptyState
      icon={FolderOpen}
      title="هنوز تالاری در این دسته‌بندی ثبت نشده"
      description="به‌زودی تالارهای بیشتری در این بخش اضافه می‌شوند. در همین حال می‌توانید سایر دسته‌بندی‌ها را مرور کنید."
      actions={[{ label: 'مشاهده دسته‌بندی‌ها', href: '/#categories' }]}
    />
  );
}
