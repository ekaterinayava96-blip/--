import { Send, Mail, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TELEGRAM_URL = 'https://t.me/';
const EMAIL = 'bryksina.katena@mail.ru';

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="reveal">
          <p className="text-neon-green font-mono text-sm tracking-widest mb-3">СВЯЗАТЬСЯ СО МНОЙ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Давайте обсудим <span className="gradient-text">ваш проект</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Я всегда на связи и готова ответить на ваши вопросы. Напишите мне в Telegram
            или на почту, чтобы начать работу над вашим продуктом.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto" style={{ transitionDelay: '100ms' }}>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-neon-cyan/10 to-neon-cyan/5 border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-[0_0_30px_rgba(34,245,255,0.3)] transition-all duration-500"
          >
            <Send className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Telegram</div>
              <div className="text-xs text-gray-500">Быстрый ответ</div>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-neon-green/10 to-neon-green/5 border border-neon-green/30 hover:border-neon-green/60 hover:shadow-[0_0_30px_rgba(34,255,136,0.3)] transition-all duration-500"
          >
            <Mail className="w-5 h-5 text-neon-green group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Email</div>
              <div className="text-xs text-gray-500">{EMAIL}</div>
            </div>
          </a>
        </div>

        <div className="reveal mt-10 flex items-center justify-center gap-2 text-gray-500 text-sm" style={{ transitionDelay: '200ms' }}>
          <MessageCircle className="w-4 h-4 text-neon-cyan/50" />
          Отвечаю в течение 24 часов
        </div>
      </div>
    </section>
  );
}
