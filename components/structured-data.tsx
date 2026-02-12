"use client"

import { useLanguage } from "@/contexts/language-context"

export default function StructuredData() {
  const { language } = useLanguage()

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://luciomrod.com/#person",
    "name": "Lucio Andrés Medina Rodríguez",
    "alternateName": ["Lucio Andrés", "Lucio Medina", "Luciomrod"],
    "url": "https://luciomrod.com",
    "image": "https://luciomrod.com/lucio.jpg",
    "jobTitle": language === "en" ? "Frontend Developer" : "Desarrollador Frontend",
    "worksFor": {
      "@type": "Organization",
      "name": "CoderCraft"
    },
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "Frontend Development",
      "Responsive Design",
      "Accessibility (A11y)",
      "Performance Optimization",
      "Code Splitting",
      "REST API Integration",
      "UI/UX Design",
      "Git",
      "Agile/Scrum"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "UTN Córdoba"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressRegion": "Córdoba",
      "addressCountry": "AR"
    },
    "email": "luciomedinawork@gmail.com",
    "sameAs": [
      "https://github.com/luciomrod",
      "https://www.linkedin.com/in/lucioandresmr/"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://luciomrod.com/#website",
    "url": "https://luciomrod.com",
    "name": language === "en"
      ? "Lucio Andrés - Frontend Developer Portfolio"
      : "Lucio Andrés - Portfolio de Desarrollador Frontend",
    "description": language === "en"
      ? "Portfolio of Lucio Andrés Medina Rodríguez - Frontend Developer specialized in React.js, Next.js and TypeScript. Building scalable, performant and accessible web applications."
      : "Portfolio de Lucio Andrés Medina Rodríguez - Desarrollador Frontend especializado en React.js, Next.js y TypeScript. Construyendo aplicaciones web escalables, performantes y accesibles.",
    "inLanguage": [language === "en" ? "en-US" : "es-ES"],
    "author": {
      "@id": "https://luciomrod.com/#person"
    },
    "publisher": {
      "@id": "https://luciomrod.com/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://luciomrod.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://luciomrod.com/#portfolio",
    "name": language === "en"
      ? "Frontend Developer Portfolio"
      : "Portfolio de Desarrollador Frontend",
    "description": language === "en"
      ? "Professional portfolio showcasing frontend development projects built with React.js, Next.js and TypeScript. Modern, scalable and accessible web applications."
      : "Portfolio profesional con proyectos de desarrollo frontend construidos con React.js, Next.js y TypeScript. Aplicaciones web modernas, escalables y accesibles.",
    "author": {
      "@id": "https://luciomrod.com/#person"
    },
    "dateCreated": "2023-01-01",
    "dateModified": "2025-11-01",
    "keywords": language === "en"
      ? "Frontend Development, React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Responsive Design, Accessibility, Performance Optimization, Web Development"
      : "Desarrollo Frontend, React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Diseño Responsive, Accesibilidad, Optimización de Rendimiento, Desarrollo Web",
    "genre": "Portfolio",
    "inLanguage": language === "en" ? "en-US" : "es-ES"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://luciomrod.com/#service",
    "name": language === "en"
      ? "Frontend Development Services"
      : "Servicios de Desarrollo Frontend",
    "description": language === "en"
      ? "Professional frontend development services specializing in React.js, Next.js and TypeScript. Scalable, performant and accessible web applications with modern UI libraries."
      : "Servicios profesionales de desarrollo frontend especializados en React.js, Next.js y TypeScript. Aplicaciones web escalables, performantes y accesibles con bibliotecas modernas de UI.",
    "provider": {
      "@id": "https://luciomrod.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "serviceType": language === "en"
      ? "Frontend Development"
      : "Desarrollo Frontend",
    "offers": {
      "@type": "Offer",
      "description": language === "en"
        ? "Custom frontend development using React.js, Next.js, TypeScript and Tailwind CSS. Responsive, accessible and performant web applications with clean architecture."
        : "Desarrollo frontend personalizado con React.js, Next.js, TypeScript y Tailwind CSS. Aplicaciones web responsive, accesibles y performantes con arquitectura limpia."
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  )
}
