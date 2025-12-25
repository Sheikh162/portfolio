// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { inter, ibmPlexMono } from './font';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'sonner';
import { Footer } from '@/features/portfolio/components/footer';

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden",
          inter.variable, 
          ibmPlexMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Toaster/>
          <Footer />
        </ThemeProvider>
      </body>
  </html>
  );
}