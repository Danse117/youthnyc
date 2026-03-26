"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { heroContent, siteConfig } from "@/data/content";

const heroImages = [
  "/images/slideshow01-0b7759d4.jpg",
  "/images/slideshow01-4c6df786.jpg",
  "/images/slideshow02-6ff65f87.jpg",
  "/images/slideshow02-938a08ad.jpg",
  "/images/slideshow02-58c16b3d.jpg",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentIndex]}
            alt="YCEC community event"
            fill
            className="object-cover"
            priority={currentIndex === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] mx-auto max-w-7xl px-4 py-24 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
          >
            {heroContent.heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl sm:text-xl"
          >
            {heroContent.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              render={<Link href={heroContent.primaryCta.href} />}
              nativeButton={false}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base font-semibold"
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              render={
                <a
                  href={heroContent.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-semibold border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators — pinned to bottom of section */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
