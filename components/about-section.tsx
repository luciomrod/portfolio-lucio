"use client"

import { Badge } from "@/components/ui/badge"
import { Code, Gauge, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function AboutSection() {
  const { t, language } = useLanguage()
  const header = useScrollReveal<HTMLDivElement>()
  const features = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const skillsSection = useScrollReveal<HTMLDivElement>({ threshold: 0.08 })

  const skillCategories = [
    {
      label: language === "en" ? "Frontend" : "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      label: language === "en" ? "State Management" : "Gestión de Estado",
      skills: ["Redux Toolkit", "React Query", "Context API"],
    },
    {
      label: language === "en" ? "Style & UI" : "Estilos y UI",
      skills: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Material UI", "Bootstrap", "Framer Motion"],
    },
    {
      label: language === "en" ? "Tools & Workflow" : "Herramientas",
      skills: ["Git", "GitHub", "GitLab", "npm", "pnpm", "Jira", "Vercel"],
    },
    {
      label: language === "en" ? "Performance" : "Rendimiento",
      skills: ["Code Splitting", "Lazy Loading", "Lighthouse", "Accessibility (A11y)"],
    },
    {
      label: language === "en" ? "Integration" : "Integración",
      skills: ["REST API"],
    },
  ]

  const featureItems = [
    {
      icon: <Code className="w-7 h-7" aria-hidden="true" />,
      title: t("about.feature1.title"),
      description: t("about.feature1.description"),
    },
    {
      icon: <Gauge className="w-7 h-7" aria-hidden="true" />,
      title: t("about.feature2.title"),
      description: t("about.feature2.description"),
    },
    {
      icon: <Users className="w-7 h-7" aria-hidden="true" />,
      title: t("about.feature3.title"),
      description: t("about.feature3.description"),
    },
  ]

  return (
    <section id="about" className="py-24 px-4" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-20 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <h2
            id="about-heading"
            className="text-4xl md:text-6xl section-title mb-8 text-balance"
          >
            {t("about.title")}{" "}
            <span className="text-primary">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-base md:text-lg text-white/45 max-w-3xl mx-auto text-pretty font-light leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Feature cards */}
        <div
          ref={features.ref}
          className="grid md:grid-cols-3 gap-6 mb-20"
          role="list"
          aria-label={language === "en" ? "Key strengths" : "Fortalezas clave"}
        >
          {featureItems.map((feature, index) => (
            <div
              key={index}
              role="listitem"
              className={`feature-card p-7 text-center reveal-scale stagger-${index + 1} ${features.isVisible ? "visible" : ""}`}
            >
              <div className="mb-5 flex justify-center">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div
          ref={skillsSection.ref}
          className={`feature-card p-8 md:p-10 reveal ${skillsSection.isVisible ? "visible" : ""}`}
        >
          <h3 className="text-2xl section-title mb-8 text-center">
            {t("about.skillsTitle")}
          </h3>

          <div className="space-y-6" role="list" aria-label={t("about.skillsTitle")}>
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                role="listitem"
                className={`reveal stagger-${catIndex + 1} ${skillsSection.isVisible ? "visible" : ""}`}
              >
                <p className="text-xs uppercase tracking-widest text-white/30 mb-3 font-medium">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white/5 hover:bg-primary/15 hover:text-primary border border-white/8 text-white/60 transition-all duration-300 cursor-default skill-badge font-normal px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
