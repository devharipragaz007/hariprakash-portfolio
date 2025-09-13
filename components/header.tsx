"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              HB
            </div>
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="hidden flex-1 gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
              <ThemeToggle />
              <Button asChild className="hidden md:inline-flex">
                  <Link href="/contact">Let's Build</Link>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X /> : <Menu />}
                <span className="sr-only">Toggle menu</span>
              </Button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
           <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-4 border-b">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "w-full text-center text-lg font-medium text-muted-foreground",
                    pathname === item.href && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-1/2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Build</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}