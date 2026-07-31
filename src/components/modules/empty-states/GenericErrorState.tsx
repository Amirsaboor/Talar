import { CircleAlert, RotateCw, Home, MessageCircle } from 'lucide-react';
import EmptyState from './EmptyState';

export default function GenericErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <EmptyState
      icon={CircleAlert}
      title="مشکلی پیش آمد"
      description="دریافت اطلاعات با خطا مواجه شد. لطفاً دوباره تلاش کنید؛ اگر مشکل ادامه داشت، با پشتیبانی در تماس باشید."
      actions={[
        { label: 'تلاش دوباره', onClick: onRetry, icon: RotateCw },
        { label: 'بازگشت به خانه', href: '/', variant: 'secondary', icon: Home },
        { label: 'تماس با پشتیبانی', href: '/contact', variant: 'secondary', icon: MessageCircle },
      ]}
    />
  );
}
