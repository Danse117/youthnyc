"use client";

import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-primary py-20 sm:py-28 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 size-96 rounded-full bg-primary-foreground/20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 size-96 rounded-full bg-primary-foreground/20 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
