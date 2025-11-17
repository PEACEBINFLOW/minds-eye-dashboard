import { MindEyeEvent } from "@/components/EventCard";
import { TimelinePoint } from "@/components/TimelineGraph";
import { StatItem } from "@/components/StatsCards";

const SEARCH_BASE_URL =
  process.env.MINDSEYE_SEARCH_URL ?? "http://localhost:3004";
const EVENTS_BASE_URL =
  process.env.MINDSEYE_EVENTS_URL ?? "http://localhost:3000/api"; // placeholder

export async function getOverviewData(): Promise<{
  stats: StatItem[];
  timeline: TimelinePoint[];
  recentEvents: MindEyeEvent[];
}> {
  // TODO: replace with real fetch to stats + recent events
  const timeline: TimelinePoint[] = [
    { day: "2025-11-13", count: 12 },
    { day: "2025-11-14", count: 20 },
    { day: "2025-11-15", count: 8 },
    { day: "2025-11-16", count: 15 }
  ];

  const recentEvents: MindEyeEvent[] = [
    {
      id: "example_gmail",
      source: "gmail",
      kind: "gmail.message",
      createdAt: new Date().toISOString(),
      payload: {
        subject: "Welcome to Mind's Eye",
        from: "noreply@example.com",
        snippet: "This is a sample Gmail event..."
      }
    }
  ];

  const stats: StatItem[] = [
    { label: "Events (last 7d)", value: 55 },
    { label: "Active Sources", value: 4, hint: "Gmail, Calendar, Drive, Meet" },
    { label: "Average / day", value: 7.8 },
    { label: "Last Sync", value: "Just now" }
  ];

  return { stats, timeline, recentEvents };
}

export async function getTimelineData(): Promise<{
  timeline: TimelinePoint[];
}> {
  // In a real setup, call: `${SEARCH_BASE_URL}/events/stats`
  const timeline: TimelinePoint[] = [
    { day: "2025-11-10", count: 5 },
    { day: "2025-11-11", count: 9 },
    { day: "2025-11-12", count: 4 },
    { day: "2025-11-13", count: 12 },
    { day: "2025-11-14", count: 20 },
    { day: "2025-11-15", count: 8 },
    { day: "2025-11-16", count: 15 }
  ];

  return { timeline };
}

export async function getEvents(): Promise<MindEyeEvent[]> {
  // Later: fetch from a Mind's Eye events API.
  return [
    {
      id: "example_calendar",
      source: "calendar",
      kind: "calendar.event",
      createdAt: new Date().toISOString(),
      payload: {
        summary: "Standup with Mind's Eye",
        description: "Daily sync.",
        start: { dateTime: new Date().toISOString() }
      }
    }
  ];
}

export async function searchEvents(query: string): Promise<MindEyeEvent[]> {
  if (!query.trim()) return [];
  // Real call example:
  // const res = await fetch(
  //   `${SEARCH_BASE_URL}/events/search?text=${encodeURIComponent(query)}`,
  //   { cache: "no-store" }
  // );
  // const data = await res.json();
  // return data.results;

  // Mock:
  return [
    {
      id: "search_mock",
      source: "drive",
      kind: "drive.file",
      createdAt: new Date().toISOString(),
      payload: {
        name: "Mind's Eye Spec",
        mimeType: "application/vnd.google-apps.document"
      }
    }
  ];
}

export async function getCognitivePoolSnapshot(): Promise<{
  stats: StatItem[];
  description: string;
}> {
  const stats: StatItem[] = [
    { label: "Blocks (daily)", value: 4 },
    { label: "Gmail share", value: "45%" },
    { label: "Calendar share", value: "30%" },
    { label: "Drive/Docs/Meet", value: "25%" }
  ];

  const description =
    "This is a mock cognitive pool snapshot. In a live system, this panel would summarize LAW-T blocks, dominant sources, recurring patterns, and potential focus areas, all generated from Mind's Eye Core + Search Engine data.";

  return { stats, description };
}
