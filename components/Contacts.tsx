import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";   
export default function Contacts() {
  return (
    <div className="mx-5 my-5 flex flex-col space-y-5">
      <Card className="w-[30%]">
        <CardHeader>
          <CardTitle className="text-4xl">Contacts</CardTitle>
          <CardDescription>Feel free to reach out!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">Email: <Link className="text-blue-500 hover:underline" href="mailto:alessio.barsi@example.com">alessio.barsi@example.com</Link></p>
        </CardContent>
      </Card>
    </div>
  );
}
