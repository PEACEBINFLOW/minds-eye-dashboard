"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchForm({ initialQuery }: { initialQuery?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery ?? "");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2 text-xs">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search payloads, subjects, summaries..."
        className="flex-1 rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 outline-none focus:border-mind-accent"
      />
      <button
        type="submit"
        className="rounded-md bg-mind-accent px-3 py-2 text-xs font-semibold text-slate-950"
      >
        Search
      </button>
    </form>
  );
}
