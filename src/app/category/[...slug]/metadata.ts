import type { Metadata } from 'next';
import { resolveCategoryRoute } from '@/lib/resolve-category-route';
import { getCityRepository } from '@/data-access/repositories/city.repository';
import { buildMetadata } from '@/shared/seo/metadata';

/**
 * CategoryMetadataBuilder + CityMetadataBuilder (فاز ۳.۲) در یک فایل، چون هر دو از یک
 * catch-all route ([...slug]) و یک تابع تشخیص مشترک (resolveCategoryRoute) تغذیه می‌شوند.
 * برای city، عکس و تعداد واقعی تالارها از CityRepository می‌آید (نه عدد ثابت).
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = resolveCategoryRoute(slug ?? []);
  const path = `/category/${(slug ?? []).join('/')}`;

  if (route.kind === 'city') {
    const city = getCityRepository().findBySlug(slug[1]);
    return buildMetadata({
      title: route.title,
      description: city
        ? `${city.venueCount} تالار و باغ‌تالار در ${city.name} روی تالارگاه ثبت شده؛ فیلتر کنید و بهترین گزینه را برای مراسم خود پیدا کنید.`
        : route.subtitle,
      path,
      image: city?.image,
    });
  }

  return buildMetadata({
    title: route.title,
    description: `${route.title} — ${route.subtitle}`,
    path,
  });
}
