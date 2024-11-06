async function changeLanguage(lang) {
    try {
        console.log(`Cargando idioma: ${lang}`);

        // Cargar el archivo languages.json
        const response = await fetch(`/static/Proyectos.json`);
        if (!response.ok) {
            throw new Error(`No se pudo cargar el archivo Proyectos.json`);
        }
        const translations = await response.json();
        console.log(translations); // Verificar qué traducciones se cargaron

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

        // Actualizar contenido de la sección de Proyectos
        document.getElementById("project1_title").innerHTML = translations[lang].project1_title;
        document.getElementById("project1_date").innerHTML = translations[lang].project1_date;
        document.getElementById("project1_desc1").innerHTML = translations[lang].project1_desc1;
        document.getElementById("project1_desc2").innerHTML = translations[lang].project1_desc2;
        document.getElementById("project1_desc3").innerHTML = translations[lang].project1_desc3;
        
        document.getElementById("project2_title").innerHTML = translations[lang].project2_title;
        document.getElementById("project2_date").innerHTML = translations[lang].project2_date;
        document.getElementById("project2_desc1").innerHTML = translations[lang].project2_desc1;
        document.getElementById("project2_desc2").innerHTML = translations[lang].project2_desc2;

        // Actualizar contenido del footer
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
    console.log(`Idioma guardado en localStorage: ${savedLang}`);
    const userLang = savedLang || (navigator.language || navigator.userLanguage).split('-')[0];
    
    const lang = ["en", "es", "fr", "de", "it"].includes(userLang) ? userLang : "es";
    console.log(`Idioma detectado: ${lang}`);
    changeLanguage(lang);
}

// Ejecutar la detección del idioma cuando la página cargue
window.onload = detectLanguage;
