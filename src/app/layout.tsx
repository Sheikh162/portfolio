import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sheikh Abdullah - Portfolio',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[#0A0A0A] text-[#EAEAEA] relative overflow-x-hidden tracking-tighter">

        <div className="fixed inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}