
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Bolt, Code, Layers2, MessageCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import ReactCountryFlag from "react-country-flag"

interface SkillProps {
  t: typeof import('../locales/en.json') 
}

export default function Skills({t}: SkillProps) {
    return (
        <div>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger><Code />{t.skills.programming}</AccordionTrigger>
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
                    <AccordionTrigger><Layers2 />{t.skills.libraries}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-wrap space-x-1 space-y-1 items-stretch">
                            <Badge>React (Vite)</Badge>
                            <Badge>React Native (Android)</Badge>
                            <Badge>Next.js</Badge>
                            <Badge>Laravel</Badge>
                            <Badge>TailwindCSS</Badge>
                            <Badge>MUI (Material UI)</Badge>
                            <Badge>Shadcn UI</Badge>
                            <Badge>Livewire + Volt</Badge>
                            <Badge>Prisma</Badge>
                            <Badge>Vuexy</Badge>
                            <Badge>Django</Badge>
                            <Badge>Flask</Badge>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger><Bolt />{t.skills.tools}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-wrap space-x-1 space-y-1 items-stretch">
                            <Badge>Linux (Ubuntu)</Badge>
                            <Badge>Git/Github</Badge>
                            <Badge>Postman, Bruno</Badge>
                            <Badge>Slack</Badge>
                            <Badge>Parallel Desk</Badge>
                            <Badge>Docker Containers</Badge>
                            <Badge>PostgreSQL / MySQL</Badge>
                            <Badge>DBeaver / phpMyAdmin</Badge>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger><MessageCircle />{t.skills.languages}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <ul className="list-disc pl-6">
                            <li><ReactCountryFlag countryCode="IT" /> <b>{t.skills.italian}</b> - {t.skills.italian_language}</li>
                            <li><ReactCountryFlag countryCode="GB" /> <b>{t.skills.english}</b> - 
                                <Link className="text-blue-500" href="https://www.cambridgeenglish.org/it/exams-and-tests/proficiency/">C2 Cambridge </Link>
                                {t.skills.english_language} British School Pisa
                                <br /> {t.skills.english_certificate} C0491788
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>

    )
}