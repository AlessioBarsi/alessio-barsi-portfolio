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
import en from '../../locales/en.json'

const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const linkedinUsername = process.env.NEXT_PUBLIC_LINKEDIN_USERNAME;
const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;

const laravelCSManager = ["ScreenHome.png", "ScreenNewReport.png", "ScreenProfile.png"];
const nextJsSimpleBlog = ["NextjsBlog1.png", "Nextjsblog2.png", "Nextjsblog3.png", "Nextjsblog4.png", "Nextjsblog5.png", "Nextjsblog6.png"];

export default function Home() {
  const t = en;
  return (
    <div>
      <div className="relative w-full">
        <Navbar01 lang="en"/>
      </div>

      <div className="mx-5 my-5 flex flex-col md:flex-row items-start space-x-0 md:space-x-5 space-y-5 md:space-y-0">
        <div className="flex flex-col w-full space-y-3 md:w-[40%]">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-4xl">{t.about.title}</CardTitle>
              <CardDescription>{t.about.description}</CardDescription>
              <CardAction>
                <Image className="rounded-full"
                  src="/profile.jpg" alt="Profile Picture"
                  width={128} height={128} />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>{t.about.date} <b>12/12/1998</b></p>
              <p>{t.about.country}: <ReactCountryFlag countryCode="IT" /> <b>{t.about.italy}</b></p>
              <Resume t={t}/>
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
              <CardTitle>{t.skills.title}</CardTitle>
              <CardDescription>{t.skills.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Skills t={t} />
            </CardContent>
          </Card>
        </div>

        <Card className="w-full md:w-[60%]" id="projects">
          <CardHeader>
            <CardTitle className="text-4xl">{t.projects.title}</CardTitle>
            <CardDescription>{t.projects.description}</CardDescription>
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
                    description={t.projects["laravel-construction-site-manager"].description}
                    technologies={["Laravel", "React", "Tailwind CSS", "Material UI"]}
                    view_code={t.projects.view_code}
                  />
                </div>
              </TabsContent>

              <TabsContent value="next-js-simple-blog-spot">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <ProjectCarousel images={nextJsSimpleBlog} folder="next-js-simple-blog-spot"
                    title="Next.js Simple Blog Spot"
                    description={t.projects["next-js-simple-blog-spot"].description}
                    technologies={["Next.js", "React", "Shadcn UI", "Tailwind CSS", "Prisma", "PostgreSQL"]}
                    view_code={t.projects.view_code}
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
