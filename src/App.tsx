import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white relative">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(226, 232, 240, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(203, 213, 225, 0.2) 0%, transparent 50%)`
      }}></div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
