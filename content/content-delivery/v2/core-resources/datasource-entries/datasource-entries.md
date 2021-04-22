---
title: Datasource Entries
---

A data source is simply a collection of key-value pairs. One specific datasource-entry is a set of two linked attributes: a key, which is a unique identifier for the item and the value.

Key-value pairs can be used for a single-choice, multiple-choice options and as well directly through our API to use them for multi-language labels, categories, or any use-case you might need key-value pairs.

;examplearea

Endpoint

```bash
GET /v2/cdn/datasource_entries/
```

Additional Information

You can load content entries from different spaces by using different access tokens for your requests. Your access tokens decide which space you want to access. Checkout [Cache Invalidations](#topics/cache-invalidation) if you want to know more about how you are able to invalidate the cache of your published content.
