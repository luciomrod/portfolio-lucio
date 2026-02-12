"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { toast } from "sonner"

export default function ContactSection() {
  const { t, language } = useLanguage()
  const header = useScrollReveal<HTMLDivElement>()
  const formReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const infoReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success(language === "en" ? "Message sent successfully!" : "¡Mensaje enviado exitosamente!")
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || (language === "en" ? "Error sending message" : "Error al enviar el mensaje"))
      }
    } catch {
      toast.error(language === "en" ? "Error sending message" : "Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 px-4 bg-muted/10" aria-labelledby="contact-heading">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-20 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <h2
            id="contact-heading"
            className="text-4xl md:text-6xl section-title mb-6 text-balance"
          >
            {t("contact.title")}{" "}
            <span className="text-primary">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto text-pretty font-light">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form - 3 cols */}
          <div
            ref={formReveal.ref}
            className={`lg:col-span-3 feature-card p-8 reveal-left ${formReveal.isVisible ? "visible" : ""}`}
          >
            <h3 className="text-xl font-semibold mb-6 tracking-tight">{t("contact.form.title")}</h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/30 mb-2 font-medium">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                    aria-required="true"
                    className="form-input-enhanced bg-white/3 border-white/10 rounded-xl h-11 text-sm placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/30 mb-2 font-medium">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                    aria-required="true"
                    autoComplete="email"
                    className="form-input-enhanced bg-white/3 border-white/10 rounded-xl h-11 text-sm placeholder:text-white/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-white/30 mb-2 font-medium">
                  {t("contact.form.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact.form.subjectPlaceholder")}
                  required
                  aria-required="true"
                  className="form-input-enhanced bg-white/3 border-white/10 rounded-xl h-11 text-sm placeholder:text-white/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/30 mb-2 font-medium">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={5}
                  required
                  aria-required="true"
                  className="form-input-enhanced bg-white/3 border-white/10 rounded-xl text-sm placeholder:text-white/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-button text-white font-semibold rounded-xl h-12 gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label={isSubmitting
                  ? (language === "en" ? "Sending message..." : "Enviando mensaje...")
                  : t("contact.form.send")
                }
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>{language === "en" ? "Sending..." : "Enviando..."}</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t("contact.form.send")}</span>
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info - 2 cols */}
          <div
            ref={infoReveal.ref}
            className={`lg:col-span-2 space-y-6 reveal stagger-2 ${infoReveal.isVisible ? "visible" : ""}`}
          >
            {/* Contact info card */}
            <div className="feature-card p-7">
              <h3 className="text-lg font-semibold mb-5 tracking-tight">{t("contact.info.title")}</h3>
              <div className="space-y-5">
                <a
                  href="mailto:luciomedinawork@gmail.com"
                  className="flex items-center gap-4 group"
                  aria-label={`${t("contact.info.email")}: luciomedinawork@gmail.com`}
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30 font-medium">{t("contact.info.email")}</p>
                    <p className="text-white/60 text-sm group-hover:text-primary transition-colors mt-0.5">
                      luciomedinawork@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30 font-medium">{t("contact.info.location")}</p>
                    <p className="text-white/60 text-sm mt-0.5">{t("contact.info.locationValue")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links card */}
            <div className="feature-card p-7">
              <h3 className="text-lg font-semibold mb-5 tracking-tight">{t("contact.social.title")}</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/luciomrod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 p-3.5 rounded-xl border border-white/8 bg-white/3 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" aria-hidden="true" />
                  <span className="text-sm text-white/50 group-hover:text-primary transition-colors font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/lucioandresmr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 p-3.5 rounded-xl border border-white/8 bg-white/3 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" aria-hidden="true" />
                  <span className="text-sm text-white/50 group-hover:text-primary transition-colors font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
