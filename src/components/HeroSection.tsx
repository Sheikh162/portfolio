"use client"

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-[#EAEAEA] leading-tight">
          Sheikh Abdullah
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#EAEAEA]/80 font-medium">
          Full-Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-[#EAEAEA]/70 max-w-2xl leading-relaxed">
        Developing performant web applications using modern stacks (Next.js, TypeScript, 
          Node.js). Implementing real-time features, robust APIs, and responsive UIs.
        </p>
      </div>
    </section>
  )
}

/* 
"use client"

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-[#EAEAEA] leading-tight">
          Sheikh Abdullah
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#EAEAEA]/80 font-medium">
          Computer Science Student | Full-Stack Developer
        </h2>
        <div className="flex gap-4 text-lg">
          <span>Chennai, India</span>
          <span>|</span>
          <span>+91 9360153704</span>
          <span>|</span>
          <span>sheikhabdullah.aka@gmail.com</span>
        </div>
      </div>
    </section>
  )
}
*/