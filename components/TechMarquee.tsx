"use client";

import { motion } from "motion/react";
import Image from "next/image";

const tools = [
  { name: "Next.js", logo: "/icons/logo-next.svg" },
  { name: "TypeScript", logo: "/icons/logo-typescript.svg" },
  { name: "JavaScript", logo: "/icons/logo-javascript.svg" },
  { name: "Tailwind CSS", logo: "/icons/logo-tailwindcss.svg" },
  { name: "Shadcn UI", logo: "/icons/logo-shadcnui.svg" },
  { name: "React", logo: "/icons/logo-react.svg" },
  { name: "Wagmi", logo: "/icons/logo-wagmi.svg" },
  { name: "Viem", logo: "/icons/logo-viem.svg" },
  { name: "Ethers.js", logo: "/icons/logo-ethers.svg" },
  { name: "Solidity", logo: "/icons/logo-solidity.svg" },
  { name: "Hardhat", logo: "/icons/logo-hardhat.svg" },
  { name: "GraphQL", logo: "/icons/logo-graphql.svg" },
  { name: "Vercel", logo: "/icons/logo-vercel.svg" },
  { name: "GitHub", logo: "/icons/logo-github.svg" },
  { name: "Figma", logo: "/icons/logo-figma.svg" },
  { name: "Motion", logo: "/icons/logo-motion.svg" },
  { name: "GSAP", logo: "/icons/logo-gsap.svg" },
];

export default function TechMarquee() {
  const repeated = [...tools, ...tools];

  return (
    <div className="relative font-sans flex overflow-hidden py-8 mb-8">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {repeated.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="flex items-center gap-2 opacity-80 hover:opacity-100 transition mx-6"
          >
            <Image
              src={tool.logo}
              alt={tool.name}
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-md text-neutral-400">{tool.name}</span>
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent" />
    </div>
  );
}
