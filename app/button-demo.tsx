"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { FontSizeSwitcher } from "@/components/font-size-switcher"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { Play, Pause, SkipForward, Settings, Heart, ArrowRight, AlertCircle, Check } from "lucide-react"

export default function ButtonDemo() {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-end mb-4 gap-2">
          <FontSizeSwitcher />
          <ThemeSwitcher />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accessible Button Component</CardTitle>
            <CardDescription>Designed for maximum accessibility and usability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2>Button Variants</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <AccessibleButton>Default Button</AccessibleButton>
                <AccessibleButton variant="secondary">Secondary</AccessibleButton>
                <AccessibleButton variant="destructive">Destructive</AccessibleButton>
                <AccessibleButton variant="outline">Outline</AccessibleButton>
                <AccessibleButton variant="ghost">Ghost</AccessibleButton>
                <AccessibleButton variant="link">Link Button</AccessibleButton>
              </div>
            </section>

            <section>
              <h2>With Icons</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <AccessibleButton icon={Play}>Play</AccessibleButton>
                <AccessibleButton icon={Pause} variant="secondary">
                  Pause
                </AccessibleButton>
                <AccessibleButton icon={Settings} variant="outline">
                  Settings
                </AccessibleButton>
                <AccessibleButton icon={Heart} iconPosition="right" variant="ghost">
                  Favorite
                </AccessibleButton>
                <AccessibleButton icon={ArrowRight} iconPosition="right">
                  Continue
                </AccessibleButton>
                <AccessibleButton icon={AlertCircle} variant="destructive">
                  Alert
                </AccessibleButton>
              </div>
            </section>

            <section>
              <h2>Icon Only Buttons</h2>
              <div className="mt-4 flex flex-wrap gap-4">
                <AccessibleButton icon={Play} aria-label="Play meditation" />
                <AccessibleButton icon={Pause} variant="secondary" aria-label="Pause meditation" />
                <AccessibleButton icon={SkipForward} variant="outline" aria-label="Skip forward" />
                <AccessibleButton icon={Settings} variant="ghost" aria-label="Settings" />
                <AccessibleButton icon={Heart} variant="destructive" aria-label="Add to favorites" />
              </div>
            </section>

            <section>
              <h2>Sizes</h2>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <AccessibleButton size="sm" icon={Check}>
                  Small
                </AccessibleButton>
                <AccessibleButton>Default</AccessibleButton>
                <AccessibleButton size="lg" icon={Check}>
                  Large
                </AccessibleButton>
              </div>
            </section>

            <section>
              <h2>High Emphasis</h2>
              <div className="mt-4 flex flex-wrap gap-4">
                <AccessibleButton highEmphasis>Primary Action</AccessibleButton>
                <AccessibleButton variant="secondary" highEmphasis icon={ArrowRight} iconPosition="right">
                  Continue
                </AccessibleButton>
              </div>
            </section>

            <section>
              <h2>States</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <p className="text-base-sm font-medium">Default</p>
                  <AccessibleButton>Default State</AccessibleButton>
                </div>
                <div className="space-y-2">
                  <p className="text-base-sm font-medium">Hover (mouse over)</p>
                  <AccessibleButton className="hover">Hover State</AccessibleButton>
                </div>
                <div className="space-y-2">
                  <p className="text-base-sm font-medium">Focus (click or tab)</p>
                  <AccessibleButton className="focus-visible">Focus State</AccessibleButton>
                </div>
                <div className="space-y-2">
                  <p className="text-base-sm font-medium">Active (press)</p>
                  <AccessibleButton className="active">Active State</AccessibleButton>
                </div>
                <div className="space-y-2">
                  <p className="text-base-sm font-medium">Disabled</p>
                  <AccessibleButton disabled>Disabled State</AccessibleButton>
                </div>
              </div>
            </section>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-base-sm">
              All buttons have a minimum touch target size of 44x44 pixels and clear visual states.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
