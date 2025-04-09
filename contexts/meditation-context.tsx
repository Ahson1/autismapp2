"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

// Define the meditation type
export interface Meditation {
  id: string
  title: string
  description: string
  duration: number // in minutes
  category: string
  audioSrc?: string
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
]

interface MeditationContextType {
  meditations: Meditation[]
  currentMeditation: Meditation | null
  setCurrentMeditation: (meditation: Meditation | null) => void
  getMeditationById: (id: string) => Meditation | undefined
}

const MeditationContext = createContext<MeditationContextType | undefined>(undefined)

export function MeditationProvider({ children }: { children: ReactNode }) {
  const [currentMeditation, setCurrentMeditation] = useState<Meditation | null>(null)

  const getMeditationById = (id: string) => {
    return meditations.find((meditation) => meditation.id === id)
  }

  return (
    <MeditationContext.Provider
      value={{
        meditations,
        currentMeditation,
        setCurrentMeditation,
        getMeditationById,
      }}
    >
      {children}
    </MeditationContext.Provider>
  )
}

export function useMeditation() {
  const context = useContext(MeditationContext)
  if (context === undefined) {
    throw new Error("useMeditation must be used within a MeditationProvider")
  }
  return context
}
