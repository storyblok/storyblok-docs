---
category: Core Resources
title: Retrieve multiple Activities
position: 1430
---

Returns an array of activity objects. Can be filtered on date ranges and is [paged](#topics/pagination).

| Parameter | Description |
|---|---|
| `created_at_gte` | Activity creation date is greater than `YYYY-MM-DD` |
| `created_at_lte` | Activity creation date is lower than `YYYY-MM-DD` |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/activities/?created_at_gte=2018-12-14&created_at_lte=2018-12-18" httpMethod="GETOAUTH"></RequestExample>

You will receive an array of [activity objects](#core-resources/activities/the-activity-object) as response.