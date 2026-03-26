"use client";

import { motion } from "motion/react";
import { PageHeader } from "@/components/page-header";
import { ContactBlock } from "@/components/contact-block";
import { CTASection } from "@/components/cta-section";
import { aboutContent, missionContent, visionContent, siteConfig } from "@/data/content";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn about our mission, vision, and commitment to youth empowerment."
      />

      {/* Overview + Map */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                {aboutContent.overview.heading}
              </h2>
              <div className="flex flex-col gap-5">
                {aboutContent.overview.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Embedded Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
                )}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YCEC Location"
                className="w-full"
              />
              <div className="bg-card p-4">
                <p className="font-medium text-foreground text-sm">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {siteConfig.address.street}, {siteConfig.address.city},{" "}
                  {siteConfig.address.state} {siteConfig.address.zip}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-primary p-8 sm:p-10 text-primary-foreground"
            >
              <div className="inline-block rounded-lg bg-primary-foreground/10 px-3 py-1 text-sm font-medium mb-4">
                {missionContent.subheading}
              </div>
              <h3 className="font-heading text-2xl font-bold sm:text-3xl mb-2">
                {missionContent.heading}
              </h3>
              <p className="text-sm text-primary-foreground/60 italic mb-4">
                {missionContent.tagline}
              </p>
              <p className="text-primary-foreground/85 leading-relaxed text-lg">
                {missionContent.text}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-accent p-8 sm:p-10 text-accent-foreground"
            >
              <div className="inline-block rounded-lg bg-accent-foreground/10 px-3 py-1 text-sm font-medium mb-4">
                {visionContent.subheading}
              </div>
              <h3 className="font-heading text-2xl font-bold sm:text-3xl mb-2">
                {visionContent.heading}
              </h3>
              <p className="text-sm text-accent-foreground/60 italic mb-4">
                {visionContent.tagline}
              </p>
              <p className="text-accent-foreground/90 leading-relaxed text-lg">
                {visionContent.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactBlock />

      {/* Donate CTA */}
      <CTASection
        heading="Support Our Work"
        description="Your contribution helps us continue empowering youth and strengthening our community."
        cta={{ label: "Donate Now", href: "/donate" }}
        variant="accent"
      />
    </>
  );
}
