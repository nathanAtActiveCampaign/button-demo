import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, buttonVariantsType } from "@/components/ui/button";
import {
  figmaColorsFlatObject,
  figmaColorsCssVars,
  figmaColorsThemeObject,
} from "@/figma/util-color";
import { Chip, flavors } from "@/components/ui/chip";

// tokens
// round rgba
// lowercase, concat names

const inter = Inter({ subsets: ["latin"] });

// layout styles (hover, focus)
// layout variants
// layout sizes
// add colors

// add storybook
// picture of buttons
// picture of colors
// build chips
// picture of chips

export default function Home() {
  console.log("vars", figmaColorsFlatObject);
  console.log("css", figmaColorsCssVars);

  const buttonVariants: (
    | "fill"
    | "fill-destructive"
    | "outline"
    | "ghost"
    | "ghost-destructive"
  )[] = ["fill", "fill-destructive", "outline", "ghost", "ghost-destructive"];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col gap-3">
        {/* layout styles */}
        <div className="flex flex-row gap-3">
          {buttonVariants.map((x, i) => (
            <Button key={i} variant={x}>
              Button
            </Button>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          {buttonVariants.map((x, i) => (
            <Button key={i} variant={x} disabled>
              Button
            </Button>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          {flavors.map((x, i) => (
            <Chip key={i} flavor={x}>
              Chip
            </Chip>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          {flavors.map((x, i) => (
            <Chip key={i} flavor={x} disabled>
              Chip
            </Chip>
          ))}
        </div>

        {/* <div className="flex gap-3">
          <Button>Fill</Button>
          <Button>Hover</Button>
          <Button>Focus</Button>
          <Button>Disabled</Button>
        </div>
        <div className="flex gap-3">
          <Button>Destructive</Button>
          <Button>Hover</Button>
          <Button>Focus</Button>
          <Button>Disabled</Button>
        </div>
        <div className="flex gap-3">
          <Button>Outline</Button>
          <Button>Hover</Button>
          <Button>Focus</Button>
          <Button>Disabled</Button>
        </div>
        <div className="flex gap-3">
          <Button>Destructive</Button>
          <Button>Hover</Button>
          <Button>Focus</Button>
          <Button>Disabled</Button>
        </div>
        <div className="flex gap-3">
          <Button>Text</Button>
          <Button>Hover</Button>
          <Button>Focus</Button>
          <Button>Disabled</Button>
        </div> */}
      </div>
    </main>
  );
}
