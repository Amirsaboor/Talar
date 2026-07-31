import { aboutIconMap } from './icon-map';
import type { AboutValue } from '@/data/about-values';

export default function AboutValues({ values }: { values: AboutValue[] }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center max-w-lg mx-auto mb-14">
        <p className="text-gold-600 text-sm font-medium mb-2">ارزش‌های ما</p>
        <h2 className="text-2xl sm:text-3xl font-semibold">اصولی که هیچ‌وقت زیر پا نمی‌گذاریم</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value) => {
          const Icon = aboutIconMap[value.icon];
          return (
            <div key={value.title} className="text-center px-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-800 flex items-center justify-center mb-4">
                <Icon size={22} strokeWidth={1.8} className="text-[#E7D0A0]" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
