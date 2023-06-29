---
title: The Component Object
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `name` | Technical name used for `component` property in entries |
| `display_name` | Name that will be used in the editor interface |
| `created_at` | Creation date (Format: `YYYY-mm-dd HH:MM`) |
| `image` | URL to the preview image, if uploaded |
| `preview` | Define the field that should be used for preview in the interface |
| `is_root` | Component should be usable as a Content Type |
| `is_nestable` | Component should be insertable in `blocks` field type fields |
| `all_presets` | Array of presets for this component |
| `real_name` | Duplicated technical name, used for internal tasks |
| `component_group_uuid` | The component group uuid of the component |

;examplearea

Example Object

```json
{
  "id": 214123,
  "name": "post",
  "display_name": "Post",
  "created_at": "2018-12-28T14:54:01.423Z",
  "schema": {
    // definition of fields (schema) for this component
    "title": {
      "type": "text",
      "pos": 0
    },
    "description": {
      "type": "text",
      "pos": 1
    },
    ...
  },
  "image": null,
  "preview_field": null,
  "is_root": true,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "post",
  "component_group_uuid": "19323-32144-23423-42314"
}
```
