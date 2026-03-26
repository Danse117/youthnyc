import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Youth & Community Empowerment Center Brooklyn",
  description:
    "Learn about YCEC's mission to empower Brooklyn youth through education, training, and civic engagement. Serving the Bay Ridge community.",
  alternates: { canonical: "https://www.youthnyc.org/about" },
  openGraph: {
    title: "About YCEC | Brooklyn Youth Nonprofit",
    description:
      "Learn about YCEC's mission to empower Brooklyn youth through education, training, and civic engagement.",
    url: "https://www.youthnyc.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
