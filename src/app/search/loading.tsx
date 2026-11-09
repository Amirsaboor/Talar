import VenueCardSkeleton from '@/components/modules/skeletons/VenueCardSkeleton';

export default function SearchLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <VenueCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
