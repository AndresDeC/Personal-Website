import React from 'react';

// Interfaz para tus proyectos
interface Proyecto {
  titulo: string;
  descripcion: string;
  tags: string[];
}

const App: React.FC = () => {
  const proyectos: Proyecto[] = [
    {
      titulo: "Word-to-HTML Engine",
      descripcion: "Herramienta de conversión optimizada con TS + Mammoth. Logré reducir el tiempo de desarrollo en un 60% mediante orquestación de IA, manteniéndolo como un side-hustle de optimización personal.",
      tags: ["TS", "React", "Mammoth", "AI-Driven"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Navbar Minimalista */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">ANDRÉS <span className="text-blue-500">.</span></div>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-20 pb-16 px-6">
        <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-6 animate-pulse">
          Disponible para nuevos desafíos
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Construyendo el futuro del <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Software Eficiente.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
          Estudiante de Ingeniería en Sistemas (Universidad Online, término previsto en 12 meses). 
          Especializado en <span className="text-slate-200">TypeScript, React y Node.js</span>. 
          Actualmente explorando Java y Python para arquitectura de backend.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-all transform hover:scale-105">
            Ver Proyectos
          </button>
          <button className="border border-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-all">
            Descargar CV
          </button>
        </div>
      </header>

      {/* Proyectos Section */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
          Proyectos Destacados <div className="h-px bg-slate-800 flex-grow"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {proyectos.map((p, i) => (
            <div key={i} className="group p-8 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{p.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {p.descripcion}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Espacio para tus clases actuales */}
          <div className="p-8 border border-dashed border-slate-800 rounded-2xl flex flex-col justify-center items-center text-center">
            <span className="text-slate-500 text-sm mb-2">Formación Actual</span>
            <h4 className="text-slate-300 font-medium italic">Explorando Estructuras de Datos en Java</h4>
          </div>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm">
          Fomentando la eficiencia a través de IA y Código Limpio.
        </p>
      </footer>
    </div>
  );
};

export default App;