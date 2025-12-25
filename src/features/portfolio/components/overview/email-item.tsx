"use client";

import { MailIcon } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item";

export function EmailItem({ email }: { email: string }) {
  // 1. Initialize with empty string so server & client match initially
  const [decodedEmail, setDecodedEmail] = useState("");

  // 2. Decode only after the component has mounted in the browser
  useEffect(() => {
    try {
      setDecodedEmail(atob(email));
    } catch (e) {
      console.error("Failed to decode email", e);
    }
  }, [email]);

  const copyEmail = () => {
    if (!decodedEmail) return;
    navigator.clipboard.writeText(decodedEmail);
    toast.success("Email copied to clipboard");
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
            className="hover:underline hover:underline-offset-4 focus:outline-none"
            onClick={copyEmail}
            title="Click to copy email"
          >
            {decodedEmail}
          </button>
        ) : (
          <span className="text-muted-foreground">Loading...</span>
        )}
      </IntroItemContent>
    </IntroItem>
  );
}