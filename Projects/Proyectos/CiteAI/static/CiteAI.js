async function loadTranslations(language) {
    try {
        const response = await fetch('/Projects/Proyectos/Proyectos2/static/translations.json');
        const translations = await response.json();
        applyTranslations(translations[language]);
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function applyTranslations(translations) {
    document.getElementById('title_citeai').textContent = translations.title;
    document.getElementById('description_citeai').textContent = translations.description;
    document.getElementById('step1_citeai').textContent = translations.step1;
    document.getElementById('step2_citeai').textContent = translations.step2;
    document.getElementById('step3_citeai').textContent = translations.step3;
    document.getElementById('home_citeai').textContent = translations.home;
    document.getElementById('about_citeai').textContent = translations.about;
    document.getElementById('projects_citeai').textContent = translations.projects;
    document.getElementById('contact_citeai').textContent = translations.contact;
    document.getElementById('blog_citeai').textContent = translations.blog;
}

function changeLanguage(language) {
    loadTranslations(language);
}
