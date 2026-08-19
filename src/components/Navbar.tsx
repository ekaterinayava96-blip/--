import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Процесс' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#articles', label: 'Статьи' },
  { href: '#about', label: 'О проекте' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-neon-cyan/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Code2 className="w-7 h-7 text-neon-cyan transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 blur-md text-neon-cyan opacity-50">
              <Code2 className="w-7 h-7" />
            </div>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            katena<span className="text-neon-cyan neon-text-cyan">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-[#050508] bg-gradient-to-r from-neon-cyan to-neon-green rounded-lg hover:shadow-[0_0_20px_rgba(34,245,255,0.5)] transition-all duration-300"
          >
            Обсудить проект
          </a>
        </div>

        <button
          className="md:hidden text-neon-cyan"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#050508]/95 backdrop-blur-xl border-t border-neon-cyan/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-400 hover:text-neon-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2 text-sm font-medium text-[#050508] bg-gradient-to-r from-neon-cyan to-neon-green rounded-lg text-center"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
