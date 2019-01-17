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
| `component_id` | ID of the component the preset should be connected |
| `image` | Screenshot or other preview image for your editor; Default: `null` |
| `created_at` | Creation date (Format: `YYYY-mm-dd HH:MM`) |
| `updated_at` | Latest update date (Format: `YYYY-mm-dd HH:MM`) |

;examplearea

Example Object

```json
{
  "preset": {
    "id": 1814,
    "name": "Teaser with filled headline",
    "preset": {
      // fields of the component filled with content
      "headline": "This is a default value for the preset!",
      ...
    },
    "component_id": 62,
    "space_id": 606,
    "image": "//a.storyblok.com/f/606/...",
    "created_at": "2018-11-10T15:33:16.726Z",
    "updated_at": "2018-11-10T15:33:16.726Z"
  }
}
```