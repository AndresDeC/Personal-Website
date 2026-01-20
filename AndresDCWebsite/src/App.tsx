import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Glow de fondo dinámico */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter uppercase">Andrés<span className="text-blue-500">.</span></div>
        
        <div className="flex items-center gap-6">
          {/* LINKS SOCIALES NAV */}
          <div className="hidden md:flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            <a href="https://github.com/AndresDeC " target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/andres-deandar-/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

          {/* BOTÓN DESCARGA CV */}
          <a 
            href="/CV_PDF.pdf" 
            download="CV_PDF.pdf"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-[10px] font-bold uppercase tracking-widest"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            CV <span className="hidden sm:inline">PDF</span>
          </a>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto pt-24 pb-20 px-6 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="flex-1 z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/5 text-blue-400 text-[10px] font-black mb-8 animate-pulse uppercase tracking-widest">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Ingeniería de Sistemas · Enfoque en Producto
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
            Sistemas con <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 bg-clip-text text-transparent italic">
              Propósito Humano.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Especializado en <span className="text-white font-medium italic">eficiencia radical</span> y la orquestación de APIs. Aplicando la disciplina del deporte y el impacto social al desarrollo de software.
          </p>
        </div>

        {/* CONTENEDOR DE IMAGEN CORREGIDO */}
        <div className="relative group w-64 h-64 md:w-96 md:h-96 shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl group-hover:opacity-100 transition duration-1000 opacity-50"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-3xl">
            <img 
              src="/Linkedin.webp" 
              alt="Andrés Deandar" 
              onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=Andres"; }}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
          </div>
        </div>
      </header>

      {/* --- SECCIÓN: TRAYECTORIA Y LIDERAZGO --- */}
      <section id="trayectoria" className="max-w-6xl mx-auto px-6 py-20 bg-slate-900/10 rounded-[40px] border border-slate-800/50">
        <h2 className="text-sm font-black mb-12 flex items-center gap-6 tracking-[0.5em] text-slate-500 uppercase">
          Trayectoria y Experiencia <div className="h-[1px] bg-slate-800 flex-grow"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Experiencia Técnica</h3>
            <div className="border-l-2 border-blue-500/30 pl-6 py-2 text-white">
              <h4 className="text-lg font-bold leading-tight text-white">Technical Web Consultant</h4>
              <p className="text-slate-500 text-[10px] mb-2 uppercase font-bold tracking-tighter italic">Freelance</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimización web mediante automatización de blogs e implementación de <span className="text-white">internacionalización (i18n)</span> con traducción dinámica.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">Disciplina Deportiva</h3>
            <div className="border-l-2 border-indigo-500/30 pl-6 py-2 text-white">
              <h4 className="text-lg font-bold leading-tight text-white">Seleccionado de Basketball</h4>
              <p className="text-slate-500 text-[10px] mb-2 uppercase font-bold tracking-tighter italic">Estatales Edomex</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cuartofinalista estatal. Formación de <span className="text-white">alto rendimiento</span> y ejecución de estrategias en equipo bajo presión competitiva.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Valores y Servicio</h3>
            <div className="border-l-2 border-slate-700 pl-6 py-2 text-white">
              <h4 className="text-lg font-bold leading-tight text-white">Misionero Católico</h4>
              <p className="text-slate-500 text-[10px] mb-2 uppercase font-bold tracking-tighter italic">4 Ciclos · Trabajo en Equipo</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Acompañamiento y provisión de <span className="text-white font-medium text-white">servicios espirituales</span> en comunidades rurales de México. Labor coordinada en equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN PROYECTOS --- */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-sm font-black mb-16 flex items-center gap-6 tracking-[0.5em] text-slate-500 uppercase">
          Software Core <div className="h-[1px] bg-slate-800 flex-grow"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">World Cup Planner</h3>
                <a href="https://world-cup-planner.netlify.app/" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Planeador integral para el mundial. Integración de <span className="text-white">Google Auth</span> y conexión con <span className="text-white">Google Flights & Hotels</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["JS (ES6+)", "CSS3", "HTML5", "Google APIs"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">{tag}</span>
              ))}
            </div>
          </div>

          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">Word-to-HTML</h3>
                <div className="bg-white/5 p-3 rounded-full opacity-30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Motor de conversión que reduce el tiempo de desarrollo en un <span className="text-white font-bold">60%</span>. Enfocado en la automatización editorial.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Mammoth", "Automation"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6 text-white">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">Velox Clothing</h3>
                <a href="https://velox-clothing.netlify.app/" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                E-commerce de moda simulado. Implementación de geolocalización mediante la <span className="text-white">API de Google Maps</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-white">
              {["JS", "CSS3", "HTML5", "Maps API"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">{tag}</span>
              ))}
            </div>
          </div>

          <div className="p-8 border-2 border-dashed border-slate-800 rounded-[32px] flex flex-col justify-center items-center text-center opacity-40 group hover:opacity-100 transition-all text-white">
            <span className="text-blue-500 text-4xl mb-4 group-hover:animate-bounce">☕</span>
            <h4 className="text-xl font-bold text-slate-300 italic tracking-tight">Backend Project</h4>
            <p className="text-slate-500 mt-2 text-sm">Node.js & Java Architectures</p>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
        <div className="space-y-4">
          <p className="text-slate-500 font-bold tracking-tighter uppercase text-xs">© 2026 ANDRÉS DEANDAR</p>
          {/* LINKS SOCIALES FOOTER */}
          <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href="mailto:tu-email@dominio.com" className="text-slate-400 hover:text-blue-400 text-xs font-bold uppercase tracking-widest transition-colors border-b border-slate-800 pb-1">
            Trabajemos juntos →
          </a>
          <p className="text-slate-600 text-[10px] italic">"Ingeniería impulsada por la disciplina y el servicio en equipo."</p>
        </div>
      </footer>
    </div>
  );
};

export default App;