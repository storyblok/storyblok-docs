---
title: Create a Workflow Stage
---

| Property | Description |
|---|---|
| `workflow_stage` | Your [workflow stage object](#core-resources/workflow-stage/object) **required** |
| `workflow_stage[after_publish_id]` | Workflow stage id that gets assigned after publishing |
| `workflow_stage[allow_publish]` | Boolean to allow publishing |
| `workflow_stage[is_default]` | Boolean to set as default |
| `workflow_stage[position]` | Position (Integer) |
| `workflow_stage[allow_all_stages]` | Boolean to allow all stages |
| `workflow_stage[allow_all_users]` | Boolean to allow change to all users |
| `workflow_stage[name]` | Workflow name |
| `workflow_stage[color]` | Workflow color |
| `workflow_stage[user_ids]` | User ids that are allowed to change the stage |
| `workflow_stage[space_role_ids]` | Space role ids that are allowed to change the stage |
| `workflow_stage[workflow_stage_ids]` | Workflow stage ids the user can change the stage to |
| `workflow_stage[workflow_id]` | Workflow `id` (if missing, automatically sets to default workflow) **optional** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/workflow_stages/" httpMethod="POST" :requestObject='{"workflow_stage":{
  "after_publish_id":[],
  "allow_publish":[],
  "is_default":false,
  "position":0,
  "allow_all_stages":true,
  "allow_all_users":true,
  "name":"Ready to Publish",
  "color":"#333",
  "user_ids":[],
  "space_role_ids":[],
  "workflow_stage_ids":[]
  "workflow_id": 14780
}}'></RequestExample>

You will receive a [workflow stage object](#core-resources/workflow-stage-changes/object) as response.
