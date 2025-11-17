import { SearchForm } from "@/components/SearchForm";
import { EventCard } from "@/components/EventCard";
import { searchEvents } from "@/lib/api";

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { q?: string };
}) {
  const q = searchParams?.q ?? "";
  const results = q ? await searchEvents(q) : [];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Search Events</h2>
      <p className="text-sm text-mind-sub">
        Query your Mind&apos;s Eye memory using the search engine service.
      </p>
      <SearchForm initialQuery={q} />
      <div className="mt-4 space-y-3">
        {results.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
        {!q && (
          <p className="text-xs text-mind-sub">
            Type a query and hit Enter to search across payloads.
          </p>
        )}
      </div>
    </div>
  );
}
