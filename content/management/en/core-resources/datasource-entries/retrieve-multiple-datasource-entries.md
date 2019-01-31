---
title: Retrieve multiple Datasource Entries
---

Returns an array of datasource entry objects. This endpoint is [paged](#topics/pagination) and can be filtered by a datasource id or slug. The dimension parameter allows you to have the dimension value filled with the according data.

| Parameter | Description |
|----|----|
| `datasource_id` | Provide the numeric id of a datasource |
| `datasource_slug` | Provide the slug of a datasource |
| `dimension` | Provide dimension to receive the dimension_value filled |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasource_entries/?datasource_id=124" httpMethod="GETOAUTH"></RequestExample>

You will receive an array of [datasource entry objects](#core-resources/datasource-entries/the-datasource-entry-object) as response.