import { CircleHelp, Home, Search } from 'lucide-react';
import EmptyState from './EmptyState';

export default function NotFoundState() {
  return (
    <EmptyState
      icon={CircleHelp}
      eyebrow="۴۰۴"
      title="این صفحه پیدا نشد"
      description="ممکن است آدرس اشتباه باشد یا این صفحه جابه‌جا شده باشد. نگران نباشید، از اینجا می‌توانید مسیر خود را ادامه دهید."
      actions={[
        { label: 'بازگشت به خانه', href: '/', icon: Home },
        { label: 'جست‌وجوی تالارها', href: '/category/all', variant: 'secondary', icon: Search },
      ]}
    />
  );
}
