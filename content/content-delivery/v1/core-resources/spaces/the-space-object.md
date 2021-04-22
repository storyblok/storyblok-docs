---
title: The Space Object
---

In the content delivery API a space object is mostly used to receive the latest version timestamp to invalidate the cache.

| Property            | Description          |
|---------------------|----------------------|
| `id`                | Numeric id | 
| `name`              | Given name  | 
| `domain`            | Given domain | 
| `version`           | Cache version |
| `language_codes`    | Array of language codes |

;examplearea

Example Object

```json
{
  "space": {
    "id": 123,
    "name": "Storyblok.com",
    "domain": "https://www.storyblok.com/",
    "version": 1544117388,
    "language_codes": ["de"]
  }
}
```
