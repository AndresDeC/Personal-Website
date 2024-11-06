// Función para cargar y aplicar las traducciones según el idioma seleccionado
async function changeLanguage(lang) {
    try {
        // Cargar el archivo JSON correspondiente al idioma seleccionado
        const response = await fetch(`/Web/static/${lang}.json`); // Asegúrate de que esta ruta sea correcta
        const translations = await response.json();

        // Actualizar el contenido del HTML con las traducciones cargadas
        document.getElementById("home").textContent = translations.home;
        document.getElementById("about").textContent = translations.about;
        document.getElementById("projects").textContent = translations.projects;
        document.getElementById("contact").textContent = translations.contact;
        document.getElementById("blog").textContent = translations.blog;
        document.getElementById("intro").innerHTML = translations.intro;
        document.getElementById("subheading").textContent = translations.subheading;
        document.getElementById("description").textContent = translations.description;
        document.getElementById("whoAmI").textContent = translations.about_me;
        document.getElementById("paragraph").textContent = translations.paragraph;
        document.getElementById("learnMore").textContent = translations.see_projects;
        document.getElementById("footerText").textContent = translations.footer_text;
        document.getElementById("contactLink").textContent = translations.contact;
        document.getElementById("blogLink").textContent = translations.blog;
        document.getElementById("privacyPolicyLink").textContent = translations.privacy_policy;
        
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
    const lang = ["en", "es", "fr", "it", "de"].includes(userLang) ? userLang : "en";
    changeLanguage(lang);
}

// Ejecutar la detección del idioma cuando la página cargue
window.onload = detectLanguage;
