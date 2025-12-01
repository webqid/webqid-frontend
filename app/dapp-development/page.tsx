'use client';

import { motion } from "motion/react";
import PayOff from "@/components/PayOff";

export default function DappDevelopment() {
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
                    dApp development
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    We design and engineer decentralized applications that merge
                    blockchain precision with human-centric design. From contract logic
                    to front-end nuance, every layer is crafted with intent. Secure,
                    scalable, and effortless to use.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    Our builds span <span className="text-teal-400">Solidity</span>,{" "}
                    <span className="text-teal-400">Hardhat</span>, and{" "}
                    <span className="text-teal-400">Next.js</span> with{" "}
                    <span className="text-teal-400">Wagmi</span> +{" "}
                    <span className="text-teal-400">Viem</span>. Whether DeFi vaults, NFT
                    drops, or agent-based protocols. Each dApp is engineered to feel
                    inevitable, not experimental.
                </motion.p>
            </section>

            {/* ─── Architecture in Motion ───────────────────────────── */}
            <section className="mt-28 space-y-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
                >
                    architecture in motion
                </motion.h2>

                <p className="text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
                    Each build follows a verifiable, modular pattern, from smart
                    contract to UI. Below, a simplified staking flow represents our
                    mindset: clarity, safety, intent.
                </p>

                {/* Contract example */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-neutral-950/50 z-0 relative p-6 text-left font-[geist-mono] text-xs text-neutral-400 overflow-x-auto max-w-3xl mx-auto"
                >
                    <div className="absolute top-0 left-0 z-10 w-full h-[200px] bg-gradient-to-t from-transparent to-[#0a0a0a]"></div>
                    <div className="absolute bottom-0 left-0 z-10 w-full h-[200px] bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
                    <pre className="">
                        {`import { useCallback, useState } from "react";
import { parseEther, decodeErrorResult } from "viem";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

const ABI = [
  { name: "stake", type: "function", stateMutability: "nonpayable", inputs: [{ name: "amount", type: "uint256" }], outputs: [] },
] as const;

export function useStake(address: \`0x\${string}\`) {
  const { address: user } = useAccount();
  const [txHash, setTxHash] = useState<\`0x\${string}\` | undefined>();

  const { config, error: prepareError } = usePrepareContractWrite({
    address,
    abi: ABI,
    functionName: "stake",
    enabled: Boolean(user && address),
  });

  const { writeAsync } = useContractWrite(config);
  const { data: receipt, isLoading: confirming } = useWaitForTransaction({ hash: txHash });

  const stake = useCallback(async (amount: string) => {
    if (!writeAsync) return { ok: false, error: "Wallet not ready" };
    try {
      const tx = await writeAsync({ args: [parseEther(amount)] });
      setTxHash(tx.hash);
      await tx.wait?.();
      return { ok: true, hash: tx.hash };
    } catch (err: any) {
      const decoded = err?.data
        ? decodeErrorResult({ abi: ABI, data: err.data }).errorName
        : err?.shortMessage || "Unknown error";
      console.warn("Stake failed:", decoded);
      return { ok: false, error: decoded };
    }
  }, [writeAsync]);

  return { stake, confirming, prepareError, receipt };
}`}
                    </pre>
                </motion.div>
            </section>

            {/* ─── UI Snapshot ───────────────────────────── */}
            <section className="mt-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto font-sans text-left bg-neutral-950/50 border border-neutral-800 p-6 rounded-xl space-y-4"
                >
                    <h3 className="text-lg font-medium text-neutral-200 tracking-tight">
                        dApp interface snapshot
                    </h3>

                    <div className="space-y-3">
                        <label className="text-sm text-neutral-400">Amount to Stake</label>
                        <input
                            type="number"
                            placeholder="0.0"
                            className="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md px-3 py-2 text-sm focus:border-teal-500 outline-none transition"
                        />
                        <button className="w-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm rounded-md py-2 hover:bg-teal-500/20 transition font-medium">
                            Stake Tokens
                        </button>
                    </div>

                    <p className="text-xs text-neutral-500 pt-2">
                        Example UI built with <span className="text-teal-400">shadcn/ui</span>{" "}
                        + <span className="text-teal-400">wagmi</span> — precise,
                        predictable, intentional.
                    </p>
                </motion.div>
            </section>

            {/* ─── Brand Payoff ───────────────────────────── */}
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
