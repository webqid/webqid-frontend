import type { Meta, StoryObj } from "@storybook/react";
import { SectionParagraph } from "@/components/sections";

const meta = {
  title: "Sections/SectionParagraph",
  component: SectionParagraph
} satisfies Meta<typeof SectionParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "We design and build interfaces with clarity, speed, and calm precision.",
    className: "max-w-xl mx-auto"
  }
};

export const WithDelay: Story = {
  args: {
    children:
      "This paragraph animates with a delayed motion effect.",
    delay: 0.4,
    className: "max-w-xl mx-auto"
  }
};
