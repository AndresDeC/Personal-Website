import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Glow de fondo para que no se vea plano */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
      </div>

      <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter">ANDRÉS<span className="text-blue-500">.</span></div>
        <div className="flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto pt-28 pb-24 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/5 text-blue-400 text-xs font-bold mb-8 animate-pulse uppercase tracking-widest">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Disponible para nuevos desafíos
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-tight">
          Software con <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Mentalidad de Producto.</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          Estudiante de Ingeniería en Sistemas (Finalización 2027). 
          Enfoque en <span className="text-white font-medium italic underline decoration-blue-500">eficiencia radical</span> mediante TypeScript y orquestación con IA.
        </p>
        
        <div className="flex flex-wrap gap-5">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            VER PROYECTOS
          </button>
          <button className="border border-slate-800 hover:bg-slate-900 text-slate-300 px-10 py-4 rounded-2xl font-black transition-all">
            MI CV
          </button>
        </div>
      </header>

      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-black mb-16 flex items-center gap-6">
          PROYECTOS <div className="h-[2px] bg-slate-800 flex-grow"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="group p-10 border border-slate-800 rounded-[32px] bg-slate-900/30 hover:bg-slate-900/60 hover:border-blue-500/50 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors">Word-to-HTML Engine</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Herramienta de conversión optimizada. Reduje el tiempo de desarrollo en un <span className="text-white font-bold">60%</span> usando IA, diseñado como un side-hustle de alto impacto.
            </p>
            <div className="flex flex-wrap gap-3">
              {["TS", "React", "Mammoth", "AI-Driven"].map(tag => (
                <span key={tag} className="text-xs font-black uppercase tracking-tighter px-4 py-2 bg-slate-950 rounded-xl text-slate-400 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-10 border-2 border-dashed border-slate-800 rounded-[32px] flex flex-col justify-center items-center text-center opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-blue-500 text-4xl mb-4">☕</span>
            <h4 className="text-xl font-bold text-slate-300">Próximamente</h4>
            <p className="text-slate-500 mt-2">Backend escalable con Node.js & Java</p>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 font-medium">© 2026 Andrés Deandar</p>
        <p className="text-slate-600 text-sm italic">"La IA no reemplaza al ingeniero, lo potencia."</p>
      </footer>
    </div>
  );
};

export default App;