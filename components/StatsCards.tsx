export interface StatItem {
  label: string;
  value: string | number;
  hint?: string;
}

export function StatsCards({ stats }: { stats: StatItem[] }) {
  if (!stats.length) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-slate-800 bg-mind-panelSoft/40 p-3 text-xs"
        >
          <div className="text-[11px] uppercase tracking-wide text-mind-sub">
            {s.label}
          </div>
          <div className="mt-1 text-lg font-semibold text-mind-text">
            {s.value}
          </div>
          {s.hint && (
            <div className="mt-1 text-[10px] text-mind-sub">{s.hint}</div>
          )}
        </div>
      ))}
    </div>
  );
}
