"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { InfoCard } from "@/components/ui/info-card"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { Clock, Filter } from "lucide-react"

// Define the meditation type
interface Meditation {
  id: string
  title: string
  description: string
  duration: number // in minutes
  category: "grounding" | "breathing" | "body" | "mindfulness" | "sleep"
}

// Sample meditation data
const meditations: Meditation[] = [
  {
    id: "sensory-grounding",
    title: "Sensory Grounding",
    description: "A gentle practice to connect with your senses and the present moment",
    duration: 5,
    category: "grounding",
  },
  {
    id: "deep-breathing",
    title: "Deep Breathing",
    description: "Simple breathing techniques to calm your nervous system",
    duration: 3,
    category: "breathing",
  },
  {
    id: "body-scan",
    title: "Body Scan",
    description: "A progressive relaxation practice moving through the body",
    duration: 10,
    category: "body",
  },
  {
    id: "thought-labeling",
    title: "Thought Labeling",
    description: "Learn to observe and label thoughts without judgment",
    duration: 7,
    category: "mindfulness",
  },
  {
    id: "sleep-preparation",
    title: "Sleep Preparation",
    description: "A calming practice to prepare your mind and body for sleep",
    duration: 15,
    category: "sleep",
  },
  {
    id: "mindful-listening",
    title: "Mindful Listening",
    description: "Focus on sounds around you to anchor your attention",
    duration: 5,
    category: "mindfulness",
  },
  {
    id: "square-breathing",
    title: "Square Breathing",
    description: "A structured breathing pattern to reduce anxiety",
    duration: 4,
    category: "breathing",
  },
]

// Category display names
const categoryNames = {
  grounding: "Grounding",
  breathing: "Breathing",
  body: "Body Awareness",
  mindfulness: "Mindfulness",
  sleep: "Sleep",
}

type Category = keyof typeof categoryNames

export function MeditationListScreenEnhanced() {
  const [selectedMeditation, setSelectedMeditation] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all")
  const [durationFilter, setDurationFilter] = useState<"all" | "short" | "medium" | "long">("all")

  // Handle meditation selection
  const handleMeditationSelect = (id: string) => {
    setSelectedMeditation(id)
    // In a real app, this would navigate to the meditation detail/player screen
    console.log(`Selected meditation: ${id}`)
  }

  // Filter meditations based on selected category and duration
  const filteredMeditations = meditations.filter((meditation) => {
    // Category filter
    if (selectedCategory !== "all" && meditation.category !== selectedCategory) {
      return false
    }

    // Duration filter
    if (durationFilter === "short" && meditation.duration > 5) {
      return false
    }
    if (durationFilter === "medium" && (meditation.duration < 6 || meditation.duration > 10)) {
      return false
    }
    if (durationFilter === "long" && meditation.duration < 11) {
      return false
    }

    return true
  })

  return (
    <AppShell title="Meditations">
      <div className="space-y-4">
        <h2 className="text-heading-3 font-medium mb-2">Choose a Practice</h2>

        {/* Filters */}
        <InfoCard variant="subtle" className="mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base-md font-medium mb-2">Category</h3>
              <div className="flex flex-wrap gap-2">
                <AccessibleButton
                  size="sm"
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                >
                  All
                </AccessibleButton>
                {(Object.keys(categoryNames) as Category[]).map((category) => (
                  <AccessibleButton
                    key={category}
                    size="sm"
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {categoryNames[category]}
                  </AccessibleButton>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base-md font-medium mb-2">Duration</h3>
              <div className="flex flex-wrap gap-2">
                <AccessibleButton
                  size="sm"
                  variant={durationFilter === "all" ? "default" : "outline"}
                  onClick={() => setDurationFilter("all")}
                >
                  All
                </AccessibleButton>
                <AccessibleButton
                  size="sm"
                  variant={durationFilter === "short" ? "default" : "outline"}
                  onClick={() => setDurationFilter("short")}
                >
                  Short (1-5 min)
                </AccessibleButton>
                <AccessibleButton
                  size="sm"
                  variant={durationFilter === "medium" ? "default" : "outline"}
                  onClick={() => setDurationFilter("medium")}
                >
                  Medium (6-10 min)
                </AccessibleButton>
                <AccessibleButton
                  size="sm"
                  variant={durationFilter === "long" ? "default" : "outline"}
                  onClick={() => setDurationFilter("long")}
                >
                  Long (11+ min)
                </AccessibleButton>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Results count */}
        <p className="text-base-md text-muted-foreground mb-4">
          Showing {filteredMeditations.length} {filteredMeditations.length === 1 ? "meditation" : "meditations"}
        </p>

        {/* Meditation list */}
        <div className="space-y-5">
          {filteredMeditations.length > 0 ? (
            filteredMeditations.map((meditation) => (
              <InfoCard
                key={meditation.id}
                variant="default"
                interactive
                onClick={() => handleMeditationSelect(meditation.id)}
                title={meditation.title}
                description={
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1.5" aria-hidden="true" />
                      <span>{meditation.duration} min</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="px-2 py-0.5 bg-muted rounded-full text-xs">
                        {categoryNames[meditation.category]}
                      </span>
                    </div>
                  </div>
                }
                className="transition-all hover:translate-y-[-2px]"
              >
                <p>{meditation.description}</p>
              </InfoCard>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No meditations match your filters</p>
              <AccessibleButton
                variant="outline"
                className="mt-4"
                icon={Filter}
                onClick={() => {
                  setSelectedCategory("all")
                  setDurationFilter("all")
                }}
              >
                Clear Filters
              </AccessibleButton>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  )
}
