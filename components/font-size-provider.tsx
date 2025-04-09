"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type FontSize = "small" | "medium" | "large"

type FontSizeProviderProps = {
  children: React.ReactNode
  defaultFontSize?: FontSize
}

type FontSizeProviderState = {
  fontSize: FontSize
  setFontSize: (fontSize: FontSize) => void
}

const initialState: FontSizeProviderState = {
  fontSize: "medium",
  setFontSize: () => null,
}

const FontSizeProviderContext = createContext<FontSizeProviderState>(initialState)

export function FontSizeProvider({ children, defaultFontSize = "medium" }: FontSizeProviderProps) {
  const [fontSize, setFontSize] = useState<FontSize>(defaultFontSize)

  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSize") as FontSize | null

    if (savedFontSize && ["small", "medium", "large"].includes(savedFontSize)) {
      setFontSize(savedFontSize)
    }
  }, [])

  useEffect(() => {
    // Remove all font size classes
    document.documentElement.classList.remove("font-size-small", "font-size-large")

    // Add current font size class (except for default medium)
    if (fontSize !== "medium") {
      document.documentElement.classList.add(`font-size-${fontSize}`)
    }

    localStorage.setItem("fontSize", fontSize)
  }, [fontSize])

  const value = {
    fontSize,
    setFontSize,
  }

  return <FontSizeProviderContext.Provider value={value}>{children}</FontSizeProviderContext.Provider>
}

export const useFontSize = () => {
  const context = useContext(FontSizeProviderContext)

  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider")
  }

  return context
}
