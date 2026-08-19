import { processSteps } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Process() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="process" ref={ref} className="relative py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-neon-green font-mono text-sm tracking-widest mb-3">КАК Я РАБОТАЮ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Прозрачный процесс <span className="gradient-text">от идеи до запуска</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Чёткие этапы и сроки, чтобы вы всегда знали, на каком шаге находится ваш проект.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - horizontal on desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.id}
                className="reveal relative group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Number circle */}
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-500" />
                  <div className="absolute inset-2 rounded-full bg-[#050508] border border-white/5 group-hover:border-neon-cyan/30 transition-all duration-500" />
                  <span className="relative text-2xl font-bold gradient-text font-mono">{step.number}</span>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-neon-cyan/30" />
                  )}
                </div>

                <div className="text-center">
                  <div className="inline-block px-3 py-1 mb-3 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-mono">
                    {step.timing}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
