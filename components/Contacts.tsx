import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const linkedinUsername = process.env.NEXT_PUBLIC_LINKEDIN_USERNAME;

export default function Contacts() {
  return (
    <div className="flex space-x-5">
      <Link className="text-blue-500 hover:underline" href={`https://github.com/${githubUsername}`}>
        <Github size={32} />
      </Link>
      <Link className="text-blue-500 hover:underline" href={`https://www.linkedin.com/in/${linkedinUsername}`}>
        <Linkedin size={32} />
      </Link>
      <Link className="text-blue-500 hover:underline" href="#">
        <Mail size={32} />
      </Link>
    </div>
  );
}
