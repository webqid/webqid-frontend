'use client';

import PayOff from "@/components/PayOff";

export default function Web3Integration() {
    return (
        <div className="container py-24 md:py-32">
            <section className="max-w-3xl mx-auto space-y-8 text-center">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]">
                    web3 integration
                </h1>

                <p className="text-zinc-300 font-light leading-relaxed">
                   
                    Seamlessly connect your applications to blockchain networks with precision-engineered Web3 integrations.
                    From wallet connectivity to smart contract interactions, we ensure your platform communicates effectively and securely with the decentralized web.
                </p>

                <p className="text-zinc-300 font-light leading-relaxed">
                    Our expertise spans popular libraries and frameworks such as Ethers.js, Web3.js, and Wagmi,
                    enabling robust and scalable solutions tailored to your project's needs.
                    Whether you're building dApps, DeFi platforms, or NFT marketplaces, our integrations are designed for optimal performance and user experience.
                </p>
            </section>

            <PayOff />
        </div>
    );
}