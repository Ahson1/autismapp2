"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "calm-light" | "calm-dark" | "high-contrast"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "calm-light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, defaultTheme = "calm-light" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null

    if (savedTheme && ["calm-light", "calm-dark", "high-contrast"].includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove("theme-calm-light", "theme-calm-dark", "theme-high-contrast")

    // Add current theme class (except for default calm-light)
    if (theme !== "calm-light") {
      document.documentElement.classList.add(`theme-${theme}`)
    }

    // Store preference
    localStorage.setItem("theme", theme)

    // Also update data-theme attribute for components that rely on it
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const value = {
    theme,
    setTheme,
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
