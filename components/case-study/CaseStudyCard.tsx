"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  readonly caseStudy: CaseStudy;
  readonly featured?: boolean;
  readonly index?: number;
  readonly className?: string;
}

/**
 * Card component for displaying case study previews
 */
export function CaseStudyCard({
  caseStudy,
  featured = false,
  index = 0,
  className,
}: CaseStudyCardProps): React.JSX.Element {
  const { slug, title, tagline, description, period, stack, screenshots, status } = caseStudy;

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className={cn("group", className)}
      >
        <Link href={`/case-study/${slug}`} className="block">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-300 group-hover:border-teal-500/50 group-hover:shadow-2xl group-hover:shadow-teal-500/10">
            {/* Hero Image */}
            <div className="relative aspect-video overflow-hidden">
              {screenshots?.[0] ? (
                <Image
                  src={screenshots[0]}
                  alt={`${title} dashboard preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-neutral-900 to-neutral-800" />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider",
                  status === "live" && "bg-teal-500/20 text-teal-400 border border-teal-500/30",
                  status === "ongoing" && "bg-blue-500/20 text-blue-400 border border-blue-500/30",
                  status === "completed" && "bg-neutral-500/20 text-neutral-400 border border-neutral-500/30"
                )}>
                  {status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-teal-400 font-mono text-sm mb-1">{description}</p>
                  <p className="text-neutral-500 text-sm">{period}</p>
                </div>
              </div>

              <p className="text-neutral-300 leading-relaxed mb-6 max-w-2xl">
                {tagline}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {stack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800/50 text-neutral-400 text-xs px-3 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {stack.length > 6 && (
                  <span className="text-neutral-500 text-xs px-2 py-1">
                    +{stack.length - 6} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center text-teal-400 font-medium group-hover:gap-2 transition-all">
                <span>Read case study</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Secondary card style
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn("group", className)}
    >
      <Link href={`/case-study/${slug}`} className="block h-full">
        <div className="h-full rounded-xl border border-neutral-800 bg-neutral-950/50 p-6 transition-all duration-300 hover:border-teal-500/40 hover:bg-neutral-900/50">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={cn(
              "px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider",
              status === "live" && "bg-teal-500/10 text-teal-400",
              status === "ongoing" && "bg-blue-500/10 text-blue-400",
              status === "completed" && "bg-neutral-500/10 text-neutral-400"
            )}>
              {status}
            </span>
            <span className="text-neutral-600 text-xs">{period}</span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-neutral-400 text-sm mb-3">{description}</p>
          
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">
            {tagline}
          </p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-neutral-800/30 text-neutral-500 text-xs px-2 py-0.5 rounded font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center text-teal-400 text-sm font-medium mt-auto">
            <span>View project</span>
            <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
