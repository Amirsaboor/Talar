import { Phone, Mail, MessageCircle, Send, Camera, Clock, HeartHandshake, Gift, type LucideIcon } from 'lucide-react';

export interface ContactChannel {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export const contactChannels: ContactChannel[] = [
  { id: 'phone', icon: Phone, label: 'تماس تلفنی', value: '۰۲۱-۹۱۰۰۰۰۰۰', href: 'tel:02191000000' },
  { id: 'email', icon: Mail, label: 'ایمیل', value: 'info@talargah.ir', href: 'mailto:info@talargah.ir' },
  { id: 'whatsapp', icon: MessageCircle, label: 'واتساپ', value: '۰۹۱۲۰۰۰۰۰۰۰', href: 'https://wa.me/989120000000' },
  { id: 'telegram', icon: Send, label: 'تلگرام', value: 'talargah_support@', href: 'https://t.me/talargah_support' },
  { id: 'instagram', icon: Camera, label: 'اینستاگرام', value: 'talargah.ir@', href: 'https://instagram.com/talargah.ir' },
];

export const supportHours = {
  icon: Clock,
  label: 'ساعات پاسخ‌گویی',
  value: 'شنبه تا پنجشنبه، ۹ تا ۱۹',
};

export const contactSubjects = [
  'درخواست مشاوره برای انتخاب تالار',
  'سوال درباره یک تالار خاص',
  'گزارش مشکل یا خطا',
  'ثبت تالار در پلتفرم',
  'سایر موارد',
];

export const officeInfo = {
  address: 'مشهد، بلوار وکیل‌آباد، نبش وکیل‌آباد ۲۱، برج نگین، طبقه ۸',
  mapImage:
    '/images/1.webp',
  parkingNote: 'پارکینگ عمومی برج نگین در دسترس است؛ ورود از خیابان فرعی سمت راست ساختمان.',
  directionsHref: 'https://maps.google.com',
};

export const supportPromises = [
  { icon: Clock, label: 'پاسخ سریع' },
  { icon: HeartHandshake, label: 'پشتیبانی حرفه‌ای' },
  { icon: Gift, label: 'مشاوره رایگان' },
];
