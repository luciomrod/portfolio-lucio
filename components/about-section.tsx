"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Jest",
    "MongoDB",
    "Tailwind CSS",
    "shadcn/ui",
    "Material UI",
    "Bootstrap",
    "Git",
    "GitHub",
    "GitLab",
    "APIs REST",
    "Figma",
  ]

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: t("about.feature1.title"),
      description: t("about.feature1.description"),
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: t("about.feature2.title"),
      description: t("about.feature2.description"),
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t("about.feature3.title"),
      description: t("about.feature3.description"),
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("about.title")} <span className="text-primary">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("about.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center">{t("about.skillsTitle")}</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
