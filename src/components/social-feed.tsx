"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/content";

function FacebookTimeline() {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.min(500, Math.max(180, Math.floor(entry.contentRect.width))));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const params = new URLSearchParams({
    // Facebook's plugin resolves the numeric profile URL reliably; the /people/ URL can render blank.
    href: `https://www.facebook.com/profile.php?id=${siteConfig.social.facebookPageId}`,
    tabs: "timeline",
    width: String(width ?? 500),
    height: "600",
    small_header: "true",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "false",
  });

  return (
    <div ref={container} className="mx-auto min-h-[600px] w-full max-w-[500px]">
      {width !== null && (
        <iframe
          src={`https://www.facebook.com/plugins/page.php?${params}`}
          title="YCEC Facebook timeline"
          width={width}
          height="600"
          loading="lazy"
          allow="encrypted-media; picture-in-picture; web-share"
          className="block max-w-full border-0"
        />
      )}
    </div>
  );
}

export function SocialFeed() {
  const instagramProfile = new URL(siteConfig.social.instagram);
  instagramProfile.search = "";
  const instagramEmbed = `${instagramProfile.origin}${instagramProfile.pathname.replace(/\/$/, "")}/embed/`;

  return (
    <section aria-labelledby="social-feed-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Stay Connected</p>
          <h2 id="social-feed-heading" className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            From Our Community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Catch up on community moments, program highlights, and updates from YCEC.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 border-b border-border p-6">
              <h3 className="font-heading text-xl font-semibold">Facebook</h3>
            </div>
            <div className="bg-white p-2 sm:p-4"><FacebookTimeline /></div>
            <SocialLink href={siteConfig.social.facebook} platform="Facebook" />
          </article>

          <article className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 border-b border-border p-6">
              <h3 className="font-heading text-xl font-semibold">Instagram</h3>
            </div>
            <div className="bg-white p-2 sm:p-4">
              <iframe
                src={instagramEmbed}
                title="YCEC Instagram profile and recent posts"
                height="600"
                loading="lazy"
                className="mx-auto block w-full max-w-[500px] border-0"
              />
            </div>
            <SocialLink href={instagramProfile.toString()} platform="Instagram" />
          </article>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, platform }: { href: string; platform: string }) {
  return (
    <div className="border-t border-border p-6">
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">
        View the latest on {platform}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
      <p className="mt-2 text-xs text-muted-foreground">
        If posts don’t appear here, visit our {platform} page.
      </p>
    </div>
  );
}
