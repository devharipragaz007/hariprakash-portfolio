import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Calendar, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="container py-12">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Let's Build Something Great
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Have an idea for an AI-powered SaaS? Looking for a technical partner to build your MVP? I'd love to hear about it.
                </p>

                <div className="mt-12 flex flex-col items-center gap-6">
                    <Button size="lg" asChild className="w-full max-w-xs">
                        {/* Replace with your actual Calendly link */}
                        <Link href="https://calendly.com/your-link-here" target="_blank">
                            <Calendar className="mr-2 h-5 w-5" /> Book a Call
                        </Link>
                    </Button>

                    <div className="text-sm text-muted-foreground">or reach out directly</div>

                    <div className="space-y-4">
                         <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center justify-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                            <span>{siteConfig.contact.email}</span>
                        </a>
                        <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span>Connect on LinkedIn</span>
                        </a>
                        <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                            <span>View My Work</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}