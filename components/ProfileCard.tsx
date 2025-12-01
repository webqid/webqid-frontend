import { motion } from "motion/react";
import Image from "next/image";

export default function ProfileCard() {
    return (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mt-8"
        >
          <div className="inline-flex items-center gap-6 bg-neutral-900/40 border border-neutral-800 rounded-xl p-4">
            <div className="w-20 h-20 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Studio founder profile"
                fill
                className="object-cover grayscale brightness-90"
              />
            </div>

            <div className="text-left">
              <div className="text-sm font-medium text-neutral-100">
                Christian van de Weerd
              </div>
              <div className="text-xs font-sans text-neutral-400">
                Senior Web3 Developer
              </div>
              <div className="text-[11px] italic font-sans text-neutral-500/80 mt-1 tracking-wide">
                "Precision is how I show care."
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/jcvandeweerd"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-teal-400 hover:text-teal-300 transition-colors"
              aria-label="Open LinkedIn profile"
            >
              <Image
                src="/icons/logo-linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                className="inline-block"
              />
            </a>
          </div>
        </motion.div>
    );
}