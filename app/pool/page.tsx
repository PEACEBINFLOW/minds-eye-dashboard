import { StatsCards } from "@/components/StatsCards";
import { getCognitivePoolSnapshot } from "@/lib/api";

export default async function PoolPage() {
  const snapshot = await getCognitivePoolSnapshot();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Cognitive Pool</h2>
      <p className="text-sm text-mind-sub">
        Grouped events by LAW-T blocks, sources, and themes – a higher-level
        view of your Google-native activity.
      </p>
      <StatsCards stats={snapshot.stats} />
      <div className="rounded-xl border border-slate-800 bg-mind-panelSoft/30 p-4 text-sm text-mind-sub whitespace-pre-wrap">
        {snapshot.description}
      </div>
    </div>
  );
}
