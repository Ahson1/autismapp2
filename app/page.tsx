import { AppShell } from "@/components/app-shell"
import { InfoCard } from "@/components/ui/info-card"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { BookOpen, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <AppShell title="Home">
      <div className="space-y-6">
        <h2 className="text-heading-3 font-medium">Welcome to Your Meditation Practice</h2>
        <p className="lead">A calm space for mindfulness and relaxation.</p>

        <InfoCard
          title="Meditation Library"
          description="Explore our collection of guided meditations"
          variant="filled"
          interactive
          className="transition-all hover:translate-y-[-2px]"
          footer={
            <Link href="/meditations" className="w-full">
              <AccessibleButton className="w-full" icon={BookOpen} iconPosition="right">
                Browse Meditations
              </AccessibleButton>
            </Link>
          }
        >
          <p>Find practices designed specifically for sensory regulation, anxiety reduction, and mindful awareness.</p>
        </InfoCard>

        <InfoCard
          title="Quick Practice"
          description="Short meditations for when you need a moment of calm"
          variant="outline"
          className="transition-all hover:translate-y-[-2px]"
        >
          <div className="grid grid-cols-2 gap-3 mt-2">
            <Link href="/meditation-player" className="w-full">
              <AccessibleButton variant="secondary" className="w-full justify-between" icon={Clock}>
                <span>Deep Breathing</span>
                <span className="text-xs">3 min</span>
              </AccessibleButton>
            </Link>
            <Link href="/meditation-player" className="w-full">
              <AccessibleButton variant="secondary" className="w-full justify-between" icon={Clock}>
                <span>Grounding</span>
                <span className="text-xs">5 min</span>
              </AccessibleButton>
            </Link>
          </div>
        </InfoCard>
      </div>
    </AppShell>
  )
}
