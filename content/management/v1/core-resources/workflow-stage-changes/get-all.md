---
title: Retrieve multiple Workflow Stage Changes
---

Returns an array of workflow stage change objects.

| Parameter | Description |
|----|----|
| `with_story` | Id of Story |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/workflow_stage_changes?with_story=123" httpMethod="GETOAUTH"></RequestExample>

You will get an array of [workflow stage change objects](#core-resources/workflow-stage-changes/object) as response.
