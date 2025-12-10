import type { Meta, StoryObj } from "@storybook/react";
import { SolutionCard } from "@/components/sections";

const meta = {
  title: "Sections/SolutionCard",
  component: SolutionCard
} satisfies Meta<typeof SolutionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 0,
    title: "Web Interfaces",
    desc: "Frontends built with precision in Next.js, TypeScript, and Tailwind."
  }
};

export const DesignSystems: Story = {
  args: {
    index: 1,
    title: "Design Systems",
    desc: "UI foundations crafted for clarity and scale."
  }
};
