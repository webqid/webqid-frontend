// Case study data for webqid.com
export type CaseStudy = {
  slug: string;
  title: string;
  featured?: boolean;
  tagline: string;
  description: string;
  role: string;
  period: string;
  context: string;
  deliverables: string[];
  stack: string[];
  links: { label: string; url: string }[];
  metrics?: { label: string; value: string }[];
  screenshots?: string[];
  challenge: string;
  myRole: string;
  technical: { decision: string; rationale: string }[];
  outcome: string;
  status: "live" | "completed" | "ongoing";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "aita-protocol",
    title: "AITA Protocol",
    featured: true,
    tagline: "DeFi staking dashboard, referral system, and LST platform",
    description: "Lead Web3 Frontend Developer / Technical Lead",
    period: "2023–Present",
    role: "Architected entire frontend from scratch for DeFi staking protocol",
    context: "AITA Protocol needed a production-grade frontend for their DeFi staking platform. The challenge: build a secure, scalable dashboard that would serve as the primary interface for all token holders to stake, track rewards, and participate in the referral program.",
    deliverables: [
      "Staking dashboard with real-time reward tracking",
      "Referral system with on-chain verification",
      "LST (Liquid Staking Token) platform",
      "Wallet connection and transaction flows",
      "Admin analytics dashboard"
    ],
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Wagmi v2",
      "Viem",
      "RainbowKit",
      "GraphQL"
    ],
    links: [
      { label: "Staking App", url: "https://app.aitaprotocol.com" },
      { label: "LST Platform", url: "https://lst.aitaprotocol.com" }
    ],
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Platforms", value: "2" },
      { label: "Token Holders", value: "Active" }
    ],
    screenshots: [
      "/work/aita-dashboard-1.webp",
      "/work/aita-dashboard-2.webp",
      "/work/aita-wallet-connect.webp",
      "/work/aita-staking.webp"
    ],
    challenge: "Build a production-ready DeFi frontend from scratch that handles complex staking logic, integrates with smart contracts securely, and provides a clear, trustworthy interface for token holders managing significant value.",
    myRole: "Led frontend architecture and development. Made all technical decisions on stack, patterns, and implementation. Built the component library, established code standards, and implemented secure smart contract interactions. Collaborated directly with the protocol team on contract integration.",
    technical: [
      {
        decision: "Wagmi v2 + Viem over Ethers.js",
        rationale: "Type safety across the entire contract interaction layer. React Query integration means automatic caching, refetching, and optimistic updates. Modern patterns that align with Next.js App Router."
      },
      {
        decision: "Custom hooks for smart contract interactions",
        rationale: "Abstracted all contract calls into typed hooks with built-in error handling, loading states, and transaction confirmation logic. Prevents raw contract access in components."
      },
      {
        decision: "Modular UI system",
        rationale: "Built a component library designed for reuse across multiple dApps. Consistent patterns, accessible by default, dark-mode optimized. Now used across both the staking app and LST platform."
      },
      {
        decision: "Server Components for data fetching",
        rationale: "Dashboard data that doesn't require wallet connection is fetched server-side. Faster initial loads, better SEO for public pages, reduced client bundle."
      },
      {
        decision: "Edge caching for static content",
        rationale: "Static assets and non-dynamic pages cached at edge. Combined with ISR for semi-dynamic content like analytics."
      }
    ],
    outcome: "The platform is live and serves as the primary interface for AITA Protocol. All token holders use the dashboard for staking and reward tracking. The modular architecture has enabled rapid feature development and the launch of the separate LST platform.",
    status: "live"
  },
  {
    slug: "neby-exchange",
    title: "Neby Exchange",
    featured: false,
    tagline: "Decentralized exchange frontend with optimized trading interface",
    description: "Frontend Contributor",
    period: "2023–Present",
    role: "Contributed to decentralized exchange frontend development",
    context: "Neby Exchange is a decentralized trading platform requiring a high-performance frontend capable of handling real-time data, complex order flows, and seamless wallet integration.",
    deliverables: [
      "Performance optimization across the trading interface",
      "Wallet integration improvements",
      "Modular component architecture",
      "Real-time data handling patterns"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Wagmi",
      "WebSockets"
    ],
    links: [
      { label: "Exchange", url: "https://app.neby.exchange" }
    ],
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Role", value: "Contributor" }
    ],
    screenshots: [
      "/work/neby-trading.webp",
      "/work/neby-wallet.webp"
    ],
    challenge: "Contribute to a complex trading platform while maintaining performance standards. Real-time data updates, order book rendering, and wallet state management all require careful optimization.",
    myRole: "Focused on performance improvements and architectural refinements. Optimized rendering for high-frequency data updates, improved wallet connection flows, and established patterns for modular component development.",
    technical: [
      {
        decision: "Virtualized lists for order book",
        rationale: "Order books update frequently with many rows. Virtualization prevents DOM thrashing and maintains smooth 60fps updates."
      },
      {
        decision: "Optimistic UI updates",
        rationale: "Trading actions feel instant. State updates immediately while transactions confirm in background with proper rollback on failure."
      },
      {
        decision: "WebSocket connection management",
        rationale: "Single managed connection with automatic reconnection, message queuing, and typed event handlers."
      }
    ],
    outcome: "Ongoing contributions to a live trading platform. Performance improvements have resulted in smoother trading experience, particularly on mobile devices and during high-activity periods.",
    status: "ongoing"
  },
  {
    slug: "paladin-punks",
    title: "Paladin Punks & Streetart Frankey",
    featured: false,
    tagline: "NFT projects with high-profile brand collaborations",
    description: "Freelance Developer",
    period: "2021–Present",
    role: "NFT projects for high-profile brand collaborations (VW, Porsche, Pon Bikes)",
    context: "Multiple NFT projects requiring custom minting interfaces, smart contract development, and marketplace integration. These projects involved collaborations with major brands including Volkswagen, Porsche, and Pon Bikes.",
    deliverables: [
      "Custom minting interfaces",
      "ERC-721 smart contracts",
      "Marketplace integration",
      "Brand-specific landing pages",
      "Wallet connection and transaction UX"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Ethers.js",
      "Solidity",
      "IPFS",
      "OpenSea API"
    ],
    links: [
      { label: "Paladin Punks", url: "https://paladinpunks.com" }
    ],
    metrics: [
      { label: "Projects", value: "3+" },
      { label: "Brands", value: "VW, Porsche, Pon" },
      { label: "Status", value: "Completed" }
    ],
    screenshots: [
      "/work/paladin-mint.webp",
      "/work/paladin-gallery.webp"
    ],
    challenge: "Build secure minting interfaces that handle high traffic during drops, integrate with smart contracts safely, and provide a premium experience aligned with major brand partnerships.",
    myRole: "Full-stack development from contract to frontend. Wrote and deployed ERC-721 contracts, built minting UIs, and integrated with marketplaces. Focused heavily on security and gas optimization.",
    technical: [
      {
        decision: "Secure minting logic",
        rationale: "Multi-step verification prevents front-running and ensures fair distribution. Whitelist management handled on-chain with Merkle proofs."
      },
      {
        decision: "Gas optimization",
        rationale: "Batch minting operations, efficient storage patterns in contracts. Users pay less, higher completion rates."
      },
      {
        decision: "Progressive reveal",
        rationale: "Metadata revealed over time to maintain engagement and prevent sniping. IPFS-based with contract-controlled reveal triggers."
      }
    ],
    outcome: "Successfully launched multiple NFT collections with major brand partnerships. All drops completed without security incidents. Collections traded actively on secondary marketplaces.",
    status: "completed"
  }
];

/**
 * Get a single case study by slug
 */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(cs => cs.slug === slug);
}

/**
 * Get featured case study
 */
export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return CASE_STUDIES.find(cs => cs.featured);
}

/**
 * Get all non-featured case studies
 */
export function getSecondaryProjects(): CaseStudy[] {
  return CASE_STUDIES.filter(cs => !cs.featured);
}
