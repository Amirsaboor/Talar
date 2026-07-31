import type { TimelineStep } from '@/data/about-timeline';

export default function AboutTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <p className="text-gold-600 text-sm font-medium mb-2 text-center">داستان ما</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-14">
        از یک دغدغه شخصی تا یک پلتفرم ملی
      </h2>

      <div className="space-y-10 relative">
        <div className="hidden sm:block absolute top-2 bottom-2 right-[7px] w-px bg-sand-300" />

        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <div key={step.year} className="flex gap-6">
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <span
                  className={`w-4 h-4 rounded-full ring-4 ring-sand-50 z-10 ${
                    isLast ? 'bg-emerald-800' : 'bg-gold-500'
                  }`}
                />
              </div>
              <div>
                <p className="text-xs text-ink-faint num mb-1">{step.year}</p>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
