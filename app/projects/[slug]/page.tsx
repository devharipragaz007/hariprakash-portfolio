import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
            <Link href="/projects"><ArrowLeft className="mr-2 h-4 w-4" />Back to Projects</Link>
        </Button>
        
        <article>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 my-6">
            {project.tech.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert mt-8 space-y-4">
            <section>
              <h2 className="text-2xl font-bold">Problem</h2>
              <p>{project.problem}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold">Solution</h2>
              <p>{project.solution}</p>
            </section>

             <section>
              <h2 className="text-2xl font-bold">Impact</h2>
              <p>{project.impact}</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold">Status</h2>
                <p>{project.status}. {project.cta}.</p>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
}