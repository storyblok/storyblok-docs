---
category: Core Resources
title: Create a Space
position: 840
---

| Property | Description |
|---|---|
| `space[name]` | Name of your space |
| `space[domain]` | Domain for your default preview url |
| `space[story_published_hook]` | Published Webhook URL |
| `space[searchblok_id]` | Searchblok id, if available |
| `space[environments]` | Array of `name` and `location` (url) objects |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/" httpMethod="POST" :requestObject='{"space":{"name":"Example Space"}}'></RequestExample>


You will receive a [space object](#core-resources/spaces/the-space-object) as response.
