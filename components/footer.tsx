import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
            HB
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${siteConfig.contact.email}`} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
           <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}