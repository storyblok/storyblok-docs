---
title: Create a Workflow Stage Change
---

| Property | Description |
|---|---|
| `workflow_stage_change` | Your [workflow stage change object](#core-resources/workflow-stage-changes/object) |
| `workflow_stage_change[workflow_stage_id]` | Workflow stage id **required** |
| `workflow_stage_change[story_id]` | Story id **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/workflow_stage_changes/" httpMethod="POST" :requestObject='{"workflow_stage_change":{"workflow_stage_id":123,"story_id":123}}'></RequestExample>

You will receive a [workflow stage change object](#core-resources/workflow-stage-changes/object) as response.
