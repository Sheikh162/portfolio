import { FileTextIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

import { USER } from "@/features/portfolio/data/user";
import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel className="border-t-0">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        {/* Info Grid */}
        <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">

          {/* Location */}
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/${encodeURIComponent(USER.address)}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          {/* Time */}
          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          {/* Contact */}
          <PhoneItem phoneNumber={USER.phoneNumber} />
          <EmailItem email={USER.email} />

          {/* Resume */}
          <IntroItem>
            <IntroItemIcon>
              <FileTextIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink href={USER.resumeUrl}>Resume</IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          {/* LeetCode */}
          <IntroItem>
            <IntroItemIcon>
              <Image
                src="https://cdn.simpleicons.org/leetcode/FFA116"
                alt=""
                width={16}
                height={16}
                className="size-4"
                unoptimized
              />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink href={USER.leetcodeUrl}>LeetCode</IntroItemLink>
            </IntroItemContent>
          </IntroItem>

        </div>
      </PanelContent>
    </Panel>
  );
}