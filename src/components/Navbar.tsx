// src/components/Navbar.tsx
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LineComponent } from "./LineComponent";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const navLink = [
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];


  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="#" className="font-mono text-lg font-medium text-foreground">
          Sheikh
        </Link>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <ThemeToggle/>
              </NavigationMenuItem>
              {navLink.map((link) => (
                <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink href={link.href} className={""/* navigationMenuTriggerStyle() */}>
                      {link.name}
                    </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <LineComponent/>
    </header>
  );
}