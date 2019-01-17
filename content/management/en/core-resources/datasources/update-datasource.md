---
category: Core Resources
title: Update a Datasource Entry
position: 650
---

| Property | Description |
|---|---|
| `datasource` | A [datasource object](#core-resources/datasources/the-datasource-object) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasources/91" httpMethod="PUT" :requestObject='{"datasource":{"id":91,"name":"Labels for Website","slug":"labels_for_website"}}'></RequestExample>

You will receive a [datasource object](#core-resources/datasources/the-datasource-object) as response.