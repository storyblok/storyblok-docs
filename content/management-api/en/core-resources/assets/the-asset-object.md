---
category: Core Resources
title: The Asset Object
position: 310
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `filename` | Full path of the asset, including the file name |
| `space_id` | Space ID in which the asset is connected |
| `created_at` | Date and time when the asset was uploaded |
| `updated_at` | Date and time when the asset was last updated |
| `deleted_at` | Date and time when the asset was deleted |
| `file` | File Object |
| `asset_folder_id` | Id of the folder containing this asset |
| `short_filename` | Prepared field which contains the file name for sorting |

;examplearea

Example Object

```json
{
  "id": 14,
  "filename": "/f/TESTSPACEID/voluptas_expedita.jpg",
  "space_id": 616,
  "created_at": "2018-11-10T15:33:00.578Z",
  "updated_at": "2018-11-10T15:33:00.578Z",
  "file": {
    "url": null
  },
  "asset_folder_id": null,
  "deleted_at": null,
  "short_filename": null
}
```