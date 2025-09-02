import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import Resume from "@/components/Resume";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Skills from "@/components/Skills";
import ReactCountryFlag from "react-country-flag"

const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const linkedinUsername = process.env.NEXT_PUBLIC_LINKEDIN_USERNAME;
const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;

const laravelCSManager = ["ScreenHome.png", "ScreenNewReport.png", "ScreenProfile.png"];
const nextJsSimpleBlog = ["NextjsBlog1.png", "Nextjsblog2.png", "Nextjsblog3.png", "Nextjsblog4.png", "Nextjsblog5.png", "Nextjsblog6.png"];

export default function Home() {
  return (
    <div>
      <div className="relative w-full">
        <Navbar01 />
      </div>

      <div className="mx-5 my-5 flex flex-col md:flex-row items-start space-x-0 md:space-x-5 space-y-5 md:space-y-0">
        <div className="flex flex-col w-full space-y-3 md:w-[40%]">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-4xl">About Me</CardTitle>
              <CardDescription>I am a full stack developer with a passion for building web applications, proficient in HTML, CSS, JavaScript, React and Laravel</CardDescription>
              <CardAction>
                <Image className="rounded-full"
                  src="/profile.jpg" alt="Profile Picture"
                  width={128} height={128} />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Date of Birth: <b>12/12/1998</b></p>
              <p>Country: <ReactCountryFlag countryCode="IT"/> <b>Italy</b></p>
              <Resume />
            </CardContent>
            <CardFooter>
              <div className="flex space-x-5">
                <Link className="text-blue-500 hover:underline" href={`https://github.com/${githubUsername}`}><Github /></Link>
                <Link className="text-blue-500 hover:underline" href={`https://www.linkedin.com/in/${linkedinUsername}`}><Linkedin /></Link>
                <Link className="text-blue-500 hover:underline" href={`mailto:${emailAddress}`}><Mail /></Link>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-full" id="capabilities">
            <CardHeader className="text-4xl">
              <CardTitle>Skills</CardTitle>
              <CardDescription>Programming languages, frameworks, libraries, tools, and platforms I have experience with</CardDescription>
            </CardHeader>
            <CardContent>
              <Skills/>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full md:w-[60%]" id="projects">
          <CardHeader>
            <CardTitle className="text-4xl">My Projects</CardTitle>
            <CardDescription>A showcase of web applications I have personally developed</CardDescription>
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
                    description="A web application for managing construction sites and associated workers, built with a React+Vite frontend utilizing Material UI, and a Laravel backend"
                    technologies={["Laravel", "React", "Tailwind CSS", "Material UI"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="next-js-simple-blog-spot">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <ProjectCarousel images={nextJsSimpleBlog} folder="next-js-simple-blog-spot"
                    title="Next.js Simple Blog Spot"
                    description="A simple blog application built with Next.js and Prisma, that allows users to create, comment and share posts"
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
