"use client"

import { useState } from "react"
import ParallaxLoading from "@/components/parallax-loading"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <ParallaxLoading onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <div className="min-h-screen">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>

          <footer className="glass-card border-t border-border/30 py-8 mt-20">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground">
                © 2024 Lucio Andrés Medina Rodríguez. Todos los derechos reservados.
              </p>
              <p className="text-sm text-muted-foreground mt-2">Desarrollado con Next.js, TypeScript y Tailwind CSS</p>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}
