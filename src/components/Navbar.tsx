"use client"

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#0A0A0A]/80 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-[#EAEAEA]">
          Sheikh
        </div>
        <div className="flex space-x-8">
          <Link href="#projects" className="text-[#EAEAEA]/70 hover:text-[#8A63D2] transition-colors duration-200">
            Projects
          </Link>
          <Link href="#about" className="text-[#EAEAEA]/70 hover:text-[#8A63D2] transition-colors duration-200">
            About
          </Link>
          <Link href="#contact" className="text-[#EAEAEA]/70 hover:text-[#8A63D2] transition-colors duration-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}