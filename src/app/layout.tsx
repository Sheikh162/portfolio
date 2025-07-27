import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sheikh Abdullah - Portfolio',
  description: 'Full-Stack Developer building modern, performant web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-[#0A0A0A] text-gray-200 antialiased selection:bg-purple-500/30`}
      >
        {/* Subtle background aura effect, inspired by Vercel's design */}
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_left,_rgba(138,99,210,0.07),_transparent_40%)]" />
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_bottom_right,_rgba(138,99,210,0.07),_transparent_50%)]" />

        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
