import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/data/content";
import { NewsPosts } from "@/components/news-posts";
import { getNewsFeed } from "@/lib/news";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "News & Community Updates",
  description:
    "Catch up on YCEC news, program highlights, and community moments from Facebook and Instagram.",
  alternates: { canonical: `${siteConfig.url}/news` },
  openGraph: {
    title: "News & Community Updates | YCEC Brooklyn",
    description:
      "The latest news and community updates from the Youth & Community Empowerment Center.",
    url: `${siteConfig.url}/news`,
  },
};

export default async function NewsPage() {
  const feed = await getNewsFeed();
  return (
    <>
      <PageHeader
        title="News"
        subtitle="Program highlights, community moments, and the latest from YCEC."
      />
      <NewsPosts {...feed} />
    </>
  );
}
