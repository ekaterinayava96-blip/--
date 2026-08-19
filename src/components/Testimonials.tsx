import { Quote } from 'lucide-react';
import { testimonials } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="testimonials" ref={ref} className="relative py-24 px-6">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-neon-cyan font-mono text-sm tracking-widest mb-3">ОТЗЫВЫ КЛИЕНТОВ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Что говорят <span className="gradient-text">обо мне</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="reveal group relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-neon-cyan/30 transition-all duration-500"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Quote className="w-8 h-8 text-neon-cyan/30 mb-4" />

              <p className="text-sm text-gray-300 leading-relaxed mb-6 min-h-[120px]">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan/30 group-hover:border-neon-cyan/60 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(34,245,255,0.4)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
