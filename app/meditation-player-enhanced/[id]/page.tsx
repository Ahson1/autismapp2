"use client"

import { useEffect, useState } from "react"
import { MeditationPlayerScreenEnhanced } from "@/components/screens/meditation-player-screen-enhanced"
import { useMeditation, type Meditation } from "@/contexts/meditation-context"
import { useRouter } from "next/navigation"

export default function MeditationPlayerEnhancedPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { getMeditationById } = useMeditation()
  const [meditation, setMeditation] = useState<Meditation | null>(null)

  useEffect(() => {
    const med = getMeditationById(params.id)
    if (med) {
      setMeditation(med)
    } else {
      // Meditation not found, redirect to list
      router.push("/meditations")
    }
  }, [params.id, getMeditationById, router])

  const handleBack = () => {
    router.push("/meditations")
  }

  if (!meditation) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading meditation...</p>
      </div>
    )
  }

  return <MeditationPlayerScreenEnhanced meditation={meditation} onBack={handleBack} />
}
