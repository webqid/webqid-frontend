'use client';

import { motion } from "motion/react";
import PayOff from "@/components/PayOff";

export default function Web3Integration() {
    return (
        <div className="container py-24 md:py-32 text-neutral-300 font-[geist-sans] antialiased">
            {/* ─── Intro ───────────────────────────────────────────── */}
            <section className="max-w-3xl mx-auto space-y-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]"
                >
                    web3 integration
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    Seamlessly connect your applications to blockchain networks with
                    precision-engineered integrations. From wallet connectivity to smart
                    contract interactions, we ensure your platform communicates securely
                    and efficiently with the decentralized web.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    Our expertise spans <span className="text-teal-400">Ethers.js</span>,
                    <span className="text-teal-400"> Wagmi</span> and{" "}
                    <span className="text-teal-400">Viem</span>, enabling scalable,
                    type-safe connections to Ethereum, Layer-2, and custom EVM networks.
                    Whether you’re building dApps, DeFi platforms, or NFT marketplaces, our
                    architecture focuses on clarity, security, and performance.
                </motion.p>
            </section>

            {/* ─── Architecture Overview ───────────────────────────── */}
            <section className="mt-28 space-y-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
                >
                    precision in integration
                </motion.h2>

                <p className="text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
                    Each integration follows a predictable, modular flow, designed for auditability and long-term maintainability.
                </p>

                {/* Architecture diagram substitute */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-neutral-950/50 z-0 relative p-6 text-left font-[geist-mono] text-xs text-neutral-400 overflow-x-auto max-w-3xl mx-auto"
                >
                    <div className="absolute top-0 left-0 z-10 w-full h-[200px] bg-gradient-to-t from-transparent to-[#0a0a0a]"></div>
                    <div className="absolute bottom-0 left-0 z-10 w-full h-[200px] bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
                    <pre>
                        {`import { useReadContract } from "wagmi";
import { erc20Abi } from "viem";

type ERC20Symbol = { result: string };

export function useTokenSymbol(tokenAddress: \`0x\${string}\`) {
  const { data, error, isLoading } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: "symbol",
  }) as ERC20Symbol;

  if (error) console.warn("read:error", error.shortMessage);
  if (isLoading) return "Loading...";
  return data ?? "—";
}`}
                    </pre>
                </motion.div>
            </section>

            {/* ─── Shadcn UI Snapshot ───────────────────────────── */}
            <section className="mt-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto font-sans text-left bg-neutral-950/50 border border-neutral-800 p-6 rounded-xl space-y-4"
                >
                    <h3 className="text-lg font-medium text-neutral-200 tracking-tight">
                        wallet connection snapshot
                    </h3>

                    <div className="space-y-3">
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

                    <p className="text-xs text-neutral-500 pt-2">
                        Example interface using <span className="text-teal-400">shadcn/ui</span> +{" "}
                        <span className="text-teal-400">wagmi</span> for instant wallet detection.
                    </p>
                </motion.div>
            </section>

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
