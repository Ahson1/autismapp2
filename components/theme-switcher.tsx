"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sun, Moon, Contrast } from "lucide-react"

type Theme = "calm-light" | "calm-dark" | "high-contrast"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("calm-light")

  // Apply theme class to document
  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove("theme-calm-light", "theme-calm-dark", "theme-high-contrast")

    // Add current theme class (except for default calm-light)
    if (theme !== "calm-light") {
      document.documentElement.classList.add(`theme-${theme}`)
    }

    // Store preference
    localStorage.setItem("theme", theme)
  }, [theme])

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
          {theme === "calm-light" && <Sun className="h-5 w-5" />}
          {theme === "calm-dark" && <Moon className="h-5 w-5" />}
          {theme === "high-contrast" && <Contrast className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("calm-light")} className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <span>Calm Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("calm-dark")} className="flex items-center gap-2">
          <Moon className="h-4 w-4" />
          <span>Calm Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("high-contrast")} className="flex items-center gap-2">
          <Contrast className="h-4 w-4" />
          <span>High Contrast</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
