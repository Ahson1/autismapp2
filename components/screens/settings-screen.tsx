"use client"

import { AppShell } from "@/components/app-shell"
import { InfoCard } from "@/components/ui/info-card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import { useFontSize } from "@/components/font-size-provider"
import { useState } from "react"

export function SettingsScreen() {
  const { theme, setTheme } = useTheme()
  const { fontSize, setFontSize } = useFontSize()
  const [backgroundSounds, setBackgroundSounds] = useState(false)

  return (
    <AppShell title="Settings">
      <div className="space-y-8 max-w-2xl mx-auto">
        <h2 className="text-heading-3 font-medium">Customize Your Experience</h2>

        {/* Appearance Section */}
        <InfoCard>
          <div className="space-y-6">
            <h3 className="text-heading-4 font-medium">Appearance</h3>

            {/* Theme Selection */}
            <div className="space-y-3">
              <Label htmlFor="theme-options" className="text-base-lg font-medium block">
                Theme
              </Label>
              <RadioGroup
                id="theme-options"
                value={theme}
                onValueChange={(value) => setTheme(value as "calm-light" | "calm-dark" | "high-contrast")}
                className="grid gap-4"
              >
                <div className="flex items-center space-x-3 rounded-md border p-4">
                  <RadioGroupItem value="calm-light" id="theme-calm-light" />
                  <Label htmlFor="theme-calm-light" className="flex-1 cursor-pointer">
                    Calm Light
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-md border p-4">
                  <RadioGroupItem value="calm-dark" id="theme-calm-dark" />
                  <Label htmlFor="theme-calm-dark" className="flex-1 cursor-pointer">
                    Calm Dark
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-md border p-4">
                  <RadioGroupItem value="high-contrast" id="theme-high-contrast" />
                  <Label htmlFor="theme-high-contrast" className="flex-1 cursor-pointer">
                    High Contrast
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Font Size Selection */}
            <div className="space-y-3">
              <Label htmlFor="font-size-options" className="text-base-lg font-medium block">
                Font Size
              </Label>
              <RadioGroup
                id="font-size-options"
                value={fontSize}
                onValueChange={(value) => setFontSize(value as "small" | "medium" | "large")}
                className="grid gap-4"
              >
                <div className="flex items-center space-x-3 rounded-md border p-4">
                  <RadioGroupItem value="small" id="font-small" />
                  <Label htmlFor="font-small" className="flex-1 cursor-pointer">
                    Small
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-md border p-4">
                  <RadioGroupItem value="medium" id="font-medium" />
                  <Label htmlFor="font-medium" className="flex-1 cursor-pointer">
                    Medium
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-md border p-4">
                  <RadioGroupItem value="large" id="font-large" />
                  <Label htmlFor="font-large" className="flex-1 cursor-pointer">
                    Large
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </InfoCard>

        {/* Audio Section */}
        <InfoCard>
          <div className="space-y-6">
            <h3 className="text-heading-4 font-medium">Audio</h3>

            {/* Background Sounds Toggle */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="background-sounds" className="text-base-lg font-medium">
                  Background Sounds
                </Label>
                <Switch
                  id="background-sounds"
                  checked={backgroundSounds}
                  onCheckedChange={setBackgroundSounds}
                  aria-label="Toggle background sounds"
                />
              </div>
              <p className="text-muted-foreground">Enable gentle ambient sounds during meditation sessions</p>
            </div>
          </div>
        </InfoCard>
      </div>
    </AppShell>
  )
}
