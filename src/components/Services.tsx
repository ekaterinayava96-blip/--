import { Check, Layout, Smartphone, Rocket, Wrench } from 'lucide-react';
import { services } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const icons = [Layout, Smartphone, Rocket, Wrench];
const accentColors = ['cyan', 'green', 'cyan', 'green'];

export function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-neon-cyan font-mono text-sm tracking-widest mb-3">ЧТО Я ДЕЛАЮ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Услуги, которые <span className="gradient-text">приводят результат</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            От идеи до запуска — полный цикл работ по созданию и улучшению веб-продуктов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = icons[idx];
            const accent = accentColors[idx];
            const isCyan = accent === 'cyan';
            return (
              <div
                key={service.id}
                className="reveal group relative rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-neon-cyan/30 transition-all duration-500"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
                  <div className={`absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center bg-[#050508]/80 backdrop-blur-sm border ${isCyan ? 'border-neon-cyan/40 text-neon-cyan' : 'border-neon-green/40 text-neon-green'} ${isCyan ? 'group-hover:neon-glow-cyan' : 'group-hover:neon-glow-green'} transition-all duration-500`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isCyan ? 'text-neon-cyan' : 'text-neon-green'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
