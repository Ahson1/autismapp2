"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function ThemeDemo() {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-md">
        <div className="flex justify-end mb-4">
          <ThemeSwitcher />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Theme Demonstration</CardTitle>
            <CardDescription>This card demonstrates the current theme colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>

            <div className="p-4 bg-muted rounded-md text-muted-foreground">
              This is muted text in a muted background
            </div>

            <div className="p-4 bg-accent rounded-md text-accent-foreground">
              This is accent text in an accent background
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
