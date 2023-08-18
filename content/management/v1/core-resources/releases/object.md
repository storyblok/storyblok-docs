---
title: The Release object
---

| Property | Description |
|---|---|
| `name` | Name of the releases to be deployed |
| `id` | Numeric ID of a release |
| `release_at` | Date to deploy the release (Format: YYYY-mm-dd HH:MM) |
| `released` | Boolean if the release is released |
| `uuid` | Unique ID of the release |
| `timezone` | Timezone of the release |
| `branches_to_deploy` | An array of branches to deploy the release to | 
| `created_at` | Date and time the release was created (Format: YYYY-mm-dd HH:MM)
| `owner_id` | Numeric ID of the release owner |

;examplearea

Example Object

```json
{
    "releases": [
        {
            "name": "Winter Special Release",
            "id": 95629,
            "release_at": "2023-04-20T18:30:00.000Z",
            "released": false,
            "uuid": "b8997523-2837-4f75-8613-05da9e7471af",
            "timezone": "Africa/Algiers",
            "branches_to_deploy": [9,2],
            "created_at": "2023-04-20T17:15:47.646Z",
            "owner_id": 99734
        }
    ]
}
```

