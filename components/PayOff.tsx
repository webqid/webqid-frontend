'use client';

import { Separator } from "@/components/ui/separator";

export default function PayOff() {
    return (
        <>
            <Separator className="my-20 md:my-28 bg-zinc-800/70" />

            {/* ─── Outro ───────────────────────────────────────────── */}
            <section className="text-center space-y-3">
                <p className="text-zinc-300 text-lg">Built with intent.</p>
                <p className="text-sm text-zinc-500">
                    webqid. — precision-built frontends for Web3 and beyond.
                </p>
            </section>
        </>
    );
}