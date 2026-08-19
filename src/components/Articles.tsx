import { ArrowUpRight, Newspaper } from 'lucide-react';
import { articles } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Articles() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="articles" ref={ref} className="relative py-24 px-6 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Newspaper className="w-5 h-5 text-neon-green" />
            <p className="text-neon-green font-mono text-sm tracking-widest">БЛОГ</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Новости и <span className="gradient-text">полезные материалы</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Статьи о веб-разработке, дизайне и трендах, которые помогают расти.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <a
              key={article.id}
              href="#"
              className="reveal group relative rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-neon-cyan/30 transition-all duration-500"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050508]/80 backdrop-blur-sm border border-neon-cyan/30 text-neon-cyan text-xs font-mono">
                  {article.tag}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-500 mb-3 font-mono">{article.date}</p>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors flex items-start gap-2">
                  {article.title}
                  <ArrowUpRight className="w-4 h-4 mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
