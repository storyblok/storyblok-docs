---
category: Core Resources
title: The Preset Object
position: 1710
---

| Property | Description |
|---|---|
| `id` | Numeric ID of your preset |
| `name` | Given name of your preset |
| `preset[preset]` | Object with the fields you want to save in the preset |
| `last_execution` | Date and time of last execution (Format: `YYYY-mm-dd HH:MM`) |
| `webhook_url` | URL of webhook that should be called when tasks is being executed |
| `last_response` | Last execution response log |
| `lambda_code` | Beta: Lambda function code |

;examplearea

Example Object

```json
{
  "preset": {
    "id": 18,
    "name": "Teaser with filled headline",
    "preset": {
      // fields of the component filled with content
      "headline": "This is a default value for the preset!",
    },
    "component_id": 62,
    "space_id": 672,
    "created_at": "2018-11-10T15:33:16.726Z",
    "updated_at": "2018-11-10T15:33:16.726Z",
    "image": "//a.storyblok.com/f/672/..."
  }
}
```