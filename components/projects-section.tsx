"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "shadcn"],
      image: "/concepto.png",
      liveUrl: "https://concepto-hipnotico.vercel.app/",
      githubUrl: "https://github.com/luciomrod/concepto-hipnotico",
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      technologies: ["Next.js", "Typescript", "shadcn", "API REST", "Radix UI"],
      image: "/maf.jpg",
      liveUrl: "https://autosmaf.vercel.app/",
      githubUrl: "https://github.com/luciomrod/autosmaf",
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn"],
      image: "/paredon.jpg",
      liveUrl: "https://paredon-techno.vercel.app/",
      githubUrl: "https://github.com/luciomrod/paredon-landing",
    },
    {
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      technologies: ["React.js", "Javascript", "Framer Motion", "Tailwind CSS"],
      image: "/psico.jpg",
      liveUrl: "https://www.lucianabahr-psico.com/",
      githubUrl: "https://gitlab.com/landingpages3/ivonpsicologialanding",
    },
    {
      title: t("projects.project5.title"),
      description: t("projects.project5.description"),
      technologies: ["React.js", "Javascript", "Bootstrap", "Node.js", "Express"],
      image: "/lagranja.jpg",
      liveUrl: "https://www.lagranja.gob.ar/",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("projects.title")} <span className="text-primary">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.jpg"}
                  alt={`${project.title} - ${t("projects.description")} - Frontend development project by Lucio Andrés`}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code of ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-primary/50 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
