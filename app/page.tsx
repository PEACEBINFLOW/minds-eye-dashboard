import { StatsCards } from "@/components/StatsCards";
import { TimelineGraph } from "@/components/TimelineGraph";
import { EventCard } from "@/components/EventCard";
import { getOverviewData } from "@/lib/api";

export default async function HomePage() {
  const data = await getOverviewData();

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Mind&apos;s Eye Overview</h2>
          <p className="text-sm text-mind-sub">
            Google-native activity across Gmail, Calendar, Drive, Docs, and
            Meet.
          </p>
        </div>
      </header>

      <StatsCards stats={data.stats} />

      <section className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="rounded-xl border border-slate-800 bg-mind-panelSoft/30 p-4">
          <h3 className="mb-2 text-sm font-semibold text-mind-sub">
            LAW-T Timeline (daily events)
          </h3>
          <TimelineGraph points={data.timeline} />
        </div>
        <div className="rounded-xl border border-slate-800 bg-mind-panelSoft/30 p-4">
          <h3 className="mb-2 text-sm font-semibold text-mind-sub">
            Recent Events
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {data.recentEvents.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
