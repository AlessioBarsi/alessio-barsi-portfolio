
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Bolt, Code, Layers2, MessageCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import ReactCountryFlag from "react-country-flag"

export default function Skills() {
    return (
        <div>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger><Code />Programming Languages</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-wrap space-x-1 space-y-1 items-stretch">
                            <Badge>JavaScript</Badge>
                            <Badge>PHP</Badge>
                            <Badge>Python</Badge>
                            <Badge>HTML</Badge>
                            <Badge>CSS</Badge>
                            <Badge>C/C++</Badge>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger><Layers2 />Frameworks and Libraries</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-wrap space-x-1 space-y-1 items-stretch">
                            <Badge>React (Vite)</Badge>
                            <Badge>React Native (Android)</Badge>
                            <Badge>Next.js</Badge>
                            <Badge>Laravel</Badge>
                            <Badge>Django</Badge>
                            <Badge>TailwindCSS</Badge>
                            <Badge>MUI (Material UI)</Badge>
                            <Badge>Shadcn UI</Badge>
                            <Badge>Livewire + Volt</Badge>
                            <Badge>Flask</Badge>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger><Bolt />Tools and Platforms</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-wrap space-x-1 space-y-1 items-stretch">
                            <Badge>Linux (Ubuntu)</Badge>
                            <Badge>Git/Github</Badge>
                            <Badge>Postman, Bruno</Badge>
                            <Badge>Slack</Badge>
                            <Badge>Parallel Desk</Badge>
                            <Badge>Docker Containers</Badge>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger><MessageCircle />Spoken Languages</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <ul className="list-disc pl-6">
                            <li><ReactCountryFlag countryCode="IT" /> <b>Italian</b> - Native Speaker</li>
                            <li><ReactCountryFlag countryCode="GB" /> <b>English</b> - 
                                <Link className="text-blue-500" href="https://www.cambridgeenglish.org/it/exams-and-tests/proficiency/">C2 Cambridge Certificate </Link>
                                at British School Pisa
                                <br />Certificate Number C0491788
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>

    )
}