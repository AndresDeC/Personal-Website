async function changeLanguage(lang) {
    try {
        console.log(`Cargando idioma: ${lang}`);

        // Cargar el archivo languages.json
        const response = await fetch('static/Proyectos.json');
        if (!response.ok) {
            throw new Error(`No se pudo cargar el archivo Proyectos.json`);
        }
        const translations = await response.json();
        console.log("Traducciones cargadas:", translations); // Log para verificar el contenido del archivo JSON

        // Verifica que el idioma seleccionado esté en las traducciones
        if (!translations[lang]) {
            throw new Error(`No se encontraron traducciones para el idioma: ${lang}`);
        }

        document.getElementById("home_proyectos").innerHTML = translations[lang].home_proyectos;
        document.getElementById("about_proyectos").innerHTML = translations[lang].about_proyectos;
        document.getElementById("projects_proyectos").innerHTML = translations[lang].projects_proyectos;
        document.getElementById("contact_proyectos").innerHTML = translations[lang].contact_proyectos;
        document.getElementById("blog_proyectos").innerHTML = translations[lang].blog_proyectos;
        
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
        document.getElementById("footer_text_proyectos").innerHTML = translations[lang].footer_text_proyectos;
        document.getElementById("privacy_policy_proyectos").innerHTML = translations[lang].privacy_policy_proyectos;
        

        console.log(`Idioma cambiado a: ${lang}`);

        // Guardar la preferencia de idioma en localStorage
        localStorage.setItem("lang", lang);
    } catch (error) {
        console.error("Error al cargar las traducciones:", error);
    }
}
