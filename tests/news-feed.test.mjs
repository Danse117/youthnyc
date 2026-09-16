import test from 'node:test';
import assert from 'node:assert/strict';
import { loadNewsFeed } from '../src/lib/news-feed.ts';

const config = {
  apiVersion: 'v25.0',
  facebook: { accountId: '123', accessToken: 'private-facebook-token' },
  instagram: { accountId: '456', accessToken: 'private-instagram-token' },
};
const fbPost = { id: '123_1', message: 'Community news', created_time: '2026-09-14T15:00:00+0000', permalink_url: 'https://www.facebook.com/123/posts/1', full_picture: 'https://scontent.xx.fbcdn.net/photo.jpg' };
const igPost = { id: '2', caption: 'Art workshop', timestamp: '2026-09-15T11:00:00-0400', permalink: 'https://www.instagram.com/p/abc/', media_type: 'VIDEO', media_url: 'https://cdn.example/video.mp4', thumbnail_url: 'https://scontent.cdninstagram.com/thumb.jpg' };
const response = (data) => new Response(JSON.stringify({ data }), { status: 200 });

test('merges out-of-order posts by absolute time and uses video thumbnails', async () => {
  const fetcher = async (url) => response(url.pathname.endsWith('/published_posts') ? [fbPost, {...fbPost, id:'123_3', created_time:'2026-09-16T12:00:00Z'}] : [igPost]);
  const result = await loadNewsFeed(config, fetcher);
  assert.deepEqual(result.posts.map(p => p.id), ['facebook:123_3', 'instagram:2', 'facebook:123_1']);
  assert.equal(result.posts[1].imageUrl, igPost.thumbnail_url);
  assert.equal(result.posts[1].publishedAt, '2026-09-15T15:00:00.000Z');
  assert.deepEqual(result.unavailable, []);
});

test('does not send tokens in URLs or expose them in public results', async () => {
  const requests = [];
  const result = await loadNewsFeed(config, async (url, options) => {
    requests.push({url: String(url), options});
    return response([url.pathname.endsWith('/published_posts') ? fbPost : igPost]);
  });
  assert.equal(requests.length, 2);
  for (const request of requests) {
    assert.ok(!request.url.includes('token'));
    assert.match(request.options.headers.Authorization, /^Bearer private-/);
    assert.equal(request.options.next.revalidate, 900);
  }
  assert.ok(!JSON.stringify(result).includes('private-'));
});

test('keeps Instagram posts when Facebook fails', async () => {
  const result = await loadNewsFeed(config, async url => url.pathname.endsWith('/published_posts') ? new Response('denied', {status:403}) : response([igPost]));
  assert.equal(result.posts.length, 1);
  assert.deepEqual(result.unavailable, ['facebook']);
});

test('missing configuration makes no network calls', async () => {
  const result = await loadNewsFeed({}, async () => { throw new Error('Must not fetch'); });
  assert.deepEqual(result.posts, []);
  assert.deepEqual(result.unavailable, ['facebook', 'instagram']);
});

test('rejects invalid dates and unsafe links, keeps valid text-only posts, deduplicates', async () => {
  const result = await loadNewsFeed(config, async url => response(url.pathname.endsWith('/published_posts') ? [
    {...fbPost, full_picture: undefined},
    fbPost,
    {...fbPost, id:'bad-date', created_time:'invalid'},
    {...fbPost, id:'bad-link', permalink_url:'javascript:alert(1)'},
    {...fbPost, id:'wrong-host', permalink_url:'https://facebook.com.evil.test/post'},
  ] : [{...igPost, thumbnail_url: undefined}]));
  assert.equal(result.posts.length, 2);
  assert.equal(result.posts[0].imageUrl, undefined);
  assert.equal(result.posts[1].imageUrl, undefined);
});

test('invalid payloads and network failures are contained', async () => {
  const result = await loadNewsFeed(config, async url => {
    if (url.pathname.endsWith('/published_posts')) throw new Error('request failed with private-facebook-token');
    return new Response('{"error":{"message":"private-instagram-token"}}');
  });
  assert.deepEqual(result.posts, []);
  assert.deepEqual(result.unavailable, ['facebook', 'instagram']);
  assert.ok(!JSON.stringify(result).includes('private-'));
});
