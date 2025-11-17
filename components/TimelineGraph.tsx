export interface TimelinePoint {
  day: string; // YYYY-MM-DD
  count: number;
}

export function TimelineGraph({ points }: { points: TimelinePoint[] }) {
  if (!points.length) {
    return (
      <p className="text-xs text-mind-sub">
        No timeline data yet. Once events are flowing, LAW-T blocks will show
        up here.
      </p>
    );
  }

  const max = Math.max(...points.map((p) => p.count));

  return (
    <div className="flex h-40 items-end gap-1">
      {points.map((p) => {
        const height = max > 0 ? (p.count / max) * 100 : 0;
        return (
          <div
            key={p.day}
            className="flex-1 flex flex-col items-center justify-end"
          >
            <div
              className="w-full rounded-t bg-mind-accent/70"
              style={{ height: `${height || 4}%` }}
              title={`${p.day}: ${p.count}`}
            />
            <span className="mt-1 rotate-45 text-[9px] text-mind-sub">
              {p.day.slice(5)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
