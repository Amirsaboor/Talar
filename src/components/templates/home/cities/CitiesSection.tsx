import { cities } from '@/data/cities';
import CityCard from './CityCard';

export default function CitiesSection() {
  return (
    <section id="cities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="mb-8">
        <p className="text-gold-600 text-sm font-medium mb-2">جست‌وجو بر اساس مقصد</p>
        <h2 className="text-2xl sm:text-3xl font-semibold">شهرهای محبوب</h2>
      </div>

      <div className="rail flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </section>
  );
}
