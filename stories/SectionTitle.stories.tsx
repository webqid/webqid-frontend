import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "@/components/sections";

const meta = {
  title: "Sections/SectionTitle",
  component: SectionTitle
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "solutions" }
};

export const Alternative: Story = {
  args: { children: "studio" }
};
