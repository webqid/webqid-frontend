"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import PayOff from "@/components/PayOff";

const tools = [
  { name: "Next.js", logo: "logo-next.svg" },
  { name: "TypeScript", logo: "logo-typescript.svg" },
  { name: "JavaScript", logo: "logo-javascript.svg" },
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
  { name: "Figma", logo: "logo-figma.svg" },
  { name: "Motion", logo: "logo-motion.svg" },
  { name: "GSAP", logo: "logo-gsap.svg" },
];

export default function Page() {
  return (
    <div className="container py-28 md:py-36 text-neutral-300 font-[geist-sans] antialiased">
      {/* ─── Intro ───────────────────────────────────────────── */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]">
          frontend engineering
        </h1>

        <p className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
          Precision-built interfaces bridging Web3 complexity with Web2 simplicity — engineered
          for speed, clarity, and trust.
        </p>

        <p className="text-neutral-500 text-sm tracking-wide">
          We design frontends that feel inevitable, not experimental.
        </p>
      </section>

      <Separator className="my-24 bg-neutral-800/70" />

      {/* ─── Tools & Rhythm ─────────────────────────────────── */}
      <section className="max-w-5xl mx-auto space-y-12">
        {/* Titel boven grid */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:text-3xl after:font-[geist-mono]">
            tools we trust
          </h2>
          <p className="text-sm text-center text-neutral-500 tracking-wide">
            A curated stack — chosen for precision, performance, and long-term maintainability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* Tools list */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {tools.map((t) => (
              <li
                key={t.name}
                className="rounded-md border border-neutral-800/70 bg-neutral-950/40 backdrop-blur-sm px-3 py-2 text-sm flex items-center gap-3 hover:border-teal-500/30 hover:scale-[1.02] hover:text-neutral-300 transition-all"
              >
                <img
                  src={`/icons/${t.logo}`}
                  alt={`${t.name} logo`}
                  className="w-5 h-5 object-contain"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
                />
                <span className="font-light tracking-wide">{t.name}</span>
              </li>
            ))}
          </motion.ul>

          {/* Our rhythm */}
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
              <li className="flex gap-3">
                <span className="text-teal-400 font-mono">01</span>
                <div>
                  <div className="text-neutral-300 font-medium">Design-first</div>
                  <p className="text-xs">Architecture, Figma specs & motion language.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 font-mono">02</span>
                <div>
                  <div className="text-neutral-300 font-medium">Build with intent</div>
                  <p className="text-xs">Type-safe systems, modular components, CI/CD.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 font-mono">03</span>
                <div>
                  <div className="text-neutral-300 font-medium">Ship & refine</div>
                  <p className="text-xs">Vercel deploys, observability & fast iteration.</p>
                </div>
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* ─── Precision in Practice ─────────────────────────────────── */}
      <section className="mt-32 space-y-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl tracking-tight after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
        >
          precision in practice
        </motion.h2>

        <p className="text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
          Behind every clean interface lies intention.  
          Below is a glimpse of how we translate logic, performance, and design into measurable clarity.
        </p>

        {/* Code block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-6 text-left font-[geist-mono] text-xs text-neutral-400 overflow-x-auto max-w-3xl mx-auto"
        >
          <pre>
{`const useDebouncedValue = (value, delay = 300) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};

// Used in high-frequency updates like charts or wallets
`}
          </pre>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto font-sans  bg-neutral-950/40 border border-neutral-800 rounded-xl p-6"
        >
          <h3 className="text-lg font-medium tracking-tight text-neutral-200 mb-6">
            render performance benchmark
          </h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%"
            className={"text-sm"}
            >
              <LineChart
                data={[
                  { name: "Baseline", ms: 128 },
                  { name: "Optimized", ms: 74 },
                  { name: "Final", ms: 58 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E1E" />
                <XAxis dataKey="name" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip contentStyle={{ background: "#0A0A0A", border: "1px solid #222" }} />
                <Line type="monotone" dataKey="ms" stroke="#00E0B8" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-neutral-500 mt-4">
            Render latency reduced by <span className="text-teal-400 font-medium">54%</span> through component memoization.
          </p>
        </motion.div>

        {/* ShadCN Component Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden max-w-md mx-auto text-left bg-neutral-950/50 border border-neutral-800 p-6 rounded-xl space-y-4"
        >
          <h3 className="text-lg font-medium text-neutral-200 tracking-tight">
            shadcn component snapshot
          </h3>
          <div className="space-y-2">
            <label className="text-sm text-neutral-400">Wallet Address</label>
            <input
              type="text"
              placeholder="0x..."
              className="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md px-3 py-2 text-sm focus:border-teal-500 outline-none transition"
            />
            <button className="w-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm rounded-md py-2 hover:bg-teal-500/20 transition font-medium">
              Connect Wallet
            </button>
          </div>
        </motion.div>
      </section>


      <PayOff />
    </div>
  );
}
