export interface CategoryVenue {
  id: number;
  title: string;
  image: string;
  location: string;
  city: string;
  area: string;
  rating: string; // برای نمایش (اعداد فارسی)
  ratingNum: number; // برای مرتب‌سازی/فیلتر
  ratingCount: string;
  ratingCountNum: number;
  capacity: string;
  capacityNum: number;
  verified: boolean;
  space: 'closed' | 'open';
  tags: string[];
  price: string;
  priceNum: number; // میلیون تومان
  href: string;
}

const img1 =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop';
const img2 =
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop';
const img3 =
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop';

export const categoryVenues: CategoryVenue[] = [
  { id: 1, title: 'تالار ایوان طلایی', image: img1, city: 'تهران', area: 'سعادت‌آباد', location: 'تهران، سعادت‌آباد', rating: '۴.۹', ratingNum: 4.9, ratingCount: '۲۱۴', ratingCountNum: 214, capacity: '۶۰۰ نفر', capacityNum: 600, verified: true, space: 'closed', tags: ['پارکینگ اختصاصی', 'سالن VIP'], price: '۸۵۰', priceNum: 850, href: '/venue/ivan-talayi' },
  { id: 2, title: 'باغ‌تالار نارنجستان', image: img2, city: 'کرج', area: 'ملارد', location: 'کرج، ملارد', rating: '۴.۸', ratingNum: 4.8, ratingCount: '۱۵۸', ratingCountNum: 158, capacity: '۴۰۰ نفر', capacityNum: 400, verified: true, space: 'open', tags: ['فضای باز', 'آشپزخانه سنتی'], price: '۴۹۰', priceNum: 490, href: '/venue/narenjestan' },
  { id: 3, title: 'تالار افرا سفید با دکوراسیون سلطنتی و باغ اختصاصی', image: img3, city: 'اصفهان', area: 'چهارباغ', location: 'اصفهان، چهارباغ', rating: '۵.۰', ratingNum: 5.0, ratingCount: '۹۶', ratingCountNum: 96, capacity: '۸۵۰ نفر', capacityNum: 850, verified: false, space: 'closed', tags: ['دکوراسیون کلاسیک', 'اتاق عروس'], price: '۱٬۱۰۰', priceNum: 1100, href: '/venue/afra-sefid' },
  { id: 4, title: 'تالار نگین سبز', image: img1, city: 'کرج', area: 'گوهردشت', location: 'کرج، گوهردشت', rating: '۴.۶', ratingNum: 4.6, ratingCount: '۷۲', ratingCountNum: 72, capacity: '۲۰۰ نفر', capacityNum: 200, verified: false, space: 'closed', tags: ['مقرون‌به‌صرفه', 'پارکینگ'], price: '۲۲۰', priceNum: 220, href: '/venue/negin-sabz' },
  { id: 5, title: 'سالن باران', image: img2, city: 'تهران', area: 'شرق تهران', location: 'تهران، شرق', rating: '۴.۴', ratingNum: 4.4, ratingCount: '۴۴', ratingCountNum: 44, capacity: '۳۰۰ نفر', capacityNum: 300, verified: true, space: 'closed', tags: ['فضای بسته', 'سیستم صوتی'], price: '۱۹۰', priceNum: 190, href: '/venue/baran-hall' },
  { id: 6, title: 'باغ سرو', image: img3, city: 'شهریار', area: 'مرکزی', location: 'شهریار', rating: '۴.۷', ratingNum: 4.7, ratingCount: '۶۱', ratingCountNum: 61, capacity: '۲۵۰ نفر', capacityNum: 250, verified: false, space: 'open', tags: ['فضای باز', 'مقرون‌به‌صرفه'], price: '۲۶۰', priceNum: 260, href: '/venue/bagh-sarv' },
  { id: 7, title: 'تالار الماس شرق', image: img1, city: 'تهران', area: 'پاسداران', location: 'تهران، پاسداران', rating: '۴.۵', ratingNum: 4.5, ratingCount: '۱۳۰', ratingCountNum: 130, capacity: '۵۰۰ نفر', capacityNum: 500, verified: true, space: 'closed', tags: ['سالن VIP', 'تشریفات کامل'], price: '۷۲۰', priceNum: 720, href: '/venue/almas-shargh' },
  { id: 8, title: 'باغ تالار یاس بنفش', image: img2, city: 'تهران', area: 'ملارد', location: 'تهران، ملارد', rating: '۴.۳', ratingNum: 4.3, ratingCount: '۳۸', ratingCountNum: 38, capacity: '۳۵۰ نفر', capacityNum: 350, verified: false, space: 'open', tags: ['فضای باز', 'آلاچیق'], price: '۳۱۰', priceNum: 310, href: '/venue/yas-banafsh' },
  { id: 9, title: 'تالار شاهانه ونک', image: img3, city: 'تهران', area: 'ونک', location: 'تهران، ونک', rating: '۴.۹', ratingNum: 4.9, ratingCount: '۳۰۲', ratingCountNum: 302, capacity: '۷۵۰ نفر', capacityNum: 750, verified: true, space: 'closed', tags: ['دکوراسیون لوکس', 'سالن VIP', 'پارکینگ اختصاصی'], price: '۱٬۳۵۰', priceNum: 1350, href: '/venue/shahaneh-vanak' },
  { id: 10, title: 'سالن عروس مهتاب', image: img1, city: 'اصفهان', area: 'خیابان چهارباغ', location: 'اصفهان، چهارباغ', rating: '۴.۲', ratingNum: 4.2, ratingCount: '۲۹', ratingCountNum: 29, capacity: '۱۵۰ نفر', capacityNum: 150, verified: false, space: 'closed', tags: ['مقرون‌به‌صرفه'], price: '۱۶۰', priceNum: 160, href: '/venue/mahtab-hall' },
  { id: 11, title: 'باغ‌تالار گل‌سرخ', image: img2, city: 'کرج', area: 'ماهدشت', location: 'کرج، ماهدشت', rating: '۴.۶', ratingNum: 4.6, ratingCount: '۸۹', ratingCountNum: 89, capacity: '۴۵۰ نفر', capacityNum: 450, verified: true, space: 'open', tags: ['فضای باز', 'آشپزخانه سنتی', 'پارکینگ'], price: '۵۳۰', priceNum: 530, href: '/venue/gole-sorkh' },
  { id: 12, title: 'تالار پردیس شیراز', image: img3, city: 'شیراز', area: 'معالی‌آباد', location: 'شیراز، معالی‌آباد', rating: '۴.۸', ratingNum: 4.8, ratingCount: '۱۷۶', ratingCountNum: 176, capacity: '۶۰۰ نفر', capacityNum: 600, verified: true, space: 'closed', tags: ['سالن VIP', 'تشریفات کامل'], price: '۸۹۰', priceNum: 890, href: '/venue/pardis-shiraz' },
  { id: 13, title: 'باغ آفتاب', image: img1, city: 'شیراز', area: 'صدرا', location: 'شیراز، صدرا', rating: '۴.۱', ratingNum: 4.1, ratingCount: '۲۲', ratingCountNum: 22, capacity: '۲۰۰ نفر', capacityNum: 200, verified: false, space: 'open', tags: ['فضای باز', 'مقرون‌به‌صرفه'], price: '۱۸۰', priceNum: 180, href: '/venue/bagh-aftab' },
  { id: 14, title: 'تالار ققنوس', image: img2, city: 'تهران', area: 'سعادت‌آباد', location: 'تهران، سعادت‌آباد', rating: '۴.۷', ratingNum: 4.7, ratingCount: '۱۴۸', ratingCountNum: 148, capacity: '۵۵۰ نفر', capacityNum: 550, verified: true, space: 'closed', tags: ['پارکینگ اختصاصی', 'سیستم صوتی'], price: '۷۶۰', priceNum: 760, href: '/venue/qoqnoos' },
  { id: 15, title: 'سالن رویا', image: img3, city: 'رشت', area: 'مرکز شهر', location: 'رشت، مرکز شهر', rating: '۴.۴', ratingNum: 4.4, ratingCount: '۵۵', ratingCountNum: 55, capacity: '۲۵۰ نفر', capacityNum: 250, verified: false, space: 'closed', tags: ['مقرون‌به‌صرفه', 'سیستم صوتی'], price: '۲۴۰', priceNum: 240, href: '/venue/roya-hall' },
  { id: 16, title: 'باغ تالار بهشت', image: img1, city: 'اصفهان', area: 'خمینی‌شهر', location: 'اصفهان، خمینی‌شهر', rating: '۴.۹', ratingNum: 4.9, ratingCount: '۲۴۰', ratingCountNum: 240, capacity: '۷۰۰ نفر', capacityNum: 700, verified: true, space: 'open', tags: ['فضای باز', 'دکوراسیون کلاسیک', 'آلاچیق'], price: '۹۸۰', priceNum: 980, href: '/venue/bagh-behesht' },
  { id: 17, title: 'تالار ستاره شرق', image: img2, city: 'تهران', area: 'شرق تهران', location: 'تهران، شرق', rating: '۴.۰', ratingNum: 4.0, ratingCount: '۱۸', ratingCountNum: 18, capacity: '۱۸۰ نفر', capacityNum: 180, verified: false, space: 'closed', tags: ['مقرون‌به‌صرفه'], price: '۱۵۰', priceNum: 150, href: '/venue/setareh-shargh' },
  { id: 18, title: 'باغ تالار نسیم', image: img3, city: 'شهریار', area: 'وحیدیه', location: 'شهریار، وحیدیه', rating: '۴.۵', ratingNum: 4.5, ratingCount: '۶۷', ratingCountNum: 67, capacity: '۳۰۰ نفر', capacityNum: 300, verified: true, space: 'open', tags: ['فضای باز', 'پارکینگ'], price: '۳۴۰', priceNum: 340, href: '/venue/nasim' },
];
