import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { tokens } from "@/figma/util-color";

// tokens
// round rgba
// lowercase, concat names

const inter = Inter({ subsets: ["latin"] });

// layout styles (hover, focus)
// layout variants
// layout sizes
// add colors

export default function Home() {
  console.log("tokens", tokens);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col gap-3">
        {/* layout styles */}
        <div className="flex flex-col gap-3">
          <Button variant="fill">Fill</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
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
