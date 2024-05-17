import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// TODO - look tailwind reset stuff
// TODO - loading indicator

// Shared
const typography = "whitespace-nowrap text-sm font-medium";
const block = "inline-flex items-center justify-center rounded-md ";
const focus =
  "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acBlue-500)] focus-visible:ring-offset-2";
const disabled = "disabled:opacity-35 disabled:cursor-not-allowed"; // TODO: no pointer events? //  "disabled:pointer-events-none"
const misc = "transition-colors";

// Appearance
const fillBase =
  "bg-interactive text-interactive-fg hover:bg-interactive-bgHover";
const fillActive = "focus-visible:ring-[var(--acBlue-500)]"; // TODO: semantic tokens

const destructive = `
  bg-danger 
  text-danger-fg 
  hover:bg-danger-bgHover
  focus-visible:ring-[var(--strawberry-500)]
`;
// TODO: semantic tokens for visible ring

// TODO: is midnight our new slate?
const outline = `
  bg-background 
  text-foreground 
  border 
  border-[var(--midnight-300)]
  hover:bg-[var(--midnight-200)]
`;

const ghost = `
  bg-transparent
  hover:bg-[var(--acBlue-200)]
  text-interactive
`;

const ghostDestructive = `
  hover:bg-[var(--strawberry-200)]
  text-destructive
  focus-visible:ring-[var(--strawberry-500)]
`;

// Size
const sm = "h-9 px-2 py-1";
const md = "h-9 px-3 py-2"; // do we need pad?

const buttonVariants = cva([block, typography, focus, disabled, misc], {
  variants: {
    variant: {
      fill: [fillBase, fillActive],
      "fill-destructive": destructive,
      outline,
      ghost,
      "ghost-destructive": [ghost, ghostDestructive],
    },
    size: {
      sm,
      md,
    },
  },
  defaultVariants: {
    variant: "fill",
    size: "md",
  },
});

export type buttonVariantsType = typeof buttonVariants;

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
