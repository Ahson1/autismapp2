"use client"

import { useState, useEffect, useRef } from "react"
import { AppShell } from "@/components/app-shell"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, Square, RotateCcw, Volume2, VolumeX, ChevronLeft } from "lucide-react"
import { InfoCard } from "@/components/ui/info-card"
import { useRouter } from "next/navigation"

// Define the meditation type
interface Meditation {
  id: string
  title: string
  description: string
  duration: number // in minutes
  category?: string
  audioSrc?: string // In a real app, this would point to an audio file
}

interface MeditationPlayerScreenProps {
  meditation: Meditation
  onBack?: () => void
}

export function MeditationPlayerScreen({ meditation, onBack }: MeditationPlayerScreenProps) {
  const router = useRouter()

  // Player state
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const totalDuration = meditation.duration * 60 // Convert minutes to seconds

  // Timer reference
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Format time as MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Handle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Handle stop
  const handleStop = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    setProgress(0)
  }

  // Handle restart
  const handleRestart = () => {
    setCurrentTime(0)
    setProgress(0)
    setIsPlaying(true)
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Handle back button
  const handleBackClick = () => {
    handleStop()
    if (onBack) {
      onBack()
    } else {
      router.push("/meditations")
    }
  }

  // Update timer when playing
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 1
          if (newTime >= totalDuration) {
            setIsPlaying(false)
            clearInterval(timerRef.current as NodeJS.Timeout)
            return totalDuration
          }
          return newTime
        })
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, totalDuration])

  // Update progress based on current time
  useEffect(() => {
    setProgress((currentTime / totalDuration) * 100)
  }, [currentTime, totalDuration])

  return (
    <AppShell title={meditation.title} showBottomNav={false}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-md mx-auto">
        <div className="w-full mb-6">
          <AccessibleButton
            icon={ChevronLeft}
            variant="ghost"
            onClick={handleBackClick}
            className="text-muted-foreground"
          >
            Back to Meditations
          </AccessibleButton>
        </div>

        <InfoCard variant="ghost" className="w-full mb-8 text-center">
          <h1 className="text-heading-1 font-medium mb-2">{meditation.title}</h1>
          <p className="text-base-lg text-muted-foreground mb-6">{meditation.description}</p>

          {/* Timer display */}
          <div
            className="text-4xl font-mono font-medium mb-6"
            aria-live="polite"
            aria-label={`Current time ${formatTime(currentTime)} of total ${formatTime(totalDuration)}`}
          >
            {formatTime(currentTime)} <span className="text-muted-foreground">/</span> {formatTime(totalDuration)}
          </div>

          {/* Progress bar */}
          <div className="w-full mb-8">
            <Progress value={progress} className="h-3" aria-label={`Meditation progress: ${Math.round(progress)}%`} />
          </div>

          {/* Main play/pause button - PROMINENT */}
          <div className="flex justify-center mb-8">
            <AccessibleButton
              icon={isPlaying ? Pause : Play}
              size="lg"
              highEmphasis
              onClick={togglePlayPause}
              className="h-20 w-20 rounded-full"
              aria-label={isPlaying ? "Pause meditation" : currentTime > 0 ? "Resume meditation" : "Start meditation"}
            >
              <span className="sr-only">{isPlaying ? "Pause" : currentTime > 0 ? "Resume" : "Start"}</span>
            </AccessibleButton>
          </div>

          {/* Secondary controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <AccessibleButton icon={Square} variant="outline" onClick={handleStop} aria-label="Stop meditation">
              Stop
            </AccessibleButton>

            <AccessibleButton
              icon={RotateCcw}
              variant="outline"
              onClick={handleRestart}
              aria-label="Restart meditation"
            >
              Restart
            </AccessibleButton>

            <AccessibleButton
              icon={isMuted ? VolumeX : Volume2}
              variant="outline"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              aria-pressed={isMuted}
            >
              {isMuted ? "Unmute" : "Mute"}
            </AccessibleButton>
          </div>
        </InfoCard>

        {/* Meditation status announcements for screen readers */}
        <div className="sr-only" aria-live="polite">
          {isPlaying ? "Meditation is playing" : "Meditation is paused"}
          {progress === 100 && "Meditation has completed"}
        </div>
      </div>
    </AppShell>
  )
}
