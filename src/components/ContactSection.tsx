"use client"

import { Mail, Linkedin, Github } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
      <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-8">
        Get in Touch
      </h2>
      
      <p className="text-xl text-[#EAEAEA]/70 mb-12 max-w-2xl leading-relaxed">
      If you have any inquiries, please feel free to reach out. You can contact me via email at:
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <a 
          href="mailto:sheikhabdullah.aka@gmail.com" 
          className="flex items-center space-x-3 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors group"
        >
          <Mail size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-lg">sheikhabdullah.aka@gmail.com</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/sheikh-abdullah-a-33944a280/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors group"
        >
          <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-lg">LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/Sheikh162" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors group"
        >
          <Github size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-lg">GitHub</span>
        </a>
      </div>
    </section>
  )
}

/* 
"use client"

import { Mail, Linkedin, Github } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
      <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-8">
        Contact
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <a 
          href="mailto:sheikhabdullah.aka@gmail.com" 
          className="flex items-center gap-2 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors"
        >
          <Mail size={20} />
          <span>sheikhabdullah.aka@gmail.com</span>
        </a>
        
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  )
}
*/