import { Mail, Linkedin, Github } from 'lucide-react';

// This is a Server Component.
export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="mb-4 text-4xl font-bold tracking-tighter text-white md:text-5xl">
        Let's Connect
      </h2>
      <p className="mb-10 text-lg text-gray-400">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:sheikhabdullah.aka@gmail.com"
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300 transition-all hover:border-purple-400/50 hover:bg-white/10 hover:text-white"
        >
          <Mail size={18} className="transition-transform group-hover:scale-110" />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sheikh-abdullah-a-33944a280/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300 transition-all hover:border-purple-400/50 hover:bg-white/10 hover:text-white"
        >
          <Linkedin size={18} className="transition-transform group-hover:scale-110" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Sheikh162"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300 transition-all hover:border-purple-400/50 hover:bg-white/10 hover:text-white"
        >
          <Github size={18} className="transition-transform group-hover:scale-110" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
