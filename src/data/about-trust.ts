import type { AboutIconKey } from '@/components/templates/about/icon-map';

export interface AboutTrustPoint {
  icon: AboutIconKey;
  title: string;
  description: string;
}

export const aboutTrustPoints: AboutTrustPoint[] = [
  {
    icon: 'verified',
    title: 'تأیید حضوری تالارها',
    description: 'هر تالار پیش از انتشار در پلتفرم، توسط تیم ما بازدید و اطلاعاتش راستی‌آزمایی می‌شود.',
  },
  {
    icon: 'reviews',
    title: 'نظرات واقعی مهمانان',
    description: 'امتیازها و نظرات فقط از سوی کاربرانی ثبت می‌شود که واقعاً از تالار بازدید کرده‌اند.',
  },
  {
    icon: 'no-commission',
    title: 'بدون کمیسیون پنهان',
    description: 'هزینه‌ای که به تالار می‌پردازید، دقیقاً همان چیزی است که به تالارگاه اعلام شده.',
  },
];
