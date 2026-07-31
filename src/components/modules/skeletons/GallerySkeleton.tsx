export default function GallerySkeleton() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-56 sm:h-96 rounded-3xl overflow-hidden">
      <div className="col-span-4 sm:col-span-2 row-span-2 bg-sand-200 animate-pulse" />
      <div className="hidden sm:block bg-sand-200 animate-pulse" />
      <div className="hidden sm:block bg-sand-200 animate-pulse" />
      <div className="hidden sm:block bg-sand-200 animate-pulse" />
      <div className="hidden sm:block bg-sand-200 animate-pulse" />
    </div>
  );
}
