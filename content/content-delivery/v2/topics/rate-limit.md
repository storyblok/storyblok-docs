---
title: Rate Limit
---

The content delivery api has a rate limit of 50 requests per second for uncached request. The limit decreases if you use a higher page size than 25.


;examplearea

| Type of request | Rate Limit |
|------|-----------|
| Cached requests from the CDN | > 1000 per second |
| Single content item, datasources, ... | 50 per second |
| Listings with page size below and with 25 | 50 per second |
| Listings with page size between 25 and 50 | 15 per second |
| Listings with page size between 50 and 75 | 10 per second |
| Listings with page size between 75 and 100 | 6 per second |
