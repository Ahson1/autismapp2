"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { InfoCard } from "@/components/ui/info-card"
import { Clock } from "lucide-react"

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

export function MeditationListScreen() {
  const [selectedMeditation, setSelectedMeditation] = useState<string | null>(null)

  // Handle meditation selection
  const handleMeditationSelect = (id: string) => {
    setSelectedMeditation(id)
    // In a real app, this would navigate to the meditation detail/player screen
    console.log(`Selected meditation: ${id}`)
  }

  return (
    <AppShell title="Meditations">
      <div className="space-y-4">
        <h2 className="text-heading-3 font-medium mb-6">Choose a Practice</h2>

        <div className="space-y-5">
          {meditations.map((meditation) => (
            <InfoCard
              key={meditation.id}
              variant="default"
              interactive
              onClick={() => handleMeditationSelect(meditation.id)}
              title={meditation.title}
              description={
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1.5" aria-hidden="true" />
                  <span>{meditation.duration} min</span>
                </div>
              }
              className="transition-all hover:translate-y-[-2px]"
            >
              <p>{meditation.description}</p>
            </InfoCard>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
