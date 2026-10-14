import Image from "next/image";
import { USER } from "@/features/portfolio/data/user";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="border-x border-edge bg-background">
      {/* Banner (Twitter-style, 3:1) */}
      <div className="relative aspect-[3/1] w-full overflow-hidden border-b border-edge">
        <Image
          src="/profile-banner.jpg"
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Content row */}
      <div className="flex">
        {/* Left Column: Avatar overlapping the banner */}
        <div className="shrink-0 border-r border-edge px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="relative -mt-10 size-28 overflow-hidden ring-1 ring-border ring-offset-4 ring-offset-background sm:-mt-14 sm:size-36">
            <Image
              src={USER.avatar}
              alt={USER.displayName}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Name & Role */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Spacer (visual balance) */}
          <div className="flex grow items-end pb-1 pl-4" />

          <div className="border-t border-edge">
            <div className="flex items-center gap-2 pl-4 pt-2">
              <h1 className="-translate-y-px font-display text-3xl">
                {USER.displayName}
              </h1>
              <VerifiedIcon
                className="size-4.5 text-[var(--color-info)] select-none text-blue-500"
                aria-label="Verified"
              />
            </div>

            {/* Role */}
            <p className="px-4 pb-2.5 pt-1.5 font-display text-lg italic text-muted-foreground">
              {USER.jobTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}