import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/shared/seo/metadata';
import Footer from '@/components/modules/layout/Footer';
import VenueBreadcrumb from '@/components/templates/venue/VenueBreadcrumb';
import VenueGallery from '@/components/templates/venue/VenueGallery';
import VenueHeader from '@/components/templates/venue/VenueHeader';
import VenueQuickInfo from '@/components/templates/venue/VenueQuickInfo';
import VenueAbout from '@/components/templates/venue/VenueAbout';
import VenueAmenities from '@/components/templates/venue/VenueAmenities';
import VenueMenuPackages from '@/components/templates/venue/VenueMenuPackages';
import VenuePricing from '@/components/templates/venue/VenuePricing';
import VenueGalleryGrid from '@/components/templates/venue/VenueGalleryGrid';
import VenueVideo from '@/components/templates/venue/VenueVideo';
import VenueVirtualTour from '@/components/templates/venue/VenueVirtualTour';
import VenueLocation from '@/components/templates/venue/VenueLocation';
import VenueReviews from '@/components/templates/venue/VenueReviews';
import VenueFAQ from '@/components/templates/venue/VenueFAQ';
import VenueBookingSidebar from '@/components/templates/venue/VenueBookingSidebar';
import VenueMobileCta from '@/components/templates/venue/VenueMobileCta';
import SimilarVenuesSection from '@/components/templates/venue/SimilarVenuesSection';
import VenueFinalCta from '@/components/templates/venue/VenueFinalCta';
import { venueDetails } from '@/data/venue-details';
import { getVenueRepository } from '@/data-access/repositories/venue.repository';
import JsonLd from '@/components/modules/json-ld/JsonLd';
import { buildVenueSchema } from '@/shared/seo/schema/venue';
import { buildBreadcrumbSchema } from '@/shared/seo/schema/breadcrumb';
import { buildFaqSchema } from '@/shared/seo/schema/faq';

export function generateStaticParams() {
  return getVenueRepository()
    .getAllSlugs()
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueRepository().findBySlug(slug);
  if (!venue) return {};
  return buildMetadata({
    title: venue.title,
    description: venue.about[0],
    path: `/venue/${slug}`,
    image: venue.images?.[0],
  });
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venue = venueDetails[slug];

  if (!venue) notFound();

  const similarVenues = Object.values(venueDetails)
    .filter((v) => v.slug !== venue.slug)
    .slice(0, 3);

  return (
    <div className="bg-sand-50 text-ink antialiased pb-24 lg:pb-0">
      <JsonLd data={buildVenueSchema(venue, slug)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'خانه', path: '/' },
          { name: venue.category, path: '/category/all' },
          { name: venue.title, path: `/venue/${slug}` },
        ])}
      />
      {venue.faqs.length > 0 && <JsonLd data={buildFaqSchema(venue.faqs)} />}
      <main id="main">
        <VenueBreadcrumb venue={venue} />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <VenueGallery venue={venue} />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">
            <div className="min-w-0">
              <VenueHeader venue={venue} />
              <VenueQuickInfo venue={venue} />
              <VenueAbout venue={venue} />
              <VenueAmenities venue={venue} />
              <VenueMenuPackages venue={venue} />
              <VenuePricing venue={venue} />
              <VenueGalleryGrid venue={venue} />
              <VenueVideo venue={venue} />
              <VenueVirtualTour />
              <VenueLocation venue={venue} />
              <VenueReviews venue={venue} />
              <VenueFAQ venue={venue} />
            </div>

            <VenueBookingSidebar venue={venue} />
          </div>
        </div>

        <SimilarVenuesSection venues={similarVenues} />
        <VenueFinalCta />
      </main>

      <VenueMobileCta venue={venue} />

      <Footer />
    </div>
  );
}
