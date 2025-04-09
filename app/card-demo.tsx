"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { FontSizeSwitcher } from "@/components/font-size-switcher"
import { InfoCard } from "@/components/ui/info-card"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { Play, Clock, Calendar, Heart, Settings, Info } from "lucide-react"

export default function CardDemo() {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-end mb-4 gap-2">
          <FontSizeSwitcher />
          <ThemeSwitcher />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>InfoCard Component</CardTitle>
            <CardDescription>A reusable card component designed for accessibility and clarity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2>Card Variants</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard title="Default Card" description="Standard card with border and subtle shadow">
                  <p>This is the default card style with standard padding and elevation.</p>
                </InfoCard>

                <InfoCard variant="filled" title="Filled Card" description="Colored background with matching border">
                  <p>This card has a subtle colored background related to the primary color.</p>
                </InfoCard>

                <InfoCard variant="outline" title="Outline Card" description="Thicker border for emphasis">
                  <p>This card has a thicker border to create more visual separation.</p>
                </InfoCard>

                <InfoCard variant="subtle" title="Subtle Card" description="Muted background for less emphasis">
                  <p>This card has a muted background for when you need less visual emphasis.</p>
                </InfoCard>
              </div>
            </section>

            <section>
              <h2>Elevation Levels</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoCard elevation="none" title="No Elevation" description="Flat appearance">
                  <p>This card has no shadow, giving it a flat appearance.</p>
                </InfoCard>

                <InfoCard elevation="medium" title="Medium Elevation" description="More pronounced shadow">
                  <p>This card has a medium shadow, giving it a slightly elevated appearance.</p>
                </InfoCard>

                <InfoCard elevation="high" title="High Elevation" description="Significant shadow">
                  <p>This card has a pronounced shadow, giving it a significantly elevated appearance.</p>
                </InfoCard>
              </div>
            </section>

            <section>
              <h2>Padding Options</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoCard padding="sm" title="Small Padding" description="Compact layout">
                  <p>This card has smaller internal padding for a more compact layout.</p>
                </InfoCard>

                <InfoCard title="Default Padding" description="Standard spacing">
                  <p>This card has the default padding, which provides comfortable spacing.</p>
                </InfoCard>

                <InfoCard padding="lg" title="Large Padding" description="Spacious layout">
                  <p>This card has larger internal padding for a more spacious layout.</p>
                </InfoCard>
              </div>
            </section>

            <section>
              <h2>Interactive Cards</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                  interactive
                  title="Interactive Card"
                  description="Hover to see effect"
                  onClick={() => alert("Card clicked!")}
                >
                  <p>This card is interactive. Hover over it to see the effect, and click to trigger an action.</p>
                </InfoCard>

                <InfoCard
                  interactive
                  variant="filled"
                  elevation="medium"
                  title="Interactive Filled Card"
                  description="Combined styles"
                  onClick={() => alert("Filled card clicked!")}
                >
                  <p>This card combines multiple styles: filled variant, medium elevation, and interactive behavior.</p>
                </InfoCard>
              </div>
            </section>

            <section>
              <h2>Content Examples</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                  title="Meditation Session"
                  description="Calm breathing exercise"
                  footer={
                    <div className="w-full flex justify-between items-center">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>10 minutes</span>
                      </div>
                      <AccessibleButton icon={Play} size="sm">
                        Start
                      </AccessibleButton>
                    </div>
                  }
                >
                  <p>A guided breathing exercise to help you relax and focus on the present moment.</p>
                </InfoCard>

                <InfoCard
                  variant="outline"
                  title={
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>Weekly Progress</span>
                    </div>
                  }
                  description="Your meditation streak"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-semibold">5 days</div>
                    <AccessibleButton variant="ghost" icon={Info} aria-label="More information">
                      Details
                    </AccessibleButton>
                  </div>
                  <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-5/7 rounded-full"></div>
                  </div>
                </InfoCard>

                <InfoCard
                  variant="filled"
                  title="Favorite Techniques"
                  description="Your saved meditation techniques"
                  footer={
                    <AccessibleButton variant="outline" size="sm" className="w-full">
                      View All Favorites
                    </AccessibleButton>
                  }
                >
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center p-2 bg-background rounded-md">
                      <span>Deep Breathing</span>
                      <Heart className="h-4 w-4 text-primary" />
                    </li>
                    <li className="flex justify-between items-center p-2 bg-background rounded-md">
                      <span>Body Scan</span>
                      <Heart className="h-4 w-4 text-primary" />
                    </li>
                  </ul>
                </InfoCard>

                <InfoCard variant="subtle" title="Settings" description="Customize your experience">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        <span>Notification Sounds</span>
                      </div>
                      <div className="w-10 h-5 bg-primary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        <span>Background Sounds</span>
                      </div>
                      <div className="w-10 h-5 bg-muted rounded-full relative">
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-foreground rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </InfoCard>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
