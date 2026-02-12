"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I'm ",
    "hero.name": "Lucio",
    "hero.tagline": "Frontend Developer specialized in the React & Next.js ecosystem",
    "hero.description": "I build scalable, performant and accessible web applications with TypeScript, modern UI libraries and a strong focus on clean architecture.",
    "hero.viewProjects": "View my projects",
    "hero.downloadCV": "Download CV",

    // About Section
    "about.title": "About",
    "about.titleHighlight": "me",
    "about.description": "Frontend Developer specialized in React.js and Next.js with experience building scalable web applications using TypeScript and modern UI libraries. Strong focus on performance optimization, responsive design, accessibility (A11y), and clean architecture. Experience integrating REST APIs, managing global state with Redux Toolkit, and working in Agile/Scrum environments with Git-based workflows.",
    "about.feature1.title": "Frontend Development",
    "about.feature1.description": "Building modern, scalable interfaces with React.js, Next.js and TypeScript. Reusable component architecture, design systems and responsive layouts for every screen size",
    "about.feature2.title": "Performance & Accessibility",
    "about.feature2.description": "Optimizing applications with code splitting, lazy loading and memoization. Lighthouse audits, A11y compliance and responsive design to ensure the best user experience",
    "about.feature3.title": "Collaboration & Workflow",
    "about.feature3.description": "Comfortable working in Agile/Scrum environments with Git-based workflows, branching strategies, code reviews and sprint planning. Self-taught and passionate about continuous improvement",
    "about.skillsTitle": "Technologies and Tools",

    // Experience Section
    "experience.title": "My",
    "experience.titleHighlight": "Experience",
    "experience.description": "My professional journey in frontend development",
    "experience.job1.title": "Frontend Developer Jr",
    "experience.job1.company": "CoderCraft",
    "experience.job1.period": "October 2024 - November 2025",
    "experience.job1.location": "Remote",
    "experience.job1.desc1": "Developed and maintained modern frontend applications using React.js, Next.js and TypeScript",
    "experience.job1.desc2": "Built reusable UI components and maintained scalable design systems",
    "experience.job1.desc3": "Integrated REST APIs and third-party services",
    "experience.job1.desc4": "Applied best practices for performance, accessibility and maintainability",
    "experience.job1.desc5": "Collaborated within a development team using GitHub and GitLab with branching strategies, pull requests, code reviews and merges",
    "experience.job1.desc6": "Participated in sprint planning, task estimation and deadline-driven delivery",

    // Education Section
    "education.title": "My",
    "education.titleHighlight": "Education",
    "education.edu1.title": "Technical Degree in Programming",
    "education.edu1.institution": "UTN Córdoba",
    "education.edu1.period": "In Progress",
    "education.edu2.title": "Next.js 15 & React – The Complete Guide",
    "education.edu2.institution": "Udemy",
    "education.edu2.period": "2025",
    "education.edu3.title": "High School Diploma – Services Specialization",
    "education.edu3.institution": "C.E.N.M.A María Saleme de Burnichón",
    "education.edu3.period": "2017",

    // Projects Section
    "projects.title": "My",
    "projects.titleHighlight": "Projects",
    "projects.description": "A selection of projects that showcase my frontend skills and experience",
    "projects.project1.title": "Al'Tagglio Pizza E-commerce + POS",
    "projects.project1.description": "E-commerce platform with integrated Point of Sale system. Product management, cart logic, order flow, secure payments via Mercado Pago, and responsive UI with reusable component architecture.",
    "projects.project2.title": "PromoDrop – Web Application",
    "projects.project2.description": "Web application built with Next.js and TypeScript. Dynamic UI components, responsive layouts, clean architecture and production-ready deployment on Vercel.",
    "projects.project3.title": "Web App for Record Label",
    "projects.project3.description": "Web platform for a record label that allows users to explore and listen to music. Built with a focus on interactive UI and smooth user experience.",
    "projects.project4.title": "MAF Car Dealership",
    "projects.project4.description": "Online vehicle catalog with advanced filters, dynamic search and external API integration. Responsive design and accessible interface.",

    // Contact Section
    "contact.title": "Let's talk about your",
    "contact.titleHighlight": "project",
    "contact.description": "Have an idea? I'd love to hear it and help you make it a reality",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "How can I help you?",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project...",
    "contact.form.send": "Send message",
    "contact.info.title": "Contact information",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.locationValue": "Córdoba Capital, Argentina",
    "contact.social.title": "Follow me",

    // Footer
    "footer.rights": "© 2025 Lucio Andrés Medina Rodríguez. All rights reserved.",
    "footer.tech": "Built with Next.js, TypeScript and Tailwind CSS"
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.greeting": "Hola, soy ",
    "hero.name": "Lucio",
    "hero.tagline": "Frontend Developer especializado en el ecosistema React & Next.js",
    "hero.description": "Construyo aplicaciones web escalables, performantes y accesibles con TypeScript, bibliotecas modernas de UI y un fuerte enfoque en arquitectura limpia.",
    "hero.viewProjects": "Ver mis proyectos",
    "hero.downloadCV": "Descargar CV",

    // About Section
    "about.title": "Sobre",
    "about.titleHighlight": "mí",
    "about.description": "Desarrollador Frontend especializado en React.js y Next.js, con experiencia en la construcción de aplicaciones web escalables utilizando TypeScript y bibliotecas modernas de UI. Enfoque sólido en optimización de rendimiento, diseño responsive, accesibilidad (A11y) y arquitectura limpia. Experiencia integrando APIs REST, gestionando estado global con Redux Toolkit y trabajando en entornos Agile/Scrum con flujos de trabajo basados en Git.",
    "about.feature1.title": "Desarrollo Frontend",
    "about.feature1.description": "Construcción de interfaces modernas y escalables con React.js, Next.js y TypeScript. Arquitectura de componentes reutilizables, sistemas de diseño y layouts responsive para cada pantalla",
    "about.feature2.title": "Performance y Accesibilidad",
    "about.feature2.description": "Optimización de aplicaciones con code splitting, lazy loading y memoización. Auditorías Lighthouse, cumplimiento A11y y diseño responsive para garantizar la mejor experiencia de usuario",
    "about.feature3.title": "Colaboración y Metodología",
    "about.feature3.description": "Experiencia trabajando en entornos Agile/Scrum con flujos de trabajo basados en Git, estrategias de branching, code reviews y planificación de sprints. Autodidacta y apasionado por la mejora continua",
    "about.skillsTitle": "Tecnologías y Herramientas",

    // Experience Section
    "experience.title": "Mi",
    "experience.titleHighlight": "Experiencia",
    "experience.description": "Mi trayectoria profesional en el desarrollo frontend",
    "experience.job1.title": "Frontend Developer Jr",
    "experience.job1.company": "CoderCraft",
    "experience.job1.period": "Octubre 2024 - Noviembre 2025",
    "experience.job1.location": "Remoto",
    "experience.job1.desc1": "Desarrollo y mantenimiento de aplicaciones frontend modernas utilizando React.js, Next.js y TypeScript",
    "experience.job1.desc2": "Construcción de componentes reutilizables y sistemas de diseño escalables",
    "experience.job1.desc3": "Integración de APIs REST y servicios de terceros",
    "experience.job1.desc4": "Aplicación de buenas prácticas de rendimiento, accesibilidad y mantenibilidad del código",
    "experience.job1.desc5": "Trabajo colaborativo utilizando GitHub y GitLab con estrategias de branching, pull requests, code reviews y merges",
    "experience.job1.desc6": "Participación en planificación de sprints, estimación de tareas y trabajo bajo metodología Scrum",

    // Education Section
    "education.title": "Mi",
    "education.titleHighlight": "Educación",
    "education.edu1.title": "Tecnicatura en Programación",
    "education.edu1.institution": "UTN Córdoba",
    "education.edu1.period": "En Progreso",
    "education.edu2.title": "Next.js 15 & React – The Complete Guide",
    "education.edu2.institution": "Udemy",
    "education.edu2.period": "2025",
    "education.edu3.title": "Título Secundario – Especialización en Servicios",
    "education.edu3.institution": "C.E.N.M.A María Saleme de Burnichón",
    "education.edu3.period": "2017",

    // Projects Section
    "projects.title": "Mis",
    "projects.titleHighlight": "Proyectos",
    "projects.description": "Una selección de proyectos que demuestran mis habilidades y experiencia en frontend",
    "projects.project1.title": "Al'Tagglio Pizza E-commerce + POS",
    "projects.project1.description": "Plataforma e-commerce con sistema POS integrado. Gestión de productos, carrito, flujo de pedidos, pagos seguros vía Mercado Pago e interfaz responsive con arquitectura de componentes reutilizables.",
    "projects.project2.title": "PromoDrop – Aplicación Web",
    "projects.project2.description": "Aplicación web desarrollada con Next.js y TypeScript. Componentes dinámicos, layouts responsive, arquitectura limpia y deploy en producción en Vercel.",
    "projects.project3.title": "Web App para Sello Discográfico",
    "projects.project3.description": "Plataforma web para un sello discográfico que permite explorar y escuchar música. Construida con foco en UI interactiva y experiencia de usuario fluida.",
    "projects.project4.title": "Concesionaria de Autos MAF",
    "projects.project4.description": "Catálogo online de vehículos con filtros avanzados, búsqueda dinámica e integración de API externa. Diseño responsive e interfaz accesible.",

    // Contact Section
    "contact.title": "Hablemos de tu",
    "contact.titleHighlight": "proyecto",
    "contact.description": "¿Tenés una idea? Me encantaría escucharla y ayudarte a hacerla realidad",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "tu@email.com",
    "contact.form.subject": "Asunto",
    "contact.form.subjectPlaceholder": "¿En qué puedo ayudarte?",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Cuéntame sobre tu proyecto...",
    "contact.form.send": "Enviar mensaje",
    "contact.info.title": "Información de contacto",
    "contact.info.email": "Email",
    "contact.info.location": "Ubicación",
    "contact.info.locationValue": "Córdoba Capital, Argentina",
    "contact.social.title": "Sígueme",

    // Footer
    "footer.rights": "© 2025 Lucio Andrés Medina Rodríguez. Todos los derechos reservados.",
    "footer.tech": "Desarrollado con Next.js, TypeScript y Tailwind CSS"
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en") // Default to English

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
