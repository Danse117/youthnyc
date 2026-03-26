"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { donateContent, siteConfig } from "@/data/content";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title={donateContent.heading}
        subtitle={donateContent.subheading}
      />

      {/* Impact Stats */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {donateContent.impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-muted/50"
              >
                <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Your Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {donateContent.description}
              </p>
              <ul className="flex flex-col gap-4">
                {donateContent.impactItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Zelle Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-card border border-border p-8 sm:p-10 text-center"
            >
              <h3 className="font-heading text-xl font-semibold mb-6">
                Donate via Zelle
              </h3>
              <div className="relative mx-auto mb-6 w-64">
                <Image
                  src={donateContent.zelleInfo.image}
                  alt="Zelle donation information"
                  width={540}
                  height={83}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {donateContent.zelleInfo.text}
              </p>

              {/* Spacer + PayPal option */}
              <div className="my-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <h3 className="font-heading text-xl font-semibold mb-6">
                Donate via PayPal
              </h3>
              <a
                href={siteConfig.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-lg bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold py-3.5 px-6 transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 124 33" fill="none">
                  <path d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47.033 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.804l1.77-11.209a.568.568 0 0 0-.561-.657zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z" fill="white"/>
                  <path d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.804l1.771-11.209a.571.571 0 0 0-.565-.657zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822a.949.949 0 0 0 .939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z" fill="white"/>
                  <path d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73a2.21 2.21 0 0 0-2.183 1.866l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1-.096.035H7.266z" fill="white"/>
                  <path d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326a1.339 1.339 0 0 0-1.324 1.134L6.845 24.9l-.305 1.934a.706.706 0 0 0 .696.816h4.887a1.176 1.176 0 0 0 1.163-.997l.048-.248.92-5.834.059-.32a1.176 1.176 0 0 1 1.163-.998h.732c4.741 0 8.454-1.926 9.54-7.499.453-2.329.22-4.272-982-5.64a8.34 8.34 0 0 0-1.543-.887z" fill="white" fillOpacity="0.7"/>
                  <path d="M21.754 7.151a10.249 10.249 0 0 0-1.27-.267 16.13 16.13 0 0 0-2.559-.189H10.96a1.174 1.174 0 0 0-1.163.998l-1.545 9.795-.045.289a1.336 1.336 0 0 1 1.324-1.134h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0-1.499-.397z" fill="white" fillOpacity="0.7"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {donateContent.otherWays.heading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {donateContent.otherWays.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              render={<Link href="/about" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 px-8"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
