"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Web para Psicóloga Infantil",
      description:
        "Sitio web profesional para psicóloga especializada en niños y adolescentes con diseño moderno y responsive.",
      technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
      image: "/modern-psychology-website-for-children.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Tienda Online de Hardware",
      description: "E-commerce completo con carrito de compras, integración de pagos y panel de administración.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe"],
      image: "/modern-hardware-computer-store-ecommerce.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "LinkHub para Músicos",
      description:
        "Plataforma tipo Linktree especializada para músicos con diseño mobile-first y personalización avanzada.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      image: "/music-linktree-platform-dark-theme.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Paredón - Web Institucional",
      description: "Sitio web corporativo con diseño elegante y optimizado para SEO.",
      technologies: ["Next.js", "TypeScript", "CSS Modules"],
      image: "/corporate-institutional-website-modern-design.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Concesionaria de Autos",
      description: "Catálogo online de vehículos con filtros avanzados e integración de API externa.",
      technologies: ["React.js", "JavaScript", "Bootstrap", "API REST"],
      image: "/car-dealership-website-catalog-modern.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una selección de proyectos que demuestran mis habilidades y experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
