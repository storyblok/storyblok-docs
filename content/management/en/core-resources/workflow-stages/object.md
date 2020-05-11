---
title: The Workflow Stage Object
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `after_publish_id` | Workflow stage id that gets assigned after publishing |
| `allow_publish` | Boolean to allow publishing |
| `is_default` | Boolean to set as default |
| `position` | Position (Integer) |
| `allow_all_stages` | Boolean to allow all stages |
| `allow_all_users` | Boolean to allow change to all users |
| `name` | Workflow name |
| `color` | Workflow color |
| `user_ids` | User ids that are allowed to change the stage |
| `space_role_ids` | Space role ids that are allowed to change the stage |
| `workflow_stage_ids` | Workflow stage ids the user can change the stage to |

;examplearea

Example Object

```json
{
  "workflow_stage": {
    "id": 2,
    "allow_publish": false,
    "is_default": true,
    "user_ids": [9,2],
    "space_role_ids": [],
    "workflow_stage_ids": [3],
    "name": "Drafting",
    "color": "#babcb6",
    "allow_all_stages": false,
    "allow_all_users": false,
    "position": 1,
    "after_publish_id": null
  }
}
```
