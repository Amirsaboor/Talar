'use client';

import { useEffect } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface Props {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function VenueLightbox({ images, alt, index, onClose, onNext, onPrev }: Props) {
  // بستن با کلید Escape و پیمایش با فلش‌های صفحه‌کلید
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNext();
      if (e.key === 'ArrowRight') onPrev();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`نمایش تمام‌صفحه تصاویر ${alt}`}
      className="fixed inset-0 z-100 bg-ink/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="بستن"
        className="absolute top-4 left-4 w-11 h-11 rounded-full bg-sand-50/10 hover:bg-sand-50/20 text-sand-50 flex items-center justify-center focus-ring"
      >
        <X size={20} />
      </button>

      <span className="absolute top-4 right-4 text-sand-50/80 text-sm num">
        {index + 1} / {images.length}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="تصویر قبلی"
        className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-sand-50/10 hover:bg-sand-50/20 text-sand-50 flex items-center justify-center focus-ring"
      >
        <ChevronRight size={20} />
      </button>

      <img
        src={images[index]}
        alt={`${alt} - تصویر ${index + 1}`}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="تصویر بعدی"
        className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-sand-50/10 hover:bg-sand-50/20 text-sand-50 flex items-center justify-center focus-ring"
      >
        <ChevronLeft size={20} />
      </button>
    </div>
  );
}
