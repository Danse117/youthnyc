export type NewsPlatform = "facebook" | "instagram";

export interface NewsPost {
  id: string;
  platform: NewsPlatform;
  text: string;
  publishedAt: string;
  url: string;
  imageUrl?: string;
  isVideo: boolean;
}

interface Account {
  accountId?: string;
  accessToken?: string;
}

export interface NewsConfig {
  apiVersion?: string;
  facebook?: Account;
  instagram?: Account;
}

export interface NewsFeed {
  posts: NewsPost[];
  unavailable: NewsPlatform[];
}

type FeedFetch = (url: URL, options: RequestInit & {
  next: { revalidate: number };
}) => Promise<Response>;

function record(value: unknown): Record<string, unknown> | undefined {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined;
}

function httpsUrl(value: unknown, domain?: string): string | undefined {
  if (typeof value !== "string") return;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) return;
    if (domain && url.hostname !== domain && !url.hostname.endsWith(`.${domain}`)) return;
    return url.toString();
  } catch {
    return;
  }
}

function normalize(value: unknown, platform: NewsPlatform): NewsPost | undefined {
  const post = record(value);
  if (!post || typeof post.id !== "string") return;
  const isFacebook = platform === "facebook";
  const date = isFacebook ? post.created_time : post.timestamp;
  const timestamp = typeof date === "string" ? Date.parse(date) : NaN;
  const url = httpsUrl(isFacebook ? post.permalink_url : post.permalink, `${platform}.com`);
  if (!Number.isFinite(timestamp) || !url) return;
  const isVideo = post.media_type === "VIDEO";
  const text = isFacebook ? post.message : post.caption;
  return {
    id: `${platform}:${post.id}`,
    platform,
    text: typeof text === "string" ? text : "",
    publishedAt: new Date(timestamp).toISOString(),
    url,
    imageUrl: httpsUrl(isFacebook ? post.full_picture : isVideo ? post.thumbnail_url : post.media_url),
    isVideo,
  };
}

export async function loadNewsFeed(config: NewsConfig, fetcher: FeedFetch = fetch): Promise<NewsFeed> {
  const platforms: NewsPlatform[] = ["facebook", "instagram"];
  const results = await Promise.all(platforms.map(async (platform) => {
    const account = config[platform];
    if (!config.apiVersion || !/^v\d+\.\d+$/.test(config.apiVersion) ||
        !account?.accountId || !/^\d+$/.test(account.accountId) || !account.accessToken) {
      return { platform, posts: [], available: false };
    }

    const edge = platform === "facebook" ? "published_posts" : "media";
    const url = new URL(`https://graph.facebook.com/${config.apiVersion}/${account.accountId}/${edge}`);
    url.searchParams.set("fields", platform === "facebook"
      ? "id,message,created_time,permalink_url,full_picture"
      : "id,caption,timestamp,permalink,media_type,media_url,thumbnail_url");
    url.searchParams.set("limit", "25");

    try {
      const response = await fetcher(url, {
        headers: { Authorization: `Bearer ${account.accessToken}` },
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error("Feed request failed");
      const payload = record(await response.json());
      if (!payload || !Array.isArray(payload.data) || payload.error) throw new Error("Invalid feed response");
      const posts = payload.data.map(value => normalize(value, platform)).filter((post): post is NewsPost => !!post);
      return { platform, posts, available: true };
    } catch {
      // Do not return or log provider errors: they may contain credentials or request details.
      return { platform, posts: [], available: false };
    }
  }));

  const unique = new Map<string, NewsPost>();
  for (const result of results) {
    for (const post of result.posts) {
      if (!unique.has(post.id)) unique.set(post.id, post);
    }
  }
  return {
    posts: [...unique.values()]
      .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt) || a.id.localeCompare(b.id))
      .slice(0, 24),
    unavailable: results.filter(result => !result.available).map(result => result.platform),
  };
}
