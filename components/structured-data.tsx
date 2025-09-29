"use client"

import { useLanguage } from "@/contexts/language-context"

export default function StructuredData() {
  const { language, t } = useLanguage()

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
      "name": "Coder Craft"
    },
    "knowsAbout": [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "MERN Stack",
      "Frontend Development",
      "UI/UX Design",
      "Tailwind CSS",
      "Web Development",
      "Responsive Design"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "UTN FRBA"
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
      ? "Portfolio of Lucio Andrés Medina Rodríguez - Frontend Developer specialized in Next.js, TypeScript and MERN Stack"
      : "Portfolio de Lucio Andrés Medina Rodríguez - Desarrollador Frontend especializado en Next.js, TypeScript y MERN Stack",
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
      ? "Professional portfolio showcasing frontend development projects and experience"
      : "Portfolio profesional que muestra proyectos y experiencia en desarrollo frontend",
    "author": {
      "@id": "https://luciomrod.com/#person"
    },
    "dateCreated": "2023-01-01",
    "dateModified": "2024-09-28",
    "keywords": language === "en"
      ? "Frontend Development, Next.js, React, TypeScript, MERN Stack, Web Development"
      : "Desarrollo Frontend, Next.js, React, TypeScript, MERN Stack, Desarrollo Web",
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
      ? "Professional frontend development services specializing in modern web technologies"
      : "Servicios profesionales de desarrollo frontend especializados en tecnologías web modernas",
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
        ? "Custom web application development using Next.js, React, and TypeScript"
        : "Desarrollo de aplicaciones web personalizadas usando Next.js, React y TypeScript"
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