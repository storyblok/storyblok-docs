---
category: Core Resources
title: Retrieve multiple Datasources
position: 630
---

Returns an array of datasource objects. This endpoint is [paged](#topics/pagination) and can be filtered by a datasource id or slug. The dimension parameter allows you to have the dimension value filled with the according data.

| Parameter | Description |
|----|----|
| `datasource_id` | Provide the numeric id of a datasource |
| `datasource_slug` | Provide the slug of a datasource |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasources/" httpMethod="GETOAUTH"></RequestExample>

You will receive an array of [datasource objects](#core-resources/datasources/the-datasource-object) as response.