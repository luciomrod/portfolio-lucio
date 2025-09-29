"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

export default function DynamicHtmlLang() {
  const { language } = useLanguage()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'en' ? 'en-US' : 'es-ES'
    }
  }, [language])

  return null
}