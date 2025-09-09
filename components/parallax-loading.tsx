"use client"

import { useEffect, useState } from "react"

interface ParallaxLoadingProps {
  onComplete: () => void
}

export default function ParallaxLoading({ onComplete }: ParallaxLoadingProps) {
  const [visibleLetters, setVisibleLetters] = useState(0)
  const [showSubtext, setShowSubtext] = useState(false)
  const [blinkCount, setBlinkCount] = useState(0)
  const name = "LUCIO ANDRES"
  const letters = name.split("")

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= letters.length) {
          clearInterval(timer)
          setShowSubtext(true)
          setTimeout(() => {
            // Iniciar efecto de parpadeo
            const blinkTimer = setInterval(() => {
              setBlinkCount(prev => {
                if (prev >= 3) {
                  clearInterval(blinkTimer)
                  setTimeout(onComplete, 800)
                  return prev
                }
                return prev + 1
              })
            }, 400)
          }, 2000)
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
        <div className="mb-6 md:mb-8 font-mono terminal-bg px-4 md:px-0">
          <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
            <div className="text-xs md:text-sm code-comment">
              <span className="typewriter-slow">// Cargando desarrollador...</span>
            </div>
            <div className="text-base md:text-xl lg:text-3xl break-words">
              <span className="code-keyword">function </span>
              <span className="code-function">initDeveloper</span>
              <span className="code-bracket">(</span>
              <span className="code-bracket">) &#123;</span>
            </div>
            <div className="pl-2 md:pl-4 text-sm md:text-lg lg:text-2xl break-all">
              <span className="code-keyword">return </span>
              <span className="code-operator">"</span>
              <span className="typewriter code-glow">
                {name.slice(0, visibleLetters)}
              </span>
              <span className="cursor">|</span>
              <span className="code-operator">";</span>
            </div>
            <div className="text-base md:text-xl lg:text-3xl">
              <span className="code-bracket">&#125;</span>
            </div>
          </div>
        </div>

        <div className="w-48 md:w-64 h-1 bg-muted/50 rounded-full overflow-hidden mx-auto border border-border/30">
          <div
            className="h-full transition-all duration-300 ease-out shadow-lg progress-glow"
            style={{
              width: `${(visibleLetters / letters.length) * 100}%`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>

        {showSubtext && (
          <div className="mt-4 md:mt-6 space-y-2 md:space-y-3 smooth-entrance font-mono px-4 md:px-0">
            <div className="text-xs md:text-sm max-w-lg mx-auto">
              <span className="code-comment">// Especialidad: </span>
              <span className={`typewriter-slow code-string ${blinkCount > 0 ? 'blink-text' : ''}`}>
                Full Stack Developer
              </span>
            </div>
            <div className="flex justify-center items-center space-x-2 text-xs md:text-sm">
              <span className="code-operator">■</span>
              <span className="fade-pulse code-function">
                {blinkCount === 0 && "Compilando habilidades"}
                {blinkCount === 1 && "Verificando especialidades"}
                {blinkCount === 2 && "Cargando experiencia"}
                {blinkCount >= 3 && "¡Listo para comenzar!"}
              </span>
              <span className="cursor">.</span>
              <span className="cursor" style={{ animationDelay: '0.3s' }}>.</span>
              <span className="cursor" style={{ animationDelay: '0.6s' }}>.</span>
            </div>
          </div>
        )}

        <p className="font-mono mt-3 md:mt-4 text-xs md:text-sm tracking-wider font-semibold fade-pulse px-4 code-string">
          {visibleLetters >= letters.length ? "Iniciando experiencia..." : "Cargando..."}
        </p>
      </div>
    </div>
  )
}
