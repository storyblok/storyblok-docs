---
category: Core Resources
title: Create Release Approval
position: 1230
---

| Property | Description |
|---|---|
| `story_id` | ID of content entry that should be approved |
| `approver_id` | ID of the User that should be the approver |
| `release_id` | ID of the release that should be approved |

;examplearea

Example Request Object

```json
{
  "approval": {
    "story_id": 1067,
    "approver_id": 1030
  },
  "release_id": 16
}
```

Example Request

// TODO: Example POST Request

Example Response Object

```json
{
  "approval": {
    "id": 12,
    "status": "pending"
  }
}
```
