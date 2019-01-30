---
category: Core Resources
title: The Field Type Object
position: 1810
---

| Property | Description |
|---|---|
| `id` | Numeric ID of your field type |
| `name` | Given name of your field type. Needs to be unique. A personal prefix is recommended (Example: my-geo-selector) |
| `body` | The uncompiled javascript code of the field type |
| `compiled_body` | The compiled javascript code of the field type |
| `space_ids` | Array of space ids where the field type is assigned to |


;examplearea

Example Object

```json
{
  "field_type": {
    "id": 124,
    "name": "my-geo-selector",
    "body": "const Fieldtype = {}",
    "compiled_body": "var Fieldtype = {}",
    "space_ids": []
  }
}
```
