import { MapPin, ArrowLeft, Info } from 'lucide-react';
import { officeInfo, supportPromises } from '@/data/contact-info';

export default function OfficeLocation() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">دفتر مرکزی</h2>
      <div className="rounded-2xl overflow-hidden aspect-4/3 relative mb-4">
        <img
          src={officeInfo.mapImage}
          alt="نقشه موقعیت دفتر مرکزی تالارگاه در مشهد"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/10 flex items-center justify-center">
          <span className="bg-sand-50 rounded-full p-3 shadow-card">
            <MapPin size={22} strokeWidth={1.8} className="text-garnet-700" />
          </span>
        </div>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed mb-2">{officeInfo.address}</p>
      <a
        href={officeInfo.directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-emerald-700 hover:text-emerald-800 font-medium mb-4 focus-ring"
      >
        مسیریابی تا دفتر
        <ArrowLeft size={14} />
      </a>
      <div className="flex items-start gap-2.5 text-xs text-ink-faint bg-gold-300/25 rounded-xl px-4 py-3">
        <Info size={15} strokeWidth={1.8} className="shrink-0 mt-0.5 text-gold-600" />
        {officeInfo.parkingNote}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-8">
        {supportPromises.map((item) => (
          <div key={item.label} className="text-center">
            <item.icon size={20} strokeWidth={1.6} className="mx-auto mb-2 text-emerald-800" />
            <p className="text-[11px] text-ink-soft leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
