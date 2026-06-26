import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full text-sm font-medium whitespace-nowrap outline-none select-none disabled:pointer-events-none disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        default: "galaxy-button text-white",
        secondary: "galaxy-button text-white",
        outline: "galaxy-button text-white border-transparent",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 text-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        xs: "h-7 px-3 text-xs",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const ORBITING_STARS = [
  { size: 1, distance: 30, duration: 4, delay: -1, alpha: 0.5 },
  { size: 2, distance: 40, duration: 5, delay: -2, alpha: 0.8 },
  { size: 1.5, distance: 50, duration: 6, delay: -3, alpha: 0.6 },
  { size: 2.5, distance: 60, duration: 7, delay: -4, alpha: 0.9 },
  { size: 1.2, distance: 70, duration: 8, delay: -5, alpha: 0.4 },
  { size: 2, distance: 80, duration: 9, delay: -6, alpha: 0.75 },
  { size: 1.8, distance: 35, duration: 4.5, delay: -1.5, alpha: 0.55 },
  { size: 2.2, distance: 45, duration: 5.5, delay: -2.5, alpha: 0.85 },
  { size: 1.3, distance: 55, duration: 6.5, delay: -3.5, alpha: 0.65 },
  { size: 2.4, distance: 65, duration: 7.5, delay: -4.5, alpha: 0.95 },
  { size: 1.1, distance: 75, duration: 8.5, delay: -5.5, alpha: 0.45 },
  { size: 2.1, distance: 85, duration: 9.5, delay: -6.5, alpha: 0.7 },
  { size: 1.6, distance: 32, duration: 4.2, delay: -0.8, alpha: 0.52 },
  { size: 2.3, distance: 48, duration: 5.8, delay: -2.2, alpha: 0.82 },
];

const STATIC_STARS = [
  { duration: 20, delay: -2 },
  { duration: 25, delay: -4 },
  { duration: 30, delay: -6 },
  { duration: 35, delay: -8 },
];

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  
  const isGalaxy = variant === "default" || variant === "secondary" || variant === "outline"

  const Comp = asChild ? Slot.Root : "button"

  if (isGalaxy) {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ children?: React.ReactNode }>;
      return (
        <Comp
          data-slot="button"
          data-variant={variant}
          data-size={size}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {React.cloneElement(
            child,
            child.props,
            <>
              <span className="spark"></span>
              <span className="backdrop"></span>
              <span className="galaxy">
                <span className="galaxy__ring">
                  <span className="galaxy__container">
                    {ORBITING_STARS.map((star, idx) => (
                      <span
                        key={`orbit-${idx}`}
                        className="star"
                        style={{
                          "--size": star.size,
                          "--distance": star.distance,
                          "--duration": star.duration,
                          "--delay": star.delay,
                          "--alpha": star.alpha,
                        } as React.CSSProperties}
                      />
                    ))}
                    {STATIC_STARS.map((star, idx) => (
                      <span
                        key={`static-${idx}`}
                        className="star star--static"
                        style={{
                          "--duration": star.duration,
                          "--delay": star.delay,
                        } as React.CSSProperties}
                      />
                    ))}
                  </span>
                </span>
              </span>
              <span className="text">{child.props.children}</span>
            </>
          )}
        </Comp>
      )
    }

    return (
      <Comp
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <span className="spark"></span>
        <span className="backdrop"></span>
        <span className="galaxy">
          <span className="galaxy__ring">
            <span className="galaxy__container">
              {ORBITING_STARS.map((star, idx) => (
                <span
                  key={`orbit-${idx}`}
                  className="star"
                  style={{
                    "--size": star.size,
                    "--distance": star.distance,
                    "--duration": star.duration,
                    "--delay": star.delay,
                    "--alpha": star.alpha,
                  } as React.CSSProperties}
                />
              ))}
              {STATIC_STARS.map((star, idx) => (
                <span
                  key={`static-${idx}`}
                  className="star star--static"
                  style={{
                    "--duration": star.duration,
                    "--delay": star.delay,
                  } as React.CSSProperties}
                />
              ))}
            </span>
          </span>
        </span>
        <span className="text">{children}</span>
      </Comp>
    )
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
