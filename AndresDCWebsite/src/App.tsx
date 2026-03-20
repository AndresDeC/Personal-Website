import { useEffect, useState } from "react";

const SPANISH_COUNTRIES = [
  "MX","ES","AR","CO","CL","PE","VE","EC","GT","CU",
  "BO","DO","HN","PY","SV","NI","CR","PA","UY","GQ"
];

const content = {
  es: {
    badge: "Ingeniería de Sistemas · Enfoque en Producto",
    headline1: "Sistemas con",
    headline2: "Propósito Humano.",
    sub: "Especializado en",
    subBold: "eficiencia radical",
    subEnd: "y la orquestación de APIs. Aplicando la disciplina del deporte y el impacto social al desarrollo de software.",
    nav: { github: "GitHub", linkedin: "LinkedIn", cv: "CV PDF", lang: "English" },
    exp: {
      title: "Trayectoria y Experiencia",
      tech: { label: "Experiencia Técnica", role: "Technical Web Consultant", sub: "Freelance", desc: "Optimización web mediante automatización de blogs e implementación de", bold: "internacionalización (i18n)", end: "con traducción dinámica." },
      sport: { label: "Disciplina Deportiva", role: "Seleccionado de Basketball", sub: "Estatales Edomex", desc: "Cuartofinalista estatal. Formación de", bold: "alto rendimiento", end: "y ejecución de estrategias en equipo bajo presión competitiva." },
      values: { label: "Valores y Servicio", role: "Misionero Católico", sub: "4 Ciclos · Trabajo en Equipo", desc: "Acompañamiento y provisión de", bold: "servicios espirituales", end: "en comunidades rurales de México." },
    },
    projects: {
      title: "Software Core",
      wcp: { name: "World Cup Planner", desc: "Planeador integral para el mundial. Integración de", bold: "Google Auth", end: "y conexión con Google Flights & Hotels." },
      wth: { name: "Word-to-HTML", desc: "Motor de conversión que reduce el tiempo de desarrollo en un", bold: "60%", end: ". Enfocado en la automatización editorial.", badge: "En vivo" },
      stackr: { name: "Stackr", desc: "CLI tool que genera proyectos con tu stack preferido y", bold: "recuerda tus preferencias", end: ". Open source.", badge: "Open Source" },
      velox: { name: "Velox Clothing", desc: "E-commerce fullstack con geolocalización mediante la", bold: "API de Google Maps", end: "." },
    },
    footer: { copy: "© 2026 Andrés Deandar", quote: '"Ingeniería impulsada por la disciplina y el servicio en equipo."' }
  },
  en: {
    badge: "Systems Engineering · Product-Focused",
    headline1: "Systems with",
    headline2: "Human Purpose.",
    sub: "Specialized in",
    subBold: "radical efficiency",
    subEnd: "and API orchestration. Applying the discipline of sport and social impact to software development.",
    nav: { github: "GitHub", linkedin: "LinkedIn", cv: "CV PDF", lang: "Español" },
    exp: {
      title: "Background & Experience",
      tech: { label: "Technical Experience", role: "Technical Web Consultant", sub: "Freelance", desc: "Web optimization through blog automation and implementation of", bold: "internationalization (i18n)", end: "with dynamic translation." },
      sport: { label: "Athletic Discipline", role: "State Basketball Team", sub: "Edomex State Championships", desc: "State quarterfinalist. Built", bold: "high-performance", end: "habits and executed team strategies under competitive pressure." },
      values: { label: "Values & Service", role: "Catholic Missionary", sub: "4 Cycles · Team Work", desc: "Providing accompaniment and", bold: "spiritual services", end: "in rural communities across Mexico." },
    },
    projects: {
      title: "Software Core",
      wcp: { name: "World Cup Planner", desc: "Comprehensive World Cup planner with", bold: "Google Auth", end: "integration and Google Flights & Hotels connection." },
      wth: { name: "Word-to-HTML", desc: "Conversion engine that reduces development time by", bold: "60%", end: ". Focused on editorial automation.", badge: "Live" },
      stackr: { name: "Stackr", desc: "CLI tool that scaffolds projects with your preferred stack and", bold: "remembers your preferences", end: ". Open source.", badge: "Open Source" },
      velox: { name: "Velox Clothing", desc: "Fullstack e-commerce with geolocation via the", bold: "Google Maps API", end: "." },
    },
    footer: { copy: "© 2026 Andrés Deandar", quote: '"Engineering driven by discipline and team service."' }
  }
};

export default function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [langReady, setLangReady] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "es" || saved === "en") {
      setLang(saved);
      setLangReady(true);
      return;
    }
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(d => {
        if (d.country_code && !SPANISH_COUNTRIES.includes(d.country_code)) {
          setLang("en");
        }
      })
      .catch(() => {})
      .finally(() => setLangReady(true));
  }, []);

  const toggleLang = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("portfolio_lang", next);
  };

  if (!langReady) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      {/* NAV */}
      <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter uppercase">
          Andrés<span className="text-blue-500">.</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            <a href="https://github.com/AndresDeC" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.nav.github}</a>
            <a href="https://www.linkedin.com/in/andres-deandar-/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.nav.linkedin}</a>
          </div>
          <button
            onClick={toggleLang}
            className="px-4 py-2 border border-slate-700 hover:border-blue-500/50 text-slate-400 hover:text-white rounded-full transition-all text-[10px] font-bold uppercase tracking-widest"
          >
            {t.nav.lang}
          </button>
          <a
            href="/CV_PDF.pdf"
            download
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-[10px] font-bold uppercase tracking-widest"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            {t.nav.cv}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto pt-24 pb-20 px-6 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="flex-1 z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/5 text-blue-400 text-[10px] font-black mb-8 animate-pulse uppercase tracking-widest">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            {t.badge}
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
            {t.headline1}<br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 bg-clip-text text-transparent italic">
              {t.headline2}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            {t.sub} <span className="text-white font-medium italic">{t.subBold}</span> {t.subEnd}
          </p>
        </div>
        <div className="relative group w-64 h-64 md:w-96 md:h-96 shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl group-hover:opacity-100 transition duration-1000 opacity-50" />
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

      {/* EXPERIENCIA */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-slate-900/10 rounded-[40px] border border-slate-800/50">
        <h2 className="text-sm font-black mb-12 flex items-center gap-6 tracking-[0.5em] text-slate-500 uppercase">
          {t.exp.title} <div className="h-[1px] bg-slate-800 flex-grow" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { color: "blue", data: t.exp.tech },
            { color: "indigo", data: t.exp.sport },
            { color: "slate", data: t.exp.values },
          ].map(({ color, data }) => (
            <div key={data.role} className="space-y-4">
              <h3 className={`text-${color}-400 font-bold uppercase tracking-widest text-[10px]`}>{data.label}</h3>
              <div className={`border-l-2 border-${color}-500/30 pl-6 py-2`}>
                <h4 className="text-lg font-bold leading-tight text-white">{data.role}</h4>
                <p className="text-slate-500 text-[10px] mb-2 uppercase font-bold tracking-tighter italic">{data.sub}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {data.desc} <span className="text-white">{data.bold}</span> {data.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-sm font-black mb-16 flex items-center gap-6 tracking-[0.5em] text-slate-500 uppercase">
          {t.projects.title} <div className="h-[1px] bg-slate-800 flex-grow" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* World Cup Planner */}
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">{t.projects.wcp.name}</h3>
                <a href="https://world-cup-planner.netlify.app/" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {t.projects.wcp.desc} <span className="text-white">{t.projects.wcp.bold}</span> {t.projects.wcp.end}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["JS (ES6+)", "CSS3", "HTML5", "Google APIs"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">{tag}</span>
              ))}
            </div>
          </div>

          {/* Word-to-HTML */}
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">{t.projects.wth.name}</h3>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full mt-1 inline-block">{t.projects.wth.badge}</span>
                </div>
                <a href="https://wordtocleanhtml.vercel.app/" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {t.projects.wth.desc} <span className="text-white font-bold">{t.projects.wth.bold}</span> {t.projects.wth.end}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Mammoth", "Automation"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">{tag}</span>
              ))}
            </div>
          </div>

          {/* Stackr */}
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">{t.projects.stackr.name}</h3>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full mt-1 inline-block">{t.projects.stackr.badge}</span>
                </div>
                <a href="https://github.com/AndresDeC/stackr" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {t.projects.stackr.desc} <span className="text-white font-bold">{t.projects.stackr.bold}</span> {t.projects.stackr.end}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "CLI", "npm", "Open Source"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">{tag}</span>
              ))}
            </div>
          </div>

          {/* Velox Clothing */}
          <div className="group p-8 border border-slate-800 rounded-[32px] bg-slate-900/20 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">{t.projects.velox.name}</h3>
                <a href="https://velox-clothing.netlify.app/" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {t.projects.velox.desc} <span className="text-white">{t.projects.velox.bold}</span> {t.projects.velox.end}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["JS", "CSS3", "HTML5", "Maps API"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase px-3 py-1 bg-slate-950 rounded-lg text-slate-500 border border-slate-800">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-4">
          <p className="text-slate-500 font-bold tracking-tighter uppercase text-xs">{t.footer.copy}</p>
          <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="https://github.com/AndresDeC" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/andres-deandar-/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
        <p className="text-slate-600 text-[10px] italic">{t.footer.quote}</p>
      </footer>
    </div>
  );
}