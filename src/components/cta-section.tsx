"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  description?: string;
  cta: { label: string; href: string };
  variant?: "primary" | "accent";
  className?: string;
}

export function CTASection({
  heading,
  subheading,
  description,
  cta,
  variant = "primary",
  className,
}: CTASectionProps) {
  const isPrimary = variant === "primary";
  const isExternal = cta.href.startsWith("http");

  return (
    <section
      className={cn(
        "py-20 sm:py-28",
        isPrimary ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80"
          >
            {subheading}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {heading}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          {isExternal ? (
            <Button
              render={
                <a href={cta.href} target="_blank" rel="noopener noreferrer" />
              }
              nativeButton={false}
              size="lg"
              className={cn(
                "h-12 px-8 text-base font-semibold",
                isPrimary
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {cta.label}
            </Button>
          ) : (
            <Button
              render={<Link href={cta.href} />}
              nativeButton={false}
              size="lg"
              className={cn(
                "h-12 px-8 text-base font-semibold",
                isPrimary
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {cta.label}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
