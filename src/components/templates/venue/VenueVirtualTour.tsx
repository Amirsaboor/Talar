import { Compass } from 'lucide-react';

export default function VenueVirtualTour() {
  return (
    <section className="py-8 border-t border-sand-200">
      <div className="rounded-2xl bg-emerald-900 text-sand-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold mb-1.5">تور مجازی ۳۶۰ درجه</h2>
          <p className="text-sm text-sand-100/70 max-w-md">
            قبل از تماس، یک قدم در فضای تالار قدم بزنید — بدون نیاز به حضور فیزیکی.
          </p>
        </div>
        <button className="shrink-0 flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring">
          <Compass size={16} />
          شروع تور مجازی
        </button>
      </div>
    </section>
  );
}
