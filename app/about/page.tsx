import { ProfileAvatar } from "@/components/profile-avatar";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Founder Story & Values
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1 flex flex-col items-center text-center">
                        <ProfileAvatar size={200} />
                        <h2 className="text-2xl font-bold mt-4">{siteConfig.name}</h2>
                        <p className="text-muted-foreground">{siteConfig.role}</p>
                        <div className="flex items-center gap-4 mt-4">
                            <a href={`mailto:${siteConfig.contact.email}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                <Mail className="h-6 w-6" />
                            </a>
                            <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground">
                        <p>
                            My journey into technology wasn't traditional. I started with a degree in Biotechnology, driven by a fascination with complex systems. However, I soon discovered that my passion for building and problem-solving was better suited to the world of software. I taught myself to code and dove headfirst into full-stack development, and I've never looked back.
                        </p>
                        <p>
                            After working across various roles—from developer to lead engineer—at both startups and large enterprises, I found my true calling: partnering with entrepreneurs. I thrive in the zero-to-one phase, where ambiguity is high, and the right technical decisions can make or break a company. 
                        </p>
                        <p>
                            My approach is guided by three core values:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li><span className="font-semibold text-foreground">Speed:</span> Getting a functional MVP into the hands of users is paramount. I prioritize rapid iteration to learn and adapt quickly.</li>
                            <li><span className="font-semibold text-foreground">Simplicity:</span> I build for the immediate need, avoiding over-engineering. The goal is to solve today's problem effectively, not to build for a hypothetical future.</li>
                            <li><span className="font-semibold text-foreground">Measurable Impact:</span> Every line of code should be traceable to a business objective. I focus on shipping features that move the needle on key metrics.</li>
                        </ul>
                        <p>
                           I'm not just a hired developer; I'm a technical co-builder. If you're a founder with a vision for an AI-powered, cloud-native product, let's talk.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}