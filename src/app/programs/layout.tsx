import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Programs in Brooklyn | Sports, Education, Language & After-School",
  description:
    "Explore YCEC's youth programs in Brooklyn: soccer, basketball, college prep, Arabic & English classes, homework help, and leadership training in Bay Ridge.",
  alternates: { canonical: "https://www.youthnyc.org/programs" },
  openGraph: {
    title: "Youth Programs in Brooklyn | YCEC",
    description:
      "Explore YCEC's youth programs: sports, education, language classes, and after-school programs in Bay Ridge, Brooklyn.",
    url: "https://www.youthnyc.org/programs",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
