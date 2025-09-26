"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ExperienceSection() {
  const { t } = useLanguage()

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
      ],
      technologies: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "GitLab"],
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      period: t("experience.job2.period"),
      location: t("experience.job2.location"),
      description: [
        t("experience.job2.desc1"),
        t("experience.job2.desc2"),
        t("experience.job2.desc3"),
        t("experience.job2.desc4"),
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "APIs REST"],
    },
    {
      title: t("experience.job3.title"),
      company: t("experience.job3.company"),
      period: t("experience.job3.period"),
      location: t("experience.job3.location"),
      description: [
        t("experience.job3.desc1"),
        t("experience.job3.desc2"),
        t("experience.job3.desc3"),
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("experience.title")} <span className="text-primary">{t("experience.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("experience.description")}
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
