---
title: Retrieve multiple Datasources
---

Returns an array of datasource objects. This endpoint is paged and can be filtered by slug. 

| Parameter | Description |
|----|----|
| `search` | Provide a search string |
| `by_ids` | Provide ids |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasources/" httpMethod="GETOAUTH"></RequestExample>

You will receive an array of [datasource objects](#core-resources/datasources/the-datasource-object) as response.
