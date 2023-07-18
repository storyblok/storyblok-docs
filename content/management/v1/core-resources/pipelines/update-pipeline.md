---
title: Update a Pipeline
---

| Property | Description |
|---|---|
| `name` | Name of the pipeline **required** |
| `source_id` | Reference pipeline id for the content source |
| `url` | Pipeline content preview URL |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/branches/123456" httpMethod="PUT" :requestObject='{"branch":{
  "name":"Summer Special",
  "source_id": null,
  "url": "http://new-amazing-url.com",
}}'></RequestExample>
