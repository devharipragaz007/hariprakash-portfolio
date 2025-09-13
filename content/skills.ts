import {
  Rocket,
  Code,
  Cloud,
  Database,
  BrainCircuit,
  LucideIcon,
} from "lucide-react";

interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Product & Entrepreneurship",
    icon: Rocket,
    skills: [
      {
        name: "MVPs",
        description:
          "Rapidly building and iterating on minimum viable products to test market assumptions.",
      },
      {
        name: "Problem Discovery",
        description:
          "Identifying and validating customer pain points to ensure we're building what matters.",
      },
      {
        name: "Founder Collaboration",
        description:
          "Working closely with founders as a technical partner to translate vision into reality.",
      },
      {
        name: "GTM-Aware Roadmaps",
        description:
          "Creating technical roadmaps that align with go-to-market strategies and business goals.",
      },
    ],
  },
  {
    name: "Full-Stack Development",
    icon: Code,
    skills: [
      {
        name: "React & Next.js",
        description:
          "Building modern, performant, and SEO-friendly web applications.",
      },
      {
        name: "TypeScript",
        description: "Ensuring type safety and scalability in large codebases.",
      },
      {
        name: "Node.js & Express",
        description:
          "Crafting efficient and scalable backend services and APIs.",
      },
      {
        name: "Python & Java",
        description:
          "Leveraging diverse backend technologies for various use cases.",
      },
      {
        name: "Angular",
        description:
          "Experience in maintaining and developing with the Angular framework.",
      },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      {
        name: "AWS",
        description:
          "Deep expertise in Lambda, DynamoDB, S3, API Gateway, Connect, and QuickSight.",
      },
      {
        name: "Terraform",
        description:
          "Managing infrastructure as code for reproducible and scalable environments.",
      },
      {
        name: "Microservices",
        description:
          "Designing and implementing decoupled, independently deployable services.",
      },
      {
        name: "Event-Driven Architectures",
        description:
          "Building resilient systems that react to events in real-time.",
      },
    ],
  },
  {
    name: "Data & Databases",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL & MySQL",
        description:
          "Designing and managing relational database schemas for data integrity.",
      },
      {
        name: "MongoDB",
        description:
          "Utilizing NoSQL for flexible data modeling and high-performance applications.",
      },
      {
        name: "DynamoDB",
        description:
          "Leveraging AWS's managed NoSQL database for serverless applications.",
      },
    ],
  },
  {
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      {
        name: "LLM Integration",
        description:
          "Integrating large language models (like Gemini) to power application features.",
      },
      {
        name: "RAG",
        description:
          "Implementing Retrieval-Augmented Generation for context-aware AI responses.",
      },
      {
        name: "Embeddings",
        description:
          "Using vector embeddings for semantic search and data analysis.",
      },
      {
        name: "Automation Pipelines",
        description:
          "Building AI-powered workflows to automate complex business processes.",
      },
    ],
  },
];
