export type IconKey =
  | 'users'
  | 'home'
  | 'banknote'
  | 'car'
  | 'music'
  | 'camera'
  | 'accessibility'
  | 'landmark'
  | 'wind'
  | 'utensils'
  | 'valet'
  | 'trees';

export interface VenueDetail {
  slug: string;
  title: string;
  category: string;
  verified: boolean;
  rating: number;
  reviewCount: string;
  location: string;
  address: string;
  images: string[];
  quickInfo: { icon: IconKey; label: string; value: string }[];
  about: string[];
  amenities: { icon: IconKey; label: string }[];
  menuPackages: {
    name: string;
    description: string;
    price: string;
    image: string;
    featured?: boolean;
  }[];
  pricing: { label: string; sublabel: string; price: string }[];
  priceNote: string;
  nearbyTags: string[];
  ratingBreakdown: [number, number, number, number, number];
  reviews: { name: string; date: string; text: string }[];
  faqs: { question: string; answer: string }[];
  startingPrice: string;
  capacity: string;
}

const img1 =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop';
const img2 =
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2200&auto=format&fit=crop';
const img3 =
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2200&auto=format&fit=crop';
const img4 =
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2200&auto=format&fit=crop';
const img5 =
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2200&auto=format&fit=crop';

const commonFaqs = (rentLabel: string) => [
  {
    question: 'آیا امکان بازدید حضوری قبل از رزرو وجود دارد؟',
    answer:
      'بله، با هماهنگی قبلی از طریق تماس تلفنی می‌توانید در روزهای غیر مراسم از سالن بازدید کنید.',
  },
  {
    question: 'آیا تالار امکان آوردن تشریفات خارجی را می‌دهد؟',
    answer:
      'خدمات پذیرایی و آشپزخانه داخلی تالار الزامی است، اما گل‌آرایی و عکاسی را می‌توانید آزادانه انتخاب کنید.',
  },
  {
    question: 'بیعانه رزرو چقدر است؟',
    answer: `معمولاً ۲۰٪ از ${rentLabel} به‌عنوان بیعانه در زمان عقد قرارداد دریافت می‌شود؛ جزئیات دقیق را با تالار هماهنگ کنید.`,
  },
];

export const venueDetails: Record<string, VenueDetail> = {
  'ivan-talayi': {
    slug: 'ivan-talayi',
    title: 'تالار ایوان طلایی',
    category: 'تالارهای مشهد',
    verified: true,
    rating: 4.9,
    reviewCount: '۲۱۴',
    location: 'مشهد، وکیل‌آباد',
    address: 'مشهد، بلوار وکیل‌آباد، نبش وکیل‌آباد ۲۵، پلاک ۴۵',
    images: [img1, img2, img3, img4, img5],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۶۰۰ نفر' },
      { icon: 'home', label: 'نوع تالار', value: 'فضای بسته و باز' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۸۵۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۸۰ خودرو' },
    ],
    about: [
      'تالار ایوان طلایی با بیش از پانزده سال سابقه در برگزاری مراسم عروسی، یکی از شناخته‌شده‌ترین تالارهای بلوار وکیل‌آباد مشهد است. فضای اصلی سالن با سقف‌های بلند و نورپردازی گرم طراحی شده و می‌تواند تا ۶۰۰ مهمان را به‌طور هم‌زمان در بخش‌های جداگانه بانوان و آقایان پذیرایی کند.',
      'بخش بیرونی تالار شامل باغچه‌ای با درختان کهن‌سال است که برای عکاسی و پذیرایی پیش از مراسم استفاده می‌شود. آشپزخانه تالار به‌صورت مستقل مدیریت می‌شود و امکان سفارشی‌سازی منو بر اساس سلیقه و بودجه مهمانان وجود دارد.',
    ],
    amenities: [
      { icon: 'car', label: 'پارکینگ اختصاصی' },
      { icon: 'home', label: 'سالن VIP' },
      { icon: 'wind', label: 'سرمایش و گرمایش' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
      { icon: 'accessibility', label: 'دسترسی ویلچر' },
      { icon: 'landmark', label: 'نمازخانه' },
      { icon: 'valet', label: 'پارک‌بان (والت)' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'دو نوع غذای ایرانی، پیش‌غذا و نوشیدنی',
        price: 'هر نفر از ۱٬۲۰۰٬۰۰۰ تومان',
        image: img4,
      },
      {
        name: 'پکیج ویژه',
        description: 'سه نوع غذا، میز میوه و شیرینی، نوشیدنی متنوع',
        price: 'هر نفر از ۱٬۸۵۰٬۰۰۰ تومان',
        image: img5,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'منوی باز چهار نوع غذا، بار میوه و دسر کامل',
        price: 'هر نفر از ۲٬۶۰۰٬۰۰۰ تومان',
        image: img3,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۸۵۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۱٬۱۵۰ میلیون تومان' },
      {
        label: 'فصل اوج (بهار و تابستان)',
        sublabel: 'اردیبهشت تا شهریور',
        price: '+۱۵٪ نسبت به نرخ عادی',
      },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['۵ دقیقه تا میدان وکیل‌آباد', 'نزدیک بوستان ملت مشهد', 'پارکینگ سرپوشیده ۸۰ نفره'],
    ratingBreakdown: [85, 10, 3, 1, 1],
    reviews: [
      {
        name: 'نگار احمدی',
        date: 'مهر ۱۴۰۳',
        text: 'فضای سالن واقعاً چشم‌نواز بود و پرسنل بسیار محترمانه برخورد کردند. تنها نکته این بود که پارکینگ در شب‌های شلوغ کمی زود پر می‌شود.',
      },
      {
        name: 'امیرحسین رضایی',
        date: 'شهریور ۱۴۰۳',
        text: 'منوی غذا فراتر از انتظارمان بود. هماهنگی‌های قبل از مراسم هم دقیق و بدون تأخیر انجام شد.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۸۵۰ میلیون تومان',
    capacity: '۶۰۰ نفر',
  },

  'raya-hall': {
    slug: 'raya-hall',
    title: 'سالن مجلل رایا',
    category: 'تالارهای مشهد',
    verified: true,
    rating: 4.7,
    reviewCount: '۱۵۰',
    location: 'مشهد، احمدآباد',
    address: 'مشهد، بلوار احمدآباد، نبش کوچه یاس، پلاک ۱۲',
    images: [img2, img1, img4, img3, img5],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۴۰۰ نفر' },
      { icon: 'home', label: 'نوع تالار', value: 'فضای بسته' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۶۲۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۵۰ خودرو' },
    ],
    about: [
      'سالن مجلل رایا در دل احمدآباد با معماری مدرن و سیستم صوتی حرفه‌ای، مقصدی محبوب برای مراسمی است که موسیقی زنده بخش مهمی از برنامه آن‌هاست. سالن اصلی با سقف کشسان و نورپردازی رنگی قابل تنظیم، فضایی پرانرژی برای جشن ایجاد می‌کند.',
      'تیم کترینگ داخلی رایا با تمرکز بر پذیرایی ممتاز، منوهایی متنوع از غذای ایرانی و بین‌المللی ارائه می‌دهد و امکان چیدمان اختصاصی میز شام بر اساس تعداد مهمانان فراهم است.',
    ],
    amenities: [
      { icon: 'music', label: 'موزیک لایو' },
      { icon: 'utensils', label: 'کترینگ ممتاز' },
      { icon: 'wind', label: 'سرمایش و گرمایش' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
      { icon: 'car', label: 'پارکینگ اختصاصی' },
      { icon: 'valet', label: 'پارک‌بان (والت)' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'دو نوع غذای ایرانی و نوشیدنی',
        price: 'هر نفر از ۹۵۰٬۰۰۰ تومان',
        image: img3,
      },
      {
        name: 'پکیج ویژه',
        description: 'سه نوع غذا، میز میوه و نوشیدنی متنوع',
        price: 'هر نفر از ۱٬۴۵۰٬۰۰۰ تومان',
        image: img4,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'منوی باز، بار میوه و دسر کامل',
        price: 'هر نفر از ۲٬۱۰۰٬۰۰۰ تومان',
        image: img5,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۶۲۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۸۵۰ میلیون تومان' },
      { label: 'فصل اوج (بهار و تابستان)', sublabel: 'اردیبهشت تا شهریور', price: '+۱۰٪ نسبت به نرخ عادی' },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['۱۰ دقیقه تا میدان بوعلی', 'نزدیک بلوار احمدآباد', 'پارکینگ اختصاصی ۵۰ نفره'],
    ratingBreakdown: [72, 18, 6, 2, 2],
    reviews: [
      {
        name: 'سارا محمدی',
        date: 'آبان ۱۴۰۳',
        text: 'گروه موسیقی و صدابرداری سالن فوق‌العاده بود، مهمان‌ها تا آخر شب روی پیست ماندند.',
      },
      {
        name: 'حسین کریمی',
        date: 'مرداد ۱۴۰۳',
        text: 'کیفیت غذا عالی بود اما هماهنگی زمان‌بندی تحویل سالن کمی با تأخیر انجام شد.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۶۲۰ میلیون تومان',
    capacity: '۴۰۰ نفر',
  },

  golestan: {
    slug: 'golestan',
    title: 'تالار گلستان',
    category: 'تالارهای مشهد',
    verified: false,
    rating: 4.5,
    reviewCount: '۹۰',
    location: 'مشهد، سجاد',
    address: 'مشهد، بلوار سجاد، نبش سجاد ۱۸، پلاک ۱۲',
    images: [img3, img2, img1, img5, img4],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۳۰۰ نفر' },
      { icon: 'trees', label: 'نوع تالار', value: 'فضای باز' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۴۵۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۳۰ خودرو' },
    ],
    about: [
      'تالار گلستان در منطقه سجاد، فضایی سبز و آرام را با دکوراسیونی مدرن ترکیب کرده است. حیاط بزرگ تالار با درختان و آبنمای مرکزی، گزینه‌ای دلپذیر برای مراسمی است که می‌خواهند بخشی از جشن را زیر آسمان باز برگزار کنند.',
      'سالن سرپوشیده در کنار حیاط امکان ادامه مراسم در صورت تغییر آب‌وهوا را فراهم می‌کند و طراحی داخلی آن با رنگ‌های خنثی و روشن هماهنگ شده است.',
    ],
    amenities: [
      { icon: 'trees', label: 'فضای باز' },
      { icon: 'home', label: 'دکوراسیون مدرن' },
      { icon: 'wind', label: 'سرمایش و گرمایش' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
      { icon: 'car', label: 'پارکینگ' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'یک نوع غذای ایرانی و نوشیدنی',
        price: 'هر نفر از ۷۵۰٬۰۰۰ تومان',
        image: img5,
      },
      {
        name: 'پکیج ویژه',
        description: 'دو نوع غذا، میز میوه و نوشیدنی',
        price: 'هر نفر از ۱٬۱۰۰٬۰۰۰ تومان',
        image: img1,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'سه نوع غذا و بار میوه کامل',
        price: 'هر نفر از ۱٬۶۰۰٬۰۰۰ تومان',
        image: img2,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۴۵۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۶۰۰ میلیون تومان' },
      { label: 'فصل اوج (بهار و تابستان)', sublabel: 'اردیبهشت تا شهریور', price: '+۱۲٪ نسبت به نرخ عادی' },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['نزدیک بلوار سجاد', 'نزدیک بوستان ملت', 'پارکینگ روباز ۳۰ نفره'],
    ratingBreakdown: [65, 22, 8, 3, 2],
    reviews: [
      {
        name: 'مریم صادقی',
        date: 'تیر ۱۴۰۳',
        text: 'حیاط تالار برای عکاسی فوق‌العاده بود، هوای بهاری حس خیلی خوبی به مراسم داد.',
      },
      {
        name: 'رضا نوری',
        date: 'اردیبهشت ۱۴۰۳',
        text: 'قیمت مناسب و کیفیت خوب، فقط پارکینگ برای جمع بیش از ۲۰۰ نفر کم بود.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۴۵۰ میلیون تومان',
    capacity: '۳۰۰ نفر',
  },

  narenjestan: {
    slug: 'narenjestan',
    title: 'باغ‌تالار نارنجستان',
    category: 'باغ‌تالارها',
    verified: true,
    rating: 4.8,
    reviewCount: '۱۵۸',
    location: 'طرقبه',
    address: 'طرقبه، جاده کندوان، روستای درح، کیلومتر ۳',
    images: [img2, img5, img3, img1, img4],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۴۰۰ نفر' },
      { icon: 'trees', label: 'نوع تالار', value: 'باغ‌تالار (فضای باز)' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۴۹۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۶۰ خودرو' },
    ],
    about: [
      'باغ‌تالار نارنجستان با درختان نارنج قدیمی و فضای سرسبز، یکی از محبوب‌ترین باغ‌تالارهای اطراف مشهد و طرقبه است. طراحی سنتی محوطه در کنار امکانات مدرن پذیرایی، تجربه‌ای متفاوت از یک عروسی باغی را رقم می‌زند.',
      'آشپزخانه سنتی نارنجستان با اجاق‌های چوبی، طعم اصیل غذای ایرانی را برای مهمانان فراهم می‌کند و امکان برگزاری مراسم عقد در فضای باز نیز وجود دارد.',
    ],
    amenities: [
      { icon: 'trees', label: 'فضای باز' },
      { icon: 'utensils', label: 'آشپزخانه سنتی' },
      { icon: 'car', label: 'پارکینگ اختصاصی' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
      { icon: 'landmark', label: 'نمازخانه' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'غذای سنتی ایرانی با اجاق چوبی',
        price: 'هر نفر از ۸۵۰٬۰۰۰ تومان',
        image: img1,
      },
      {
        name: 'پکیج ویژه',
        description: 'دو نوع غذا، میز میوه و شیرینی',
        price: 'هر نفر از ۱٬۲۵۰٬۰۰۰ تومان',
        image: img4,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'منوی باز سنتی و مدرن با بار میوه',
        price: 'هر نفر از ۱٬۸۰۰٬۰۰۰ تومان',
        image: img3,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۴۹۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۶۵۰ میلیون تومان' },
      { label: 'فصل اوج (بهار و تابستان)', sublabel: 'اردیبهشت تا شهریور', price: '+۲۰٪ نسبت به نرخ عادی' },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['۱۵ دقیقه تا جاده طرقبه-مشهد', 'محوطه سبز ۲ هکتاری', 'پارکینگ روباز ۶۰ نفره'],
    ratingBreakdown: [80, 14, 4, 1, 1],
    reviews: [
      {
        name: 'الهام رستمی',
        date: 'شهریور ۱۴۰۳',
        text: 'فضای باغ فوق‌العاده رمانتیک بود و غذای سنتی نظر همه مهمان‌ها را جلب کرد.',
      },
      {
        name: 'کیوان یوسفی',
        date: 'تیر ۱۴۰۳',
        text: 'دسترسی از مشهد کمی طول کشید ولی ارزشش را داشت، پرسنل بسیار همکاری داشتند.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۴۹۰ میلیون تومان',
    capacity: '۴۰۰ نفر',
  },

  'afra-sefid': {
    slug: 'afra-sefid',
    title: 'تالار افرا سفید',
    category: 'تالارهای مشهد',
    verified: false,
    rating: 5.0,
    reviewCount: '۹۶',
    location: 'مشهد، کوه‌سنگی',
    address: 'مشهد، بلوار کوه‌سنگی، نبش کوچه بهار، پلاک ۹',
    images: [img1, img4, img2, img3, img5],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۸۵۰ نفر' },
      { icon: 'home', label: 'نوع تالار', value: 'فضای بسته' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۱٬۱۰۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۱۰۰ خودرو' },
    ],
    about: [
      'تالار افرا سفید یکی از بزرگ‌ترین تالارهای مشهد با ظرفیت پذیرایی از ۸۵۰ مهمان است. دکوراسیون کلاسیک سالن با ستون‌های سفید و لوستر‌های بزرگ، حال‌وهوایی مجلل به مراسم می‌بخشد.',
      'اتاق اختصاصی عروس با آینه‌کاری سنتی و نورپردازی حرفه‌ای برای آماده‌شدن پیش از مراسم در نظر گرفته شده و تیم اجرایی تالار در هماهنگی برنامه زمانی مراسم تجربه بالایی دارد.',
    ],
    amenities: [
      { icon: 'home', label: 'دکوراسیون کلاسیک' },
      { icon: 'users', label: 'اتاق عروس' },
      { icon: 'wind', label: 'سرمایش و گرمایش' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
      { icon: 'car', label: 'پارکینگ اختصاصی' },
      { icon: 'valet', label: 'پارک‌بان (والت)' },
      { icon: 'landmark', label: 'نمازخانه' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'دو نوع غذای ایرانی و نوشیدنی',
        price: 'هر نفر از ۱٬۴۰۰٬۰۰۰ تومان',
        image: img2,
      },
      {
        name: 'پکیج ویژه',
        description: 'سه نوع غذا، میز میوه و شیرینی',
        price: 'هر نفر از ۲٬۱۰۰٬۰۰۰ تومان',
        image: img3,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'منوی باز پنج نوع غذا و بار دسر کامل',
        price: 'هر نفر از ۳٬۰۰۰٬۰۰۰ تومان',
        image: img5,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۱٬۱۰۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۱٬۵۰۰ میلیون تومان' },
      { label: 'فصل اوج (بهار و تابستان)', sublabel: 'اردیبهشت تا شهریور', price: '+۱۵٪ نسبت به نرخ عادی' },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['۵ دقیقه تا میدان کوه‌سنگی', 'نزدیک خط قطارشهری مشهد', 'پارکینگ سرپوشیده ۱۰۰ نفره'],
    ratingBreakdown: [92, 6, 1, 1, 0],
    reviews: [
      {
        name: 'فاطمه یزدانی',
        date: 'آذر ۱۴۰۳',
        text: 'با اینکه جمعیت زیادی داشتیم، همه‌چیز منظم پیش رفت. اتاق عروس فوق‌العاده شیک بود.',
      },
      {
        name: 'محمدرضا صابری',
        date: 'آبان ۱۴۰۳',
        text: 'بهترین تالار مشهد از نظر دکوراسیون؛ فقط رزرو باید خیلی زودتر انجام شود.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۱٬۱۰۰ میلیون تومان',
    capacity: '۸۵۰ نفر',
  },

  'negin-sabz': {
    slug: 'negin-sabz',
    title: 'تالار نگین سبز',
    category: 'تالارهای اقتصادی',
    verified: false,
    rating: 4.6,
    reviewCount: '۷۲',
    location: 'مشهد، عبدالمطلب',
    address: 'مشهد، بلوار عبدالمطلب، نبش خیابان نگین',
    images: [img4, img3, img1, img2, img5],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۲۰۰ نفر' },
      { icon: 'home', label: 'نوع تالار', value: 'فضای بسته' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۲۲۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۲۵ خودرو' },
    ],
    about: [
      'تالار نگین سبز گزینه‌ای مقرون‌به‌صرفه برای زوج‌هایی است که به‌دنبال برگزاری مراسمی صمیمی و بی‌دردسر در مشهد هستند. سالن با متراژ مناسب برای جمع‌های تا ۲۰۰ نفر طراحی شده و امکانات لازم برای یک مراسم استاندارد را در اختیار میهمانان قرار می‌دهد.',
      'مدیریت تالار انعطاف بالایی در زمان‌بندی و برنامه مراسم دارد و امکان سفارش منوی اقتصادی متناسب با بودجه محدود نیز فراهم است.',
    ],
    amenities: [
      { icon: 'banknote', label: 'مقرون‌به‌صرفه' },
      { icon: 'car', label: 'پارکینگ' },
      { icon: 'wind', label: 'سرمایش و گرمایش' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'یک نوع غذای ایرانی و نوشیدنی',
        price: 'هر نفر از ۴۵۰٬۰۰۰ تومان',
        image: img1,
      },
      {
        name: 'پکیج ویژه',
        description: 'دو نوع غذا و میز میوه',
        price: 'هر نفر از ۶۵۰٬۰۰۰ تومان',
        image: img5,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'سه نوع غذا و نوشیدنی متنوع',
        price: 'هر نفر از ۹۰۰٬۰۰۰ تومان',
        image: img2,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۲۲۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۳۰۰ میلیون تومان' },
      { label: 'فصل اوج (بهار و تابستان)', sublabel: 'اردیبهشت تا شهریور', price: '+۱۰٪ نسبت به نرخ عادی' },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['نزدیک بلوار عبدالمطلب', 'دسترسی آسان به میدان جانباز', 'پارکینگ رایگان ۲۵ نفره'],
    ratingBreakdown: [58, 26, 10, 4, 2],
    reviews: [
      {
        name: 'زهرا قاسمی',
        date: 'خرداد ۱۴۰۳',
        text: 'با بودجه محدود، بهترین گزینه‌ای بود که پیدا کردیم؛ کیفیت خدمات به قیمت می‌ارزید.',
      },
      {
        name: 'علی توکلی',
        date: 'فروردین ۱۴۰۳',
        text: 'سالن ساده اما تمیز و مرتب بود، پرسنل هم همکاری خوبی داشتند.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۲۲۰ میلیون تومان',
    capacity: '۲۰۰ نفر',
  },

  'baran-hall': {
    slug: 'baran-hall',
    title: 'سالن باران',
    category: 'تالارهای مشهد',
    verified: true,
    rating: 4.4,
    reviewCount: '۴۴',
    location: 'مشهد، هاشمی‌نژاد',
    address: 'مشهد، بلوار هاشمی‌نژاد، خیابان باران، پلاک ۲۲',
    images: [img1, img5, img4, img2, img3],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۳۰۰ نفر' },
      { icon: 'home', label: 'نوع تالار', value: 'فضای بسته' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۱۹۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۳۵ خودرو' },
    ],
    about: [
      'سالن باران در بلوار هاشمی‌نژاد مشهد با سیستم صوتی و نورپردازی مدرن، انتخابی مناسب برای مراسمی است که تمرکز بر موسیقی و اجرای زنده دارند. طراحی داخلی سالن ساده و کاربردی است و امکان چیدمان انعطاف‌پذیر میزها را فراهم می‌کند.',
      'تیم اجرایی سالن باران در برگزاری مراسم‌های متوسط تا ۳۰۰ نفره تجربه زیادی دارد و پشتیبانی فنی صدا و نور به‌صورت اختصاصی در طول مراسم ارائه می‌شود.',
    ],
    amenities: [
      { icon: 'home', label: 'فضای بسته' },
      { icon: 'music', label: 'سیستم صوتی حرفه‌ای' },
      { icon: 'wind', label: 'سرمایش و گرمایش' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
      { icon: 'car', label: 'پارکینگ' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'یک نوع غذای ایرانی و نوشیدنی',
        price: 'هر نفر از ۵۵۰٬۰۰۰ تومان',
        image: img4,
      },
      {
        name: 'پکیج ویژه',
        description: 'دو نوع غذا و میز میوه',
        price: 'هر نفر از ۸۰۰٬۰۰۰ تومان',
        image: img3,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'سه نوع غذا و نوشیدنی متنوع',
        price: 'هر نفر از ۱٬۱۵۰٬۰۰۰ تومان',
        image: img5,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۱۹۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۲۶۰ میلیون تومان' },
      { label: 'فصل اوج (بهار و تابستان)', sublabel: 'اردیبهشت تا شهریور', price: '+۱۰٪ نسبت به نرخ عادی' },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['نزدیک میدان هاشمی‌نژاد', 'دسترسی آسان به بلوار وکیل‌آباد', 'پارکینگ اختصاصی ۳۵ نفره'],
    ratingBreakdown: [55, 28, 10, 4, 3],
    reviews: [
      {
        name: 'پریسا اکبری',
        date: 'بهمن ۱۴۰۲',
        text: 'صدا و نور سالن حرفه‌ای بود و DJ ما از تجهیزات راضی بود.',
      },
      {
        name: 'بابک شریفی',
        date: 'دی ۱۴۰۲',
        text: 'سالن کمی کوچک‌تر از انتظارمان بود ولی برای جمع ۲۵۰ نفره کافی بود.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۱۹۰ میلیون تومان',
    capacity: '۳۰۰ نفر',
  },

  'bagh-sarv': {
    slug: 'bagh-sarv',
    title: 'باغ سرو',
    category: 'باغ‌تالارها',
    verified: false,
    rating: 4.7,
    reviewCount: '۶۱',
    location: 'شاندیز',
    address: 'شاندیز، جاده طرقبه به شاندیز، روستای سرو، کیلومتر ۳',
    images: [img2, img3, img5, img1, img4],
    quickInfo: [
      { icon: 'users', label: 'ظرفیت', value: '۲۵۰ نفر' },
      { icon: 'trees', label: 'نوع تالار', value: 'باغ‌تالار (فضای باز)' },
      { icon: 'banknote', label: 'محدوده قیمت', value: 'از ۲۶۰ میلیون' },
      { icon: 'car', label: 'پارکینگ', value: '۴۰ خودرو' },
    ],
    about: [
      'باغ سرو در حومه شاندیز، فضایی وسیع و سرسبز با درختان سرو بلند را برای برگزاری مراسم عروسی در طبیعت فراهم کرده است. این باغ‌تالار به‌ویژه در فصل بهار و تابستان با چراغانی‌های رشته‌ای و فضای رمانتیک خود شناخته می‌شود.',
      'امکانات پایه پذیرایی و آشپزخانه در محل موجود است و مدیریت باغ در هماهنگی با تشریفات و گروه‌های موسیقی بیرونی انعطاف‌پذیر عمل می‌کند.',
    ],
    amenities: [
      { icon: 'trees', label: 'فضای باز' },
      { icon: 'banknote', label: 'مقرون‌به‌صرفه' },
      { icon: 'car', label: 'پارکینگ' },
      { icon: 'camera', label: 'دوربین ثبت مراسم' },
    ],
    menuPackages: [
      {
        name: 'پکیج کلاسیک',
        description: 'یک نوع غذای ایرانی و نوشیدنی',
        price: 'هر نفر از ۵۰۰٬۰۰۰ تومان',
        image: img5,
      },
      {
        name: 'پکیج ویژه',
        description: 'دو نوع غذا و میز میوه',
        price: 'هر نفر از ۷۵۰٬۰۰۰ تومان',
        image: img2,
        featured: true,
      },
      {
        name: 'پکیج لوکس',
        description: 'سه نوع غذا و بار میوه کامل',
        price: 'هر نفر از ۱٬۱۰۰٬۰۰۰ تومان',
        image: img3,
      },
    ],
    pricing: [
      { label: 'روزهای عادی هفته', sublabel: 'شنبه تا چهارشنبه', price: '۲۶۰ میلیون تومان' },
      { label: 'پنجشنبه و جمعه', sublabel: 'تقاضای بالا', price: '۳۵۰ میلیون تومان' },
      { label: 'فصل اوج (بهار و تابستان)', sublabel: 'اردیبهشت تا شهریور', price: '+۲۵٪ نسبت به نرخ عادی' },
    ],
    priceNote: 'قیمت‌ها تقریبی و بدون احتساب منوی غذا هستند. قیمت نهایی را هنگام مشاوره تأیید کنید.',
    nearbyTags: ['۲۰ دقیقه تا مرکز شاندیز', 'فضای سبز ۳ هکتاری', 'پارکینگ روباز ۴۰ نفره'],
    ratingBreakdown: [68, 20, 7, 3, 2],
    reviews: [
      {
        name: 'شیدا مرادی',
        date: 'مرداد ۱۴۰۳',
        text: 'غروب آفتاب در باغ فضای فوق‌العاده‌ای برای عکس‌های عروسی ساخت، همه مهمان‌ها راضی بودند.',
      },
      {
        name: 'فرهاد اسدی',
        date: 'تیر ۱۴۰۳',
        text: 'مسیر دسترسی کمی دور بود ولی فضای باغ ارزش سفر را داشت.',
      },
    ],
    faqs: commonFaqs('مبلغ کل'),
    startingPrice: '۲۶۰ میلیون تومان',
    capacity: '۲۵۰ نفر',
  },
};

export const venueSlugs = Object.keys(venueDetails);
