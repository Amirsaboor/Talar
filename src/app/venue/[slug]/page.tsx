import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
import { venueDetails, venueSlugs } from '@/data/venue-details';

export function generateStaticParams() {
  return venueSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venue = venueDetails[slug];
  if (!venue) return {};
  return {
    title: `${venue.title} | تالارگاه`,
    description: venue.about[0],
  };
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
