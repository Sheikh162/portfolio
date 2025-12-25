"use client";

import { ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item";

export function CurrentLocalTimeItem({ timeZone = "Asia/Kolkata" }: { timeZone?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <IntroItem>
      <IntroItemIcon>
        <ClockIcon />
      </IntroItemIcon>
      <IntroItemContent suppressHydrationWarning>
        {time ? `${time} (IST)` : "Loading..."}
      </IntroItemContent>
    </IntroItem>
  );
}