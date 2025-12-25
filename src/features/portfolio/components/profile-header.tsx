import Image from "next/image";
import { USER } from "@/features/portfolio/data/user";
import { FlipSentences } from "@/registry/flip-sentences/flip-sentences"; // Ensure you have this file
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="flex border-x border-edge bg-background">
      {/* Left Column: Avatar */}
      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-[3px]">
          <div className="relative size-32 overflow-hidden rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40">
            <Image
              src={USER.avatar}
              alt={USER.displayName}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Right Column: Name & Info */}
      <div className="flex flex-1 flex-col">
        {/* Top Spacer (Visual balance) */}
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-muted-foreground select-none max-sm:hidden">
            {"text-3xl font-medium"}
          </div>
        </div>

        {/* Bottom Area: Name & Flip Text */}
        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4 pt-2">
            <h1 className="-translate-y-px text-3xl font-semibold">
              {USER.displayName}
            </h1>
            
            <VerifiedIcon
              className="size-4.5 text-[var(--color-info)] select-none text-blue-500" // Added text-blue-500 as fallback
              aria-label="Verified"
            />
            
            {/* {USER.namePronunciationUrl && (
              <PronounceMyName namePronunciationUrl={USER.namePronunciationUrl} />
            )} */}
          </div>

          <div className="h-12.5 py-1 pl-4 sm:h-9">
            <FlipSentences
              className="font-mono text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  );
}