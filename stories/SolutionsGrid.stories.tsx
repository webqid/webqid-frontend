import type { Meta } from "@storybook/react";
import { SolutionCard } from "@/components/sections";
import { SOLUTIONS } from "@/content/solutions";

const meta: Meta = {
  title: "Sections/SolutionsGrid"
};

export default meta;

export const Default = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-neutral-900">
    {SOLUTIONS.map((s, i) => (
      <SolutionCard key={s.title} index={i} title={s.title} desc={s.desc} />
    ))}
  </div>
);
