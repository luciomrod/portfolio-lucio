"use client"

import { useEffect, useState } from "react"

interface ParallaxLoadingProps {
  onComplete: () => void
}

export default function ParallaxLoading({ onComplete }: ParallaxLoadingProps) {
  const [visibleLetters, setVisibleLetters] = useState(0)
  const name = "LUCIO ANDRES"
  const letters = name.split("")

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= letters.length) {
          clearInterval(timer)
          setTimeout(onComplete, 1000)
          return prev
        }
        return prev + 1
      })
    }, 150)

    return () => clearInterval(timer)
  }, [letters.length, onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl">
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`text-6xl md:text-8xl font-bold ${index < visibleLetters ? "letter-animate" : "opacity-0"}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                fontFamily: "var(--font-mono)",
                color: "oklch(0.65 0.2 200)",
                textShadow: "0 0 20px rgba(101, 163, 255, 0.5), 0 0 40px rgba(101, 163, 255, 0.3)",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        <div className="w-64 h-1 bg-muted/50 rounded-full overflow-hidden mx-auto border border-border/30">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out shadow-lg"
            style={{
              width: `${(visibleLetters / letters.length) * 100}%`,
              boxShadow: "0 0 10px oklch(0.65 0.2 200)",
            }}
          />
        </div>

        <p className="text-primary font-mono mt-4 text-sm tracking-wider font-semibold">
          {visibleLetters >= letters.length ? "Iniciando experiencia..." : "Cargando..."}
        </p>
      </div>
    </div>
  )
}
