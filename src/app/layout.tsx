import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/data/content";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.youthnyc.org"),
  title: {
    default: "Youth & Community Empowerment Center | Brooklyn Youth Programs",
    template: "%s | YCEC Brooklyn",
  },
  description:
    "Brooklyn nonprofit empowering youth through sports, education, language classes, and after-school programs in Bay Ridge. Volunteer or donate today.",
  keywords: [
    "youth programs Brooklyn",
    "nonprofit Brooklyn NY",
    "after school programs Bay Ridge",
    "youth empowerment NYC",
    "community center Brooklyn",
    "Arabic classes Brooklyn",
    "youth sports Brooklyn",
  ],
  icons: {
    icon: "/images/youthnyc_icon.png",
    apple: "/images/youthnyc_icon.png",
  },
  openGraph: {
    title: "Youth & Community Empowerment Center",
    description:
      "Empowering Brooklyn youth through sports, education, language, and after-school programs.",
    url: "https://www.youthnyc.org",
    siteName: "Youth & Community Empowerment Center",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YCEC — Empowering Brooklyn Youth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth & Community Empowerment Center",
    description:
      "Empowering Brooklyn youth through sports, education, language, and after-school programs.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.youthnyc.org" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <StructuredData />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
