---
title: The Asset Object
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `filename` | Full path of the asset, including the file name |
| `space_id` | Space ID in which the asset is connected |
| `created_at` | Creation date (Format: `YYYY-mm-dd HH:MM`) |
| `updated_at` | Latest update date (Format: `YYYY-mm-dd HH:MM`) |
| `deleted_at` | Deleted date (Format: `YYYY-mm-dd HH:MM`) |
| `file` | File Object |
| `asset_folder_id` | Id of the folder containing this asset |
| `short_filename` | The file name of the asset |
| `content_type` | The MIME type of the asset |
| `content_length` | The content length in bytes |
| `is_private` | Defines if the asset should be inaccessable to the public |
| `publish_at` | Used to schedule publishing date and time for private assets (Format: `YYYY-mm-dd HH:MM`) |

;examplearea

Example Object

```json
{
  "id": 14,
  "filename": "/f/616/SIZE/UNIQUEIDENTIFIER/your_filename.jpg",
  "space_id": 616,
  "created_at": "2018-11-10T15:33:00.578Z",
  "updated_at": "2018-11-10T15:33:00.578Z",
  "file": {
    "url": null
  },
  "asset_folder_id": null,
  "deleted_at": null,
  "short_filename": "your_filename.jpg",
  "content_type": "image/jpeg",
  "content_length": 12303,
  "is_private": false,
  "published_at": "2018-11-10T15:33:00.578Z"
}
```
