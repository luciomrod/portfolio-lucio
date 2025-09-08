"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer Jr",
      company: "Coder Craft",
      period: "2024 - Actualidad",
      location: "Córdoba, Argentina",
      description: [
        "Desarrollo de componentes y páginas con Next.js, TypeScript y React.js",
        "Implementación de interfaces con Tailwind CSS, shadcn/ui y Material UI",
        "Uso de GitLab para branching, revisión de código y pull requests",
        "Participación en metodologías ágiles y daily meetings",
      ],
      technologies: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "GitLab"],
    },
    {
      title: "Desarrollador Freelance",
      company: "Proyectos para profesionales y PYMEs",
      period: "2023 - 2024",
      location: "Remoto",
      description: [
        "Desarrollo de landing pages y sitios corporativos responsive",
        "Integración con APIs REST y herramientas externas",
        "Optimización SEO básica",
        "Gestión directa con clientes y entrega de proyectos",
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "APIs REST"],
    },
    {
      title: "Trainee Developer",
      company: "Proyecto privado",
      period: "2022",
      location: "Córdoba, Argentina",
      description: [
        "Primer contacto con React.js y JavaScript en entornos reales",
        "Colaboración en diseño y desarrollo de interfaces",
        "Aprendizaje de buenas prácticas de desarrollo",
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Mi <span className="text-primary">Experiencia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un recorrido por mi trayectoria profesional en el desarrollo frontend
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-primary/50 text-primary">
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
