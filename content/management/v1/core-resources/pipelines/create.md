---
title: Create a Pipeline
---

| Property | Description |
|---|---|
| `name` | Name of the pipeline **required** |
| `source_id` | Reference pipeline id for the content source |
| `url` | Pipeline content preview URL |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/branches/" httpMethod="POST" :requestObject='{
  "branch": {
    "name": "test",
    "source_id": 12345,
		"url": "http://amazing-url.com",
  }
}'></RequestExample>

You will receive a [pipeline object](#core-resources/pipelines/object) as response.