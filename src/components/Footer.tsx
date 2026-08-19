import { Code2, Send, Mail } from 'lucide-react';

const EMAIL = 'bryksina.katena@mail.ru';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-neon-cyan" />
            <span className="text-lg font-bold text-white">
              katena<span className="text-neon-cyan">.dev</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a href="#services" className="hover:text-neon-cyan transition-colors">Услуги</a>
            <a href="#process" className="hover:text-neon-cyan transition-colors">Процесс</a>
            <a href="#testimonials" className="hover:text-neon-cyan transition-colors">Отзывы</a>
            <a href="#articles" className="hover:text-neon-cyan transition-colors">Статьи</a>
            <a href="#about" className="hover:text-neon-cyan transition-colors">О проекте</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-neon-green hover:border-neon-green/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2026 katena.dev — Создание лендингов и веб-продуктов
        </div>
      </div>
    </footer>
  );
}
