import type { MetadataRoute } from 'next';
import { siteConfig } from '@/shared/config/site.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | کشف و انتخاب بهترین تالارها و باغ‌تالارها`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfbf7', // sand-50
    theme_color: siteConfig.themeColor, // emerald-800
    lang: 'fa',
    dir: 'rtl',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
    ],
  };
}
