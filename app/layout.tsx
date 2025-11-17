import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Mind's Eye Dashboard",
  description: "Google-native Mind's Eye OS dashboard"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-mind-bg text-mind-text">
        <div className="flex min-h-screen">
          <aside className="w-64 border-r border-slate-800 bg-mind-panelSoft/40 p-4">
            <h1 className="text-lg font-semibold mb-6">
              Mind&apos;s Eye<span className="text-mind-accent"> OS</span>
            </h1>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-mind-accent">
                Overview
              </Link>
              <Link href="/timeline" className="block hover:text-mind-accent">
                Timeline
              </Link>
              <Link href="/events" className="block hover:text-mind-accent">
                Events
              </Link>
              <Link href="/search" className="block hover:text-mind-accent">
                Search
              </Link>
              <Link href="/pool" className="block hover:text-mind-accent">
                Cognitive Pool
              </Link>
            </nav>
          </aside>
          <main className="flex-1 p-6 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
