"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
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

const fadeIn = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
};

export default function Page() {
    return (
        <div className="container py-28 md:py-36 text-zinc-200">
            {/* ─── Intro ───────────────────────────────────────────── */}
            <section className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]">
                    frontend engineering
                </h1>

                <p className="text-zinc-300 font-light leading-relaxed">
                    Precision-built interfaces bridging Web3 complexity with Web2 simplicity — engineered
                    for speed, clarity, and trust.
                </p>
            </section>

            <Separator className="my-20 md:my-28 bg-zinc-800/70" />

            {/* ─── Tools & Process ─────────────────────────────────── */}
            <section className="grid md:grid-cols-3 gap-12 md:gap-16 items-start max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="md:col-span-2 space-y-5"
                >
                    <h2 className="text-2xl font-medium after:content-['.'] after:text-teal-500 after:text-3xl after:font-[geist-mono]">tools we trust</h2>
                    <p className="text-sm text-zinc-300 max-w-md">
                        A curated stack — chosen for precision, performance, and long-term maintainability.
                    </p>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                        {tools.map((t) => (
                            <motion.li
                                key={t.name}
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="rounded-md border border-zinc-800/70 bg-zinc-950/40 backdrop-blur-sm px-3 py-2 text-sm flex items-center gap-3 hover:border-zinc-700/70 transition-all"
                            >
                                <img
                                    src={`/icons/${t.logo}`}
                                    alt={`${t.name} logo`}
                                    className="w-5 h-5 object-contain"
                                    onError={(e) => {
                                        // hide broken image gracefully
                                        (e.currentTarget as HTMLImageElement).style.display = "none";
                                    }}
                                />
                                <span className="text-sm">{t.name}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="bg-zinc-950/40 border border-zinc-800/70 rounded-lg p-6 space-y-5 backdrop-blur-sm"
                >
                    <h3 className="text-lg font-medium after:content-['.'] after:text-teal-500 after:text-3xl after:font-[geist-mono]">our rhythm</h3>
                    <ol className="space-y-5 text-sm text-zinc-400">
                        <li className="flex gap-3">
                            <span className="text-teal-400 font-mono">01</span>
                            <div>
                                <div className="font-medium text-zinc-200">Design-first</div>
                                <p className="text-xs">Architecture, Figma specs & motion language.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-teal-400 font-mono">02</span>
                            <div>
                                <div className="font-medium text-zinc-200">Build intentionally</div>
                                <p className="text-xs">Type-safe systems, modular components, CI/CD.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-teal-400 font-mono">03</span>
                            <div>
                                <div className="font-medium text-zinc-200">Ship & refine</div>
                                <p className="text-xs">Vercel deploys, observability & fast iteration.</p>
                            </div>
                        </li>
                    </ol>
                </motion.div>
            </section>
            
            <PayOff />

        </div>
    );
}
