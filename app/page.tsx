"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const [showOnlyGreeting, setShowOnlyGreeting] = useState(true)
  const [showFullContent, setShowFullContent] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnlyGreeting(false)
      setTimeout(() => setShowFullContent(true), 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <div className={`transition-opacity duration-500 ${showFullContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
      </div>

      <main>
        <HeroSection showOnlyGreeting={showOnlyGreeting} showFullContent={showFullContent} />

        <div className={`transition-opacity duration-500 ${showFullContent ? 'opacity-100' : 'opacity-0'}`}>
          <ProjectsSection />
          <ExperienceSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>

      <footer className={`glass-card border-t border-border/30 py-8 mt-20 transition-opacity duration-500 ${showFullContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            {t("footer.rights")}
          </p>
          <p className="text-sm text-muted-foreground mt-2">{t("footer.tech")}</p>
        </div>
      </footer>
    </div>
  )
}
