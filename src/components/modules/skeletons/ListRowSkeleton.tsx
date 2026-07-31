export default function ListRowSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="w-20 h-16 rounded-xl bg-sand-200 animate-pulse shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-1/3 rounded bg-sand-200 animate-pulse" />
            <div className="h-3 w-1/4 rounded bg-sand-200 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
