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

<RequestExample url=https://mapi.storyblok.com/v1/spaces/233027/workflows" httpMethod="POST" :requestObject='{"scope":"workflow"{
   "required": false,
    "name": "page",
    "description": "page content type workflow",
    "content_types": ["page"]
}}'></RequestExample>

You will receive a [workflow object](#core-resources/workflow/object) as response

{
  "workflow": {
    "id": 15268,
    "content_types": [
      "author"
    ],
    "is_default": false,
    "name": "author"
  }
}
