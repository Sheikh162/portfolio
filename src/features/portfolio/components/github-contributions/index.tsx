"use client";

import { useEffect, useState } from "react";
import { PanelContent } from "../panel";
import { GitHubContributionGraph, GitHubContributionFallback } from "./graph";
import { Button } from "@/components/ui/button"; // Optional: for a refresh button if desired

export function GitHubContributions() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // Same-origin proxy: tries the contributions service server-side,
        // falls back to GitHub's official events API during outages.
        const res = await fetch("/api/contributions");

        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();

        // The API returns contributions as an array of days.
        // We just need to ensure the structure matches what graph.tsx expects.
        setData(json.contributions);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    /* A block inside the "Socials" panel. Owns the rule at its top. */
    <section id="contributions" className="screen-line-before">
      <h2 className="sr-only">GitHub contributions</h2>

      <PanelContent>
        {loading ? (
          <GitHubContributionFallback />
        ) : error ? (
          <div className="flex h-[140px] w-full items-center justify-center text-sm text-destructive">
            Failed to load GitHub data.
          </div>
        ) : (
          <GitHubContributionGraph data={data} />
        )}
      </PanelContent>
    </section>
  );
}