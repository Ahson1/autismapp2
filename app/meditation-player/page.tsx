"use client"
import { MeditationPlayerScreen } from "@/components/screens/meditation-player-screen"
import { useRouter } from "next/navigation"

// Sample meditation
const sampleMeditation = {
  id: "sensory-grounding",
  title: "Sensory Grounding",
  description: "A gentle practice to connect with your senses and the present moment",
  duration: 5, // 5 minutes
}

export default function MeditationPlayerPage() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/meditations")
  }

  return <MeditationPlayerScreen meditation={sampleMeditation} onBack={handleBack} />
}
