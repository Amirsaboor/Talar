import { aboutIconMap } from './icon-map';
import type { AboutTrustPoint } from '@/data/about-trust';

export default function AboutTrust({ points }: { points: AboutTrustPoint[] }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center max-w-lg mx-auto mb-14">
        <p className="text-gold-600 text-sm font-medium mb-2">چرا به ما اعتماد کنید</p>
        <h2 className="text-2xl sm:text-3xl font-semibold">هر ادعا، پشتوانه دارد</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {points.map((point) => {
          const Icon = aboutIconMap[point.icon];
          return (
            <div key={point.title} className="border border-sand-200 rounded-2xl p-6">
              <Icon size={24} strokeWidth={1.6} className="mb-4 text-emerald-900" />
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
