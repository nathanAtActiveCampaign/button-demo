import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Header, headerVariants, Text } from "./typography";

// Shared
const typography = `whitespace-nowrap`;
const block = "flex flex-col items-start rounded-lg p-4";
const border = "border border-solid";
const focus =
  "ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-[var(--acBlue-700)]";
const disabled =
  "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";
const misc = "transition-colors";

const acBlue = `
  bg-[var(--acBlue-100)]
  text-[var(--acBlue-1000)]
  border-[var(--acBlue-500)]
  hover:bg-[var(--acBlue-300)]
`;

const midnight = `
  bg-[var(--midnight-100)]
  text-[var(--midnight-1000)]
  border-[var(--midnight-500)]
  hover:bg-[var(--midnight-300)]
`;

const dusk = `
  bg-[var(--dusk-100)]
  text-[var(--dusk-1000)]
  border-[var(--dusk-500)]
  hover:bg-[var(--dusk-300)]
`;

const moss = `
  bg-[var(--moss-100)]
  text-[var(--moss-1000)]
  border-[var(--moss-500)]
  hover:bg-[var(--moss-300)]
`;

const midday = `
  bg-[var(--midday-100)]
  text-[var(--midday-1000)]
  border-[var(--midday-500)]
  hover:bg-[var(--midday-300)]
`;

const dawn = `
  bg-[var(--dawn-100)]
  text-[var(--dawn-1000)]
  border-[var(--dawn-500)]
  hover:bg-[var(--dawn-300)]
`;

const strawberry = `
  bg-[var(--strawberry-100)]
  text-[var(--strawberry-1000)]
  border-[var(--strawberry-500)]
  hover:bg-[var(--strawberry-300)]
`;

const maroon = `
  bg-[var(--maroon-100)]
  text-[var(--maroon-1000)]
  border-[var(--maroon-500)]
  hover:bg-[var(--maroon-300)]
`;

const magenta = `
  bg-[var(--magenta-100)]
  text-[var(--magenta-1000)]
  border-[var(--magenta-500)]
  hover:bg-[var(--magenta-300)]
`;

const lavender = `
  bg-[var(--lavender-100)]
  text-[var(--lavender-1000)]
  border-[var(--lavender-500)]
  hover:bg-[var(--lavender-300)]
`;

const cardVariants = cva([block, border, typography, focus, disabled, misc], {
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

const cardSupportiveVariants = cva([], {
  variants: {
    flavor: {
      "ac-blue": "text-[var(--acBlue-800)]",
      midnight: "text-[var(--midnight-800)]",
      dusk: "text-[var(--dusk-800)]",
      moss: "text-[var(--moss-800)]",
      midday: "text-[var(--midday-800)]",
      dawn: "text-[var(--dawn-800)]",
      strawberry: "text-[var(--strawberry-800)]",
      maroon: "text-[var(--maroon-800)]",
      magenta: "text-[var(--magenta-800)]",
      lavender: "text-[var(--lavender-800)]",
    },
  },
  defaultVariants: {
    flavor: "midnight",
  },
});

export interface Card
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLButtonElement, Card>(
  ({ className, flavor, ...props }, ref) => {
    return (
      <button
        className={cn(cardVariants({ flavor, className }))}
        ref={ref}
        {...props}
      >
        <Text className={cn(cardSupportiveVariants({ flavor }), "mb-3")}>
          Eyebrow
        </Text>
        <Header size="lg">This is a heading</Header>
        <Text className={cardSupportiveVariants({ flavor })}>
          This is a supporting description
        </Text>
        <Text className="text-[var(--acBlue-700)] font-semibold mt-8">
          This is a link ➡
        </Text>
      </button>
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
