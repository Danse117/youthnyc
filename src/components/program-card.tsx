"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image: string;
  cta: { label: string; href: string };
  index?: number;
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ProgramCard({
  title,
  subtitle,
  description,
  features,
  image,
  cta,
  index = 0,
}: ProgramCardProps) {
  const isExternal = cta.href.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="font-heading text-xl">{title}</CardTitle>
          {subtitle && (
            <CardDescription className="text-sm italic">
              {subtitle}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <ul className="flex flex-col gap-2">
            {features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          {isExternal ? (
            <Button
              render={
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              variant="outline"
              className="w-full"
            >
              {cta.label}
            </Button>
          ) : (
            <Button
              render={<a href={cta.href} />}
              nativeButton={false}
              variant="outline"
              className="w-full"
            >
              {cta.label}
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
