"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { InfoCard } from "@/components/ui/info-card"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { Home, BookOpen, Clock, Settings, Play, Heart, Calendar } from "lucide-react"

// Custom navigation items
const navItems = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: BookOpen,
    label: "Meditations",
    href: "/meditations",
  },
  {
    icon: Clock,
    label: "Timer",
    href: "/timer",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
]

export default function AppShellDemo() {
  const [currentPath, setCurrentPath] = useState("/")
  const [title, setTitle] = useState("Home")

  // Handle navigation
  const handleNavigation = (href: string) => {
    setCurrentPath(href)
    // Update title based on the selected navigation item
    const navItem = navItems.find((item) => item.href === href)
    if (navItem) {
      setTitle(navItem.label)
    }
  }

  // Render content based on current path
  const renderContent = () => {
    switch (currentPath) {
      case "/":
        return <HomeScreen />
      case "/meditations":
        return <MeditationsScreen />
      case "/timer":
        return <TimerScreen />
      case "/settings":
        return <SettingsScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <AppShell
      title={title}
      showBottomNav={true}
      navItems={navItems}
      currentPath={currentPath}
      onNavItemClick={handleNavigation}
    >
      {renderContent()}
    </AppShell>
  )
}

// Home Screen
function HomeScreen() {
  return (
    <div className="space-y-6">
      <h2>Welcome to Your Meditation Practice</h2>
      <p className="lead">A calm space for mindfulness and relaxation.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Daily Meditation"
          description="5-minute breathing exercise"
          variant="filled"
          interactive
          onClick={() => {}}
          footer={
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>5 minutes</span>
              </div>
              <AccessibleButton icon={Play} size="sm">
                Start
              </AccessibleButton>
            </div>
          }
        >
          <p>A short breathing exercise to help you center yourself and find calm.</p>
        </InfoCard>

        <InfoCard
          title="Your Progress"
          description="Weekly meditation streak"
          variant="outline"
          interactive
          onClick={() => {}}
        >
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">5 days</div>
          </div>
          <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary w-5/6 rounded-full"></div>
          </div>
        </InfoCard>
      </div>
    </div>
  )
}

// Meditations Screen
function MeditationsScreen() {
  return (
    <div className="space-y-6">
      <h2>Meditation Library</h2>
      <p>Choose a meditation technique to practice.</p>

      <div className="grid grid-cols-1 gap-4">
        {["Breathing Awareness", "Body Scan", "Loving-Kindness", "Mindful Observation"].map((meditation, index) => (
          <InfoCard
            key={index}
            variant="default"
            interactive
            onClick={() => {}}
            title={meditation}
            footer={
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{5 + index * 3} minutes</span>
                </div>
                <AccessibleButton icon={Heart} variant="ghost" size="sm" aria-label="Add to favorites" />
              </div>
            }
          >
            <p>A guided meditation practice to help you develop mindfulness and awareness.</p>
          </InfoCard>
        ))}
      </div>
    </div>
  )
}

// Timer Screen
function TimerScreen() {
  return (
    <div className="space-y-6">
      <h2>Meditation Timer</h2>
      <p>Set a timer for your self-guided meditation practice.</p>

      <InfoCard className="max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="text-6xl font-bold tabular-nums mb-8">10:00</div>
          <div className="flex gap-4">
            <AccessibleButton>Start</AccessibleButton>
            <AccessibleButton variant="outline">Reset</AccessibleButton>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Timer Settings" variant="subtle" className="max-w-md mx-auto">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Duration</span>
            <div className="flex items-center gap-2">
              <AccessibleButton variant="outline" size="sm">
                5m
              </AccessibleButton>
              <AccessibleButton variant="default" size="sm">
                10m
              </AccessibleButton>
              <AccessibleButton variant="outline" size="sm">
                15m
              </AccessibleButton>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Interval Bells</span>
            <div className="w-10 h-5 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  )
}

// Settings Screen
function SettingsScreen() {
  return (
    <div className="space-y-6">
      <h2>Settings</h2>
      <p>Customize your meditation experience.</p>

      <InfoCard title="Appearance" variant="default">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Theme</span>
            <div className="flex items-center gap-2">
              <AccessibleButton variant="outline" size="sm">
                Light
              </AccessibleButton>
              <AccessibleButton variant="default" size="sm">
                Dark
              </AccessibleButton>
              <AccessibleButton variant="outline" size="sm">
                High Contrast
              </AccessibleButton>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Font Size</span>
            <div className="flex items-center gap-2">
              <AccessibleButton variant="outline" size="sm">
                Small
              </AccessibleButton>
              <AccessibleButton variant="default" size="sm">
                Medium
              </AccessibleButton>
              <AccessibleButton variant="outline" size="sm">
                Large
              </AccessibleButton>
            </div>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Notifications" variant="default">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Daily Reminder</span>
            <div className="w-10 h-5 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Reminder Time</span>
            <AccessibleButton variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>8:00 AM</span>
            </AccessibleButton>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Audio" variant="default">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Background Sounds</span>
            <div className="w-10 h-5 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>End Bell</span>
            <div className="w-10 h-5 bg-primary rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  )
}
