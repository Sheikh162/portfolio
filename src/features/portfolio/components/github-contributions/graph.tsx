"use client";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export function GitHubContributionFallback() {
  return (
    <div className="flex h-[160px] w-full flex-col items-center justify-center gap-2 bg-muted/5 text-sm text-muted-foreground animate-pulse rounded-md border border-dashed">
      <div className="size-8 rounded-full border-4 border-t-transparent border-muted-foreground/30 animate-spin" />
      <span>Loading activity...</span>
    </div>
  );
}

export function GitHubContributionGraph({
  data,
}: {
  data: ContributionDay[];
}) {
  if (!data || data.length === 0) return null;

  // 1. Calculate Total Public Contributions
  const totalContributions = data.reduce((acc, day) => acc + day.count, 0);

  // 2. Align the Graph to the correct Day of the Week
  // GitHub graphs are columns of 7 days, starting on Sunday.
  // If our data starts on a Wednesday, we need 3 "empty" slots before it.
  const startDate = new Date(data[0].date);
  const startDayOfWeek = startDate.getDay(); // 0 = Sunday, 1 = Monday...

  const weeks: (ContributionDay | null)[][] = [];
  let currentWeek: (ContributionDay | null)[] = [];

  // Add empty placeholders for the days before the data starts
  for (let i = 0; i < startDayOfWeek; i++) {
    currentWeek.push(null);
  }

  // Process actual data
  data.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // Push any remaining partial week
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  // 3. Generate Month Labels (Correctly aligned)
  const months: { name: string; index: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, index) => {
    // Find the first valid day in the week to check the month
    const validDay = week.find((d) => d !== null);
    if (!validDay) return;

    const dateObj = new Date(validDay.date);
    const month = dateObj.getMonth();

    if (month !== lastMonth) {
      months.push({
        name: dateObj.toLocaleString("default", { month: "short" }),
        index,
      });
      lastMonth = month;
    }
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-0.5 px-1">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            {totalContributions.toLocaleString()} contributions in the last year
          </span>
          <Link
            href="https://github.com/sheikh162"
            target="_blank"
            className="text-xs text-muted-foreground hover:text-foreground hover:underline"
          >
            View on GitHub
          </Link>
        </div>
        <p className="text-[10px] text-muted-foreground">
          * Public contributions only 
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-x-auto pb-2 scrollbar-none mask-linear-fade">
        {/* Month Labels */}
        <div className="flex text-[10px] text-muted-foreground relative h-4">
          {months.map((m, i) => (
            <span
              key={`${m.name}-${i}`}
              className="absolute"
              style={{ left: `${m.index * 13}px` }} // 13px = box(10) + gap(3)
            >
              {m.name}
            </span>
          ))}
        </div>

        {/* The Grid */}
        <div className="flex items-start gap-[3px]">
          {weeks.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dIndex) => {
                if (!day) {
                  // Render invisible placeholder to keep alignment
                  return <div key={`empty-${wIndex}-${dIndex}`} className="size-2.5" />;
                }
                return (
                  <Tooltip key={day.date}>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          "size-2.5 rounded-[2px] transition-colors",
                          day.level === 0 && "bg-muted/40",
                          day.level === 1 && "bg-emerald-200 dark:bg-emerald-900/60",
                          day.level === 2 && "bg-emerald-300 dark:bg-emerald-700/80",
                          day.level === 3 && "bg-emerald-400 dark:bg-emerald-600",
                          day.level === 4 && "bg-emerald-500 dark:bg-emerald-500"
                        )}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="text-xs">
                      {day.count} contributions on{" "}
                      {new Date(day.date).toLocaleDateString()}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1 text-[10px] text-muted-foreground px-1">
        <span>Less</span>
        <div className="flex gap-[3px]">
          <div className="size-2.5 rounded-[2px] bg-muted/40" />
          <div className="size-2.5 rounded-[2px] bg-emerald-200 dark:bg-emerald-900/60" />
          <div className="size-2.5 rounded-[2px] bg-emerald-300 dark:bg-emerald-700/80" />
          <div className="size-2.5 rounded-[2px] bg-emerald-400 dark:bg-emerald-600" />
          <div className="size-2.5 rounded-[2px] bg-emerald-500 dark:bg-emerald-500" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}