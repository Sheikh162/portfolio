"use client";

import { useEffect, useState } from "react";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { GitHubContributionGraph, GitHubContributionFallback } from "./graph";
import { Button } from "@/components/ui/button"; // Optional: for a refresh button if desired

export function GitHubContributions() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the last year of data for your username
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/sheikh162?y=last");
        
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
    <Panel id="contributions">
      <PanelHeader>
        <PanelTitle>GitHub Contributions</PanelTitle>
      </PanelHeader>

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
    </Panel>
  );
}