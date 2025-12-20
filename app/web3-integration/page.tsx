"use client";

import { motion } from "motion/react";
import PayOff from "@/components/PayOff";

/** Code sample for integration demo */
const CODE_SAMPLE = `import { useReadContract } from "wagmi";
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
}`;

/**
 * Web3 Integration service page.
 */
export default function Web3IntegrationPage(): React.JSX.Element {
  return (
    <div className="container py-24 md:py-32 text-neutral-300 font-[geist-sans] antialiased px-4">
      {/* ─── Intro ───────────────────────────────────────────── */}
      <section
        aria-labelledby="web3-integration-title"
        className="max-w-3xl mx-auto space-y-8 text-center"
      >
        <motion.h1
          id="web3-integration-title"
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
          Whether you&apos;re building dApps, DeFi platforms, or NFT
          marketplaces, our architecture focuses on clarity, security, and
          performance.
        </motion.p>
      </section>

      {/* ─── Architecture Overview ───────────────────────────── */}
      <section
        aria-labelledby="precision-title"
        className="mt-28 space-y-10 text-center"
      >
        <motion.h2
          id="precision-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
        >
          precision in integration
        </motion.h2>

        <p className="text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
          Each integration follows a predictable, modular flow, designed for
          auditability and long-term maintainability.
        </p>

        {/* Architecture diagram substitute */}
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
      </section>

      {/* ─── Shadcn UI Snapshot ───────────────────────────── */}
      <section aria-labelledby="wallet-snapshot-title" className="mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-md mx-auto font-sans text-left bg-neutral-950/50 border border-neutral-800 p-6 rounded-xl space-y-4"
        >
          <h3
            id="wallet-snapshot-title"
            className="text-lg font-medium text-neutral-200 tracking-tight"
          >
            wallet connection snapshot
          </h3>

          <div className="space-y-3">
            <label htmlFor="wallet-address" className="text-sm text-neutral-400">
              Wallet Address
            </label>
            <input
              id="wallet-address"
              type="text"
              placeholder="0x..."
              className="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md px-3 py-2 text-sm focus:border-teal-500 outline-none transition"
            />
            <button
              type="button"
              className="w-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm rounded-md py-2 hover:bg-teal-500/20 transition font-medium"
            >
              Connect Wallet
            </button>
          </div>

          <p className="text-xs text-neutral-500 pt-2">
            Example interface using{" "}
            <span className="text-teal-400">shadcn/ui</span> +{" "}
            <span className="text-teal-400">wagmi</span> for instant wallet
            detection.
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
