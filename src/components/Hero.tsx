import { ArrowDown, Sparkles, Zap, Rocket } from 'lucide-react';

const stats = [
  { value: '12+', label: 'Проектов' },
  { value: '8', label: 'Довольных клиентов' },
  { value: '24ч', label: 'Среднее время отклика' },
];

const highlights = [
  { icon: Zap, text: 'Быстрая разработка от 3 дней' },
  { icon: Sparkles, text: 'Уникальный неоновый стиль' },
  { icon: Rocket, text: 'Запуск под ключ' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-24 pb-12">
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-mono tracking-wider animate-fade-in-up">
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          ОТКРЫТА ДЛЯ НОВЫХ ПРОЕКТОВ
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Лендинги и веб-продукты,
          <br />
          <span className="gradient-text neon-text-cyan">которые приносят клиентов</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Создаю современные цифровые решения для вашего бизнеса, объединяя эстетику
          кода и высокую конверсию в каждом проекте.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          {highlights.map((h) => (
            <div
              key={h.text}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-neon-cyan/40 hover:text-neon-cyan transition-all duration-300"
            >
              <h.icon className="w-4 h-4 text-neon-cyan" />
              {h.text}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <a
            href="#contact"
            className="px-8 py-3.5 font-semibold text-[#050508] bg-gradient-to-r from-neon-cyan to-neon-green rounded-xl hover:shadow-[0_0_30px_rgba(34,245,255,0.5)] transition-all duration-300 hover:scale-[1.02]"
          >
            Начать проект
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 font-semibold text-white border border-white/20 rounded-xl hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
          >
            Смотреть услуги
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-cyan/60 hover:text-neon-cyan transition-colors animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
