---
category: Core Resources
title: The Datasource Entry Object
position: 710
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `name` | The key which will be used to resolve the given value |
| `value` | The actual value for the provided key |
| `datasource_id` | Numeric ID of connected datasource |

;examplearea

Example Object

```json
{ 
  "datasource_entry" : {
    "id": 52,
    "name": "KEY",
    "value": "VALUE",
    "datasource_id": ""
  }
}
```