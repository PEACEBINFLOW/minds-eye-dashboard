import { EventCard } from "@/components/EventCard";
import { getEvents } from "@/lib/api";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Event Feed</h2>
      <p className="text-sm text-mind-sub">
        Raw events as they flow from Gmail, Calendar, Drive, Docs, and Meet.
      </p>
      <div className="space-y-3">
        {events.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </div>
  );
}
