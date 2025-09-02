
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { File } from "lucide-react";

interface ResumeProps {
    t: typeof import('../locales/en.json')
}

export default function Resume({ t }: ResumeProps) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger><File /><div className="font-bold text-xl">{t.resume.title}</div></AccordionTrigger>
                <AccordionContent>
                    <p className="text-lg"><b>2024/2025</b> - Pizero Design</p>
                    <ul className="list-disc pl-6">
                        {Object.entries(t.resume.pizero).map(([key, value]) => (
                            <li key={key}>
                                <b>{key}:</b> {value}
                            </li>
                        ))}
                    </ul>
                    <Separator className="my-2" />
                    <p className="text-lg"><b>2023/2025</b> - <Link className="text-blue-500 hover:underline" href="https://www.itsprodigi.it/corsi/full-stack-developer-2/">ITS Prodigi Full Stack Developer Course</Link></p>
                    <ul className="list-disc pl-6">
                        {Object.entries(t.resume.its).map(([key, value]) => (
                            <li key={key}>
                                <b>{key}:</b> {value}
                            </li>
                        ))}
                    </ul>
                    <Separator className="my-2" />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}