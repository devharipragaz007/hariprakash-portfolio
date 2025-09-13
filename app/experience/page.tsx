import { experience } from "@/content/experience";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Professional Experience
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    My journey in building and scaling software solutions.
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-5 top-5 -ml-px h-[calc(100%-2.5rem)] w-0.5 bg-border"></div>

                {experience.map((job, index) => (
                    <div key={index} className="relative mb-12 pl-12">
                        <div className="absolute left-0 top-0">
                            <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                                <Briefcase className="h-5 w-5 text-primary-foreground" />
                            </div>
                        </div>
                        
                        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold">{job.role}</h3>
                                    <p className="font-semibold">{job.company} <span className="text-sm text-muted-foreground font-normal">({job.location})</span></p>
                                </div>
                                <p className="text-sm font-medium text-muted-foreground text-right flex-shrink-0 ml-4">{job.period}</p>
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                {job.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}