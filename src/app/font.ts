import { Inter_Tight, Instrument_Serif, Geist_Mono } from 'next/font/google';

// Primary sans-serif for body and UI
export const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
});

// Display serif for headings and the profile name
export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

// Monospace for labels, meta rows and tags
export const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});
