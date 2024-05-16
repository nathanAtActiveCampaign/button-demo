import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Shared
const typography = "whitespace-nowrap text-sm font-medium";
const block = "inline-flex items-center justify-center rounded-md ";
const focus =
  "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const disabled = "disabled:pointer-events-none disabled:opacity-50";
const misc = "transition-colors";

// Appearance
const fill = "bg-interactive text-interactive-fg hover:bg-interactive-bgHover";
const destructive = "bg-danger text-danger-fg hover:bg-danger-bgHover";

const outline =
  "bg-background text-foreground border border-slate-200 hover:bg-accent";

const ghost = "hover:bg-accent hover:text-accent-foreground";
const link = "text-primary underline-offset-4 hover:underline";
// Size
const sm = "h-9 rounded-md px-3";
const md = "h-10 px-4 py-2";
const lg = "h-11 rounded-md px-8";
const icon = "h-10 w-10";

const buttonVariants = cva([block, typography, focus, disabled, misc], {
  variants: {
    variant: {
      fill,
      destructive,
      outline,
      ghost,
      link,
    },
    size: {
      sm,
      md,
      lg,
      icon,
    },
  },
  defaultVariants: {
    variant: "fill",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
