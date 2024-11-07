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
            console.error(`No se encontraron traducciones para el idioma: ${lang}. Cargando el idioma por defecto.`);
            lang = "es"; // Establecer idioma por defecto si no se encuentra el seleccionado
        }

        // Asegurarse de que el DOM esté completamente cargado antes de realizar cambios
        document.addEventListener("DOMContentLoaded", () => {
            // Actualizar el contenido del HTML con las traducciones cargadas
            updateText("home", translations[lang].home);
            updateText("about", translations[lang].about);
            updateText("projects", translations[lang].projects);
            updateText("contact", translations[lang].contact);
            updateText("blog", translations[lang].blog);
            updateText("intro", translations[lang].intro);
            updateText("subheading", translations[lang].subheading);
            updateText("description", translations[lang].description);
            updateText("see_more", translations[lang].see_projects);
            updateText("about_title", translations[lang].about_me);
            updateText("see_projects", translations[lang].see_projects);
            updateText("footer_text", translations[lang].footer_text);
            updateText("footer_contact", translations[lang].contact);
            updateText("footer_blog", translations[lang].blog);
            updateText("footer_privacy", translations[lang].privacy_policy);

            console.log(`Idioma cambiado a: ${lang}`);

            // Guardar la preferencia de idioma en localStorage
            localStorage.setItem("lang", lang);
        });
    } catch (error) {
        console.error("Error al cargar las traducciones:", error);
    }
}

// Función para actualizar el contenido solo si el elemento existe
function updateText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        // Verificamos si el texto es diferente antes de actualizar para evitar repeticiones innecesarias
        if (element.innerHTML !== text) {
            element.innerHTML = text;
        }
    } else {
        console.warn(`El elemento con el ID "${id}" no se encuentra en el DOM.`);
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
