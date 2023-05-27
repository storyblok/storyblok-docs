---
title: Create a Space
---

| Property | Description |
|---|---|
| `space[name]` | Name of your space; **required** |
| `space[domain]` | Domain for your default preview url |
| `space[story_published_hook]` | Published Webhook URL |
| `space[searchblok_id]` | Searchblok id, if available |
| `space[environments]` | Array of `name` and `location` (url) objects |
| `assign_partner` | Assigns a [partner](https://www.storyblok.com/partners) to the space |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/" httpMethod="POST" :requestObject='{"space":{"assign_partner":"true", "name":"test3"}}'></RequestExample>

You will receive a [space object](#core-resources/spaces/the-space-object) as response.

