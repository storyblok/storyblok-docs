---
title: Load latest CV timestamp
---

With the cache invalidation provided by Storyblok utilizing the `cv` (cache version) query parameter you're able to always hit the latest version of your content. This can either be a server-side generated timestamp that receives an update if our webhook triggers a publish event or you fetch it every time you boot up your application.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/spaces/me/?cv=CURRENT_TIMESTAMP&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{
  "space": {
    "name": "Blog",
    "domain": "https://www.storyblok.com/",
    // version timestamp to use for further requests
    "version": 1544466448
  }
}
```
