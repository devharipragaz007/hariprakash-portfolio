import { projects } from "@/content/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Entrepreneurial Projects
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    From idea to MVP and beyond. Here are some of the ventures I'm building.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card key={project.slug} className="flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 4).map(tech => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                                {project.tech.length > 4 && <Badge variant="secondary">+{project.tech.length - 4}</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Status:</span> {project.status}</p>
                        </CardContent>
                        <CardFooter>
                           <Button asChild variant="outline" className="w-full">
                                <Link href={`/projects/${project.slug}`}>Read Case Study</Link>
                           </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}