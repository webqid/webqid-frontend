"use client";

import { Separator } from "@/components/ui/separator";

/**
 * Brand payoff section with separator and tagline.
 */
export default function PayOff(): React.JSX.Element {
  return (
    <>
      <Separator className="my-20 md:my-28 bg-neutral-800/70" />

      {/* ─── Outro ───────────────────────────────────────── */}
      <section aria-label="Brand payoff" className="text-center space-y-3">
        <p className="text-neutral-400 text-lg">Built with intent.</p>
        <p className="text-sm text-neutral-500">
          webqid. — precision-built frontends.
        </p>
      </section>
    </>
  );
}