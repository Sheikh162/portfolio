"use client";

import { cn } from "@/lib/utils";
import { SearchIcon, GithubIcon, MenuIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; // Using your existing ThemeToggle
import { Button } from "@/components/ui/button"; // Assuming you have shadcn button
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming you have shadcn dialog
import { LineComponent } from "./LineComponent";

// Define your navigation links here
const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // Mobile menu state
  const pathname = usePathname();

  // Handle scroll effect for the "affix" state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-affix={isScrolled}
      className={cn(
        "sticky top-0 z-50 w-full overflow-x-hidden bg-background px-2 pt-2 transition-shadow duration-300",
        // The specific styles from site-header.tsx:
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border", 
        // Add blur manually since the original relies on bg-background opacity
        isScrolled && "bg-background/80 backdrop-blur-lg"
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container="true"
      >
        {/* 1. Home / Logo Mark */}
        <Link
          href="/"
          className={cn(
            "flex items-center justify-center transition-opacity duration-300",
            isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          aria-label="Home"
        >
          {/* Replaced 'SiteHeaderMark' with a standard Home Icon */}
          <HomeIcon className="size-5" />
        </Link>

        <div className="flex-1" />

        {/* 2. Desktop Navigation */}
        <nav className="hidden items-center gap-4 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-sm font-medium transition-colors duration-300",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Right Actions (Search, Github, Theme) */}
        <div className="flex items-center gap-2 *:first:mr-2">
          
          {/* Mock Command Menu / Search Trigger */}
          {/* <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 rounded-full px-2.5 text-muted-foreground shadow-none bg-background hover:bg-accent"
            onClick={() => alert("Search functionality would go here")}
          >
            <SearchIcon className="size-3.5" />
            <span className="hidden text-xs font-medium sm:inline-block">
              Search
            </span>
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button> */}

          {/* GitHub Link */}
          <Link
            href="https://github.com/sheikh162"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            <span className="sr-only">GitHub</span>
          </Link>

          {/* Separator */}
          <span className="mx-2 hidden h-4 w-px bg-border sm:block" />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8 sm:hidden">
                <MenuIcon className="size-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Navigation</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium py-2 border-b border-border/50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <LineComponent/>
    </header>
  );
}