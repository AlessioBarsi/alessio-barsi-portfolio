import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import ProjectCarousel from "@/components/ProjectCarousel";

const laravelCSManager = ["ScreenHome.png", "ScreenNewReport.png", "ScreenProfile.png"];
const nextJsSimpleBlog = ["Image1", "Image2", "Image3"];

export default function Home() {
  return (
    <div className="mx-5 my-5 flex flex-col space-y-5">

      <Card className="w-[30%]">
        <CardHeader>
          <CardTitle className="text-4xl">Alessio Barsi</CardTitle>
          <CardDescription>I am a full stack developer with a passion for building web applications</CardDescription>
          <CardAction>
            <img className="rounded-full"
              src="https://placehold.co/128x128" alt="Profile Picture"
              width={128} height={128} />
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-lg">Graduated From <Link className="text-blue-500 hover:underline" href="https://www.itsprodigi.it/corsi/full-stack-developer-2/">ITS Prodigi Full Stack Developer Course</Link></p>
          <p className="text-lg">I am proficient in HTML, CSS, JavaScript, React, Next.js and Laravel</p>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-5">
            <Link className="text-blue-500 hover:underline" href="https://github.com/alessiobarsi"><Github /></Link>
            <Link className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/yourusername"><Linkedin /></Link>
            <Link className="text-blue-500 hover:underline" href="#"><Mail /></Link>
          </div>
        </CardFooter>
      </Card>

      <Card className="w-[70%]">
        <CardHeader>
          <CardTitle className="text-4xl">My Projects</CardTitle>
          <CardDescription>A collection of web applications I've built</CardDescription>
        </CardHeader>
        <CardContent>


          <Tabs defaultValue="next-js-simple-blog">
            <TabsList>
              <TabsTrigger value="laravel-cs-manager">Laravel Construction Site Manager</TabsTrigger>
              <TabsTrigger value="next-js-simple-blog">Next.js Simple Blogspot</TabsTrigger>
            </TabsList>

            <TabsContent value="laravel-cs-manager">
              <div className="relative w-full overflow-hidden rounded-lg">
                <ProjectCarousel images={laravelCSManager} folder="laravel-construction-site-manager"/>
              </div>
            </TabsContent>

            <TabsContent value="next-js-simple-blog">View your blog posts here.</TabsContent>
          </Tabs>

        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>

  );
}
