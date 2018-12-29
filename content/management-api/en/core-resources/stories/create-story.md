---
category: Core Resources
title: Create a Story
position: 120
---

You can set most of the fields that are available in the story object, below we only list the properties in the example and possible required fields. Stories are not published by default. If you want to create a published Story add the parameter `publish` with the value `1`. 

| Property | Description |
|---|---|
| `story[name]` (required) | Name of the story |
| `story[slug]` (required) | Slug to identify the story (can not include `/`, create stories with `is_folder` and required path segments and `parent_id` link instead) |
| `story[content]` | Object structure for your content |
| `story[default_root]` (required*) | Default content type/root component. (*Required if a folder story) |
| `publish` | Should story be published immediately (set 1 to publish) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/" httpMethod="POST" :requestObject='{"story":{"name":"Story Name","slug":"story-name","content":{"component":"page","body":[]}},"publish":1}'></RequestExample>

You will receive a fully loaded [story object](#core-resources/stories/the-story-object) as response.