'use client';

import { useLightbox } from '@/hooks/useLightbox';
import VenueLightbox from './VenueLightbox';

interface Props {
  images: string[];
  title: string;
}

export default function VenueHeroGallery({ images, title }: Props) {
  const { index, isOpen, open, close, next, prev } = useLightbox(images.length);
  const extraCount = images.length - 5;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-3xl overflow-hidden h-[280px] sm:h-[420px] relative">
        <button
          onClick={() => open(0)}
          className="col-span-4 sm:col-span-2 row-span-2 relative overflow-hidden group focus-ring"
          aria-label={`مشاهده تمام‌صفحه تصویر ۱ ${title}`}
        >
          <img
            src={images[0]}
            alt={`نمای اصلی ${title}`}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="eager"
          />
        </button>

        {images.slice(1, 4).map((src, i) => (
          <button
            key={i}
            onClick={() => open(i + 1)}
            className="hidden sm:block relative overflow-hidden group focus-ring"
            aria-label={`مشاهده تمام‌صفحه تصویر ${i + 2} ${title}`}
          >
            <img
              src={src}
              alt={`تصویر ${i + 2} ${title}`}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
          </button>
        ))}

        {images[4] && (
          <button
            onClick={() => open(4)}
            className="hidden sm:block relative overflow-hidden group focus-ring"
            aria-label={`مشاهده همه تصاویر ${title}`}
          >
            <img
              src={images[4]}
              alt={`تصویر ۵ ${title}`}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
            {extraCount > 0 && (
              <div className="absolute inset-0 bg-ink/55 flex items-center justify-center">
                <span className="text-sand-50 text-sm font-medium">+{extraCount} تصویر</span>
              </div>
            )}
          </button>
        )}

        <span className="absolute bottom-4 right-4 bg-sand-50/95 text-xs text-ink px-3 py-1.5 rounded-full num">
          {(index ?? 0) + 1} / {images.length}
        </span>
      </div>

      {isOpen && index !== null && (
        <VenueLightbox
          images={images}
          alt={title}
          index={index}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}
