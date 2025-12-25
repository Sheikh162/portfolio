"use client";

import { PhoneIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item";

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {
  // 1. Start with empty string to match the server's output
  const [decodedPhone, setDecodedPhone] = useState("");

  // 2. Decode strictly on the client side after mounting
  useEffect(() => {
    try {
      // Decode base64 only in the browser
      setDecodedPhone(atob(phoneNumber));
    } catch (e) {
      console.error("Failed to decode phone number", e);
    }
  }, [phoneNumber]);

  return (
    <IntroItem>
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>
      <IntroItemContent>
        {/* 3. Show "Loading..." initially, then switch to the link */}
        {decodedPhone ? (
          <a
            href={`tel:${decodedPhone}`}
            className="hover:underline hover:underline-offset-4"
          >
            {decodedPhone}
          </a>
        ) : (
          // This text matches what the server renders, preventing the error
          <span className="text-muted-foreground">Loading...</span>
        )}
      </IntroItemContent>
    </IntroItem>
  );
}