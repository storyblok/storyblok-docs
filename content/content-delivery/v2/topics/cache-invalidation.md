---
title: Cache Invalidation
---

Storyblok uses a CDN in front of the API to deliver your content in the fastest way possible. To have a high cache hit rate for published content the Storyblok appends a parameter called `cv` which stands for "cache version".

The "cache version" always updates if you publish any new content in Storyblok and you can retrieve it by doing an api call to a cdn resource without providing the `cv` parameter `/v2/cdn/stories?token=wANpEQEsMYGOwLxwXQ76Ggtt&version=published`. 

If you don't use our oficial [javascript SDK](https://github.com/storyblok/storyblok-js-client) which handles the cv parameter automatically you need to make sure to pass the `cv` parameter in your requests like following:

1. Do a request to the stories endpoint `/v2/cdn/stories` without appending the `cv` parameter
2. Check the response body for the `cv` attribute
3. Save the `cv` attribute in memory and use it for the subsequent requests
4. When publishing new content clear the attribute from the memory and save a new one by starting at step 1.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/example?token=wANpEQEsMYGOwLxwXQ76Ggtt&version=published"></RequestExample>

Example Response

```json
{
  "story": {
    "name": "Example",
    "slug": "example",
    ...
  },
  "cv": 1541863983
}
```

Use the cv attribute value as `cv` parameter for the subsequent requests:

<RequestExample url="https://api.storyblok.com/v2/cdn/stories?cv=1541863983&token=wANpEQEsMYGOwLxwXQ76Ggtt"></RequestExample>


