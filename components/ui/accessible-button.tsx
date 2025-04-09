"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

// Icon component type
type IconProps = React.ComponentProps<"svg"> & {
  icon: React.ElementType
}

const Icon = ({ icon: IconComponent, className, ...props }: IconProps) => {
  return <IconComponent className={cn("h-5 w-5", className)} {...props} />
}

const accessibleButtonVariants = cva(
  "min-h-[44px] min-w-[44px] rounded-md text-base-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent/50 focus-visible:ring-accent",
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-primary",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-2",
        lg: "px-6 py-4",
        icon: "h-11 w-11 p-2",
      },
      iconPosition: {
        left: "flex items-center gap-2",
        right: "flex items-center justify-between gap-2",
        iconOnly: "flex items-center justify-center",
      },
      highEmphasis: {
        true: "shadow-md active:shadow-sm transform active:translate-y-0.5 transition-transform",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "left",
      highEmphasis: false,
    },
  },
)

export interface AccessibleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof accessibleButtonVariants> {
  asChild?: boolean
  icon?: React.ElementType
  iconClassName?: string
  focusRingClassName?: string
}

const AccessibleButton = React.forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconPosition,
      highEmphasis,
      asChild = false,
      icon,
      iconClassName,
      focusRingClassName,
      children,
      ...props
    },
    ref,
  ) => {
    // If no children and icon is provided, set iconPosition to iconOnly
    const effectiveIconPosition = !children && icon ? "iconOnly" : iconPosition

    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          accessibleButtonVariants({
            variant,
            size,
            iconPosition: effectiveIconPosition,
            highEmphasis,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {icon && effectiveIconPosition === "left" && <Icon icon={icon} className={iconClassName} aria-hidden="true" />}
        {children}
        {icon && effectiveIconPosition === "right" && <Icon icon={icon} className={iconClassName} aria-hidden="true" />}
        {icon && effectiveIconPosition === "iconOnly" && (
          <>
            <Icon icon={icon} className={iconClassName} aria-hidden="true" />
            <span className="sr-only">{props["aria-label"] || "Button"}</span>
          </>
        )}
      </Comp>
    )
  },
)

AccessibleButton.displayName = "AccessibleButton"

export { AccessibleButton, accessibleButtonVariants }
