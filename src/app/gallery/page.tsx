import { PageHeader } from "@/components/page-header";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryImages, siteConfig } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | YCEC Community Events & Programs",
  description:
    "See YCEC in action — photos from community events, graduation ceremonies, Ramadan celebrations, and youth programs in Brooklyn.",
  alternates: { canonical: "https://www.youthnyc.org/gallery" },
  openGraph: {
    title: "Photo Gallery | YCEC Brooklyn",
    description:
      "See YCEC in action — photos from community events, graduations, and youth programs in Brooklyn.",
    url: "https://www.youthnyc.org/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Look at all the memories we made."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <GalleryGrid images={galleryImages} />

          <div className="text-center mt-12">
            <a
              href={siteConfig.galleryDropbox}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              See More Photos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
