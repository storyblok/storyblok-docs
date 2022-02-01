---
title: Retrieve multiple Assets
---

Returns an array of asset objects. This endpoint is [paged](#topics/pagination).

| Parameter | Description |
|----|----|
| `in_folder` | Provide the numeric id of a folder to filter the assets by a specific folder |
| `sort_by` | Possible values: created_at:asc, created_at:desc, updated_at:asc, updated_at:desc, short_filename:asc, short_filename:desc |
| `search` | Provide a search term to filter a specific file by the filename |
| `is_private` | If "1" it only displays private assets |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/assets/" httpMethod="GETOAUTH"></RequestExample>

You will receive an array of [asset objects](#core-resources/assets/the-asset-object) as response.
