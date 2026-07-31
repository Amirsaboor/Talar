export default function TableSkeleton({ rows = 2, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-sand-200">
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className="grid gap-4 p-4 border-b border-sand-200 last:border-b-0"
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: columns }).map((_, c) => (
            <div key={c} className="h-3 rounded bg-sand-200 animate-pulse" />
          ))}
        </div>
      ))}
    </div>
  );
}
