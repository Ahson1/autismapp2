"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { FontSizeSwitcher } from "@/components/font-size-switcher"

export default function TypographyDemo() {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-end mb-4 gap-2">
          <FontSizeSwitcher />
          <ThemeSwitcher />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Typography System</CardTitle>
            <CardDescription>Accessible typography for the meditation app</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2>Headings</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h1>Heading Level 1</h1>
                  <p className="text-muted-foreground">Used for main page titles</p>
                </div>
                <div>
                  <h2>Heading Level 2</h2>
                  <p className="text-muted-foreground">Used for section titles</p>
                </div>
                <div>
                  <h3>Heading Level 3</h3>
                  <p className="text-muted-foreground">Used for subsection titles</p>
                </div>
                <div>
                  <h4>Heading Level 4</h4>
                  <p className="text-muted-foreground">Used for card titles and smaller sections</p>
                </div>
              </div>
            </section>

            <section>
              <h2>Body Text</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="lead">
                    This is lead text, slightly larger than normal body text. It's often used for introductory
                    paragraphs or to emphasize important information.
                  </p>
                </div>
                <div>
                  <p>
                    This is regular body text. It uses a comfortable line height of 1.5 for improved readability. The
                    font is Inter, a clean and highly readable sans-serif typeface designed for screen use.
                  </p>
                  <p>
                    Multiple paragraphs are spaced appropriately to create a clear visual separation, making it easier
                    to focus on one paragraph at a time.
                  </p>
                </div>
                <div>
                  <p className="small">
                    This is small text, used for less important information, captions, or footnotes. It's still designed
                    to be readable with adequate contrast.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Lists</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4>Unordered List</h4>
                  <ul>
                    <li>Breathing exercises</li>
                    <li>Guided meditation</li>
                    <li>Body scan techniques</li>
                    <li>Mindfulness practices</li>
                  </ul>
                </div>
                <div>
                  <h4>Ordered List</h4>
                  <ol>
                    <li>Find a quiet space</li>
                    <li>Sit in a comfortable position</li>
                    <li>Close your eyes</li>
                    <li>Focus on your breath</li>
                  </ol>
                </div>
              </div>
            </section>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-base-sm">
              Font size can be adjusted using the text icon in the top right corner.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
