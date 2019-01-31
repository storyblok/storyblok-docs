---
title: The Datasource Object
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID, used to reference datasource entries |
| `name` | The key which will be used to resolve the given value |
| `slug` | The slug used to request the datasource via API |
| `dimensions` | List of defined dimensions for this datasource |

;examplearea

Example Object

```json
{
  "datasource": {
    "id": 91,
    "name": "Labels for Website",
    "slug": "labels",
    "dimensions": [

    ]
  }
}
```