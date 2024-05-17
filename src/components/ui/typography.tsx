import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Body
 */
const _base = "font-sans not-italic font-normal text-current";

export const textVariants = cva([_base], {
  variants: {
    size: {
      // 12/16
      sm: "text-xs",
      // 14/20
      md: "text-sm",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        className={cn(textVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Text };

/**
 * Heading
 */
const _headerBase = "font-sans not-italic font-semibold text-current";

export const headerVariants = cva([_headerBase], {
  variants: {
    size: {
      // 16/24
      sm: "text-base/6",
      // 20/28
      md: "text-xl/7",
      // 24/32
      lg: "text-2xl/8",
      // 32/44
      xl: "text-[32px] leading-[44px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        className={cn(headerVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Header.displayName = "Header";

export { Header };

// color: var(--text-default-slate-600, #1F2129);

// /* Eyebrow/Small */
// font-family: "IBM Plex Sans";
// font-size: 12px;
// font-style: normal;
// font-weight: 700;
// line-height: 16px; /* 133.333% */
// letter-spacing: 1.2px;
// text-transform: uppercase;

// color: var(--text-default-slate-600, #1F2129);

// /* Eyebrow/Medium */
// font-family: "IBM Plex Sans";
// font-size: 14px;
// font-style: normal;
// font-weight: 700;
// line-height: 20px; /* 142.857% */
// letter-spacing: 1.4px;
// text-transform: uppercase;

// color: var(--text-default-slate-600, #1F2129);

// /* Form Elements/Label */
// font-family: "IBM Plex Sans";
// font-size: 14px;
// font-style: normal;
// font-weight: 500;
// line-height: 20px; /* 142.857% */

// color: var(--text-default-slate-600, #1F2129);

// /* Form Elements/Helper Text */
// font-family: "IBM Plex Sans";
// font-size: 12px;
// font-style: normal;
// font-weight: 400;
// line-height: 16px; /* 133.333% */
