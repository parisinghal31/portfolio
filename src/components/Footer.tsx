export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Pari Singhal</h3>
        <p className="text-slate-400 mb-4">Computer Science Undergraduate | Software Developer</p>
        <p className="text-slate-500 text-sm mb-4">
          Committed to continuous learning and building meaningful solutions through code.
        </p>
        <p className="text-slate-600 text-sm">
          &copy; {currentYear} Pari Singhal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
