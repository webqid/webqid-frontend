import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Page() {
    return (
        <div className="container py-24 md:py-32">
            <section className="max-w-2xl mx-auto text-center space-y-8">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                    contact
                    <span className="after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]" />
                </h1>

                <p className="text-zinc-400 font-light leading-relaxed">
                    We keep things simple — direct contact, no forms.
                </p>

                <p className="text-zinc-400 font-light leading-relaxed">
                    For collaborations, inquiries, or project discussions, reach out anytime at{" "}
                    <Link
                        href="mailto:hello@webqid.com"
                        className="text-teal-500 hover:text-teal-300 transition-colors font-medium"
                    >
                        hello@webqid.com
                    </Link>.
                </p>

                <p className="text-zinc-500 text-sm font-light">
                    Expect a calm, thoughtful reply — no automation, just intent.
                </p>
            </section>

            <Separator className="my-16 md:my-24" />

            <section className="text-center">
                <h2 className="text-xl font-medium text-zinc-300 mb-3">
                    Built with intent.
                </h2>
                <p className="text-zinc-500 text-sm">
                    webqid. — precision-built frontends for Web3 and beyond.
                </p>
            </section>
        </div>
    );
}
