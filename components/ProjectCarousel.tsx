'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"

type Parameters = {
    images: string[];
    folder: string;
}

export default function ProjectCarousel({ images, folder }: Parameters) {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}>
            <CarouselContent>
                {images.map(element => {
                    return (
                        <CarouselItem key={element}>
                            <img className="border rounded-lg" src={`/projects/${folder}/${element}`} alt={element} />
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}