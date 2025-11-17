import { TimelineGraph } from "@/components/TimelineGraph";
import { getTimelineData } from "@/lib/api";

export default async function TimelinePage() {
  const data = await getTimelineData();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">LAW-T Timeline</h2>
      <p className="text-sm text-mind-sub">
        Daily and segment-based view of events across your Google universe.
      </p>
      <div className="rounded-xl border border-slate-800 bg-mind-panelSoft/30 p-4">
        <TimelineGraph points={data.timeline} />
      </div>
    </div>
  );
}
