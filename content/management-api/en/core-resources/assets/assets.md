---
category: Core Resources
title: Assets
startpage: true
position: 300
---

Assets like images, videos and documents are kept in the CDN as long as possible and will rarely hit the origin server. Each asset object references one of those uploaded images, videos and documents.

;examplearea

Endpoint

```bash
GET /v1/spaces/:space_id/assets/:asset_id
```