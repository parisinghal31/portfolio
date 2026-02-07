import { Download, Briefcase, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/parisinghal_cv.pdf';
    link.download = 'Pari_Singhal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white z-0"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 hidden md:block"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 hidden md:block"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Pari Singhal
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
          Computer Science Undergraduate | Software Developer | Problem Solver
        </h2>
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building a strong foundation in software engineering through disciplined learning and consistent problem-solving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={downloadResume}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium hover:shadow-lg"
          >
            <Download size={20} />
            Download Resume
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-800 text-slate-800 rounded-lg hover:bg-slate-50 transition-colors font-medium hover:shadow-lg"
          >
            <Briefcase size={20} />
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium hover:shadow-lg"
          >
            <Mail size={20} />
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
