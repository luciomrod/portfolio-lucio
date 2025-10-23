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
    "hero.tagline": "I create dynamic and minimalist interfaces",
    "hero.description": "Frontend Developer specialized in Next.js, TypeScript and MERN Stack",
    "hero.viewProjects": "View my projects",
    "hero.downloadCV": "Download CV",

    // About Section
    "about.title": "About",
    "about.titleHighlight": "me",
    "about.description": "Frontend Developer with 2 years of hands-on experience in real projects, specialized in Next.js, TypeScript and the MERN stack. Currently developing modern and optimized interfaces.",
    "about.feature1.title": "Frontend Development",
    "about.feature1.description": "2 years of experience creating modern interfaces with React, Next.js and TypeScript",
    "about.feature2.title": "UI/UX Design",
    "about.feature2.description": "Specialized in creating intuitive and accessible user experiences",
    "about.feature3.title": "Optimization",
    "about.feature3.description": "Focus on performance, SEO and development best practices",
    "about.skillsTitle": "Technologies and Tools",

    // Experience Section
    "experience.title": "My",
    "experience.titleHighlight": "Experience",
    "experience.description": "A journey through my professional career in frontend development",
    "experience.job1.title": "Frontend Developer Jr",
    "experience.job1.company": "Coder Craft",
    "experience.job1.period": " October 2024 - October 2025",
    "experience.job1.location": "Córdoba, Argentina",
    "experience.job1.desc1": "Development of components and pages with Next.js, TypeScript and React.js",
    "experience.job1.desc2": "Implementation of interfaces with Tailwind CSS, shadcn/ui and Material UI",
    "experience.job1.desc3": "Use of GitLab for branching, code review and pull requests",
    "experience.job1.desc4": "Participation in agile methodologies and daily meetings",
    "experience.job2.title": "Freelance Developer",
    "experience.job2.company": "Projects for professionals and SMEs",
    "experience.job2.period": "2023 - Present",
    "experience.job2.location": "Remote",
    "experience.job2.desc1": "Development of responsive landing pages and corporate websites",
    "experience.job2.desc2": "Integration with REST APIs and external tools",
    "experience.job2.desc3": "Basic SEO optimization",
    "experience.job2.desc4": "Direct client management and project delivery",
    "experience.job3.title": "Trainee Developer",
    "experience.job3.company": "Private project",
    "experience.job3.period": "November 2022",
    "experience.job3.location": "Córdoba, Argentina",
    "experience.job3.desc1": "First contact with React.js and JavaScript in real environments",
    "experience.job3.desc2": "Collaboration in interface design and development",
    "experience.job3.desc3": "Learning development best practices",

    // Projects Section
    "projects.title": "My",
    "projects.titleHighlight": "Projects",
    "projects.description": "A selection of projects that demonstrate my skills and experience",
    "projects.project1.title": "Pizza E-commerce Platform",
    "projects.project1.description": "Full-stack pizza management system with admin dashboard, real-time orders, analytics, and complete e-commerce features.",
    "projects.project2.title": "Web App for Record Label",
    "projects.project2.description": "Web platform for a record label that allows users to explore and listen to music.",
    "projects.project3.title": "MAF Car Dealership",
    "projects.project3.description": "Online vehicle catalog with advanced filters and external API integration.",
    "projects.project4.title": "Institutional Website - Event Producer",
    "projects.project4.description": "Corporate website with elegant design and SEO optimization.",
    "projects.project5.title": "Landing Page for Psychologist",
    "projects.project5.description": "Website for psychologist specialized in children and adolescents with modern, minimalist and responsive design.",
    "projects.project6.title": "Government Web App Optimization",
    "projects.project6.description": "UX/UI improvements, implementation of reusable components and SEO optimization on the Municipality of La Granja website.",

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
    "footer.rights": "© 2024 Lucio Andrés Medina Rodríguez. All rights reserved.",
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
    "hero.tagline": "Creo interfaces dinámicas y minimalistas",
    "hero.description": "Frontend Developer especializado en Next.js, TypeScript y MERN Stack",
    "hero.viewProjects": "Ver mis proyectos",
    "hero.downloadCV": "Descargar CV",

    // About Section
    "about.title": "Sobre",
    "about.titleHighlight": "mí",
    "about.description": "Desarrollador Frontend con 2 años de experiencia práctica en proyectos reales, especializado en Next.js, TypeScript y el stack MERN. Actualmente desarrollando interfaces modernas y optimizadas.",
    "about.feature1.title": "Desarrollo Frontend",
    "about.feature1.description": "2 años de experiencia creando interfaces modernas con React, Next.js y TypeScript",
    "about.feature2.title": "Diseño UI/UX",
    "about.feature2.description": "Especializado en crear experiencias de usuario intuitivas y accesibles",
    "about.feature3.title": "Optimización",
    "about.feature3.description": "Enfoque en rendimiento, SEO y mejores prácticas de desarrollo",
    "about.skillsTitle": "Tecnologías y Herramientas",

    // Experience Section
    "experience.title": "Mi",
    "experience.titleHighlight": "Experiencia",
    "experience.description": "Un recorrido por mi trayectoria profesional en el desarrollo frontend",
    "experience.job1.title": "Frontend Developer Jr",
    "experience.job1.company": "Coder Craft",
    "experience.job1.period": "2024 - Actualidad",
    "experience.job1.location": "Córdoba, Argentina",
    "experience.job1.desc1": "Desarrollo de componentes y páginas con Next.js, TypeScript y React.js",
    "experience.job1.desc2": "Implementación de interfaces con Tailwind CSS, shadcn/ui y Material UI",
    "experience.job1.desc3": "Uso de GitLab para branching, revisión de código y pull requests",
    "experience.job1.desc4": "Participación en metodologías ágiles y daily meetings",
    "experience.job2.title": "Desarrollador Freelance",
    "experience.job2.company": "Proyectos para profesionales y PYMEs",
    "experience.job2.period": "2023 - Actualidad",
    "experience.job2.location": "Remoto",
    "experience.job2.desc1": "Desarrollo de landing pages y sitios corporativos responsive",
    "experience.job2.desc2": "Integración con APIs REST y herramientas externas",
    "experience.job2.desc3": "Optimización SEO básica",
    "experience.job2.desc4": "Gestión directa con clientes y entrega de proyectos",
    "experience.job3.title": "Trainee Developer",
    "experience.job3.company": "Proyecto privado",
    "experience.job3.period": "2022",
    "experience.job3.location": "Córdoba, Argentina",
    "experience.job3.desc1": "Primer contacto con React.js y JavaScript en entornos reales",
    "experience.job3.desc2": "Colaboración en diseño y desarrollo de interfaces",
    "experience.job3.desc3": "Aprendizaje de buenas prácticas de desarrollo",

    // Projects Section
    "projects.title": "Mis",
    "projects.titleHighlight": "Proyectos",
    "projects.description": "Una selección de proyectos que demuestran mis habilidades y experiencia",
    "projects.project1.title": "Web App para Sello Discográfico",
    "projects.project1.description": "Plataforma web para un sello discográfico que permite a los usuarios explorar y escuchar música.",
    "projects.project2.title": "Concesionaria de Autos MAF",
    "projects.project2.description": "Catálogo online de vehículos con filtros avanzados e integración de API externa.",
    "projects.project3.title": "Web Institucional - Productora de Eventos",
    "projects.project3.description": "Sitio web corporativo con diseño elegante y optimizado para SEO.",
    "projects.project4.title": "Landing Page para Psicóloga",
    "projects.project4.description": "Sitio web para psicóloga especializada en niños y adolescentes con diseño moderno, minimalista y responsive.",
    "projects.project5.title": "Optimización de Web App Gubernamental",
    "projects.project5.description": "Mejoras de UX/UI, implementación de componentes reusables y optimización SEO en el sitio web de la Municipalidad de La Granja.",

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
    "footer.rights": "© 2024 Lucio Andrés Medina Rodríguez. Todos los derechos reservados.",
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