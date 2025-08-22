import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import Resume from "@/components/Resume";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const linkedinUsername = process.env.NEXT_PUBLIC_LINKEDIN_USERNAME;

const laravelCSManager = ["ScreenHome.png", "ScreenNewReport.png", "ScreenProfile.png"];
const nextJsSimpleBlog = ["NextjsBlog1.png", "Nextjsblog2.png", "Nextjsblog3.png", "Nextjsblog4.png", "Nextjsblog5.png", "Nextjsblog6.png"];

export default function Home() {
  return (
    <div>
      <div className="relative w-full">
        <Navbar01 />
      </div>

      <div className="mx-5 my-5 flex flex-col md:flex-row items-start space-x-0 md:space-x-5 space-y-5 md:space-y-0">

        <Card className="w-full md:w-[40%]">
          <CardHeader>
            <CardTitle className="text-4xl">Resume</CardTitle>
            <CardDescription>I am a full stack developer with a passion for building web applications</CardDescription>
            <CardAction>
              <img className="rounded-full"
                src="https://placehold.co/128x128" alt="Profile Picture"
                width={128} height={128} />
            </CardAction>
          </CardHeader>
          <CardContent>

            <p className="text-lg">I am proficient in HTML, CSS, JavaScript, React, Next.js and Laravel</p>
            <Resume />

          </CardContent>
          <CardFooter>
            <div className="flex space-x-5">
              <Link className="text-blue-500 hover:underline" href={`https://github.com/${githubUsername}`}><Github /></Link>
              <Link className="text-blue-500 hover:underline" href={`https://www.linkedin.com/in/${linkedinUsername}`}><Linkedin /></Link>
              <Link className="text-blue-500 hover:underline" href="#"><Mail /></Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-full md:w-[60%]" id="projects">
          <CardHeader>
            <CardTitle className="text-4xl">My Projects</CardTitle>
            <CardDescription>A collection of web applications I've built</CardDescription>
          </CardHeader>
          <CardContent>


            <Tabs defaultValue="next-js-simple-blog-spot">
              <TabsList>

                <Select>
                  <SelectTrigger className="w-[70%] md:w-full">
                    <SelectValue placeholder="next-js-simple-blog-spot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laravel-cs-manager">
                      <TabsTrigger value="laravel-cs-manager">Laravel Construction Site Manager</TabsTrigger>
                    </SelectItem>
                    <SelectItem value="next-js-simple-blog-spot">
                      <TabsTrigger value="next-js-simple-blog-spot">Next.js Simple Blogspot</TabsTrigger>
                    </SelectItem>
                  </SelectContent>
                </Select>

              </TabsList>

              <TabsContent value="laravel-cs-manager">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <ProjectCarousel images={laravelCSManager} folder="laravel-construction-site-manager"
                    title="Laravel Construction Site Manager"
                    description="A web application for managing construction sites and associated workers"
                    technologies={["Laravel", "React", "Tailwind CSS", "Material UI"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="next-js-simple-blog-spot">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <ProjectCarousel images={nextJsSimpleBlog} folder="next-js-simple-blog-spot"
                    title="Next.js Simple Blog Spot"
                    description="A simple blog application built with Next.js"
                    technologies={["Next.js", "React", "Shadcn UI", "Tailwind CSS", "Prisma", "PostgreSQL"]}
                  />
                </div>
              </TabsContent>
            </Tabs>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
