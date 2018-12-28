---
category: Core Resources
title: Create Approval
position: 1220
---

| Property | Description |
|---|---|
| `story_id` | ID of content entry that should be approved |
| `approver_id` | ID of the User that should be the approver |

;examplearea

Example Request Object

```json
{
  "approval": {
    "story_id": 1066,
    "approver_id": 1028
  }
}
```

Example Request

// TODO: Example POST Request

Example Response Object

```json
{
  "approval": {
    "id": 11,
    "status": "pending"
  }
}
```
