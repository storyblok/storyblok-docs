---
title: The Approval Object
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `status` | Status of approval |
| `story_id` | ID of content entry that should be approved |
| `approver_id` | ID of the User that should be the approver |

;examplearea

Example Object

```json
{
  "approval": {
    "id": 11,
    "status": "pending",
    "story_id": 1066,
    "approver_id": 1028
  }
}
```