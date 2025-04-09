"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { FontSizeSwitcher } from "@/components/font-size-switcher"
import { Home, BookOpen, Clock, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Navigation item type
interface NavItem {
  icon: React.ElementType
  label: string
  href: string
}

// Default navigation items
const defaultNavItems: NavItem[] = [
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

export interface AppShellProps {
  title: string
  children: React.ReactNode
  showBottomNav?: boolean
  navItems?: NavItem[]
  currentPath?: string
  showAccessibilityControls?: boolean
  headerClassName?: string
  contentClassName?: string
  bottomNavClassName?: string
}

export function AppShell({
  title,
  children,
  showBottomNav = true,
  navItems = defaultNavItems,
  currentPath,
  showAccessibilityControls = true,
  headerClassName,
  contentClassName,
  bottomNavClassName,
}: AppShellProps) {
  // Use Next.js pathname hook to get current path
  const pathname = usePathname()
  // Use provided currentPath or get it from pathname
  const activePath = currentPath || pathname || "/"

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={cn(
          "w-full h-16 md:h-20 px-4 border-b border-border bg-background/95 backdrop-blur-sm fixed top-0 z-10",
          headerClassName,
        )}
      >
        <div className="h-full max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-heading-2 font-medium truncate">{title}</h1>
          {showAccessibilityControls && (
            <div className="flex items-center gap-2">
              <FontSizeSwitcher />
              <ThemeSwitcher />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 w-full max-w-5xl mx-auto px-4 py-6 mt-16 md:mt-20",
          showBottomNav && "mb-16 md:mb-20",
          contentClassName,
        )}
      >
        {children}
      </main>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <nav
          className={cn(
            "w-full h-16 md:h-20 border-t border-border bg-background/95 backdrop-blur-sm fixed bottom-0 z-10",
            bottomNavClassName,
          )}
        >
          <div className="h-full max-w-5xl mx-auto px-4 flex items-center justify-around">
            {navItems.map((item) => {
              const isActive = activePath === item.href
              return (
                <Link key={item.href} href={item.href} className="w-full max-w-[100px]">
                  <AccessibleButton
                    variant={isActive ? "default" : "ghost"}
                    icon={item.icon}
                    iconPosition="iconOnly"
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex-col h-14 w-full rounded-lg",
                      isActive ? "bg-primary/10 text-primary" : "text-muted-foreground",
                    )}
                  >
                    <span className="mt-1 text-base-sm font-medium">{item.label}</span>
                  </AccessibleButton>
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </div>
  )
}
