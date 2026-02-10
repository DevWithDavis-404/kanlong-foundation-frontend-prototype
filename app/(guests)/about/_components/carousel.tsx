"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselItems = [
  {
    src: "/assets/landscape1.jpg",
  },
  {
    src: "/assets/landscape2.jpg",
  },
  {
    src: "/assets/landscape3.jpg",
  },
  {
    src: "/assets/landscape4.jpg",
  },
  {
    src: "/assets/landscape5.jpg",
  },
  {
    src: "/assets/landscape6.jpg",
  },
];

export function AboutCarousel() {
  return (
    <Carousel
      className='rounded-lg'
      opts={{
        loop: true,
      }}
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item.src}
                  alt='Photo'
                  fill
                  className='rounded-lg object-cover'
                />
              </AspectRatio>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
