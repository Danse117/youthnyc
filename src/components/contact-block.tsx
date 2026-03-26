"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/data/content";

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function ContactBlock() {
  const contactItems = [
    {
      icon: <MapPinIcon />,
      label: "Visit Us",
      value: siteConfig.address.street,
      subvalue: `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
      )}`,
    },
    {
      icon: <PhoneIcon />,
      label: "Call Us",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: <MailIcon />,
      label: "Email Us",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Reach out to learn more about our
            programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "Visit Us" ? "_blank" : undefined}
              rel={item.label === "Visit Us" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 rounded-xl bg-card p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-medium text-foreground">{item.value}</p>
                {item.subvalue && (
                  <p className="text-sm text-muted-foreground">
                    {item.subvalue}
                  </p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
