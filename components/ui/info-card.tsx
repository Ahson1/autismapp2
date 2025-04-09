import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const infoCardVariants = cva(
  "rounded-lg transition-all focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ring",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border border-border",
        filled: "bg-primary/10 text-foreground border border-primary/20",
        outline: "bg-background text-foreground border-2 border-border",
        subtle: "bg-muted/50 text-foreground border border-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted/30",
      },
      elevation: {
        none: "",
        low: "shadow-sm",
        medium: "shadow-md",
        high: "shadow-lg",
      },
      padding: {
        none: "",
        sm: "[&>*]:p-3",
        default: "[&>*]:p-5",
        lg: "[&>*]:p-7",
      },
      interactive: {
        true: "hover:border-primary/50 cursor-pointer transition-colors",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      elevation: "low",
      padding: "default",
      interactive: false,
    },
  },
)

export interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof infoCardVariants> {
  title?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
}

const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>(
  (
    {
      className,
      variant,
      elevation,
      padding,
      interactive,
      title,
      description,
      footer,
      headerClassName,
      contentClassName,
      footerClassName,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(infoCardVariants({ variant, elevation, padding, interactive, className }))}
        {...props}
      >
        {(title || description) && (
          <CardHeader className={cn("flex flex-col space-y-1.5", headerClassName)}>
            {title && (typeof title === "string" ? <h3 className="text-heading-3 font-medium">{title}</h3> : title)}
            {description && (
              <div className={typeof description === "string" ? "text-muted-foreground" : ""}>{description}</div>
            )}
          </CardHeader>
        )}
        <CardContent className={cn("", contentClassName)}>{children}</CardContent>
        {footer && <CardFooter className={cn("", footerClassName)}>{footer}</CardFooter>}
      </Card>
    )
  },
)

InfoCard.displayName = "InfoCard"

export { InfoCard, infoCardVariants }
