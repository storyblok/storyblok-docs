---
title: Create a Branch Deployment
---

| Property | Description |
|---|---|
| `branch_id` | The branch id to deploy **required** |
| `release_uuids` | The uuids of releases to deploy |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/deployments/" httpMethod="POST" :requestObject='{
  "branch_id":1,
  "release_uuids":["1234-4567", "1234-4568"]
}'></RequestExample>


