import { cityMeta } from '@/data/cities';
import { citiesWithCounts } from '@/lib/venue-search';
import { getVenueRepository } from './venue.repository';
import type { CityEntity } from '../types';

export interface CityRepository {
  findAll(): CityEntity[];
  findBySlug(slug: string): CityEntity | null;
}

class InMemoryCityRepository implements CityRepository {
  findAll(): CityEntity[] {
    const venues = getVenueRepository().findAll();
    const counts = citiesWithCounts(venues);
    const countMap = new Map(counts.map((c) => [c.name, c.count]));

    return Object.entries(cityMeta).map(([name, meta]) => ({
      name,
      slug: meta.slug,
      image: meta.image,
      venueCount: countMap.get(name) ?? 0,
    }));
  }

  findBySlug(slug: string): CityEntity | null {
    return this.findAll().find((c) => c.slug === slug) ?? null;
  }
}

let instance: CityRepository | null = null;

/** نقطه واحد دسترسی به CityRepository */
export function getCityRepository(): CityRepository {
  if (!instance) {
    instance = new InMemoryCityRepository();
  }
  return instance;
}
