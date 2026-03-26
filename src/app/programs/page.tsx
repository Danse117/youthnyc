"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { programs, siteConfig } from "@/data/content";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        subtitle="Empowering youth through education, sports, language, and community engagement."
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-24">
            {programs.map((program, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.div
                  key={program.id}
                  id={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid grid-cols-1 gap-10 lg:grid-cols-2 items-center ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                        isReversed ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className={isReversed ? "lg:order-1" : ""}>
                      <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
                        Program
                      </div>
                      <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {program.title}
                      </h2>
                      {program.subtitle && (
                        <p className="mt-2 text-lg text-primary font-medium italic">
                          {program.subtitle}
                        </p>
                      )}
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                      <ul className="mt-6 flex flex-col gap-3">
                        {program.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm"
                          >
                            <CheckIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button
                          render={
                            <a
                              href={program.cta.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          }
                          nativeButton={false}
                          className="bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          {program.cta.label}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <CTASection
        heading="Help Empower The Youth"
        description="Sign up to volunteer today. Be the change they need."
        cta={{ label: "Volunteer", href: siteConfig.volunteerFormUrl }}
        variant="primary"
      />
    </>
  );
}
