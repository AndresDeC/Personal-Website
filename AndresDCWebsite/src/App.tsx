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
        <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          <a href="#proyectos" className="hover:text-white transition-colors">Portafolio</a>
          <a href="mailto:tu-email@dominio.com" className="hover:text-blue-400 transition-colors underline decoration-blue-500/50 underline-offset-8">Contacto</a>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto pt-24 pb-20 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/5 text-blue-400 text-[10px] font-black mb-8 animate-pulse uppercase tracking-widest">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Ingeniería de Sistemas · Enfoque en Producto
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          Construyendo <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 bg-clip-text text-transparent">Sistemas Inteligentes.</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          Especializado en <span className="text-white font-medium italic">eficiencia radical</span> mediante TypeScript y la orquestación de APIs complejas. Estudiante de Ingeniería (2027).
        </p>
      </header>

      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-sm font-black mb-16 flex items-center gap-6 tracking-[0.5em] text-slate-500 uppercase">
          Proyectos Destacados <div className="h-[1px] bg-slate-800 flex-grow"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* PROYECTO: World Cup Planner */}
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">World Cup Planner</h3>
                <a href="https://world-cup-planner.netlify.app/" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Planeador integral para el mundial en México. Integración de <span className="text-white">Google Auth</span>, conexión en tiempo real con <span className="text-white">Google Flights & Hotels</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "API Integration", "Google Auth", "UX/UI"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PROYECTO: Word-to-HTML */}
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">Word-to-HTML</h3>
                <div className="bg-white/5 p-3 rounded-full opacity-30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Motor de conversión optimizado que reduce el tiempo de desarrollo en un <span className="text-white font-bold">60%</span>. Enfocado en la automatización de flujos de trabajo editoriales.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TS", "Mammoth", "Automation"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PROYECTO: Velox Clothing */}
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">Velox Clothing</h3>
                <a href="https://velox-clothing.netlify.app/" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                E-commerce de moda simulado. Implementación de geolocalización mediante la <span className="text-white">API de Google Maps</span> para logística de entrega.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Maps API", "E-commerce", "Layout"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PRÓXIMAMENTE */}
          <div className="p-8 border-2 border-dashed border-slate-800 rounded-[32px] flex flex-col justify-center items-center text-center opacity-40 group hover:opacity-100 transition-all">
            <span className="text-blue-500 text-4xl mb-4 group-hover:animate-bounce">☕</span>
            <h4 className="text-xl font-bold text-slate-300 italic tracking-tight">Backend Scalability Project</h4>
            <p className="text-slate-500 mt-2 text-sm">Node.js & Java Architectures</p>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 font-bold tracking-tighter">© 2026 ANDRÉS DEANDAR</p>
        <p className="text-slate-600 text-sm italic">"La IA no reemplaza al ingeniero, lo potencia."</p>
      </footer>
    </div>
  );
};

export default App;