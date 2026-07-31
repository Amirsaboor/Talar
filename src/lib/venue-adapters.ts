import type { VenueDetail } from '@/data/venue-details';
import { toPersianDigits } from './persian-numbers';

export interface CardVenue {
  id: string;
  title: string;
  image: string;
  location: string;
  rating: string;
  ratingCount: string;
  capacity: string;
  verified: boolean;
  tags: string[];
  price: string;
  href: string;
}

/** تبدیل داده کامل صفحه تالار به شکلی که کارت‌های لیستی (CategoryVenueCard) انتظار دارند */
export function toCardVenue(venue: VenueDetail): CardVenue {
  return {
    id: venue.slug,
    title: venue.title,
    image: venue.images[0],
    location: venue.location,
    rating: toPersianDigits(venue.rating),
    ratingCount: venue.reviewCount,
    capacity: venue.capacity,
    verified: venue.verified,
    tags: venue.amenities.slice(0, 2).map((a) => a.label),
    price: venue.startingPrice.replace(/\s*میلیون تومان\s*/, ''),
    href: `/venue/${venue.slug}`,
  };
}
