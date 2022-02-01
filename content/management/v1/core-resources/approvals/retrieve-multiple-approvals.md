---
title: Retrieve multiple Approvals
---

Returns an array of approval objects. This endpoint can be filtered on approver and is [paged](#topics/pagination).

| Parameter | Description |
|---|---|
| `approver` | Numeric Id of the approver |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/approvals/?approver=1028" httpMethod="GETOAUTH"></RequestExample>

You will receive an array of [approval objects](#core-resources/approvals/the-approval-object) as response.
