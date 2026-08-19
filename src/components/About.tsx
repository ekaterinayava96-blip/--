import { Target, Heart, TrendingUp, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const points = [
  {
    icon: Target,
    title: 'Результат',
    text: 'Помогаю клиентам достигать бизнес-целей через качественные веб-продукты.',
  },
  {
    icon: Heart,
    title: 'Индивидуальный подход',
    text: 'Вникаю в задачу каждого клиента, не работаю по шаблонам.',
  },
  {
    icon: TrendingUp,
    title: 'Высокое качество',
    text: 'Чистый код, продуманный UX и внимание к деталям на каждом этапе.',
  },
  {
    icon: Users,
    title: 'На связи',
    text: 'Сопровождаю проект после запуска и остаюсь на связи для поддержки.',
  },
];

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative py-24 px-6">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-neon-cyan font-mono text-sm tracking-widest mb-3">О ПРОЕКТЕ</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Веб-продукты, которые <span className="gradient-text">работают на вас</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Мой лендинг-портфолио представляет разнообразные проекты в сфере
              веб-разработки. Я предлагаю создание лендингов, веб-приложений, а также
              услуги по запуску и доработке проектов. Моя цель — помогать клиентам
              достигать бизнес-результатов через качественные веб-продукты.
              Я стремлюсь обеспечить индивидуальный подход и высокое качество работы
              на каждом этапе проекта.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="group p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-neon-cyan/30 transition-all duration-500"
                >
                  <p.icon className="w-6 h-6 text-neon-cyan mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div className="reveal relative" style={{ transitionDelay: '150ms' }}>
            <div className="relative rounded-2xl overflow-hidden border border-neon-cyan/20 neon-glow-cyan">
              <img
                src="https://images.pexels.com/photos/34803972/pexels-photo-34803972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Рабочее пространство разработчика"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />

              {/* Floating code badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#050508]/80 backdrop-blur-md border border-neon-cyan/20 font-mono text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-neon-green/70" />
                </div>
                <p className="text-gray-400">
                  <span className="text-neon-cyan">const</span> developer = {'{'}
                </p>
                <p className="text-gray-400 pl-4">
                  name: <span className="text-neon-green">'katena'</span>,
                </p>
                <p className="text-gray-400 pl-4">
                  stack: [<span className="text-neon-green">'React'</span>, <span className="text-neon-green">'TS'</span>, <span className="text-neon-green">'Supabase'</span>],
                </p>
                <p className="text-gray-400 pl-4">
                  available: <span className="text-neon-cyan">true</span>
                </p>
                <p className="text-gray-400">{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
