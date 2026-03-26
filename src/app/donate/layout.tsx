import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to YCEC | Support Brooklyn Youth Programs",
  description:
    "Support Brooklyn's youth with a donation to YCEC. Your contribution funds sports, education, language, and after-school programs for young people.",
  alternates: { canonical: "https://www.youthnyc.org/donate" },
  openGraph: {
    title: "Donate to YCEC | Support Brooklyn Youth",
    description:
      "Support Brooklyn's youth with a donation to YCEC. Fund sports, education, language, and after-school programs.",
    url: "https://www.youthnyc.org/donate",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
