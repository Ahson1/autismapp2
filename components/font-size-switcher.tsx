"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Type } from "lucide-react"
import { useFontSize } from "./font-size-provider"

export function FontSizeSwitcher() {
  const { fontSize, setFontSize } = useFontSize()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
          <Type className="h-5 w-5" />
          <span className="sr-only">Change font size</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setFontSize("small")}
          className={`flex items-center gap-2 ${fontSize === "small" ? "font-semibold" : ""}`}
        >
          <span className="text-sm">Small Text</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setFontSize("medium")}
          className={`flex items-center gap-2 ${fontSize === "medium" ? "font-semibold" : ""}`}
        >
          <span className="text-base">Medium Text</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setFontSize("large")}
          className={`flex items-center gap-2 ${fontSize === "large" ? "font-semibold" : ""}`}
        >
          <span className="text-lg">Large Text</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
