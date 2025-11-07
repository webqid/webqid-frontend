import PayOff from "@/components/PayOff";
import { Separator } from "@/components/ui/separator";

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
            </section>

            <PayOff />
        </div>
    );
}
