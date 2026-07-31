import { categories } from '@/data/categories';
import type { CategoryEntity } from '../types';

export interface CategoryRepository {
  findAll(): CategoryEntity[];
  findById(id: number | string): CategoryEntity | null;
}

class InMemoryCategoryRepository implements CategoryRepository {
  findAll(): CategoryEntity[] {
    return categories;
  }

  findById(id: number | string): CategoryEntity | null {
    return categories.find((c) => String(c.id) === String(id)) ?? null;
  }
}

let instance: CategoryRepository | null = null;

/** نقطه واحد دسترسی به CategoryRepository */
export function getCategoryRepository(): CategoryRepository {
  if (!instance) {
    instance = new InMemoryCategoryRepository();
  }
  return instance;
}
