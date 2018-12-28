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

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/approval/" httpMethod="POST" :requestObject='{"approval": {"story_id": 1066,"approver_id": 1028}}'></RequestExample>

Example Response Object

```json
{
  "approval": {
    "id": 11,
    "status": "pending"
  }
}
```
