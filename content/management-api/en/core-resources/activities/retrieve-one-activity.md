---
category: Core Resources
title: Retrieve one Activity
position: 1420
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `trackable_id` | |
| `trackable_type` |  |
| `owner_id` |  |
| `owner_type` |  |
| `key` |  |
| `parameters` |  |
| `recipient_id` |  |
| `recipient_type` |  |
| `created_at` | Creation date (Format: `YYYY-mm-dd HH:MM`) |
| `updated_at` | Latest update date (Format: `YYYY-mm-dd HH:MM`) |
| `space_id` |  |

// TODO: Document properties

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/activities/5405" httpMethod="GETOAUTH"></RequestExample>

You will receive a fully loaded [activity object](#core-resources/activities/the-activity-object) as response.