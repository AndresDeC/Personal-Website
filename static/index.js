// Función para cargar y aplicar las traducciones según el idioma seleccionado
async function changeLanguage(lang) {
    try {
        console.log(`Cargando idioma: ${lang}`);

        // Cargar el archivo languages.json
        const response = await fetch(`/static/languages.json`);
        if (!response.ok) {
            throw new Error(`No se pudo cargar el archivo languages.json`);
        }
        const translations = await response.json();

        // Verifica que el idioma seleccionado esté en las traducciones
        if (!translations[lang]) {
            throw new Error(`No se encontraron traducciones para el idioma: ${lang}`);
        }

        // Actualizar el contenido del HTML con las traducciones cargadas
        document.getElementById("home").innerHTML = translations[lang].home;
        document.getElementById("about").innerHTML = translations[lang].about;
        document.getElementById("projects").innerHTML = translations[lang].projects;
        document.getElementById("contact").innerHTML = translations[lang].contact;
        document.getElementById("blog").innerHTML = translations[lang].blog;
        document.getElementById("intro").innerHTML = translations[lang].intro;
        document.getElementById("subheading").innerHTML = translations[lang].subheading;
        document.getElementById("description").innerHTML = translations[lang].description;
        document.getElementById("see_more").innerHTML = translations[lang].see_projects;
        document.getElementById("about_title").innerHTML = translations[lang].about_me;
        document.getElementById("see_projects").innerHTML = translations[lang].see_projects;
        document.getElementById("footer_text").innerHTML = translations[lang].footer_text;
        document.getElementById("footer_contact").innerHTML = translations[lang].contact;
        document.getElementById("footer_blog").innerHTML = translations[lang].blog;
        document.getElementById("footer_privacy").innerHTML = translations[lang].privacy_policy;

        console.log(`Idioma cambiado a: ${lang}`);

        // Guardar la preferencia de idioma en localStorage
        localStorage.setItem("lang", lang);
    } catch (error) {
        console.error("Error al cargar las traducciones:", error);
    }
}

// Función para detectar el idioma del navegador y cargar el idioma correspondiente
function detectLanguage() {
    const savedLang = localStorage.getItem("lang");
    const userLang = savedLang || (navigator.language || navigator.userLanguage).slice(0, 2);
    
    const lang = ["en", "es", "fr", "de", "it", "pt"].includes(userLang) ? userLang : "es";
    console.log(`Idioma detectado: ${lang}`);
    changeLanguage(lang);
}

// Ejecutar la detección del idioma cuando la página cargue
window.onload = detectLanguage;
