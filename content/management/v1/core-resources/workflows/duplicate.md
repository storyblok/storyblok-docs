---
title: Duplicate a workflow
---

Creates a new custom workflow by duplicating an existing workflow using the workflow `id` of the parent workflow.

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/workflows/656/duplicate" httpMethod="POST" :requestObject='{"workflow":{
   "required": true,
    "name": "page",
    "description": "page content type workflow",
    "content_types": ["page"]
}}'></RequestExample>

You will receive a [workflows object](#core-resurces/workflows/object) as a response.
