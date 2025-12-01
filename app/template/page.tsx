"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import PayOff from "@/components/PayOff";


export default function Template() {
    return (
        <div className="container py-28 md:py-36 text-neutral-300 font-[geist-sans] antialiased">
            {/* ─── Intro ───────────────────────────────────────────── */}
            <section className="text-center space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]"
                >
                    [intro title]
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                >
                   [intro paragraph]
                </motion.p>

                 <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    [intro paragraph continuation]
                </motion.p>
            </section>
            <span className="text-[192px] font-bold tracking-tight after:content-['.'] after:-ml-2 after:text-teal-500 after:font-[geist-mono]">
                w
            </span>
            <Separator className="my-24 bg-neutral-800/70" />

            {/* ─── Section ─────────────────────────────────── */}
            <section className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-2xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:text-3xl after:font-[geist-mono]">
                        [section title]
                    </h2>
                    <p className="text-sm text-center text-neutral-500 tracking-wide">
                        [section paragraph]
                    </p>
                </div>

                
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
