---
title: The Release object
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `name` | Name of the release |
| `release_at` | Date to deploy the release (Format: YYYY-mm-dd HH:MM) |
| `banches_to_deploy` | Ids of branches to deploy the release to |

;examplearea

Example Object

```json
{
  "release": {
    "id": 2,
    "name": "Summer Release",
    "release_at": "2025-01-01 01:01",
    "banches_to_deploy": [9,2]
  }
}
```
