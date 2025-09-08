"use client"

import { useEffect, useState } from "react"

interface MatrixLoadingProps {
  onComplete: () => void
}

export default function MatrixLoading({ onComplete }: MatrixLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 500)
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setTimeout(onComplete, 1000)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [onComplete])

  const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

  const generateMatrixRain = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute text-primary font-mono text-sm opacity-70"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      >
        <div className="matrix-rain">
          {Array.from({ length: 20 }, (_, j) => (
            <div key={j} className="block">
              {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </div>
          ))}
        </div>
      </div>
    ))
  }

  return (
    <div className="fixed inset-0 z-50 matrix-bg flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0">{generateMatrixRain()}</div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {showName && (
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-mono font-bold text-primary glitch-text rotate-3d">LUCIO</h1>
            <h2 className="text-4xl md:text-6xl font-mono font-bold text-primary/80 glitch-text rotate-3d mt-2">
              ANDRES
            </h2>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-primary transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <p className="text-primary font-mono mt-4 glitch">
          {progress < 100 ? `Cargando... ${progress}%` : "Iniciando..."}
        </p>
      </div>
    </div>
  )
}
