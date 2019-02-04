---
title: The Field Type Object
---

| Property | Description |
|---|---|
| `id` | Numeric ID of your field type |
| `name` | Given name of your field type. Needs to be unique. A personal prefix is recommended (Example: my-geo-selector) |
| `body` | The javascript code of the field type |
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
