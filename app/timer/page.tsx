"use client"

import { useState, useEffect, useRef } from "react"
import { AppShell } from "@/components/app-shell"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { InfoCard } from "@/components/ui/info-card"
import { Play, Pause, RotateCcw } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function TimerPage() {
  const [duration, setDuration] = useState(300) // 5 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Format time as MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Handle play/pause
  const togglePlayPause = () => {
    setIsRunning(!isRunning)
  }

  // Handle reset
  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(duration)
  }

  // Handle duration change
  const handleDurationChange = (value: string) => {
    const newDuration = Number.parseInt(value)
    setDuration(newDuration)
    setTimeLeft(newDuration)
    setIsRunning(false)
  }

  // Update timer when running
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false)
            clearInterval(timerRef.current as NodeJS.Timeout)
            return 0
          }
          return prevTime - 1
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
  }, [isRunning])

  return (
    <AppShell title="Meditation Timer">
      <div className="flex flex-col items-center justify-center max-w-md mx-auto">
        <h2 className="text-heading-3 font-medium mb-6">Meditation Timer</h2>

        <InfoCard className="w-full mb-8 text-center">
          <div className="text-6xl font-mono font-medium mb-8" aria-live="polite">
            {formatTime(timeLeft)}
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <AccessibleButton
              icon={isRunning ? Pause : Play}
              size="lg"
              highEmphasis
              onClick={togglePlayPause}
              className="h-16 w-16 rounded-full"
              aria-label={isRunning ? "Pause timer" : "Start timer"}
            >
              <span className="sr-only">{isRunning ? "Pause" : "Start"}</span>
            </AccessibleButton>

            <AccessibleButton
              icon={RotateCcw}
              size="lg"
              variant="outline"
              onClick={handleReset}
              aria-label="Reset timer"
              className="h-16 w-16 rounded-full"
            >
              <span className="sr-only">Reset</span>
            </AccessibleButton>
          </div>
        </InfoCard>

        <InfoCard className="w-full">
          <h3 className="text-heading-4 font-medium mb-4">Duration</h3>
          <RadioGroup
            value={duration.toString()}
            onValueChange={handleDurationChange}
            className="grid grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="300" id="duration-5" />
              <Label htmlFor="duration-5">5 minutes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="600" id="duration-10" />
              <Label htmlFor="duration-10">10 minutes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="900" id="duration-15" />
              <Label htmlFor="duration-15">15 minutes</Label>
            </div>
          </RadioGroup>
        </InfoCard>
      </div>
    </AppShell>
  )
}
