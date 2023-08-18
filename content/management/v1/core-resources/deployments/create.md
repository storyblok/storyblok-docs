---
title: Create a Branch Deployment
---

Once you have set your pipelines (via the Storyblok App or the Management API), you can start to trigger the deployment.
The deployment could be triggered via Storyblok UI in the Content section, by selecting the pipeline in the Pipelines dropdown.

| Property | Description |
|---|---|
| `branch_id` | The branch id to deploy **required** |
| `release_uuids` | The array of releases (referenced by their respective `uuids` to deploy) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/deployments/" httpMethod="POST" :requestObject='{
  "branch_id":1,
  "release_uuids":["1234-4567", "1234-4568"]
}'></RequestExample>
