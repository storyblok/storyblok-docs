---
title: Get Story Versions 
---

This allows you to retrieve the versions of a story and the corresponding author information. You can also filter the results based on pagination using the `page` parameter. This can be done with a GET request on the story version you wish to retrieve.

| Parameter | Description |
|----|----|
| `id` | Numeric id of the story version |
| `event` | The type of version change in story |
| `created_at` | Date and time of of change (Format: YYYY-mm-dd HH:MM) |
| `author_id` | ID of the author |
| `author` | Author of the change in the story | 
| `item_id` | The story `ID` |
| `is_draft` | Boolean value, if `false` means story is published |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/123/versions" httpMethod="GETOAUTH"></RequestExample>

Example Request with Pagination 

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/123/versions?page=1" httpMethod="GETOAUTH"></RequestExample>

