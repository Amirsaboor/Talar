'use client';

import { useState } from 'react';
import type { VenueDetail } from '@/data/venue-details';

export default function VenueGallery({ venue }: { venue: VenueDetail }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = venue.images;
  const mainImage = images[activeIndex] ?? images[0];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-3xl overflow-hidden h-[280px] sm:h-[420px] relative">
      <div className="col-span-4 sm:col-span-2 row-span-2 relative overflow-hidden">
        <img
          src={mainImage}
          alt={`نمای اصلی ${venue.title}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {images.slice(1, 4).map((src, i) => {
        const imageIndex = i + 1;
        return (
          <button
            key={src}
            onClick={() => setActiveIndex(imageIndex)}
            className="hidden sm:block relative overflow-hidden group focus-ring"
            aria-label={`نمایش تصویر ${imageIndex + 1}`}
          >
            <img
              src={src}
              alt={`تصویر ${imageIndex + 1} ${venue.title}`}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
          </button>
        );
      })}

      {images[4] && (
        <button
          onClick={() => setActiveIndex(4)}
          className="hidden sm:block relative overflow-hidden group focus-ring"
          aria-label="مشاهده همه تصاویر"
        >
          <img
            src={images[4]}
            alt={`تصویر ۵ ${venue.title}`}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/55 flex items-center justify-center">
            <span className="text-sand-50 text-sm font-medium">۲۴+ تصویر</span>
          </div>
        </button>
      )}

      <span className="absolute bottom-4 right-4 bg-sand-50/95 text-xs text-ink px-3 py-1.5 rounded-full num">
        {activeIndex + 1} / {images.length}
      </span>
    </div>
  );
}
