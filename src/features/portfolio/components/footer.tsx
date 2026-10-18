import Link from "next/link";
import { Panel } from "./panel";

export function Footer() {
  return (
    // Same centred 1px column as the page body, so the vertical rails run all
    // the way to the bottom of the page instead of stopping above the footer.
    <div className="mx-auto max-w-3xl border-x border-edge">
      <Panel className="screen-line-after border-t-0 pb-4">
        <div
          data-slot="panel-body"
          className="flex flex-col items-center justify-center gap-2 p-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-sm"
        >
          <span>
            &copy; {new Date().getFullYear()} Sheikh Abdullah.
          </span>
          <span className="hidden sm:inline">|</span>
          <span>
            Inspired from{" "}
            <Link
              href="https://chanhdai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              Chánh Đại
            </Link>
          </span>
        </div>
      </Panel>
    </div>
  );
}