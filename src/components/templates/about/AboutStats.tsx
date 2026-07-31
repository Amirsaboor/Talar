import type { AboutStat } from '@/data/about-stats';

export default function AboutStats({ stats }: { stats: AboutStat[] }) {
  return (
    <section className="bg-ink text-sand-100 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl sm:text-4xl font-light num text-gold-300">{stat.value}</p>
            <p className="text-xs text-sand-100/50 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
