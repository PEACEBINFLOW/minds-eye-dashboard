# Mind's Eye Dashboard

The **Mind's Eye Dashboard** is the visual layer of the Google-native
Mind's Eye OS constellation.

It provides:

- A **timeline viewer** for LAW-T blocks and segments.
- An **event feed** over Gmail, Calendar, Drive, Docs, and Meet.
- A **search UI** powered by the Mind's Eye Search Engine.
- A **cognitive pool / memory view** for higher-level aggregation.
- **Weekly snapshots** of activity and patterns.

This repo is intentionally front-end only and expects to talk to:

- `minds-eye-search-engine` – for `/events/search` and `/events/stats`.
- `minds-eye-core` + storage – where events are stored and time-labeled.
- `minds-eye-gworkspace-connectors` – where events are ingested from Google.

## Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**

## Getting Started

```bash
npm install
npm run dev
