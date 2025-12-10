import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "@/components/sections";

const meta = {
  title: "Sections/Section",
  component: Section
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "example",
    children: (
      <div className="text-neutral-300 text-center py-12 font-sans">
        <p className="text-xl">This is a Section</p>
        <p className="text-neutral-500 text-sm mt-2">
          Calm. Intentional. webqid style.
        </p>
      </div>
    )
  }
};

export const WithoutBorder: Story = {
  args: {
    id: "example-no-border",
    withTopBorder: false,
    children: (
      <div className="text-neutral-300 text-center py-12">
        <p className="text-xl">No top border</p>
        <p className="text-neutral-500 text-sm mt-2">
          For quiet transitions.
        </p>
      </div>
    )
  }
};
