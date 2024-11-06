// Función para cargar y aplicar las traducciones según el idioma seleccionado
async function changeLanguage(lang) {
    try {
        // Cargar el archivo JSON correspondiente al idioma seleccionado
        const response = await fetch(`/Web/static/${lang}.json`); // Asegúrate de que esta ruta sea correcta
        const translations = await response.json();

        // Actualizar el contenido del HTML con las traducciones cargadas
        document.getElementById("intro").textContent = translations.intro;
        document.getElementById("paragraph").textContent = translations.paragraph;
        document.getElementById("projects").textContent = translations.projects;

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
    
    const lang = ["en", "es", "fr", "de", "it"].includes(userLang) ? userLang : "es";
    changeLanguage(lang);
}

// Ejecutar la detección del idioma cuando la página cargue
window.onload = detectLanguage;
