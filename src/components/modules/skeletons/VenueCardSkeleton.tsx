export default function VenueCardSkeleton() {
  return (
    <div className="bg-sand-50 rounded-3xl overflow-hidden shadow-soft">
      <div className="aspect-4/3 bg-sand-200 animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-4 w-3/4 rounded bg-sand-200 animate-pulse" />
        <div className="h-3 w-1/2 rounded bg-sand-200 animate-pulse" />
        <div className="h-8 w-full rounded-xl bg-sand-200 animate-pulse mt-3" />
      </div>
    </div>
  );
}
