import { skillsData } from "@/content/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsPage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Capabilities
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A blend of technical expertise and a product-focused mindset to build what matters.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillsData.map((category) => (
                    <Card key={category.name}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <category.icon className="h-7 w-7 text-primary" />
                                <span>{category.name}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {category.skills.map(skill => (
                                    <li key={skill.name}>
                                        <p className="font-semibold">{skill.name}</p>
                                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}