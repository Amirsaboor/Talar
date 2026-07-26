import { whyChooseItems } from '@/data/why-choose';
import WhyChooseCard from './WhyChooseCard';

export default function WhyChooseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="text-gold-600 text-sm font-medium mb-2">چرا تالارگاه؟</p>
        <h2 className="text-2xl sm:text-3xl font-semibold">
          تصمیم‌گیری آسان‌تر برای مهم‌ترین شب زندگی
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseItems.map((item) => (
          <WhyChooseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
