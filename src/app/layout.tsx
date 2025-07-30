// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { inter, ibmPlexMono } from './font';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sheikh Abdullah - Portfolio',
  description: 'Full-Stack Developer building modern, performant web applications.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth"/*  suppressHydrationWarning */>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          inter.variable, 
          ibmPlexMono.variable
        )}
      >
        <Navbar />
        <main className="flex flex-col min-h-screen px-4 pt-20 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}