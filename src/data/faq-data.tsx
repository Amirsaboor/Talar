// data/faq-data.tsx
export type FaqCategory = 'booking' | 'pricing' | 'venue' | 'services' | 'payment' | 'support';

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: FaqCategory;
  /** روی صفحه اصلی و پیش‌نمایش صفحه تماس نمایش داده می‌شود */
  featured?: boolean;
}

export const faqCategories: { id: FaqCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'همه' },
  { id: 'booking', label: 'رزرو' },
  { id: 'pricing', label: 'قیمت‌گذاری' },
  { id: 'venue', label: 'اطلاعات تالار' },
  { id: 'services', label: 'خدمات' },
  { id: 'payment', label: 'پرداخت' },
  { id: 'support', label: 'پشتیبانی' },
];

export const FaqData: FAQItem[] = [
  {
    id: 1,
    question: 'چطور می‌توانم یک تالار را رزرو کنم؟',
    answer:
      'رزرو نهایی به‌صورت مستقیم و خارج از پلتفرم، با خود تالار انجام می‌شود. تالارگاه فقط اطلاعات و راه ارتباطی را در اختیارتان قرار می‌دهد.',
    category: 'booking',
    featured: true,
  },
  {
    id: 2,
    question: 'آیا امکان لغو یا تغییر رزرو وجود دارد؟',
    answer:
      'قوانین لغو و تغییر رزرو توسط هر تالار به‌صورت جداگانه تعیین می‌شود؛ حتماً پیش از عقد قرارداد از این موارد مطلع شوید.',
    category: 'booking',
  },
  {
    id: 3,
    question: 'قیمت‌های نمایش‌داده‌شده نهایی هستند؟',
    answer:
      'قیمت‌ها تقریبی و بر اساس اعلام تالار هستند. قیمت نهایی را باید هنگام تماس یا بازدید حضوری تأیید کنید.',
    category: 'pricing',
    featured: true,
  },
  {
    id: 4,
    question: 'آیا استفاده از تالارگاه رایگان است؟',
    answer: 'بله، جست‌وجو، مقایسه و مشاهده جزئیات تمام تالارها کاملاً رایگان و بدون نیاز به ثبت‌نام است.',
    category: 'pricing',
    featured: true,
  },
  {
    id: 5,
    question: 'اطلاعات ظرفیت و امکانات هر تالار چقدر دقیق است؟',
    answer:
      'اطلاعات هر تالار پیش از انتشار توسط تیم ما بررسی و تأیید می‌شود، اما همچنان توصیه می‌کنیم پیش از تصمیم نهایی از تالار بازدید کنید.',
    category: 'venue',
  },
  {
    id: 6,
    question: 'آیا می‌توانم چند تالار را با هم مقایسه کنم؟',
    answer: 'بله، از صفحه علاقه‌مندی‌ها می‌توانید تالارهای ذخیره‌شده را کنار هم مقایسه کنید.',
    category: 'venue',
    featured: true,
  },
  {
    id: 7,
    question: 'آیا تالارها تشریفات و پذیرایی هم ارائه می‌دهند؟',
    answer: 'بسیاری از تالارها آشپزخانه و تشریفات داخلی دارند؛ این اطلاعات در صفحه هر تالار مشخص شده است.',
    category: 'services',
  },
  {
    id: 8,
    question: 'چطور تالارم را در تالارگاه ثبت کنم؟',
    answer: 'از طریق فرم تماس با موضوع «ثبت تالار در پلتفرم» درخواست بدهید تا همکاران ما با شما هماهنگ کنند.',
    category: 'services',
  },
  {
    id: 9,
    question: 'بیعانه رزرو معمولاً چقدر است؟',
    answer: 'این مبلغ توسط هر تالار تعیین می‌شود؛ معمولاً بین ۱۵ تا ۳۰ درصد مبلغ کل است.',
    category: 'payment',
  },
  {
    id: 10,
    question: 'اگر مشکلی با تالار پیش بیاید، تالارگاه کمک می‌کند؟',
    answer: 'بله، تیم پشتیبانی ما آماده کمک برای پیگیری و میانجی‌گری در صورت بروز مشکل است.',
    category: 'support',
  },
];
