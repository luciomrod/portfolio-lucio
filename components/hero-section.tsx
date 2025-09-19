"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

interface HeroSectionProps {
  showOnlyGreeting?: boolean
  showFullContent?: boolean
}

export default function HeroSection({ showOnlyGreeting = false, showFullContent = true }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [time, setTime] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.016)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove)
      return () => hero.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Center Rotating Particles */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${showOnlyGreeting ? 'opacity-0' : 'opacity-100'}`}>
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (i / 24) * Math.PI * 2
          const baseRadius = 180 + i * 12
          const radiusVariation = Math.sin(time * 0.8 + i * 0.4) * 60
          const radius = baseRadius + radiusVariation

          const rotationSpeed = 1 + i * 0.08
          const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
          const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
          const x = 50 + Math.cos(angle + time * rotationSpeed * 0.4) * ((radius / screenWidth) * 35)
          const y = 50 + Math.sin(angle + time * rotationSpeed * 0.4) * ((radius / screenHeight) * 35)

          const size = 1.5 + Math.sin(time * 2.5 + i) * 1
          const brightness = 0.3 + Math.sin(time * 1.8 + i * 0.3) * 0.5
          const hue = 190 + Math.sin(time * 0.6 + i * 0.2) * 25

          return (
            <div key={i}>
              {/* Main Particle */}
              <div
                className="absolute rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: `hsl(${hue}, 75%, ${55 + brightness * 25}%)`,
                  boxShadow: `
                    0 0 ${6 + Math.sin(time * 3 + i) * 4}px hsl(${hue}, 75%, ${55 + brightness * 25}%),
                    0 0 ${12 + Math.sin(time * 2.5 + i) * 6}px hsl(${hue}, 75%, ${35 + brightness * 15}%)
                  `,
                  transform: `translate(-50%, -50%) scale(${0.8 + Math.sin(time * 4 + i) * 0.4})`,
                  opacity: brightness * 0.8,
                }}
              />

              {/* Connection lines between adjacent particles */}
              {i < 23 && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: "1px",
                    height: `${Math.min(
                      120,
                      Math.sqrt(
                        Math.pow(
                          (x - (50 + Math.cos(((i + 1) / 24) * Math.PI * 2 + time * (1 + (i + 1) * 0.08) * 0.4) * ((180 + (i + 1) * 12 + Math.sin(time * 0.8 + (i + 1) * 0.4) * 60) / screenWidth) * 35)) * screenWidth / 100,
                          2
                        ) +
                        Math.pow(
                          (y - (50 + Math.sin(((i + 1) / 24) * Math.PI * 2 + time * (1 + (i + 1) * 0.08) * 0.4) * ((180 + (i + 1) * 12 + Math.sin(time * 0.8 + (i + 1) * 0.4) * 60) / screenHeight) * 35)) * screenHeight / 100,
                          2
                        )
                      )
                    )}px`,
                    background: `linear-gradient(to bottom, rgba(6, 182, 212, ${brightness * 0.25}), transparent)`,
                    transform: `translate(-50%, -50%) rotate(${
                      Math.atan2(
                        50 + Math.sin(((i + 1) / 24) * Math.PI * 2 + time * (1 + (i + 1) * 0.08) * 0.4) * ((180 + (i + 1) * 12 + Math.sin(time * 0.8 + (i + 1) * 0.4) * 60) / screenHeight) * 35 - y,
                        50 + Math.cos(((i + 1) / 24) * Math.PI * 2 + time * (1 + (i + 1) * 0.08) * 0.4) * ((180 + (i + 1) * 12 + Math.sin(time * 0.8 + (i + 1) * 0.4) * 60) / screenWidth) * 35 - x
                      ) * (180 / Math.PI) + 90
                    }deg)`,
                    transformOrigin: "top",
                    opacity: Math.max(0, 0.6 - Math.abs(i - 12) * 0.05),
                  }}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mouse Trail Effect */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-500 ${showOnlyGreeting ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              hsla(${190 + Math.sin(time * 0.8) * 20}, 80%, 60%, 0.12) 0%, 
              hsla(${210 + Math.sin(time * 0.5) * 15}, 70%, 50%, 0.06) 30%,
              transparent 65%
            ),
            radial-gradient(
              ellipse ${120 + Math.sin(time * 1.2) * 15}% ${90 + Math.cos(time * 1.5) * 10}% 
              at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(6, 182, 212, 0.04) 0%, 
              transparent 75%
            )
          `,
          transform: `scale(${1 + Math.sin(time * 0.4) * 0.02})`,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "smooth-appear" : "opacity-0"}`}>
          <h1 className={`text-4xl md:text-6xl font-medium mb-6 text-balance tracking-tight transition-all duration-500 ${showOnlyGreeting ? 'animate-fade-in' : ''}`}>
            <span className="text-white/95">Hola, soy </span>
            <span className="text-primary">Lucio</span>
          </h1>

          <div className={`transition-opacity duration-500 ${showFullContent ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-white/60 mb-8 font-light">
              Creo <span className="text-white/90 font-normal">interfaces</span> dinámicas y minimalistas
            </p>

            <p className="text-sm md:text-base text-white/40 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Frontend Developer especializado en Next.js, TypeScript y MERN Stack
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="glass-button text-white font-semibold px-8 py-3 rounded-2xl border-0 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const projectsSection = document.getElementById('projects')
                    if (projectsSection) {
                      const targetPosition = projectsSection.offsetTop
                      const startPosition = window.pageYOffset
                      const distance = targetPosition - startPosition
                      const duration = 1500 // 1.5 segundos para un scroll más lento
                      let start: number | null = null

                      function animation(currentTime: number) {
                        if (start === null) start = currentTime
                        const timeElapsed = currentTime - start
                        const run = ease(timeElapsed, startPosition, distance, duration)
                        window.scrollTo(0, run)
                        if (timeElapsed < duration) requestAnimationFrame(animation)
                      }

                      function ease(t: number, b: number, c: number, d: number) {
                        t /= d / 2
                        if (t < 1) return c / 2 * t * t + b
                        t--
                        return -c / 2 * (t * (t - 2) - 1) + b
                      }

                      requestAnimationFrame(animation)
                    }
                  }
                }}
              >
                Ver mis proyectos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/30 text-primary hover:bg-primary/10 bg-transparent rounded-2xl px-8 py-3 transition-all duration-300 hover:scale-105 hover:border-primary/60"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const link = document.createElement('a')
                    link.href = '/CV_Lucio_Frontend.pdf'
                    link.download = 'CV_Lucio_Frontend.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }
                }}
              >
                Descargar CV
              </Button>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              {[
                { href: "https://github.com/luciomrod", Icon: Github },
                { href: "https://www.linkedin.com/in/lucioandresmr/", Icon: Linkedin },
                { href: "mailto:luciomedinawork@gmail.com", Icon: Mail },
              ].map(({ href, Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="glass-card p-3 rounded-xl text-muted-foreground transition-all duration-300 interactive-card group hover:scale-110 hover:-translate-y-2 hover:rotate-3 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Icon
                    size={24}
                    className="transition-all duration-300 group-hover:text-primary group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            <div>
              <ArrowDown className="text-primary mx-auto animate-bounce" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}