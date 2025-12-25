import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TECH_STACK } from "../data/tech-stack"; // Ensure this path matches where you saved the data file
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          // These classes create the subtle dot pattern background
          "[--pattern-foreground:var(--color-primary)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-background/95" 
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            // Construct the CDN URL
            const baseUrl = `https://cdn.simpleicons.org/${tech.key}`;

            return (
              <li key={tech.key} className="flex">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={tech.title}
                      className="transition-transform hover:scale-110"
                    >
                      {/* LOGIC: 
                         1. If 'theme: true', we ask CDN for specific colors for dark/light mode.
                         2. Otherwise, we use the default brand color.
                      */}
                      
                      {tech.theme ? (
                        <>
                           {/* Dark Mode: White Icon */}
                          <Image
                            src={`${baseUrl}/white`}
                            alt={`${tech.title} icon`}
                            width={32}
                            height={32}
                            className="hidden dark:block"
                            unoptimized
                          />
                           {/* Light Mode: Default/Black Icon */}
                          <Image
                            src={`${baseUrl}`} 
                            alt={`${tech.title} icon`}
                            width={32}
                            height={32}
                            className="block dark:hidden"
                            unoptimized
                          />
                        </>
                      ) : (
                        <Image
                          src={baseUrl}
                          alt={`${tech.title} icon`}
                          width={32}
                          height={32}
                          unoptimized
                        />
                      )}
                    </a>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}