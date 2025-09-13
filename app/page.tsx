"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProfileAvatar } from "@/components/profile-avatar";
import { siteConfig } from "@/config/site";
import { ArrowRight, Bot, Box, BrainCircuit, CloudCog, Code, Feather, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const logos = [
  { icon: <CloudCog className="h-8 w-8" />, name: "AWS" },
  { icon: <Code className="h-8 w-8" />, name: "React" },
  { icon: <Feather className="h-8 w-8" />, name: "Next.js" },
  { icon: <Terminal className="h-8 w-8" />, name: "Node.js" },
  { icon: <Box className="h-8 w-8" />, name: "DynamoDB" },
  { icon: <BrainCircuit className="h-8 w-8" />, name: "Terraform" },
  { icon: <Bot className="h-8 w-8" />, name: "Amazon Connect" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="container flex-1">
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 py-8 md:py-12 lg:py-24">
        <motion.div 
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
        >
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
                <motion.h1 variants={fadeIn} className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {siteConfig.tagline}
                </motion.h1>
                <motion.p variants={fadeIn} className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                    Full-stack + AWS + entrepreneurial mindset. From zero → MVP → scale.
                </motion.p>
                <motion.div variants={fadeIn} className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="/contact">Let's Build Together <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/projects">See Projects</Link>
                    </Button>
                </motion.div>
            </div>
            <motion.div variants={fadeIn} className="flex items-center justify-center">
                <ProfileAvatar size={240} priority={true} />
            </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full pt-16"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Building with modern, scalable technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {logos.map((logo, index) => (
              <motion.div 
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                  {logo.icon}
                  <span className="font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}