"use client";

import Link from "next/link";

export function DonationMarquee() {
  const items = Array(10).fill("Donate");

  return (
    <Link
      href="/donate"
      className="block bg-accent text-accent-foreground py-3 overflow-hidden hover:bg-accent/90 transition-colors"
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((text, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-semibold uppercase tracking-widest flex items-center gap-3"
          >
            <span className="size-1.5 rounded-full bg-current opacity-60" />
            {text}
          </span>
        ))}
        {items.map((text, i) => (
          <span
            key={`dup-${i}`}
            className="mx-8 text-sm font-semibold uppercase tracking-widest flex items-center gap-3"
          >
            <span className="size-1.5 rounded-full bg-current opacity-60" />
            {text}
          </span>
        ))}
      </div>
    </Link>
  );
}
