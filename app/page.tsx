"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import { useLanguage } from "@/contexts/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ArrowUp, Heart } from "lucide-react"

export default function Home() {
  const [showOnlyGreeting, setShowOnlyGreeting] = useState(true)
  const [showFullContent, setShowFullContent] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { t } = useLanguage()
  const footer = useScrollReveal<HTMLElement>({ threshold: 0.2 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnlyGreeting(false)
      setTimeout(() => setShowFullContent(true), 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Skip to content - A11y */}
      <a href="#projects" className="skip-to-content">
        Skip to main content
      </a>

      <div className={`transition-opacity duration-500 ${showFullContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
      </div>

      <main role="main" id="main-content" aria-label="Main content">
        <HeroSection showOnlyGreeting={showOnlyGreeting} showFullContent={showFullContent} />

        <div className={`transition-opacity duration-500 ${showFullContent ? 'opacity-100' : 'opacity-0'}`} aria-hidden={!showFullContent}>
          <ProjectsSection />
          <ExperienceSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer
        ref={footer.ref}
        className={`py-12 mt-8 transition-opacity duration-500 ${showFullContent ? 'opacity-100' : 'opacity-0'}`}
        role="contentinfo"
      >
        <div className="container mx-auto px-4">
          <div className={`footer-divider mb-10 reveal ${footer.isVisible ? "visible" : ""}`} aria-hidden="true" />

          <div className={`text-center space-y-3 reveal stagger-1 ${footer.isVisible ? "visible" : ""}`}>
            <p className="text-white/30 text-sm font-light">
              {t("footer.rights")}
            </p>
            <p className="text-white/20 text-xs font-light flex items-center justify-center gap-1.5">
              {t("footer.tech")}
              <Heart size={12} className="text-primary/50" aria-hidden="true" />
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full glass border-white/10 text-white/50 hover:text-primary hover:border-primary/40 transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}
