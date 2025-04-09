import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { FontSizeProvider } from "@/components/font-size-provider"
import { MeditationProvider } from "@/contexts/meditation-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Meditation App",
  description: "A meditation app designed for autistic adults",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="calm-light">
          <FontSizeProvider defaultFontSize="medium">
            <MeditationProvider>{children}</MeditationProvider>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'