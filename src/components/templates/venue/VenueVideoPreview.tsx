'use client';

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface Props {
  poster: string;
  title: string;
}

export default function VenueVideoPreview({ poster, title }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-6">ویدیوی تالار</h2>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-ink">
        <img
          src={poster}
          alt={`پیش‌نمایش ویدیوی معرفی ${title}`}
          className={`w-full h-full object-cover transition-opacity ${
            isPlaying ? 'opacity-40' : 'opacity-70'
          }`}
          loading="lazy"
        />
        <button
          onClick={() => setIsPlaying((v) => !v)}
          aria-label={isPlaying ? 'توقف ویدیو' : 'پخش ویدیو'}
          aria-pressed={isPlaying}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 focus-ring"
        >
          <span className="w-16 h-16 rounded-full bg-sand-50/95 flex items-center justify-center">
            {isPlaying ? (
              <Pause size={22} className="fill-[#211C16] text-[#211C16]" />
            ) : (
              <Play size={22} className="fill-[#211C16] text-[#211C16]" />
            )}
          </span>
          {isPlaying && (
            <span className="text-sand-50 text-xs bg-ink/60 px-3 py-1 rounded-full">
              در حال پخش نمونه ویدیو…
            </span>
          )}
        </button>
      </div>
    </section>
  );
}
