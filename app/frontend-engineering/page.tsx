"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import PayOff from "@/components/PayOff";

/** Tool configuration for the tools grid */
interface Tool {
  readonly name: string;
  readonly logo: string;
}

const TOOLS: readonly Tool[] = [
  { name: "Next.js", logo: "logo-next.svg" },
  { name: "TypeScript", logo: "logo-typescript.svg" },
  { name: "Tailwind CSS", logo: "logo-tailwindcss.svg" },
  { name: "Shadcn UI", logo: "logo-shadcnui.svg" },
  { name: "React", logo: "logo-react.svg" },
  { name: "Wagmi", logo: "logo-wagmi.svg" },
  { name: "Viem", logo: "logo-viem.svg" },
  { name: "Ethers.js", logo: "logo-ethers.svg" },
  { name: "Solidity", logo: "logo-solidity.svg" },
  { name: "Hardhat", logo: "logo-hardhat.svg" },
  { name: "GraphQL", logo: "logo-graphql.svg" },
  { name: "Vercel", logo: "logo-vercel.svg" },
  { name: "GitHub", logo: "logo-github.svg" },
  { name: "Motion", logo: "logo-motion.svg" },
  { name: "GSAP", logo: "logo-gsap.svg" },
] as const;

/** Development rhythm steps */
interface RhythmStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const RHYTHM_STEPS: readonly RhythmStep[] = [
  {
    number: "01",
    title: "Design-first",
    description: "Architecture, Figma specs & motion language.",
  },
  {
    number: "02",
    title: "Build with intent",
    description: "Type-safe systems, modular components, CI/CD.",
  },
  {
    number: "03",
    title: "Ship & refine",
    description: "Vercel deploys, analytics & continuous refinement.",
  },
] as const;

/** Performance benchmark data */
const PERFORMANCE_DATA = [
  { name: "Baseline", ms: 128 },
  { name: "Optimized", ms: 74 },
  { name: "Final", ms: 58 },
] as const;

/** Code sample for GraphQL integration */
const CODE_SAMPLE = `import { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import { useAccount } from "wagmi";

const ENDPOINT = "https://api.thegraph.com/subgraphs/name/protocol/core";

const USER_POSITIONS = gql\`
  query ($address: String!) {
    positions(where: { user: $address }) {
      id
      collateral
      debt
    }
  }
\`;

export function useUserPositions() {
  const { address } = useAccount();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!address) return;
    const ctrl = new AbortController();

    const fetchData = async () => {
      try {
        const res = await request(ENDPOINT, USER_POSITIONS, {
          address: address.toLowerCase(),
        });
        setData(res.positions);
      } catch (e) {
        if (!ctrl.signal.aborted) console.warn("GraphQL fetch failed:", e);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => {
      ctrl.abort();
      clearInterval(interval);
    };
  }, [address]);

  return data;
}

/* usage
const positions = useUserPositions();
console.table(positions);
*/`;

/**
 * Handles image load errors by hiding the element.
 */
function handleImageError(e: React.SyntheticEvent<HTMLImageElement>): void {
  e.currentTarget.style.display = "none";
}

/**
 * Frontend Engineering service page.
 */
export default function FrontendEngineeringPage(): React.JSX.Element {
  return (
    <div className="container py-28 md:py-36 text-neutral-300 font-[geist-sans] antialiased px-4">
      {/* ─── Intro ───────────────────────────────────────────── */}
      <section
        aria-labelledby="frontend-engineering-title"
        className="text-center space-y-6"
      >
        <motion.h1
          id="frontend-engineering-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]"
        >
          frontend engineering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Precision-built interfaces bridging Web3 complexity with Web2
          simplicity. Engineered for performance, clarity, and trust.
        </motion.p>

        <p className="text-neutral-500 text-sm tracking-wide">
          We build frontends that feel inevitable, not experimental.
        </p>
      </section>

      <Separator className="my-24 bg-neutral-800/70" />

      {/* ─── Tools & Rhythm ─────────────────────────────────── */}
      <section
        aria-labelledby="tools-title"
        className="max-w-5xl mx-auto space-y-12"
      >
        <div className="text-center space-y-3">
          <h2
            id="tools-title"
            className="text-2xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:text-3xl after:font-[geist-mono]"
          >
            tools we trust
          </h2>
          <p className="text-sm text-center text-neutral-500 tracking-wide">
            A curated stack, chosen for precision, performance, and long-term
            maintainability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* Tool grid */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {TOOLS.map((tool) => (
              <li
                key={tool.name}
                className="rounded-md border border-neutral-800/70 bg-neutral-950/40 backdrop-blur-sm px-3 py-2 text-sm flex items-center gap-3 hover:border-teal-500/30 hover:scale-[1.02] hover:text-neutral-300 transition-all"
              >
                <img
                  src={`/icons/${tool.logo}`}
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain"
                  onError={handleImageError}
                />
                <span className="font-light tracking-wide">{tool.name}</span>
              </li>
            ))}
          </motion.ul>

          {/* Rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-neutral-950/40 border border-neutral-800/70 rounded-lg p-6 space-y-5 backdrop-blur-sm"
          >
            <h3 className="text-lg font-medium tracking-tight after:content-['.'] after:text-teal-500 after:font-[geist-mono]">
              our rhythm
            </h3>
            <ol className="space-y-5 text-sm text-neutral-500 font-light tracking-wide">
              {RHYTHM_STEPS.map((step) => (
                <li key={step.number} className="flex gap-3">
                  <span className="text-teal-400 font-mono">{step.number}</span>
                  <div>
                    <div className="text-neutral-300 font-medium">
                      {step.title}
                    </div>
                    <p className="text-xs">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* ─── Precision in Practice ─────────────────────────────── */}
      <section
        aria-labelledby="precision-practice-title"
        className="mt-32 space-y-12 text-center"
      >
        <motion.h2
          id="precision-practice-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl tracking-tight after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
        >
          precision in practice
        </motion.h2>

        <p className="text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
          Behind every clean interface lies intention. Below, a typical data
          pattern combining GraphQL and on-chain context, how we synchronize
          real-time protocol state into UI clarity.
        </p>

        {/* Code example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-neutral-950/50 z-0 relative p-6 text-left font-[geist-mono] text-xs text-neutral-400 overflow-x-auto max-w-3xl mx-auto"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 z-10 w-full h-50 bg-linear-to-t from-transparent to-[#0a0a0a]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-10 w-full h-50 bg-linear-to-b from-transparent to-[#0a0a0a]"
          />
          <pre>{CODE_SAMPLE}</pre>
        </motion.div>

        {/* Chart performance demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto font-sans bg-neutral-950/40 border border-neutral-800 rounded-xl p-6"
        >
          <h3 className="text-lg font-medium tracking-tight text-neutral-200 mb-6">
            render performance benchmark
          </h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[...PERFORMANCE_DATA]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E1E" />
                <XAxis dataKey="name" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip
                  contentStyle={{
                    background: "#0A0A0A",
                    border: "1px solid #222",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="ms"
                  stroke="#00E0B8"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-neutral-500 mt-4">
            Render latency reduced by{" "}
            <span className="text-teal-400 font-medium">54%</span> through
            component memoization and reactive caching.
          </p>
        </motion.div>
      </section>

      {/* Payoff */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <PayOff />
      </motion.div>
    </div>
  );
}
