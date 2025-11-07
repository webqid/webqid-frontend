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
          Building decentralized applications that merge robust blockchain
          functionality with intuitive user experiences. From contract logic to
          front-end precision, we create dApps that are secure, scalable, and
          human-focused.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Our experience spans <span className="text-teal-400">Solidity</span>,{" "}
          <span className="text-teal-400">Hardhat</span>, and{" "}
          <span className="text-teal-400">Next.js</span> front-ends with Wagmi +
          Viem. Whether launching DeFi vaults, NFT collections, or agent-based
          protocols, we engineer dApps that feel inevitable — not experimental.
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
          Each dApp we build follows a modular, verifiable pattern — from smart
          contract to UI. Below, a simplified staking interaction illustrates
          our approach: clarity, security, intent.
        </p>

        {/* Contract example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6 text-left font-[geist-mono] text-xs text-neutral-400 overflow-x-auto max-w-3xl mx-auto"
        >
          <pre>
{`// stake tokens in a contract
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const contract = new ethers.Contract(stakingAddress, abi, signer);
const tx = await contract.stake(100n * 10n ** 18n);
await tx.wait();

console.log("Staked 100 tokens with intent.");`}
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
            Example UI using <span className="text-teal-400">shadcn/ui</span> +
            <span className="text-teal-400"> wagmi</span> — built for precision
            and feedback.
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
