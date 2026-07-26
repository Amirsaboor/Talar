import type { VenueDetail } from '@/data/venue-details';

interface Props {
  packages: VenueDetail['menuPackages'];
}

export default function VenueMenuPackages({ packages }: Props) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-2">منوی پذیرایی</h2>
      <p className="text-sm text-ink-faint mb-6">
        پکیج‌های زیر قابل سفارشی‌سازی هستند؛ برای دریافت منوی کامل با تالار تماس بگیرید.
      </p>
      <div className="grid sm:grid-cols-3 gap-5">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`rounded-2xl overflow-hidden relative ${
              pkg.featured ? 'border-2 border-gold-500' : 'border border-sand-200'
            }`}
          >
            {pkg.featured && (
              <span className="absolute top-3 left-3 bg-gold-500 text-ink text-[10px] font-medium px-2.5 py-1 rounded-full z-10">
                پرطرفدار
              </span>
            )}
            <div className="aspect-3/2 overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm">{pkg.name}</h3>
              <p className="text-xs text-ink-faint mt-1.5 leading-relaxed">{pkg.description}</p>
              <p className="text-sm font-semibold mt-3 num">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
