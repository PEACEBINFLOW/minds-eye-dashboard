type EventSource =
  | "gmail"
  | "calendar"
  | "drive"
  | "docs"
  | "meet"
  | "android"
  | "system"
  | "other";

export interface MindEyeEvent {
  id: string;
  source: EventSource;
  kind: string;
  createdAt: string;
  payload: any;
}

export function EventCard({ event }: { event: MindEyeEvent }) {
  const created = new Date(event.createdAt);

  return (
    <div className="rounded-lg border border-slate-800 bg-mind-panelSoft/40 p-3 text-xs">
      <div className="flex items-center justify-between mb-1">
        <span className="font-semibold text-mind-text">
          {event.kind || event.source}
        </span>
        <span className="text-[10px] text-mind-sub">
          {created.toISOString()}
        </span>
      </div>
      <div className="flex items-center justify-between mb-1">
        <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-mind-sub">
          {event.source}
        </span>
        <span className="truncate text-[10px] text-mind-sub">
          {event.payload?.subject ??
            event.payload?.summary ??
            event.payload?.name ??
            ""}
        </span>
      </div>
      <pre className="mt-1 max-h-32 overflow-y-auto whitespace-pre-wrap text-[10px] text-slate-400">
        {JSON.stringify(event.payload, null, 2)}
      </pre>
    </div>
  );
}
