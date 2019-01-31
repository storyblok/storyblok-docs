---
title: Spaces
---

This endpoint is mostly useful for client side apps. The response contains `space.version` which developers can use to call the story API and get the most recent published version.

As Storyblok uses a CDN in front of the API to deliver the response in the fastest way possible, you should append the `cv` parameter to the story api.

Read more about [Cache invalidation](#cache-invalidation)

;examplearea

Endpoint

```bash
GET /v1/cdn/spaces/me/
```