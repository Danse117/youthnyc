import "server-only";
import { loadNewsFeed } from "./news-feed";

export async function getNewsFeed() {
  return loadNewsFeed({
    apiVersion: process.env.META_GRAPH_API_VERSION,
    facebook: {
      accountId: process.env.FACEBOOK_PAGE_ID,
      accessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
    },
    instagram: {
      accountId: process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID,
      accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
    },
  });
}
