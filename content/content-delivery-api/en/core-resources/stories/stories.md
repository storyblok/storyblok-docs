---
category: Core Resources
title: Stories
startpage: true
position: 100
---

Storyblok’s most used content delivery endpoint is trimmed for low latency and optimum availability.

To achieve low latencies all over the world, Storyblok uses a CDN in front of the API. The official Storyblok SDKs already take care of cache invalidation, so you don’t have to. But if you are doing the API calls on your own, you will need to append the `cv` (cache version) parameter to the story API in order to get the latest version of the content. Have a look at [Cache Invalidations](#topics/cache-invalidation) for workflow descriptions.

;examplearea

Endpoint

```bash
GET /v1/cdn/stories/
```

Additional Information

You can load content entries from different spaces by using different access tokens for your requests. Your access tokens decide which space you want to access. With the query parameter `version` you can switch between `draft` and `published`. Checkout [Cache Invalidations](#topics/cache-invalidation) if you want to know more about how you are able to invalidate the cache of your published content.