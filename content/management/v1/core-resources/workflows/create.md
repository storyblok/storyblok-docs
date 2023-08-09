---
title: Create a Custom Workflow 
---

| Property | Description |
|---|---|
| `workflow` | Your full [workflow object]() |
| `workflow[name]` | Name of the workflow **required** |
| `workflow[description]` | Workflow description |
|`workflow[scope]` | Default scope of workflow stage, usually workflow for a custom workflow |
| `workflow[content_type]` | Content-type associated with the workflow |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/233027/workflows" httpMethod="POST" :requestObject='{"workflow":{
   "required": false,
    "name": "page",
    "description":"page",
    "content_types": ["page"]
}}'></RequestExample>

You will receive a [workflows object](#core-resources/workflows/object) as response

