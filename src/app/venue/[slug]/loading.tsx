import GallerySkeleton from '@/components/modules/skeletons/GallerySkeleton';
import DetailsSkeleton from '@/components/modules/skeletons/DetailsSkeleton';

export default function VenueLoading() {
  return (
    <div className="bg-sand-50 antialiased pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <GallerySkeleton />
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 mt-8">
          <DetailsSkeleton />
          <div className="h-72 rounded-2xl bg-sand-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
