"use client";

import { CheckIcon, MailIcon } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item";

export function EmailItem({ email }: { email: string }) {
  // 1. Initialize with empty string so server & client match initially
  const [decodedEmail, setDecodedEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 2. Decode only after the component has mounted in the browser
  useEffect(() => {
    try {
      setDecodedEmail(atob(email));
    } catch (e) {
      console.error("Failed to decode email", e);
    }
  }, [email]);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const copyEmail = async () => {
    if (!decodedEmail) return;
    await navigator.clipboard.writeText(decodedEmail);
    toast.success("Email copied to clipboard");
    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <IntroItem>
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>
      <IntroItemContent>
        {/* 3. Render "Loading..." initially, then switch to the button */}
        {decodedEmail ? (
          <button
            className="inline-flex items-center gap-1.5 hover:underline hover:underline-offset-4 focus:outline-none"
            onClick={copyEmail}
            title="Click to copy email"
          >
            {copied ? (
              <>
                <CheckIcon className="size-3.5 text-foreground" />
                <span className="font-mono text-xs">copied</span>
              </>
            ) : (
              decodedEmail
            )}
          </button>
        ) : (
          <span className="text-muted-foreground">Loading...</span>
        )}
      </IntroItemContent>
    </IntroItem>
  );
}