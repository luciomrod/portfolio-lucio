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
    "jobTitle": language === "en" ? "Fullstack Developer" : "Desarrollador Fullstack",
    "worksFor": {
      "@type": "Organization",
      "name": "Coder Craft"
    },
    "knowsAbout": [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Fullstack Development",
      "Backend Development",
      "Frontend Development",
      "API Integration",
      "UI/UX Design",
      "Tailwind CSS",
      "Web Development",
      "Responsive Design",
      "Jest",
      "Postman",
      "Mercado Pago",
      "Resend"
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
      ? "Lucio Andrés - Fullstack Developer Portfolio"
      : "Lucio Andrés - Portfolio de Desarrollador Fullstack",
    "description": language === "en"
      ? "Portfolio of Lucio Andrés Medina Rodríguez - Fullstack Developer specialized in React, Next.js, TypeScript, Node.js, Express and MongoDB. 2+ years of experience creating modern, scalable web applications."
      : "Portfolio de Lucio Andrés Medina Rodríguez - Desarrollador Fullstack especializado en React, Next.js, TypeScript, Node.js, Express y MongoDB. Más de dos años de experiencia creando aplicaciones web modernas y escalables.",
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
      ? "Fullstack Developer Portfolio"
      : "Portfolio de Desarrollador Fullstack",
    "description": language === "en"
      ? "Professional portfolio showcasing fullstack development projects and experience. Creating modern, scalable web applications from intuitive interfaces to robust backends."
      : "Portfolio profesional que muestra proyectos y experiencia en desarrollo fullstack. Creando aplicaciones web modernas y escalables desde interfaces intuitivas hasta backends robustos.",
    "author": {
      "@id": "https://luciomrod.com/#person"
    },
    "dateCreated": "2023-01-01",
    "dateModified": "2024-09-28",
    "keywords": language === "en"
      ? "Fullstack Development, Next.js, React, TypeScript, Node.js, Express, MongoDB, MERN Stack, Web Development, API Integration"
      : "Desarrollo Fullstack, Next.js, React, TypeScript, Node.js, Express, MongoDB, MERN Stack, Desarrollo Web, Integración de APIs",
    "genre": "Portfolio",
    "inLanguage": language === "en" ? "en-US" : "es-ES"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://luciomrod.com/#service",
    "name": language === "en"
      ? "Fullstack Development Services"
      : "Servicios de Desarrollo Fullstack",
    "description": language === "en"
      ? "Professional fullstack development services specializing in modern web technologies. From intuitive interfaces to robust and optimized backends."
      : "Servicios profesionales de desarrollo fullstack especializados en tecnologías web modernas. Desde interfaces intuitivas hasta backends robustos y optimizados.",
    "provider": {
      "@id": "https://luciomrod.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "serviceType": language === "en"
      ? "Fullstack Development"
      : "Desarrollo Fullstack",
    "offers": {
      "@type": "Offer",
      "description": language === "en"
        ? "Custom web application development using React, Next.js, TypeScript, Node.js, Express and MongoDB. Fullstack projects, institutional landing pages and platforms with external API integration."
        : "Desarrollo de aplicaciones web personalizadas usando React, Next.js, TypeScript, Node.js, Express y MongoDB. Proyectos fullstack, landing pages institucionales y plataformas con integración de APIs externas."
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