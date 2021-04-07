---
title: The Field Type Object
---

| Property | Description |
|---|---|
| `id` | Numeric ID of your field type |
| `name` | Given name of your field type. Needs to be unique. A personal prefix is recommended (Example: my-geo-selector). |
| `body` | The uncompiled javascript code of the field type. |
| `compiled_body` | Used by the online code editor. Needs to be an empty string if using local plugin development. |
| `space_ids` | Array of space ids where the field type is assigned to. |


;examplearea

Example Object

```json
{
  "field_type": {
    "id": 124,
    "name": "my-geo-selector",
    "body": "var Fieldtype = {}",
    "compiled_body": "",
    "space_ids": []
  }
}
```
