---
title: The Pipeline Object
---

| Property | Description |
|---|---|
| `name` | Name of the pipeline |
| `id` | Numeric ID of a pipeline |
| `space_id` | Space ID reference |
| `source_id` | Reference pipeline id for the content source |
| `url` | Pipeline content preview URL |
| `position` | Position (Integer) |
| `deployed_at` | Date and time the pipeline was deployed (Format: YYYY-mm-dd HH:MM) | 
| `created_at` | Date and time the pipeline was created (Format: YYYY-mm-dd HH:MM)
| `updated_at` | Date and time the pipeline was updated (Format: YYYY-mm-dd HH:MM)
| `deleted_at` | Date and time the pipeline was deleted (Format: YYYY-mm-dd HH:MM)

;examplearea

Example Object

```json
{
  "branch": {
    "id": 30222,
    "name": "Pipeline",
    "space_id": 123456,
    "deleted_at": null,
    "created_at": "2023-07-17T20:27:50.949Z",
    "updated_at": "2023-07-17T20:27:50.949Z",
    "source_id": 12123,
    "deployed_at": null,
    "url": "https://amazing-preview-url.com",
    "position": 1
  }
}
```