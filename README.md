# YouthNYC

Next.js website for the Youth & Community Empowerment Center.

## Development

Use Node.js 22.15+ and pnpm. Run `pnpm install`, then `pnpm dev`.

- `pnpm build` — production build and TypeScript checks
- `pnpm lint` — ESLint
- `pnpm test` — news-feed tests using Node's built-in test runner

## Connect the News feed

`/news` combines Facebook Page posts and Instagram media, sorted by publication time (newest first). It reads up to 25 posts per platform and displays the latest 24 combined. Dates are displayed in New York time. The homepage continues to use public embeds.

The connection uses **Instagram API with Facebook Login**, not Instagram Login tokens. It needs a Facebook Page and a linked Instagram professional account (Business or Creator), plus a Meta app authorized to read those accounts.

1. Have the account administrator configure a Meta app and authorize access to the Page and connected Instagram professional account. Reading requires the applicable `pages_read_engagement` and `instagram_basic` permissions; account discovery commonly also requires `pages_show_list`. Follow the Meta dashboard's access/review requirements for the app and its users.
2. Obtain the API Page ID and a suitable Page access token. Get the connected account ID from the Page's `instagram_business_account` field. Use API-returned IDs; the public Facebook profile ID is not necessarily the API Page ID.
3. Copy `.env.example` to `.env.local`. Fill in the API version supported by your Meta app, Page ID/token, and Instagram account ID. Set a Facebook Login **User** token authorized for Instagram in `INSTAGRAM_ACCESS_TOKEN`. Facebook uses the Page token; Instagram uses the User token.
4. Set the same variables in the hosting provider's **server environment** and redeploy. Never put tokens in browser code, `NEXT_PUBLIC_` variables, source control, or chat.
5. Open `/news` and confirm posts from both platforms appear. Check a few source posts against the displayed dates. No live credentials are included in this repository; unit tests use synthetic responses.

### Refresh and failure behavior

Next.js caches API responses and regenerates the News page with a 15-minute revalidation interval. Refresh is traffic-driven: the first visit after expiry can receive cached content while an update happens. An already-open browser tab does not poll for updates.

Each platform has an eight-second request timeout. If one platform fails, the other can still display posts, with a notice and direct profile links. With no credentials or no available responses, the page shows a social-link fallback instead of invented posts. A successful empty feed has its own empty state. Missing dates/invalid links are skipped, duplicate IDs are removed, and videos link to their original platform with a thumbnail when available.

Access tokens may expire or be revoked. The administrator must maintain/rotate them and redeploy after changing environment variables. The API version must also be maintained. This integration does not implement an OAuth account-management UI or automatic token renewal.

### Meta references

- [Published Page posts](https://developers.facebook.com/docs/graph-api/reference/page/published_posts/)
- [Page access tokens](https://developers.facebook.com/docs/pages-api/getting-started/)
- [Instagram API with Facebook Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-facebook-login/)
- [Instagram media read requirements](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media/)
- [Instagram API collection maintained by Meta](https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api)
