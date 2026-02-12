"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"

export default function ProjectsSection() {
  const { t } = useLanguage()
  const header = useScrollReveal<HTMLDivElement>()
  const grid = useScrollReveal<HTMLDivElement>({ threshold: 0.08, rootMargin: "0px 0px -40px 0px" })

  const projects = [
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React.js", "Vercel"],
      image: "/promodrop.png",
      liveUrl: "https://promodrop.vercel.app",
    },
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      technologies: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "Mercado Pago", "shadcn/ui"],
      image: "/altaglio.png",
      liveUrl: "https://peddy-3412.vercel.app",
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "shadcn/ui"],
      image: "/concepto.png",
      liveUrl: "https://conceptohipnotico.com/",
      githubUrl: "https://github.com/luciomrod/concepto-hipnotico",
    },
    {
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      technologies: ["Next.js", "TypeScript", "shadcn/ui", "REST API", "Radix UI"],
      image: "/maf.png",
      liveUrl: "https://autosmaf.vercel.app/",
      githubUrl: "https://github.com/luciomrod/autosmaf",
    },
  ]

  const staggerClass = (index: number) => {
    const classes = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"]
    return classes[index] || ""
  }

  return (
    <section id="projects" className="py-24 px-4" aria-labelledby="projects-heading">
      <div className="container mx-auto">
        <div
          ref={header.ref}
          className={`text-center mb-20 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <h2
            id="projects-heading"
            className="text-4xl md:text-6xl section-title mb-6 text-balance"
          >
            {t("projects.title")}{" "}
            <span className="text-primary">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto text-pretty font-light">
            {t("projects.description")}
          </p>
        </div>

        <div
          ref={grid.ref}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          role="list"
          aria-label="Project list"
        >
          {projects.map((project, index) => (
            <article
              key={index}
              role="listitem"
              className={`project-card reveal-scale ${staggerClass(index)} ${grid.isVisible ? "visible" : ""}`}
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.jpg"}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={340}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-center pb-6 gap-3"
                  aria-hidden="true"
                >
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="glass-button text-white rounded-xl gap-2 hover:scale-105 transition-transform"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={15} />
                        <span className="text-sm">Live</span>
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass border-white/20 text-white rounded-xl gap-2 hover:scale-105 transition-transform bg-transparent"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title} on GitHub`}
                      >
                        <Github size={15} />
                        <span className="text-sm">Code</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{project.title}</h3>
                <p className="text-white/50 mb-5 text-pretty leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-primary/30 text-primary/80 text-xs font-normal px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Keyboard-accessible links */}
              <div className="sr-only">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit {project.title} live demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View {project.title} source code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
