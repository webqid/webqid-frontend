export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-[#000000]/20 text-sm text-zinc-400">
            <div className="container py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
                {/* Logo */}
                <div className="col-span-2 row-span-2 md:row-span-1 sm:col-span-1">
                    <a href="#" className="text-2xl font-medium text-zinc-200">
                        webqid<span className="text-teal-400">.</span>
                    </a>

                </div>

                {/* Expertise */}
                <div>
                    <h3 className="text-zinc-200 mb-3">Expertise</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Frontend Engineering</a></li>
                        <li><a href="#">Web3 Integration</a></li>
                        {/* <li><a href="#">Smart Contracts</a></li>
                        <li><a href="#">Interface Design</a></li> */}
                    </ul>
                </div>

                {/* Solutions */}
                <div>
                    <h3 className="text-zinc-200 mb-3">Solutions</h3>
                    <ul className="space-y-2">
                        <li><a href="#">dApp Development</a></li>
                        <li><a href="#">Wallet Connect</a></li>
                        {/* <li><a href="#">Token & NFT Launch</a></li>
                        <li><a href="#">Staking Systems</a></li> */}
                    </ul>
                </div>

                {/* Studio */}
                <div>
                    <h3 className="text-zinc-200 mb-3">Studio</h3>
                    <ul className="space-y-2">
                        <li><a href="/about">About</a></li>
                        {/* <li><a href="#">Philosophy</a></li> */}
                        <li><a href="#">Brand</a></li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h3 className="text-zinc-200 mb-3">Connect</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Contact</a></li>
                        <li><a href="https://x.com/webqid">X</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

            </div>


        </footer>
    );
}
