import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Articles } from '@/components/Articles';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Articles />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
