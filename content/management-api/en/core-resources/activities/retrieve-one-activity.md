---
category: Core Resources
title: Retrieve One Activity
position: 1420
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `trackable_id` | |
| `trackable_type` |  |
| `owner_id` |  |
| `owner_type` |  |
| `key` |  |
| `parameters` |  |
| `recipient_id` |  |
| `recipient_type` |  |
| `created_at` | Creation date (Format: `YYYY-mm-dd HH:MM`) |
| `updated_at` | Latest update date (Format: `YYYY-mm-dd HH:MM`) |
| `space_id` |  |

// TODO: Document properties

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/activities/5405" httpMethod="GETOAUTH"></RequestExample>

Example Response

```json
{
  "activity": {
    "id": 5405,
    "trackable_id": null,
    "trackable_type": null,
    "owner_id": null,
    "owner_type": null,
    "key": null,
    "parameters": {
    },
    "recipient_id": null,
    "recipient_type": null,
    "created_at": "2018-11-10T15:32:58.649Z",
    "updated_at": "2018-11-10T15:32:58.649Z",
    "space_id": 606
  },
  "trackable": null,
  "user": null
}
```