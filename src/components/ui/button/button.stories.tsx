import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Snapshot: Story = {
  render: (args) => {
    const buttonVariants: (
      | "fill"
      | "fill-destructive"
      | "outline"
      | "ghost"
      | "ghost-destructive"
    )[] = ["fill", "fill-destructive", "outline", "ghost", "ghost-destructive"];

    return (
      <div className="flex flex-col gap-3">
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
      </div>
    );
  },
};
