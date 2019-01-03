---
category: Core Resources
title: Create a Datasource Entry
position: 640
---

| Property | Description |
|---|---|
| `datasource` | Your full [datasource object](#core-resources/datasources/the-datasource-object) |
| `datasource[name]`  | Name is **required** |
| `datasource[slug]`  | Slug is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasources/" httpMethod="POST" :requestObject='{"datasource":{"name":"Labels for Website","slug":"labels"}}'></RequestExample>

You will receive a [datasource object](#core-resources/datasources/the-datasource-object) as response.