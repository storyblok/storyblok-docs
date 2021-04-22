---
title: Cache Invalidation
---

Storyblok uses a CDN in front of the API to deliver your content in the fastest way possible. If you're using the Storyblok Content Delivery API directly in your client application it is recommended to use a backend version number or the `versions` parameter provided by the `/v1/cdn/spaces/me?token=access_token` call.

## Recommended: Client Side

1. Request the resource `/v2/cdn/spaces/me` to get the `space.version` property
2. Append the `space.version` to all your subsequent calls of the endpoint `/v2/cdn/stories`

## Recommended: SSG / Server Side

1. Generate a timestamp (once on a server, not on every request/client load)
2. Append your timestamp to all your subsequent calls of the endpoint `/v2/cdn/stories`

Also server side applications application can use the  `space.version` option. Storing the version string to a file and reusing this timestamp will guarantee you the latest version with optimal speed. You can either use the [Storyblok Webhooks](https://www.storyblok.com/docs/Guides/using-storyblok-webhooks) or [Storyblok JavaScript Events](https://www.storyblok.com/docs/Guides/storyblok-latest-js#events) to update your version file.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/spaces/me?token=wANpEQEsMYGOwLxwXQ76Ggtt"></RequestExample>

Example Response

```json
{
  "space": {
    "name": "Space A",
    "domain": "http://example.storyblok.com",
    "version": 1541863983
  }
}
```

Use the timestamp as `cv`:

<RequestExample url="https://api.storyblok.com/v2/cdn/stories?cv=1541863983&token=wANpEQEsMYGOwLxwXQ76Ggtt"></RequestExample>


