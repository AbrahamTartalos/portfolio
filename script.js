const englishButton = document.getElementById('english-button');
const spanishButton = document.getElementById('spanish-button');

// Store the elements to be translated
const elementsToTranslate = {
    title: document.getElementById('title'),
    intro: document.getElementById('intro'),
    featuredProjectsTitle: document.getElementById('featured-projects-title'),
    technicalSkillsTitle: document.getElementById('technical-skills-title'),
    educationTitle: document.getElementById('education-title'),
    aboutMeTitle: document.getElementById('about-me-title'),
    experienceTitle: document.getElementById('experience-title'),
    experienceText: document.getElementById('experience-text'),
    contactTitle: document.getElementById('contact-title'),
    contactInfo: document.getElementById('contact-info'),
    projectTitle1: document.getElementById('project-title-1'),
    projectDescription1: document.getElementById('project-description-1'),
    projectLink1: document.getElementById('project-link-1'),
    projectTitle2: document.getElementById('project-title-2'),
    projectDescription2: document.getElementById('project-description-2'),
    projectLink2: document.getElementById('project-link-2'),
    skillsList: document.getElementById('skills-list')
};

const englishContent = {
    title: "Data Scientist",
    intro: "A passionate data scientist with a strong foundation in data analysis and visualization. I am eager to learn and contribute to meaningful projects.",
    featuredProjectsTitle: "Featured Projects",
    technicalSkillsTitle: "Technical Skills",
    educationTitle: "Education",
    aboutMeTitle: "About Me",
    experienceTitle: "Experience",
    experienceText: "I am currently seeking opportunities to apply my skills and contribute to innovative projects. I am eager to learn and grow within a collaborative and challenging environment.",
    contactTitle: "Contact",
    contactInfo: "You can reach me at [Your Email] or [Your LinkedIn Profile URL]",
    projectTitle1: "[Project Title 1]",
    projectDescription1: "[Brief description of project 1]",
    projectLink1: "View Code on GitHub",
    projectTitle2: "[Project Title 2]",
    projectDescription2: "[Brief description of project 2]",
    projectLink2: "View Code on GitHub",
    skillsList: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Handling', 'Exploratory Data Analysis']
};

const spanishContent = {
    title: "Científico de Datos",
    intro: "Un científico de datos apasionado con una sólida base en análisis y visualización de datos. Estoy ansioso por aprender y contribuir a proyectos significativos.",
    featuredProjectsTitle: "Proyectos Destacados",
    technicalSkillsTitle: "Habilidades Técnicas",
    educationTitle: "Educación",
    aboutMeTitle: "Acerca de mí",
    experienceTitle: "Experiencia",
    experienceText: "Actualmente estoy buscando oportunidades para aplicar mis habilidades y contribuir a proyectos innovadores. Estoy ansioso por aprender y crecer en un entorno colaborativo y desafiante.",
    contactTitle: "Contacto",
    contactInfo: "Puedes contactarme en [Your Email] o [Your LinkedIn Profile URL]",
    projectTitle1: "[Project Title 1]",
    projectDescription1: "[Brief description of project 1]",
    projectLink1: "Ver Código en GitHub",
    projectTitle2: "[Project Title 2]",
    projectDescription2: "[Brief description of project 2]",
    projectLink2: "Ver Código en GitHub",
    skillsList: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Manejo de Datos', 'Análisis Exploratorio de Datos']
};

function updateContent(language) {
    for (const key in elementsToTranslate) {
        elementsToTranslate[key].textContent = language[key];
    }

    // Update the list items in the skills section
    const skillsList = elementsToTranslate.skillsList;
    skillsList.innerHTML = ''; // Clear the list
    language.skillsList.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
}

englishButton.addEventListener('click', () => {
    englishButton.classList.add('active');
    spanishButton.classList.remove('active');
    updateContent(englishContent);
});

spanishButton.addEventListener('click', () => {
    spanishButton.classList.add('active');
    englishButton.classList.remove('active');
    updateContent(spanishContent);
});