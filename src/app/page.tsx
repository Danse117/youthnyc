"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { ProgramCard } from "@/components/program-card";
import { CTASection } from "@/components/cta-section";
import { DonationMarquee } from "@/components/donation-marquee";
import { ContactBlock } from "@/components/contact-block";
import { missionContent, programs, volunteerContent } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Mission Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/gallery01/d56cbf97.jpg"
                alt="YCEC community gathering"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                {missionContent.subheading}
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
                {missionContent.heading}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground/60 italic">
                {missionContent.tagline}
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {missionContent.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            title="Our Programs"
            subtitle="We offer a range of programs designed to support youth development, education, and community engagement."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} {...program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Donation Marquee */}
      <DonationMarquee />

      {/* Volunteer CTA */}
      <CTASection
        heading={volunteerContent.heading}
        subheading={volunteerContent.subheading}
        description={volunteerContent.description}
        cta={volunteerContent.cta}
        variant="primary"
      />

      {/* Contact */}
      <ContactBlock />
    </>
  );
}
