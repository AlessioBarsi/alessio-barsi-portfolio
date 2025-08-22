
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function Resume() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger><div className="font-bold text-xl">Resume</div></AccordionTrigger>
                <AccordionContent>
                    <p className="text-lg"><b>2025</b> - Graduated From <Link className="text-blue-500 hover:underline" href="https://www.itsprodigi.it/corsi/full-stack-developer-2/">ITS Prodigi Full Stack Developer Course</Link></p>
                    <Separator className="my-2" />
                    <p className="text-lg"><b>2024/2025</b> - Pizero Design</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}