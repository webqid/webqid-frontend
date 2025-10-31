'use client';

import { motion } from "motion/react";
import PayOff from "@/components/PayOff";

export default function DappDevelopment() {
    return (
        <div className="container py-24 md:py-32">
            <section className="max-w-3xl mx-auto space-y-8 text-center">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]">
                    dApp development
                </h1>

                <p className="text-zinc-300 font-light leading-relaxed">
                    Building decentralized applications that combine robust blockchain functionality with intuitive user experiences.
                    From smart contract integration to front-end design, we create dApps that are secure, scalable, and user-friendly.   
                </p>
                
                <p className="text-zinc-300 font-light leading-relaxed">
                    Our expertise spans various blockchain platforms and technologies, ensuring your dApp is optimized for performance and usability.
                    Whether you're launching a DeFi platform, NFT marketplace, or any other decentralized solution, we deliver dApps engineered for success.
                </p>
                
            </section>

            <PayOff />
        </div>
    );
}