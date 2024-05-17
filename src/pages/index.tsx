import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  figmaColorsFlatObject,
  figmaColorsCssVars,
  figmaColorsThemeObject,
} from "@/figma/util-color";

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
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col gap-3">
        {/* layout styles */}
        <div className="flex flex-row gap-3">
          <Button variant="fill">Button</Button>
          <Button variant="fill-destructive">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="ghost-destructive">Button</Button>
        </div>
        <div className="flex flex-row gap-3">
          <Button disabled variant="fill">
            Button
          </Button>
          <Button disabled variant="fill-destructive">
            Button
          </Button>
          <Button disabled variant="outline">
            Button
          </Button>
          <Button disabled variant="ghost">
            Button
          </Button>
          <Button disabled variant="ghost-destructive">
            Button
          </Button>
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
