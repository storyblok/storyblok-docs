---
title: Create Approval
---

| Property | Description |
|---|---|
| `approval` | Your full [approval object](#core-resources/approvals/the-approval-object) |
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

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/approvals/" httpMethod="POST" :requestObject='{"approval": {"story_id": 1066,"approver_id": 1028}}'></RequestExample>

Example Response Object

```json
{
  "approval": {
    "id": 11,
    "status": "pending"
  }
}
```
