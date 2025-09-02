
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { File } from "lucide-react";

export default function Resume() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger><File/><div className="font-bold text-xl">Resume </div></AccordionTrigger>
                <AccordionContent>
                    <p className="text-lg"><b>2024/2025</b> - Pizero Design</p>
                    <ul className="list-disc pl-6">
                        <li>Developed both frontend and backend features for management web applications, using PHP for backend logic and JavaScript with Bootstrap for responsive interfaces</li>
                        <li>Enhanced an existing React Native application by implementing new features and improvements</li>
                        <li>Developed an administrative management interface with Laravel and Vuexy, enabling admin users to upload, manage, and remove content efficiently</li>
                        <li>Implemented frontend functionality for an AI-driven web application using Laravel with Livewire and Volt</li>
                        <li>Gained experience with Parallel Desk, and Slack, collaborating effectively within a team environment</li>
                    </ul>
                    <Separator className="my-2" />
                    <p className="text-lg"><b>2023/2025</b> - <Link className="text-blue-500 hover:underline" href="https://www.itsprodigi.it/corsi/full-stack-developer-2/">ITS Prodigi Full Stack Developer Course</Link></p>
                    <ul className="list-disc pl-6">
                        <li>Acquired solid foundations in Python and web development, including HTML, CSS, and JavaScript</li>
                        <li>Developed a practical understanding of full-stack application architecture, covering frontend, backend, APIs, and database integration</li>
                        <li>Gained hands-on experience with frameworks such as Django, React, and Laravel</li>
                        <li>Worked with development and testing tools including Postman, Git and Github</li>
                        <li>Built basic knowledge of containerization (Docker), cloud concepts, and Internet of Things (IoT) technologies</li>
                    </ul>
                    <Separator className="my-2" />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}