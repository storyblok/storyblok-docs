---
title: The Custom Workflow Object
---

| Property | Description |
|---|---|
| `id` | Numeric | Unique ID of the workflow |
| `content_types` | Array of content types associated with this workflow |
| `is_default` | Boolean to set as the default workflow |
| `name` | Workflow name |

;examplearea

Example Object

```json
{
  "workflow": {
    "id": 15268,
    "content_types": [
      "author"
    ],
    "is_default": false,
    "name": "author"
  }
}
```