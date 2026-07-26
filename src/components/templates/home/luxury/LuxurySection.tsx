import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { luxuryCollection as data } from '@/data/luxury';

export default function LuxurySection() {
  return (
    <section id="luxury" className="bg-emerald-900 text-sand-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 min-w-0">
            <p className="text-gold-300 text-sm font-medium mb-3">{data.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-extralight leading-tight mb-5">
              {data.titlePrefix} <span className="font-medium">{data.titleHighlight}</span>{' '}
              {data.titleSuffix}
            </h2>
            <p className="text-sand-100/80 leading-relaxed mb-8 max-w-md">{data.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {data.stats.map((stat) => (
                <div key={stat.id} className="bg-sand-50/5 border border-sand-50/15 rounded-2xl p-4 min-w-0">
                  <p className="text-2xl font-semibold num text-gold-300">{stat.value}</p>
                  <p className="text-xs text-sand-100/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              href={data.ctaHref}
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium text-sm px-6 py-3.5 rounded-full transition-colors focus-ring"
            >
              {data.ctaLabel}
              <ArrowLeft size={16} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-3xl overflow-hidden aspect-4/5 shadow-lift">
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-sand-50 text-ink rounded-2xl p-4 shadow-card w-48">
              <p className="text-xs text-ink-faint mb-1">{data.spotlightVenue.name}</p>
              <p className="font-semibold text-sm num">شروع از {data.spotlightVenue.price} میلیون تومان</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
