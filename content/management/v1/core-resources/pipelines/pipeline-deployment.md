---
title: Create a Pipeline Deployment
---

The endpoint `/v1/spaces/:space_id/deployments` can be used to trigger the deployment process across the pipelines.

Stories created via the Management API are created in the default pipeline (Preview). Subsequently, they can be deployed to other pipelines (e.g. Staging, Production according to the "source of sync" option) by triggering a deployment.

The deployment could be triggered via Storyblok UI in the Content section, by selecting the pipeline in the Pipelines dropdown.

For using this endpoint, you have to install the Pipelines application.

| Property | Description |
|---|---|
| `branch_id` | The pipeline id to deploy **required** |
| `release_uuids` | The array of releases (referenced by their respective `uuids` to deploy) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/deployments/" httpMethod="POST" :requestObject='{
  "branch_id":1,
  "release_uuids":["1234-4567", "1234-4568"]
}'></RequestExample>
