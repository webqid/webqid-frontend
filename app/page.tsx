"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import TechMarquee from "@/components/TechMarquee";
import { Button } from "@/components/ui/button";

type Solution = {
    title: string;
    desc: string;
};

const SOLUTIONS: Solution[] = [
    {
        title: "Web Interfaces",
        desc: "Frontends built with precision, engineered in Next.js, TypeScript, and Tailwind for clarity, speed, and reliability.",
    },
    {
        title: "Design Handoff",
        desc: "From Figma to code. Pixel-perfect, accessible, and maintainable. A direct translation from concept to production.",
    },
    {
        title: "Design Systems in Code",
        desc: "UI foundations crafted for scalability. Consistent, accessible, and easy to evolve across products.",
    },
    {
        title: "API & Realtime Data",
        desc: "Integrations with GraphQL, REST, and WebSockets that turn complex data into clear, reactive experiences.",
    },
    {
        title: "Wallet & dApp Integrations",
        desc: "Seamless Web3 onboarding through RainbowKit, Wagmi, Viem, and Hyperliquid APIs. Smooth, secure, and trusted.",
    },
    {
        title: "Optimized Delivery",
        desc: "Deployed on Vercel with edge rendering, analytics, and continuous performance tuning.",
    },
];

type SectionProps = {
    id: string;
    children: ReactNode;
    className?: string;
    withTopBorder?: boolean;
};

function Section({
    id,
    children,
    className = "",
    withTopBorder = true,
}: SectionProps) {
    const base = "py-24 overflow-hidden";
    const border = withTopBorder ? "border-t border-neutral-800/50" : "";
    const classes = [base, border, className].filter(Boolean).join(" ");

    return (
        <section id={id} className={classes}>
            {children}
        </section>
    );
}

type SectionTitleProps = {
    children: ReactNode;
};

function SectionTitle({ children }: SectionTitleProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-medium after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl"
        >
            {children}
        </motion.h2>
    );
}

type SectionParagraphProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

function SectionParagraph({
    children,
    className = "",
    delay = 0.1,
}: SectionParagraphProps) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`text-neutral-400 font-light leading-relaxed tracking-wide ${className}`}
        >
            {children}
        </motion.p>
    );
}

type SolutionCardProps = Solution & {
    index: number;
};

function SolutionCard({ title, desc, index }: SolutionCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-left space-y-2 hover:border-teal-500/40 transition-colors"
        >
            <h3 className="text-lg font-medium text-neutral-200 tracking-tight">
                {title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed tracking-wide">
                {desc}
            </p>
        </motion.article>
    );
}

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const studioY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const workY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <div
            ref={ref}
            className="text-neutral-300 font-[geist-sans] antialiased flex flex-col"
        >
            {/* ───────────── HERO ───────────── */}
            <section
                id="hero"
                className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-7xl md:text-8xl font-medium tracking-tight relative after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
                >
                    webqid
                </motion.h1>

                <motion.p
                    className="mt-6 text-xl text-neutral-400 font-light tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    Built with intent.
                </motion.p>

                <motion.div
                    className="mt-4 text-lg text-neutral-500 max-w-md leading-relaxed font-light tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                >
                    Precision-built Web frontends.
                    <br />
                    Engineered for trust, scalability, and performance.
                    <div className="my-6">
                        <Button variant="outline" size="lg" asChild>
                            <Link
                                href="https://demo.webqid.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pl-8 text-xl font-medium tracking-tight relative after:text-4xl after:-ml-1 after:mb-2 after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
                            >
                                demo
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* ───────────── SOLUTIONS ───────────── */}
            <Section id="solutions">
                <div className="container text-center space-y-10">
                    <SectionTitle>solutions</SectionTitle>

                    <SectionParagraph className="max-w-2xl mx-auto" delay={0.2}>
                        We design and build for Web3 teams who demand precision, speed, and
                        clarity, transforming complex on-chain systems into refined, human
                        interfaces.
                    </SectionParagraph>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {SOLUTIONS.map((solution, index) => (
                            <SolutionCard
                                key={solution.title}
                                index={index}
                                title={solution.title}
                                desc={solution.desc}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* ───────────── STUDIO ───────────── */}
            <TechMarquee />

            <Section id="studio">
                <motion.div style={{ y: studioY }}>
                    <div className="container text-center space-y-10">
                        <SectionTitle>studio</SectionTitle>

                        <SectionParagraph className="max-w-2xl mx-auto">
                            webqid. is a high-end engineering studio built on calm precision.
                            We translate complex on-chain systems into fast, human-centered
                            interfaces, engineered for trust and performance.
                        </SectionParagraph>

                        <SectionParagraph className="max-w-2xl mx-auto">
                            Our approach blends the rigor of software engineering with the
                            clarity of design. From staking dashboards and token systems to
                            wallet integrations and dApps. Every build is intentional,
                            reliable, and ready to scale.
                        </SectionParagraph>

                        <SectionParagraph className="max-w-2xl mx-auto">
                            We don’t chase trends. We build foundations. Technology should feel
                            effortless. Refined, quiet, and precise.
                        </SectionParagraph>
                    </div>
                </motion.div>
            </Section>

            {/* ───────────── WORKSPACE ───────────── */}
            <Section id="workspace">
                <div className="container max-w-4xl mx-auto text-center py-32 space-y-10">
                    <SectionTitle>workspace</SectionTitle>

                    <SectionParagraph className="max-w-2xl mx-auto">
                        Every detail is deliberate, from architecture to code. Our workspace
                        mirrors our philosophy: calm, precise, and built for focus. We build
                        fewer things, but better.
                    </SectionParagraph>
                </div>

                <div className="hidden w-full overflow-hidden border-t border-neutral-800">
                    <motion.div
                        style={{ y: workY }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full h-[480px] md:h-[560px] lg:h-[600px] overflow-hidden"
                    >
                        <Image
                            src="/studio.jpg"
                            alt="Studio workspace"
                            width={1280}
                            height={731}
                            className="w-full h-full object-cover opacity-80 brightness-[0.85]"
                            priority
                        />
                    </motion.div>
                </div>
            </Section>

            {/* ───────────── CONTACT ───────────── */}
            <Section id="contact">
                <div className="container max-w-4xl mx-auto text-center py-32 space-y-10">
                    <SectionTitle>contact</SectionTitle>

                    <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
                        We keep things simple, direct contact, no forms.
                    </p>

                    <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
                        For collaborations, inquiries, or project discussions, reach out
                        anytime at{" "}
                        <Link
                            href="mailto:hello@webqid.com"
                            className="text-teal-500 hover:text-teal-300 transition-colors font-medium"
                        >
                            hello@webqid.com
                        </Link>
                        .
                    </p>

                    <p className="text-neutral-500 text-sm font-light tracking-wide">
                        Based in the Netherlands, collaborating worldwide.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="mailto:hello@webqid.com"
                            className="inline-block mt-4 px-5 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-sans tracking-tight"
                        >
                            Start a conversation
                        </Link>
                    </motion.div>

                    <p className="text-neutral-500 text-sm font-light tracking-wide">
                        Expect a calm, thoughtful reply, no automation, just intent.
                    </p>
                </div>
            </Section>
        </div>
    );
}
