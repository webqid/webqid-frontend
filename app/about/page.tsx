"use client";

import PayOff from "@/components/PayOff";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="container py-24 md:py-32">
            <section className="max-w-3xl mx-auto space-y-8 text-center">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]">
                    about
                </h1>

                <p className="text-neutral-400 font-light leading-relaxed">
                    webqid. is a studio built on calm precision.
                    We turn complex, on-chain systems into fast, human-centered interfaces — engineered for trust and performance.
                </p>

                <p className="text-neutral-400 font-light leading-relaxed">
                    Our work blends the rigor of software engineering with the clarity of design.
                    From dApps and staking dashboards to wallet integrations and token systems —
                    every build is intentional, reliable, and ready to scale.
                </p>

                <p className="text-neutral-400 font-light leading-relaxed">
                    Founded by engineers who believe that technology should feel effortless,
                    webqid. bridges the gap between Web2 familiarity and Web3 innovation.
                    We don’t chase trends — we build foundations.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mx-auto mt-8"
                >
                    <div className="inline-flex items-center gap-4 bg-neutral-900/40 border border-neutral-800 rounded-xl p-4">
                        <div className="w-14 h-14 relative rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src="/profile.jpg"
                                alt="CEO profile"
                                fill
                                className="object-cover grayscale brightness-90"
                            />
                        </div>

                        <div className="text-left">
                            <div className="text-sm font-medium text-neutral-100">Christian van de Weerd</div>
                            <div className="text-xs font-sans text-neutral-400">Senior Web3 Developer</div>
                            <div className="text-[10px] text-neutral-500 mt-1 !italic">"Precision is how I show care."</div>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/jcvandeweerd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-teal-400 hover:text-teal-300 transition-colors"
                            aria-label="Open LinkedIn profile"
                        >
                            <Image
                                src="/icons/logo-linkedin.svg"
                                alt="LinkedIn"
                                width={16}
                                height={16}
                                className="inline-block"
                            />
                        </a>
                    </div>
                </motion.div>
            </section>

            <PayOff />
        </div>
    );
}
