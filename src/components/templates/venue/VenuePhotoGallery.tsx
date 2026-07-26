'use client';

import { useLightbox } from '@/hooks/useLightbox';
import VenueLightbox from './VenueLightbox';

interface Props {
  images: string[];
  title: string;
}

export default function VenuePhotoGallery({ images, title }: Props) {
  const { index, isOpen, open, close, next, prev } = useLightbox(images.length);

  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">گالری تصاویر</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="relative aspect-square rounded-xl overflow-hidden group focus-ring"
            aria-label={`مشاهده تصویر ${i + 1} ${title}`}
          >
            <img
              src={src}
              alt={`گالری ${title} ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </button>
        ))}
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
