import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Shared
const typography = "whitespace-nowrap text-xs font-medium";
const block = "inline-flex items-center justify-center rounded-md px-1 py-0.5";
const border = "border border-solid";
const focus =
  "ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-[var(--acBlue-700)]";
const disabled =
  "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";
const misc = "transition-colors";

export const flavors: (
  | "midnight"
  | "dusk"
  | "moss"
  | "midday"
  | "dawn"
  | "strawberry"
  | "maroon"
  | "magenta"
  | "lavender"
  | "ac-blue"
)[] = [
  "ac-blue",
  "midnight",
  "dusk",
  "moss",
  "midday",
  "dawn",
  "strawberry",
  "maroon",
  "magenta",
  "lavender",
];

const acBlue = `
  bg-[var(--acBlue-100)]
  text-[var(--acBlue-800)]
  border-[var(--acBlue-500)]
  hover:bg-[var(--acBlue-300)]
  hover:text-[var(--acBlue-1000)]
`;

const midnight = `
  bg-[var(--midnight-100)]
  text-[var(--midnight-800)]
  border-[var(--midnight-500)]
  hover:bg-[var(--midnight-300)]
  hover:text-[var(--midnight-1000)]
`;

const dusk = `
  bg-[var(--dusk-100)]
  text-[var(--dusk-800)]
  border-[var(--dusk-500)]
  hover:bg-[var(--dusk-300)]
  hover:text-[var(--dusk-1000)]
`;

const moss = `
  bg-[var(--strawberry-100)]
  text-[var(--strawberry-800)]
  border-[var(--strawberry-500)]
  hover:bg-[var(--strawberry-300)]
  hover:text-[var(--strawberry-1000)]
`;

const midday = `
  bg-[var(--midday-100)]
  text-[var(--midday-800)]
  border-[var(--midday-500)]
  hover:bg-[var(--midday-300)]
  hover:text-[var(--midday-1000)]
`;

const dawn = `
  bg-[var(--dawn-100)]
  text-[var(--dawn-800)]
  border-[var(--dawn-500)]
  hover:bg-[var(--dawn-300)]
  hover:text-[var(--dawn-1000)]
`;

const strawberry = `
  bg-[var(--strawberry-100)]
  text-[var(--strawberry-800)]
  border-[var(--strawberry-500)]
  hover:bg-[var(--strawberry-300)]
  hover:text-[var(--strawberry-1000)]
`;

const maroon = `
  bg-[var(--maroon-100)]
  text-[var(--maroon-800)]
  border-[var(--maroon-500)]
  hover:bg-[var(--maroon-300)]
  hover:text-[var(--maroon-1000)]
`;

const magenta = `
  bg-[var(--magenta-100)]
  text-[var(--magenta-800)]
  border-[var(--magenta-500)]
  hover:bg-[var(--magenta-300)]
  hover:text-[var(--magenta-1000)]
`;

const lavender = `
  bg-[var(--lavender-100)]
  text-[var(--lavender-800)]
  border-[var(--lavender-500)]
  hover:bg-[var(--lavender-300)]
  hover:text-[var(--lavender-1000)]
`;

const chipVariants = cva([block, border, typography, focus, disabled, misc], {
  variants: {
    /** this is an annotatino */
    flavor: {
      "ac-blue": acBlue,
      midnight,
      dusk,
      moss,
      midday,
      dawn,
      strawberry,
      maroon,
      magenta,
      lavender,
    },
  },
  defaultVariants: {
    flavor: "ac-blue",
  },
});

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, flavor, ...props }, ref) => {
    return (
      <button
        className={cn(chipVariants({ flavor, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
