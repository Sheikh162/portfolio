import { GlobeIcon, MapPinIcon, UserIcon } from "lucide-react"; // Using UserIcon as generic gender icon replacement

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
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel className="border-t-0">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        {/* Work History */}
        {USER.jobs.map((job, index) => (
          <JobItem
                key={index}
                title={job.title}
                website={job.website} 
                company={""}          />
        ))}

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
          
        </div>
      </PanelContent>
    </Panel>
  );
}