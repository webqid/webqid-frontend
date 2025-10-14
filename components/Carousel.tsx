import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPage() {
  return (
    <Carousel className="w-full"
    
    opts={{
    align: "start",
    loop: true,
  }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3"> 
            <div className="p-1">
              <Card >
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <span className="text-4xl text-neutral-300 font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
