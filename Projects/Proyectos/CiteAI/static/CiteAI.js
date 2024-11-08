// Función para cargar y aplicar las traducciones según el idioma seleccionado
async function changeLanguage(lang) {
    try {
        console.log(`Cargando idioma: ${lang}`);

        // Cargar el archivo languages.json
        const response = await fetch('/static/languages.json');
        if (!response.ok) {
            throw new Error(`No se pudo cargar el archivo languages.json`);
        }
        const translations = await response.json();

        // Verifica que el idioma seleccionado esté en las traducciones
        if (!translations[lang]) {
            console.error(`No se encontraron traducciones para el idioma: ${lang}. Cargando el idioma por defecto.`);
            lang = "es"; // Establecer idioma por defecto si no se encuentra el seleccionado
        }

        // Actualizar el contenido del HTML con las traducciones cargadas
        updateText("home_citeai", translations[lang].home_citeai);
        updateText("about_citeai", translations[lang].about_citeai);
        updateText("projects_citeai", translations[lang].projects_citeai);
        updateText("contact_citeai", translations[lang].contact_citeai);
        updateText("blog_citeai", translations[lang].blog_citeai);
        updateText("title_citeai", translations[lang].title_citeai);
        updateText("description_citeai", translations[lang].description_citeai);
        updateText("step1_citeai", translations[lang].step1_citeai);
        updateText("step2_citeai", translations[lang].step2_citeai);
        updateText("step3_citeai", translations[lang].step3_citeai);

        console.log(`Idioma cambiado a: ${lang}`);

        // Guardar la preferencia de idioma en localStorage
        localStorage.setItem("lang", lang);

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
