import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-[#000000]/20 text-sm text-neutral-400">
            <div className="container py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
                {/* Logo */}
                <div className="col-span-2 row-span-2 md:row-span-1 sm:col-span-1">
                    <Link href="/" className="text-2xl font-medium text-neutral-200">
                        webqid<span className="text-teal-500 font-serif">.</span>
                    </Link>
                </div>

                {/* Expertise */}
                <div>
                    <h3 className="text-neutral-200 mb-3">Expertise</h3>
                    <ul className="space-y-2">
                        <li><Link href="/frontend-engineering">Frontend Engineering</Link></li>
                        <li><Link href="/web3-integration">Web3 Integration</Link></li>
                        <li><Link href="dapp-development">dApp Development</Link></li>
                        {/* <li><a href="#">Smart Contracts</a></li>
                        <li><a href="#">Interface Design</a></li> */}
                    </ul>
                </div>

                {/* Solutions */}
                {/* <div>
                    <h3 className="text-neutral-200 mb-3">Solutions</h3>
                    <ul className="space-y-2">
                        <li><Link href="dapp-development">dApp Development</Link></li>
                        <li><Link href="/wallet-connect">Wallet Connect</Link></li>
                        <li><a href="#">Token & NFT Launch</a></li>
                        <li><a href="#">Staking Systems</a></li>
                    </ul>
                </div> */}

                {/* Studio */}
                {/* <div>
                    <h3 className="text-neutral-200 mb-3">Studio</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about">About</Link></li>
                        <li><a href="#">Philosophy</a></li>
                        <li><a href="#">Brand</a></li>
                    </ul>
                </div> */}

                {/* Connect */}
                <div>
                    <h3 className="text-neutral-200 mb-3">Connect</h3>
                    <ul className="space-y-2">
                        {/* <li><Link href="/contact">Contact</Link></li> */}
                        <li>
                            <a
                                href="https://x.com/webqid"
                                title="X"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/logo-x.svg"
                                    alt="X"
                                    width={16}
                                    height={16}
                                    className="inline-block mr-2 mb-1"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/webqid"
                                title="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/logo-github.svg"
                                    alt="GitHub"
                                    width={16}
                                    height={16}
                                    className="inline-block mr-2 mb-1"
                                />
                            
                            </a>
                        </li>
                        <li><a href="https://linkedin.com/company/webqid"
                                title="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/logo-linkedin.svg"
                                    alt="LinkedIn"
                                    width={16}
                                    height={16}
                                    className="inline-block mr-2 mb-1"
                                />
                            
                            </a></li>
                    </ul>
                </div>

            </div>


        </footer>
    );
}
