import type { VenueDetail } from '@/data/venue-details';

export default function VenueGalleryGrid({ venue }: { venue: VenueDetail }) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">گالری تصاویر</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {venue.images.map((src, i) => (
          <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
            <img
              src={src}
              alt={`گالری ${venue.title} ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {i === venue.images.length - 1 && (
              <button className="absolute inset-0 bg-ink/55 flex items-center justify-center text-sand-50 text-sm font-medium focus-ring">
                مشاهده همه
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
