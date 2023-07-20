---
title: The Preset Object
---

| Property | Description |
|---|---|
| `id` | Numeric ID of your preset |
| `name` | Given name of your preset |
| `preset[preset]` | Object with the fields you want to save in the preset |
| `space_id` | Space id of the preset |
| `component_id` | ID of the component the preset should be connected |
| `image` | Screenshot or other preview image for your editor; Default: `null` |
| `color` | Custom color for the icon preset (Please check the interface to see the options) |
| `icon` | Custom icon for the preset (Please check the interface to see the options) |
| `description` | Description for the preset |
| `isDefault` | Field to indicate whether the preset is the component's default preset; Default: false |
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
    "color": "#2db47d",
    "icon": "block-block",
    "description": "Amazing description",
    "isDefault": false,
    "created_at": "2018-11-10T15:33:16.726Z",
    "updated_at": "2018-11-10T15:33:16.726Z"
  }
}
```