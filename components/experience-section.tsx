"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function ExperienceSection() {
  const { t } = useLanguage()
  const header = useScrollReveal<HTMLDivElement>()
  const timeline = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const eduHeader = useScrollReveal<HTMLDivElement>()
  const eduGrid = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      period: t("experience.job1.period"),
      location: t("experience.job1.location"),
      description: [
        t("experience.job1.desc1"),
        t("experience.job1.desc2"),
        t("experience.job1.desc3"),
        t("experience.job1.desc4"),
        t("experience.job1.desc5"),
        t("experience.job1.desc6"),
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "Git"],
    },
  ]

  const education = [
    {
      title: t("education.edu1.title"),
      institution: t("education.edu1.institution"),
      period: t("education.edu1.period"),
    },
    {
      title: t("education.edu2.title"),
      institution: t("education.edu2.institution"),
      period: t("education.edu2.period"),
    },
    {
      title: t("education.edu3.title"),
      institution: t("education.edu3.institution"),
      period: t("education.edu3.period"),
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-muted/10" aria-labelledby="experience-heading">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-20 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <h2
            id="experience-heading"
            className="text-4xl md:text-6xl section-title mb-6 text-balance"
          >
            {t("experience.title")}{" "}
            <span className="text-primary">{t("experience.titleHighlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto text-pretty font-light">
            {t("experience.description")}
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timeline.ref}
          className="relative"
        >
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-14 md:pl-16 pb-12 reveal-left ${timeline.isVisible ? "visible" : ""}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-3.5 md:left-4 top-1 timeline-dot"
                aria-hidden="true"
              />

              {/* Card */}
              <div className="feature-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={18} className="text-primary" aria-hidden="true" />
                      <h3 className="text-xl font-semibold text-primary tracking-tight">{exp.title}</h3>
                    </div>
                    <p className="text-lg text-foreground/90 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1.5 text-sm text-white/40">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6" role="list" aria-label="Job responsibilities">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className={`text-white/55 flex items-start gap-3 text-sm leading-relaxed reveal ${timeline.isVisible ? "visible" : ""}`}
                      style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                    >
                      <span className="text-primary mt-0.5 text-xs" aria-hidden="true">&#9654;</span>
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-primary/30 text-primary/80 text-xs font-normal px-2.5 py-0.5 rounded-full skill-badge"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          ref={eduHeader.ref}
          className={`text-center mt-20 mb-12 reveal ${eduHeader.isVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-6xl section-title mb-6 text-balance">
            {t("education.title")}{" "}
            <span className="text-primary">{t("education.titleHighlight")}</span>
          </h2>
        </div>

        <div
          ref={eduGrid.ref}
          className="grid md:grid-cols-3 gap-6"
          role="list"
          aria-label="Education"
        >
          {education.map((edu, index) => (
            <div
              key={index}
              role="listitem"
              className={`feature-card p-6 reveal-scale stagger-${index + 1} ${eduGrid.isVisible ? "visible" : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-pretty text-sm leading-snug">
                    {edu.title}
                  </h3>
                  <p className="text-white/40 text-sm mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-xs text-white/30 mt-2.5">
                    <Calendar size={12} aria-hidden="true" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
