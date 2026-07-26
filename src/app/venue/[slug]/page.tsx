import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/modules/layout/Footer';
import VenueBreadcrumb from '@/components/templates/venue/VenueBreadcrumb';
import VenueHeroGallery from '@/components/templates/venue/VenueHeroGallery';
import VenueDetailView from '@/components/templates/venue/VenueDetailView';
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
        <VenueBreadcrumb category={venue.category} title={venue.title} />
        <VenueHeroGallery images={venue.images} title={venue.title} />
        <VenueDetailView venue={venue} similarVenues={similarVenues} />
      </main>
    </div>
  );
}
