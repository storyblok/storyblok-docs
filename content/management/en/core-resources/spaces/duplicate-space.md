---
category: Core Resources
title: Duplicate a Space
position: 870
---

Duplicate a space and all it's content entries and components; Assets will not be duplicated and still will reference the original space.

| Property | Description |
|---|---|
| `space[name]` | Name of your space; **required** |
| `space[domain]` | Domain for your default preview url |
| `space[story_published_hook]` | Published Webhook URL |
| `space[searchblok_id]` | Searchblok id, if available |
| `space[environments]` | Array of `name` and `location` (url) objects |
| `space[dup_id]` | The numeric id of the original space |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/" httpMethod="POST" :requestObject='{"space":{"name":"Example Space", "dup_id":12422}}'></RequestExample>

You will receive a [space object](#core-resources/spaces/the-space-object) as response.
