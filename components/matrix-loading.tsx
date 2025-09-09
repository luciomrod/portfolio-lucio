"use client"

import { useEffect, useState } from "react"

interface MatrixLoadingProps {
  onComplete: () => void
}

export default function MatrixLoading({ onComplete }: MatrixLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [showName, setShowName] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [phase, setPhase] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 800)
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 2000)
    const phaseTimer = setInterval(() => {
      setPhase(prev => (prev + 1) % 4)
    }, 800)
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setIsExiting(true)
          setTimeout(onComplete, 2500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearTimeout(subtitleTimer)
      clearInterval(progressTimer)
      clearInterval(phaseTimer)
    }
  }, [onComplete])

  const codeSnippets = [
    "const", "function", "return", "import", "export", "class", "let", "var", 
    "if", "else", "for", "while", "try", "catch", "async", "await",
    "{", "}", "(", ")", "[", "]", ";", ":", "=>", "===", "!==", "&&", "||",
    "React", "Next", "Node", "JS", "TS", "CSS", "HTML", "API", "DB"
  ]

  const generateCodeRain = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const rainCount = isMobile ? 15 : 25
    const lineCount = isMobile ? 10 : 15
    
    return Array.from({ length: rainCount }, (_, i) => (
      <div
        key={i}
        className="absolute font-mono text-xs opacity-25 md:opacity-35"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 3}s`,
          color: i % 4 === 0 ? '#569CD6' : i % 4 === 1 ? '#DCDCAA' : i % 4 === 2 ? '#CE9178' : '#6A9955'
        }}
      >
        <div className="matrix-rain space-y-1">
          {Array.from({ length: lineCount }, (_, j) => (
            <div key={j} className="block">
              {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
            </div>
          ))}
        </div>
      </div>
    ))
  }

  return (
    <div className={`fixed inset-0 z-50 matrix-bg flex items-center justify-center overflow-hidden ${isExiting ? 'loading-exit-bg' : ''}`}>
      {/* Code Rain Effect */}
      <div className={`absolute inset-0 ${isExiting ? 'content-exit' : ''}`}>{generateCodeRain()}</div>

      {/* Loading Content */}
      <div className={`relative z-10 text-center ${isExiting ? 'content-exit' : ''}`}>
        {showName && (
          <div className="mb-6 md:mb-8 smooth-entrance terminal-bg px-4 md:px-0">
            <div className="font-mono space-y-2 md:space-y-3 max-w-2xl mx-auto">
              <div className="text-xs md:text-sm code-comment mb-3 md:mb-4">
                <span className="typewriter-slow">// Inicializando portfolio...</span>
              </div>
              <div className="text-lg md:text-2xl lg:text-4xl font-mono break-words">
                <span className="code-keyword">const </span>
                <span className="code-variable typewriter">developer</span>
                <span className="code-operator"> = </span>
                <span className="code-operator">"</span>
                <span className="typewriter code-glow">LUCIO ANDRES</span>
                <span className="code-operator">";</span>
              </div>
              {showSubtitle && (
                <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 smooth-entrance">
                  <div className="text-xs md:text-sm font-mono">
                    <span className="code-comment">// </span>
                    <span className="typewriter-slow code-comment">Version 2.0 - Full Stack Developer</span>
                    <span className="cursor">|</span>
                  </div>
                  <div className="text-xs md:text-sm font-mono space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="code-operator">▶</span>
                      <span className="fade-pulse code-function">
                        {phase === 0 && "Compilando componentes..."}
                        {phase === 1 && "Instalando dependencias..."}
                        {phase === 2 && "Optimizando bundle..."}
                        {phase === 3 && "Configurando servidor..."}
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-mono">
                      <span className="code-property">
                        {phase === 0 && "⚙️ React • Next.js • TypeScript"}
                        {phase === 1 && "📦 npm install --production"}
                        {phase === 2 && "🚀 Webpack • Turbopack • SWC"}
                        {phase === 3 && "🌐 localhost:3000"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full transition-all duration-100 ease-out progress-glow" style={{ width: `${progress}%` }} />
        </div>

        <p className="font-mono mt-3 md:mt-4 text-xs md:text-sm fade-pulse px-4 code-string">
          {progress < 100 ? `Cargando... ${Math.floor(progress)}%` : "Iniciando experiencia..."}
        </p>
      </div>
    </div>
  )
}
