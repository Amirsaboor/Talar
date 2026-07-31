import type { AboutIconKey } from '@/components/templates/about/icon-map';

export interface AboutValue {
  icon: AboutIconKey;
  title: string;
  description: string;
}

export const aboutValues: AboutValue[] = [
  {
    icon: 'honesty',
    title: 'صداقت',
    description: 'اطلاعاتی که نمایش می‌دهیم، همان چیزی است که در واقعیت خواهید دید.',
  },
  {
    icon: 'neutrality',
    title: 'بی‌طرفی',
    description: 'هیچ تالاری به‌خاطر پرداخت بیشتر، جایگاه بهتری نمی‌گیرد.',
  },
  {
    icon: 'time',
    title: 'احترام به وقت شما',
    description: 'طراحی هر بخش پلتفرم با هدف کوتاه‌ترین مسیر تا تصمیم‌گیری انجام شده.',
  },
  {
    icon: 'care',
    title: 'همراهی واقعی',
    description: 'تیم پشتیبانی ما، خودش هم برای عروسی خانواده و دوستانش از همین پلتفرم استفاده می‌کند.',
  },
];
