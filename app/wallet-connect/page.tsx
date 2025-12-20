"use client";

import PayOff from "@/components/PayOff";

/**
 * Wallet Connect service page.
 */
export default function WalletConnectPage(): React.JSX.Element {
  return (
    <div className="container py-24 md:py-32 px-4">
      <section
        aria-labelledby="wallet-connect-title"
        className="max-w-3xl mx-auto space-y-8 text-center"
      >
        <h1
          id="wallet-connect-title"
          className="text-5xl md:text-6xl font-semibold tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]"
        >
          wallet connect
        </h1>

        <p className="text-neutral-400 font-light leading-relaxed">
          Enable seamless and secure connections between your applications and
          users&apos; cryptocurrency wallets with our expertly crafted Wallet
          Connect integrations. We facilitate smooth interactions across various
          wallet providers, ensuring a user-friendly experience that bridges the
          gap between your platform and the decentralized web.
        </p>

        <p className="text-neutral-400 font-light leading-relaxed">
          Our solutions support a wide range of wallets and blockchain networks,
          providing flexibility and reliability for your users. Whether
          you&apos;re building dApps, DeFi platforms, or NFT marketplaces, our
          Wallet Connect implementations are designed to enhance accessibility
          and engagement.
        </p>
      </section>

      <PayOff />
    </div>
  );
}