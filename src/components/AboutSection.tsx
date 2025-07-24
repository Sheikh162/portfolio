"use client"

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
      <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-16">
        About Me
      </h2>
      
      <div className="max-w-3xl space-y-6 text-lg text-[#EAEAEA]/70 leading-relaxed">
        <p>
        Computer Science student building full-stack systems with Next.js, TypeScript, Node.js.
        Developed trading platforms, maritime reporting systems, and computer vision applications.
        </p>
        
        <p>
        Focused on clean architecture, real-time systems, and solving technical challenges. 
        Currently expanding into distributed systems and database optimization.
        </p>
      </div>
    </section>
  )
}


/* 
"use client"

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
      <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-12">
        Education
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Shiv Nadar University Chennai</h3>
          <p className="text-lg">B.Tech in Computer Science (IoT) — CGPA: 8.66</p>
          <p className="text-[#EAEAEA]/70">2023 - 2027</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium">Languages</h4>
              <p>TypeScript, JavaScript, Python, C/C++</p>
            </div>
            <div>
              <h4 className="font-medium">Frontend</h4>
              <p>React, Next.js, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="font-medium">Backend</h4>
              <p>Node.js, Express, REST APIs</p>
            </div>
            <div>
              <h4 className="font-medium">Databases</h4>
              <p>PostgreSQL, Prisma, Redis, MongoDB</p>
            </div>
            <div>
              <h4 className="font-medium">DevOps</h4>
              <p>Docker, Git, Linux CLI</p>
            </div>
            <div>
              <h4 className="font-medium">Computer Vision</h4>
              <p>OpenCV, dlib, NumPy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
*/