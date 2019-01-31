---
title: The Space Object
---

In the content delivery API a space object is mostly used to receive the latest version timestamp to invalidate the cache.

| Property            | Description          |
|---------------------|----------------------|
| `id`                | Numeric id | 
| `name`              | Given name  | 
| `value`             | Given value in default dimension | 
| `dimension_value`   | Given value in the requested dimension | 

;examplearea

Example Object

```json
{
  "space": {
    "name": "Storyblok.com",
    "domain": "https://www.storyblok.com/",
    "version": 1544117388
  }
}
```