// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { interTight, instrumentSerif, geistMono } from './font';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ScrollProgress } from '@/components/motion/scroll-progress';
import { Toaster } from 'sonner';
import { Footer } from '@/features/portfolio/components/footer';

export const metadata: Metadata = {
  title: 'Sheikh Abdullah - Portfolio',
  description: 'Software Engineer building modern, performant web applications.',
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
          interTight.variable,
          instrumentSerif.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
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