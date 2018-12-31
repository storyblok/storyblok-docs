---
category: Core Resources
title: The Activity Object
position: 1410
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `trackable_id` | Id of reference object that was changes |
| `trackable_type` | Type of the referenced object |
| `owner_id` | Id of User that created the object |
| `owner_type` | Default: "User" |
| `key` | Key defined by type.action (eg: story.create, story.update, component.create) |
| `parameters` | Additional parameter passed; Default: null |
| `recipient_id` | Default: null  |
| `recipient_type` | Default: null  |
| `created_at` | Creation date (Format: `YYYY-mm-dd HH:MM`) |
| `updated_at` | Latest update date (Format: `YYYY-mm-dd HH:MM`) |
| `space_id` | Space ID reference |

;examplearea

Example Object

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
  }
}
```