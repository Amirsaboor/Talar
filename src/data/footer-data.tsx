// constants/footer-data.tsx
import { Send } from 'lucide-react'; 
import { FaInstagram } from 'react-icons/fa';
export const FooterData = {
  brand: {
    name: 'تالارگاه',
    description: 'مرجع کشف و انتخاب تالار عروسی در مشهد، طرقبه و شاندیز.',
    logo: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#B8863E" strokeWidth="1.4" />
        <circle cx="15" cy="15" r="5" fill="#1B3E32" />
      </svg>
    ),
  },
  sections: [
    {
      title: 'دسته‌بندی‌ها',
      links: [
        { label: 'تالار پذیرایی', href: '/category/hall' },
        { label: 'باغ تالار', href: '/category/garden-hall' },
        { label: 'تشریفات', href: '/category/catering' },
        { label: 'آتلیه عکاسی', href: '/category/photography' },
      ],
    },
    {
      title: 'شهرها',
      links: [
        { label: 'مشهد', href: '/category/city/mashhad' },
        { label: 'طرقبه', href: '/category/city/torghabeh' },
        { label: 'شاندیز', href: '/category/city/shandiz' },
      ],
    },
    {
      title: 'تماس با ما',
      info: ['۰۲۱-۹۱۰۰۰۰۰۰', 'info@talargah.ir', 'مشهد، بلوار وکیل‌آباد'],
    },
  ],
  socials: [
    {
      label: 'اینستاگرام',
      href: 'https://instagram.com/talargah',
      icon: <FaInstagram size={18} />, // اینجا به صورت JSX ذخیره کن
    },
    {
      label: 'تلگرام',
      href: 'https://t.me/talargah',
      icon: <Send size={18} />, // اینجا به صورت JSX ذخیره کن
    },
  ],
  copyright: '© ۱۴۰۴ تالارگاه. تمامی حقوق محفوظ است.',
  legalLinks: [
    { label: 'حریم خصوصی', href: '/privacy' },
    { label: 'قوانین استفاده', href: '/terms' },
  ],
};
