---
title: Create Release Approval
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

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/approvals/" httpMethod="POST" :requestObject='{"approval": {"story_id": 1066,"approver_id": 1028}, "release_id": 16}'></RequestExample>

Example Response Object

```json
{
  "approval": {
    "id": 12,
    "status": "pending"
  }
}
```
