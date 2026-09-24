import { ArrowUpRight, Play } from "lucide-react";
import type { NewsFeed, NewsPlatform } from "@/lib/news-feed";
import { siteConfig } from "@/data/content";

const labels: Record<NewsPlatform, string> = { facebook: "Facebook", instagram: "Instagram" };
const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "long", day: "numeric", year: "numeric", timeZone: "America/New_York",
});

export function NewsPosts({ posts, unavailable }: NewsFeed) {
  return (
    <section aria-labelledby="latest-news-heading" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="latest-news-heading" className="font-heading text-3xl font-bold">Latest Updates</h2>
            <p className="mt-3 text-muted-foreground">Facebook and Instagram, newest first.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-primary">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Visit Facebook</a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Visit Instagram</a>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center">
            <h3 className="font-heading text-xl font-semibold">
              {unavailable.length ? "Our latest updates are on social" : "More community moments are on the way"}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              {unavailable.length
                ? "We can’t display posts here right now. Visit our Facebook or Instagram page for the latest news."
                : "Check back soon, or follow YCEC on Facebook and Instagram to stay connected."}
            </p>
          </div>
        ) : (
          <>
            {unavailable.length > 0 && (
              <p role="status" className="mb-6 rounded-xl bg-muted p-4 text-sm text-muted-foreground">
                {unavailable.map(platform => labels[platform]).join(" and ")} updates are temporarily unavailable here. You can still visit the page directly.
              </p>
            )}
            <ol className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map(post => (
                <li key={post.id} className="min-w-0">
                  <article className="overflow-hidden rounded-2xl border border-border bg-card">
                    {post.imageUrl && (
                      <a href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`View post on ${labels[post.platform]}`} className="relative block bg-muted">
                        {/* Meta CDN URLs expire; load them directly instead of retaining an optimized copy. */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.imageUrl} alt="" loading="lazy" referrerPolicy="no-referrer" className="aspect-[4/3] w-full object-cover" />
                        {post.isVideo && <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white"><Play className="size-3" aria-hidden="true" />Video</span>}
                      </a>
                    )}
                    <div className="p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                        <span className="rounded-full bg-primary/5 px-3 py-1 font-semibold text-primary">{labels[post.platform]}</span>
                        <time dateTime={post.publishedAt} className="text-muted-foreground">{dateFormat.format(new Date(post.publishedAt))}</time>
                      </div>
                      <p className="line-clamp-6 whitespace-pre-line break-words text-sm leading-relaxed text-foreground">
                        {post.text || `A new community moment from YCEC on ${labels[post.platform]}.`}
                      </p>
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">
                        View on {labels[post.platform]}<ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}
