import { CircleAlert, RotateCw, Home, MessageCircle } from 'lucide-react';
import EmptyState from './EmptyState';

interface Props {
  onRetry: () => void;
  title?: string;
  description?: string;
}

export default function GenericErrorState({
  onRetry,
  title = 'مشکلی پیش آمد',
  description = 'دریافت اطلاعات با خطا مواجه شد. لطفاً دوباره تلاش کنید؛ اگر مشکل ادامه داشت، با پشتیبانی در تماس باشید.',
}: Props) {
  return (
    <EmptyState
      icon={CircleAlert}
      title={title}
      description={description}
      actions={[
        { label: 'تلاش دوباره', onClick: onRetry, icon: RotateCw },
        { label: 'بازگشت به خانه', href: '/', variant: 'secondary', icon: Home },
        { label: 'تماس با پشتیبانی', href: '/contact', variant: 'secondary', icon: MessageCircle },
      ]}
    />
  );
}
