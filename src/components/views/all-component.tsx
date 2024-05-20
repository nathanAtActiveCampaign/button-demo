import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, buttonVariantsType } from "@/components/ui/button";
import {
  figmaColorsFlatObject,
  figmaColorsCssVars,
  figmaColorsThemeObject,
} from "@/figma/util-color";
import { Chip, flavors } from "@/components/ui/chip";
import { Header, Text, headerVariants } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

// tokens
// round rgba
// lowercase, concat names

// layout styles (hover, focus) ✅
// layout variants ✅
// layout sizes ✅
// add colors ✅
// add typography styles

// add storybook
// picture of buttons
// picture of colors
// build chips
// picture of chips

export default function AllComponents() {
  console.log("vars", figmaColorsFlatObject);
  console.log("css", figmaColorsCssVars);

  const buttonVariants: (
    | "fill"
    | "fill-destructive"
    | "outline"
    | "ghost"
    | "ghost-destructive"
  )[] = ["fill", "fill-destructive", "outline", "ghost", "ghost-destructive"];

  const foo = headerVariants({ size: "sm" });
  console.log("foo styles", foo);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* layout styles */}
        <Text size="sm">body: the quick fox jumped over the lazy dog.</Text>
        <Text size="md">body: the quick fox jumped over the lazy dog.</Text>
        <Header size="sm">
          HEADER: the quick fox jumped over the lazy dog.
        </Header>
        <Header size="md">
          HEADER: the quick fox jumped over the lazy dog.
        </Header>
        <Header size="lg">
          HEADER: the quick fox jumped over the lazy dog.
        </Header>
        <Header size="xl">
          HEADER: the quick fox jumped over the lazy dog.
        </Header>
        <div className="flex flex-row flex-wrap gap-3">
          {flavors.map((x, i) => (
            <Card key={i} flavor={x}>
              Chip
            </Card>
          ))}
        </div>
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
        <div className="flex flex-row gap-5 pl-1">
          {buttonVariants.map((x, i) => (
            <Button key={i} variant={x} size="sm">
              Button
            </Button>
          ))}
        </div>
        <div className="flex flex-row gap-5 pl-1">
          {buttonVariants.map((x, i) => (
            <Button key={i} variant={x} size="sm" disabled>
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
    </>
  );
}
