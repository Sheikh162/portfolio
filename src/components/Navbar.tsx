// This is a Server Component.
export default function Navbar() {
  const navLinks = [
/*     { name: 'About', href: '#about' }, */
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/50 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-bold tracking-tight text-white">
          Sheikh
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
