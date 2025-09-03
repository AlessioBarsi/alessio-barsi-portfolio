'use client';
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link";
import Image from "next/image";


type Parameters = {
    images: string[];
    description: string;
    title: string;
    folder: string;
    technologies: string[];
    view_code: string;
}
const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

export default function ProjectCarousel({ images, folder, title, description, technologies, view_code }: Parameters) {
    return (
        <div>
            <div className="text-2xl font-bold">{title}</div>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex items-start gap-2 my-3">
                {technologies.map((tech, index) => (
                    <Badge key={index} variant="default">
                        {tech}
                    </Badge>
                ))}
            </div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3500,
                    }),
                ]}>
                <CarouselContent>
                    {images.map(element => {
                        return (
                            <CarouselItem key={element}>

                                <div className="relative w-full h-[200px] md:h-[500px] md:w-[75%]">
                                    <Image className="object-cover border rounded-lg" src={`/projects/${folder}/${element}`}
                                        fill
                                        alt="Image could not be loaded"
                                    />
                                </div>

                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Badge className="bg-blue-500 text-white mt-3"><Link href={`https://github.com/${githubUsername}/${folder}`}>{view_code}</Link></Badge>
        </div>


    )
}