import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="mb-4 text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Let's Connect
      </h2>
      <p className="mb-10 text-lg text-muted-foreground">
        If you have any inquiries, please feel free to reach out. You can contact me via email.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild variant="outline">
          <a href="mailto:sheikhabdullah.aka@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://www.linkedin.com/in/sheikh-abdullah-a-33944a280/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://github.com/Sheikh162" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}