import * as React from "react"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPage() {

  const projects = [
  {
    title: "DeFi Interface Redesign",
    description: "Rearchitected a staking dashboard for clarity and speed. From fragmented data to a unified UX.",
    imageUrl: "/og-image.png",
  },
  {
    title: "Agent Control Panel",
    description: "Built a live interface for AI-driven trading agents — where real-time data meets calm design.",
    imageUrl: "/og-image.png",
  },
  {
    title: "Token Dashboard System",
    description: "A white-label Web3 framework for deploying tokens, NFTs, and staking flows in one cohesive design system.",
    imageUrl: "/og-image.png",
  },
];

  return (
    <Carousel className="w-full"

      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from(projects.map((project, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="group relative overflow-hidden rounded-xl border-neutral-800 bg-neutral-900/40">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  width={160}
                  height={60}
                  className="object-cover aspect-video w-full opacity-80 group-hover:opacity-100 transition" 
                  priority
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <CardContent className="absolute bottom-0 p-6 text-left space-y-1">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-neutral-400 text-sm">{project.description}</p>
                </CardContent>
              </Card>

            </div>
          </CarouselItem>
        )))}
      </CarouselContent>
    </Carousel>
  )
}
