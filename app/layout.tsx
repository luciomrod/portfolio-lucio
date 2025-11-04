import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import StructuredData from "@/components/structured-data"
import DynamicHtmlLang from "@/components/dynamic-html-lang"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lucio Andrés - Fullstack Developer Portfolio",
    template: "%s | Lucio Andrés - Fullstack Developer"
  },
  description: "Portfolio of Lucio Andrés Medina Rodríguez - Fullstack Developer specialized in React, Next.js, TypeScript, Node.js, Express and MongoDB. 2+ years of experience creating modern, scalable web applications focused on user experience.",
  keywords: [
    "Fullstack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express Developer",
    "MongoDB Developer",
    "MERN Stack",
    "Web Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Portfolio",
    "Lucio Andrés",
    "Lucio Medina",
    "Web Development",
    "Backend Development",
    "Frontend Development",
    "API Integration",
    "Córdoba Argentina",
    "Freelance Developer"
  ],
  authors: [{ name: "Lucio Andrés Medina Rodríguez", url: "https://luciomrod.com" }],
  creator: "Lucio Andrés Medina Rodríguez",
  publisher: "Lucio Andrés Medina Rodríguez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: "https://luciomrod.com",
    siteName: "Lucio Andrés - Fullstack Developer Portfolio",
    title: "Lucio Andrés - Fullstack Developer Portfolio",
    description: "Fullstack Developer specialized in React, Next.js, TypeScript, Node.js, Express and MongoDB. 2+ years of experience creating modern, scalable web applications focused on user experience.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lucio Andrés - Fullstack Developer Portfolio",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucio Andrés - Fullstack Developer Portfolio",
    description: "Fullstack Developer specialized in React, Next.js, TypeScript, Node.js, Express and MongoDB. 2+ years of experience creating modern, scalable web applications focused on user experience.",
    images: ["/logo.png"],
    creator: "@luciomrod"
  },
  alternates: {
    canonical: "https://luciomrod.com",
    languages: {
      'en': 'https://luciomrod.com?lang=en',
      'es': 'https://luciomrod.com?lang=es',
      'x-default': 'https://luciomrod.com'
    }
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  },
  category: "technology",
  classification: "Portfolio Website",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/manifest.json"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark"
          dir="ltr"
          prefix="og: http://ogp.me/ns#">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <DynamicHtmlLang />
          <StructuredData />
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
