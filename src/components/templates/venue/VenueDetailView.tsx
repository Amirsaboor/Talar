import type { VenueDetail } from '@/data/venue-details';
import VenueSummary from './VenueSummary';
import VenueQuickInfo from './VenueQuickInfo';
import VenueAbout from './VenueAbout';
import VenueAmenities from './VenueAmenities';
import VenueMenuPackages from './VenueMenuPackages';
import VenuePricing from './VenuePricing';
import VenuePhotoGallery from './VenuePhotoGallery';
import VenueVideoPreview from './VenueVideoPreview';
import VenueVirtualTourBanner from './VenueVirtualTourBanner';
import VenueLocationMap from './VenueLocationMap';
import VenueReviews from './VenueReviews';
import VenueFAQAccordion from './VenueFAQAccordion';
import VenueStickyCTA from './VenueStickyCTA';
import VenueSimilarVenues from './VenueSimilarVenues';
import VenueFinalCTA from './VenueFinalCTA';
import VenueMobileCTA from './VenueMobileCTA';

interface Props {
  venue: VenueDetail;
  similarVenues: VenueDetail[];
}

export default function VenueDetailView({ venue, similarVenues }: Props) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">
          <div>
            <VenueSummary
              title={venue.title}
              verified={venue.verified}
              rating={venue.rating}
              reviewCount={venue.reviewCount}
              address={venue.address}
            />
            <VenueQuickInfo venue={venue} />
            <VenueAbout venue={venue} />
            <VenueAmenities venue={venue} />
            <VenueMenuPackages venue={venue} />
            <VenuePricing venue={venue} />
            <VenuePhotoGallery images={venue.images} title={venue.title} />
            <VenueVideoPreview poster={venue.images[0]} title={venue.title} />
            <VenueVirtualTourBanner />
            <VenueLocationMap
              address={venue.address}
              mapImage={venue.images[1] ?? venue.images[0]}
              title={venue.title}
              nearbyTags={venue.nearbyTags}
            />
            <VenueReviews
              rating={venue.rating}
              reviewCount={venue.reviewCount}
              breakdown={venue.ratingBreakdown}
              reviews={venue.reviews}
            />
            <VenueFAQAccordion faqs={venue.faqs} />
          </div>

          <VenueStickyCTA startingPrice={venue.startingPrice} />
        </div>
      </div>

      <VenueSimilarVenues venues={similarVenues} />
      <VenueFinalCTA />
      <VenueMobileCTA startingPrice={venue.startingPrice} />
    </>
  );
}
